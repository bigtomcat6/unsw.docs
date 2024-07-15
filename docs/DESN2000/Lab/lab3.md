---
title: Lab sheet 3 (weeks 5 and 7)
author:
createTime: 2024/07/15 14:43:44
permalink: /DESN2000/f2jm580d/
---

::: right 
_Last edited: 19/06/2024_
:::

Make reasonable assumptions if not explicitly stated and state such assumptions to your demonstrator when getting marked.

::: details Keypad

::: tabs

@tab keypad.h

```c
/*
 * keypad.h
 *
 *  Created on: Jul 9, 2024
 *      Author: howhow
 */

#ifndef INC_KEYPAD_H_
#define INC_KEYPAD_H_

#include "stm32f3xx_hal.h"

void keypad_init();
uint8_t scan_keypad();

#endif /* INC_KEYPAD_H_ */

```

@tab keypad.c

```c
/*
 * keypad.c
 *
 *  Created on: Jul 9, 2024
 *      Author: howhow
 */

#include "keypad.h"

#define KR_PORT	GPIOB
#define KC_PORT	GPIOA
#define KR1	GPIO_PIN_11	// Row
#define KR2	GPIO_PIN_12
#define KR3	GPIO_PIN_13
#define KR4	GPIO_PIN_14
#define KC1	GPIO_PIN_8	// Col
#define KC2	GPIO_PIN_9
#define KC3	GPIO_PIN_10
#define KC4	GPIO_PIN_11

uint8_t KEYWORDS[4][4] = {
	{'1', '2', '3', 'A'},
	{'4', '5', '6', 'B'},
	{'7', '8', '9', 'C'},
	{'*', '0', '#', 'D'}
};

void keypad_init() {
	GPIO_InitTypeDef GPIO_InitStruct = {0};
	GPIO_InitStruct.Pin = KR1 | KR2 | KR3 | KR4;
	GPIO_InitStruct.Mode = GPIO_MODE_INPUT; // GPIO_MODE_OUTPUT_PP
	GPIO_InitStruct.Pull = GPIO_PULLDOWN;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(KR_PORT, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = KC1 | KC2 | KC3 | KC4;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	HAL_GPIO_Init(KC_PORT, &GPIO_InitStruct);

	uint16_t COL[4] = {KC1, KC2, KC3, KC4};
	for(int c = 0; c < 4; c++) {
		HAL_GPIO_WritePin(KC_PORT, COL[c], 0);
	}
}


int deb_keypad = 0;
uint8_t deb_keypad_word = 0;
uint8_t scan_keypad() {
	uint16_t COL[4] = {KC1, KC2, KC3, KC4};
	uint16_t ROW[4] = {KR1, KR2, KR3, KR4};

	uint8_t word = 0;
	for(int c = 0; c < 4; c++) {
		HAL_GPIO_WritePin(KC_PORT, COL[c], 1);
		for(int r = 0; r < 4; r++) {
			if(HAL_GPIO_ReadPin(KR_PORT, ROW[r])) {
				if (deb_keypad_word == 0) {
					deb_keypad_word = KEYWORDS[r][c];
				}

				if (deb_keypad == 1 && deb_keypad_word == KEYWORDS[r][c]) {
					HAL_GPIO_WritePin(KC_PORT, COL[c], 0);
					deb_keypad = 2;
					return KEYWORDS[r][c];
				}

				if (deb_keypad_word == KEYWORDS[r][c]) {
					deb_keypad++;
				} else {
					deb_keypad_word = 0;
					deb_keypad = 0;
				}
			} else if (deb_keypad_word == KEYWORDS[r][c]) {
				deb_keypad_word = 0;
				deb_keypad = 0;
			}
		}
		HAL_GPIO_WritePin(KC_PORT, COL[c], 0);
	}

	return word;
}

```

:::

::: details LCD

::: tabs

@tab lcd.h

```c
/*
 * lcd.h
 *
 *  Created on: Jun 25, 2024
 *      Author: howhow
 */

#ifndef INC_LCD_H_
#define INC_LCD_H_

#include "stm32f3xx_hal.h"
#include <string.h>

void lcd_init();
void lcd_boot();
void lcd_PutNibble(uint8_t c);
void lcd_Pulse();
void lcd_SendCmd(uint8_t cmd);
void lcd_SendData(uint8_t data);

void lcd_Shift(uint8_t row, uint8_t col);
void lcd_SendString(const char *str, int row);
void lcd_clear();

#endif /* INC_LCD_H_ */

```

@tab lcd.c

```c
/*
 * lcd.c
 *
 *  Created on: Jun 25, 2024
 *      Author: howhow
 */

#include "lcd.h"

#define LCD_PORT GPIOC
#define RS_PORT	GPIOA
#define RW_PORT GPIOC
#define E_PORT	GPIOD
#define LCD_D4	GPIO_PIN_8
#define LCD_D5	GPIO_PIN_9
#define LCD_D6	GPIO_PIN_10
#define LCD_D7	GPIO_PIN_11
#define LCD_RS	GPIO_PIN_15	// PA15
#define LCD_RW	GPIO_PIN_6	// PC6
#define LCD_E	GPIO_PIN_2	// PD2


void lcd_init() {
	__HAL_RCC_GPIOD_CLK_ENABLE();

	GPIO_InitTypeDef GPIO_InitStruct = {0};
	GPIO_InitStruct.Pin = LCD_D4 | LCD_D5 | LCD_D6 | LCD_D7 | LCD_RW;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(LCD_PORT, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = LCD_E;
	HAL_GPIO_Init(E_PORT, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = LCD_RS;
	HAL_GPIO_Init(RS_PORT, &GPIO_InitStruct);

	lcd_boot();
}

void lcd_boot() {
	// 1. wait for enough time to stabilise
	HAL_Delay(50);
	// 2. send command 0011 (function set) and wait for >=4.1 ms (enough wait inside the pulse)
	lcd_PutNibble(0b0011);
	lcd_Pulse();
	// 3. send command 0011 (function set) again and wait for >=100 us
	// fill this
	lcd_PutNibble(0b0011);
	lcd_Pulse();

	// 4. send command 0011 (function set) again
	// fill this
	lcd_PutNibble(0b0011);
	lcd_Pulse();

	// 5. send command 0010 to set to 4-bit bus mode
	// fill this
	lcd_PutNibble(0b0010);
	lcd_Pulse();

	// 6. send command 0010 1100 (function set: 4-bit mode, 2-lines, 5x8 font)
	lcd_SendCmd(0b00101000);

	// 7. Send command 0000 1000 to display ON/OFF
	lcd_SendCmd(0b00001000);

	// 8. Send command to clear the display
	// fill this
	// lcd_SendCmd(0b00000001);
	lcd_clear();

	// 9. Send command set entry mode (increment cursor, no display shift)
	// fill this
	lcd_SendCmd(0b00000110);

	// 10. send command 0000 1111 to display on, cursor on, blink on
	// fill this
	lcd_SendCmd(0b00001111);

}

void lcd_SendData(uint8_t data) {
	HAL_GPIO_WritePin(RS_PORT, LCD_RS, 1);	// RS -> data
	// HAL_GPIO_WritePin(RW_PORT, LCD_RW, 0);	// RW -> write
	lcd_PutNibble(data >> 4);
	lcd_Pulse();
	lcd_PutNibble(data & 0x0F);
	lcd_Pulse();
	HAL_GPIO_WritePin(RS_PORT, LCD_RS, 0);	// RS -> cmd
}

void lcd_SendCmd(uint8_t cmd) {
	HAL_GPIO_WritePin(RS_PORT, LCD_RS, 0);	// RS -> cmd
	// HAL_GPIO_WritePin(RW_PORT, LCD_RW, 0);	// RW -> write
	lcd_PutNibble(cmd >> 4);
	lcd_Pulse();
	lcd_PutNibble(cmd & 0xF);
	lcd_Pulse();
}

void lcd_PutNibble(uint8_t c) {
//	D4 = c & 1;
//	D5 = (c >> 1) & 1;
//	D6 = (c >> 2) & 1;
//	D7 = (c >> 3) & 1;

	uint16_t LCD[4] = { LCD_D4, LCD_D5, LCD_D6, LCD_D7 };
	for (int i = 0; i < 4; i++) {
		HAL_GPIO_WritePin(LCD_PORT, LCD[i], (c >> i) & 1);
	}
}

void lcd_Pulse() {
	HAL_GPIO_WritePin(E_PORT, LCD_E, 1);	// PD2
	HAL_Delay(2);
	HAL_GPIO_WritePin(E_PORT, LCD_E, 0);
	HAL_Delay(2);
}

void lcd_Shift(uint8_t row, uint8_t col) {
	uint8_t address;

	switch(row) {
	case 1:
		address = 0x40 + col;
		break;
	case 0:
	default:
		address = 0x00 + col;
	}

	lcd_SendCmd(0x80 | address);
}

void lcd_SendString(const char *str, int row) {
	lcd_Shift(row, 0);
	for(int i = 0; i < strlen(str) && i < 16; i++) {
		lcd_SendData(str[i]);
	}
}

void lcd_clear() {
	lcd_SendCmd(0b00000001);
	HAL_Delay(5);
}

```

:::

### Task 1 (20%)

Implement a programme that increments a 32-bit signed integer counter when SW1 button is pressed, decrements when SW2 is pressed, resets to 0 when SW3 is pressed and sets to the largest possible value when SW4 is pressed. The counter must be displayed on the LCD. For this task, you MUST use external interrupts for the buttons whenever possible.

::: tabs

@tab task1.h

```c
/*
 * task1.h
 *
 *  Created on: Jun 25, 2024
 *      Author: howhow
 */

#ifndef INC_TASK1_H_
#define INC_TASK1_H_

#include "main.h"

void task1_init();

void task1_main_while();

void task1_callback(uint16_t GPIO_Pin);



#endif /* INC_TASK1_H_ */
```

@tab task1.c

```c
/*
 * task1.c
 *
 *  Created on: Jun 25, 2024
 *      Author: howhow
 */

#include "task1.h"
#include "lcd.h"

#define SW1P	GPIOA
#define SW1		GPIO_PIN_1
#define SW2P	GPIOA
#define SW2		GPIO_PIN_4
#define SW3P	GPIOB
#define SW3		GPIO_PIN_0
#define	SW4P	GPIOC
#define SW4		GPIO_PIN_1

void task1_init() {
	GPIO_InitTypeDef GPIO_InitStruct = {0};

//	GPIO_InitStruct.Pin = SW1;
//	GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
//	GPIO_InitStruct.Pull = GPIO_NOPULL;
//	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
//	HAL_GPIO_Init(SW1P, &GPIO_InitStruct);
//
//	GPIO_InitStruct.Pin = SW2;
//	GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
//	GPIO_InitStruct.Pull = GPIO_NOPULL;
//	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
//	HAL_GPIO_Init(SW2P, &GPIO_InitStruct);
//
//	GPIO_InitStruct.Pin = SW3;
//	GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
//	GPIO_InitStruct.Pull = GPIO_NOPULL;
//	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
//	HAL_GPIO_Init(SW3P, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = SW4;
	GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(SW4P, &GPIO_InitStruct);
}

int	deb1 = 0;
int32_t number = 0;

#include <stdio.h>
#include <inttypes.h>  // PRId32

void task1_main_while() {

	HAL_Delay(30);

	if (HAL_GPIO_ReadPin(SW1P, SW1)) {
		// if (deb1 == 0)	number++;
	} else if (HAL_GPIO_ReadPin(SW2P, SW2)) {
		// if (deb1 == 0)	number--;
	} else if (HAL_GPIO_ReadPin(SW3P, SW3)) {
		// if (deb1 == 0)	number = 0;
	} else if (HAL_GPIO_ReadPin(SW4P, SW4)) {
		if (deb1 == 0)	number = INT32_MAX;
	} else {
		deb1 = 0;
		return;
	}

	if (deb1 == 2)	return;

	deb1 = 1;

	char buffer[17];
	snprintf(buffer, sizeof(buffer), "%" PRId32, number);
	lcd_clear();
	lcd_SendString(buffer, 0);
	deb1 = 2;

}

void task1_callback(uint16_t GPIO_Pin) {

	switch (GPIO_Pin) {
	case SW1: number++;	break;
	case SW2: number--;	break;
	case SW3: number = 0; break;
	// case SW4: number = INT32_MAX; break;
	}

//	char buffer[17];
//	snprintf(buffer, sizeof(buffer), "%" PRId32, number);
//	lcd_clear();
//	lcd_SendString(buffer, 0);
}
```

:::

### Task 2 (20%)

Implement a milliseconds counter (stopwatch) using hardware timers and timer interrupts. Display the milliseconds counter on the LCD. The stopwatch should be reset to 0 when the key ‘0’ on the keypad is pressed and it should start when the blue button on the NUCLEO board is pressed.

::: tabs

@tab task2.h

```c
/*
 * task2.h
 *
 *  Created on: Jul 8, 2024
 *      Author: howhow
 */

#ifndef INC_TASK2_H_
#define INC_TASK2_H_

#include "main.h"

void task2_init();
void task2_main_while();
void task2_callback(uint16_t GPIO_Pin);
void task2_TIM_Callback();

uint8_t scan_keypad();

#endif /* INC_TASK2_H_ */
```

@tab task2.c

```c
/*
 * task2.c
 *
 *  Created on: Jul 8, 2024
 *      Author: howhow
 */

#include "task2.h"
#include "lcd.h"
#include "keypad.h"

#define KR_PORT	GPIOB
#define KC_PORT	GPIOA
#define KR1	GPIO_PIN_11	// Row
#define KR2	GPIO_PIN_12
#define KR3	GPIO_PIN_13
#define KR4	GPIO_PIN_14
#define KC1	GPIO_PIN_8	// Col
#define KC2	GPIO_PIN_9
#define KC3	GPIO_PIN_10
#define KC4	GPIO_PIN_11

uint64_t time = 0;

void task2_init() {

}

#include <inttypes.h>  // PRId32
#include <stdio.h>
#include <stdbool.h>

bool running = false;

void task2_main_while() {

	if (scan_keypad() == '0') {
		running = false;
		time = 0;
	}

	if (time > UINT64_MAX)	time = 0;

	char buffer[17];

    int milliseconds = time % 1000 / 10;
    int total_seconds = time / 1000;
    int seconds = total_seconds % 60;
    int minutes = (total_seconds / 60) % 60;

    sprintf(buffer, "%02d:%02d.%02d", minutes, seconds, milliseconds);


	// snprintf(buffer, sizeof(buffer), "%" PRId32, time);
	// lcd_clear();
	lcd_SendString(buffer, 0);

	// HAL_Delay(1);
}

void task2_callback(uint16_t GPIO_Pin) {
	switch (GPIO_Pin) {
	case B1_Pin:
		time = 0;
		running = true;
		break;
	}
}

void task2_TIM_Callback() {
	if (running)	time++;
}
```

:::

### Task 3 (30%)

Write a program that blinks all LEDs on the board (D1-D20 on coaST and the LD2 on NUCLEO) at 1-second intervals (one second on, then one second off and so on). You must use hardware timer interrupts for this task. When button SW1 is pressed, the blinking frequency should double. When SW2 is pressed, the blinking frequency should halve. When you press the button multiple times, it should double/halve the current rate each time. For buttons, you MUST use external interrupt.

::: tabs

@tab task3.h

```c
/*
 * task3.h
 *
 *  Created on: Jul 8, 2024
 *      Author: howhow
 */

#ifndef INC_TASK3_H_
#define INC_TASK3_H_

#include "main.h"

void task3_init();
void task3_callback(uint16_t GPIO_Pin);
void task3_TIM_Callback();
void task3_main_while();
void doToggle();



#endif /* INC_TASK3_H_ */
```

@tab task3.c

```c
/*
 * task3.c
 *
 *  Created on: Jul 8, 2024
 *      Author: howhow
 */


#include "task3.h"

#define LED_GPIO GPIOB
#define D1	GPIO_PIN_10
#define D2	GPIO_PIN_4
#define D3	GPIO_PIN_5
#define D4	GPIO_PIN_3

#define GPIO_RCLK	GPIOB
#define GPIO_SRCLK	GPIOC
#define GPIO_SER	GPIOB

#define	RCLK	GPIO_PIN_7
#define SRCLK	GPIO_PIN_0
#define SER		GPIO_PIN_15

#define LD2_GPIO	GPIOA
#define LD2			GPIO_PIN_5

#include <stdbool.h>

bool isOpen = false;
bool isToggle = false;


void task3_init() {
	GPIO_InitTypeDef GPIO_InitStruct = {0};
	GPIO_InitStruct.Pin = D1 | D2 | D3 | D4;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(LED_GPIO, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = RCLK;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(GPIO_RCLK, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = SRCLK;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(GPIO_SRCLK, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = SER;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(GPIO_SER, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = LD2;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(LD2_GPIO, &GPIO_InitStruct);
}

uint32_t time3 = 0;
uint32_t stopTime = 1000;	// Default 1s

void task3_callback(uint16_t GPIO_Pin) {
	switch (GPIO_Pin) {
	case SW1_Pin:	stopTime /= 2;	break; // if (stopTime > 2)	stopTime /= 2;	break;
	case SW2_Pin:	stopTime *= 2;	break; //if (stopTime < UINT32_MAX/2)	stopTime *= 2;	break;
	}
}


void task3_TIM_Callback() {
	time3++;
	if (time3 >= stopTime - 1) {
		isToggle = true;
		time3 = 0;
	}
}

void task3_main_while() {
	if (!isToggle)	return;

	doToggle();
	isToggle = false;
}


void doToggle() {
	isOpen = !isOpen;
	HAL_GPIO_WritePin(GPIO_RCLK, RCLK, 0);
	for (int k = 0; k < 16; k++) {
		HAL_GPIO_WritePin(GPIO_SER, SER, isOpen);
		HAL_GPIO_WritePin(GPIO_SRCLK, SRCLK, 1);
		HAL_Delay(1);
		HAL_GPIO_WritePin(GPIO_SRCLK, SRCLK, 0);
		HAL_Delay(1);
	}
	HAL_GPIO_WritePin(GPIO_RCLK, RCLK, 1);

	GPIO_TypeDef* GPIO[5] = { LED_GPIO, LED_GPIO, LED_GPIO, LED_GPIO, LD2_GPIO };
	uint16_t PIN[5] = { D1, D2, D3, D4, LD2 };

	for(int i = 0; i < 5; i++) {
		HAL_GPIO_TogglePin(GPIO[i], PIN[i]);
	}

}
```

:::

### Task 4 (30%)

Write a programme that uses hardware timer interrupts and external interrupts to measure the time between two consecutive button presses. You can use SW1 as the button. The time should be measured between the button release and the next press. The measured time should be displayed on the LCD. You can assume the maximum time between two presses is one hour. Note that you should repeatedly do the measurement and update the LCD for an indefinite number of button presses.

::: tabs

@tab task4.h

```c
/*
 * task4.h
 *
 *  Created on: Jul 9, 2024
 *      Author: howhow
 */

#ifndef INC_TASK4_H_
#define INC_TASK4_H_

#include "main.h"


void task4_main_while();
void task4_callback(uint16_t GPIO_Pin);
void task4_TIM_Callback();


#endif /* INC_TASK4_H_ */

```

@tab task4.c

```c
/*
 * task4.c
 *
 *  Created on: Jul 9, 2024
 *      Author: howhow
 */


#include "task4.h"
#include "lcd.h"




#include <inttypes.h>  // PRId32
#include <stdio.h>
#include <stdbool.h>

bool running4 = false;

uint64_t lastTime = 0;
uint64_t time4 = 0;

void task4_main_while() {

	if (time4 > 3600000) {
		// Time Out
		lcd_SendString("Time Out", 1);
		running4 = false;
		time4 = 0;
		return;
	} else if (!running4)	return;

	// Display the Time
	char buffer[17];

	uint64_t timeList[2] = {lastTime, time4};
	for (int i = 0; i < 2; i++)  {
		// if (timeList[i]) == -1)	continue;

		uint64_t timeN = timeList[i];

	    int milliseconds = timeN % 1000 / 10;
	    int total_seconds = timeN / 1000;
	    int seconds = total_seconds % 60;
	    int minutes = (total_seconds / 60) % 60;

	    sprintf(buffer, "%02d:%02d.%02d", minutes, seconds, milliseconds);
		lcd_SendString(buffer, i);
	}

}

void task4_callback(uint16_t GPIO_Pin) {
	switch (GPIO_Pin) {
	case SW1_Pin: {
		if (!running4)	running4 = true;
		else {
			lastTime = time4;
			time4 = 0;
		}
		break;
	}
	}
}

void task4_TIM_Callback() {
	if (running4)	time4++;
}

```

:::

### Task 5 (30%)

Write an ARM assembly function that delays the number of seconds specified as an argument using busy waiting. Note that the delay should be very accurate, which means you should consider the clock frequency of the processor and the number of instructions in your function. Once the assembly delay function is implemented, call this function from a C programme (which you may use HAL) that takes a user input from the keypad (an integer) and waits for the requested number of seconds after the ‘#’ key on the keypad is pressed. As soon as the time out is reached, indicate it by lighting all LEDs (D1-D20 on coaST and the LD2 on NUCLEO) on the boards. The user should be able to clear the LEDs and start another round when the blue button on the NUCLEO board is pressed

::: tabs

@tab task5.h

```c
/*
 * task5.h
 *
 *  Created on: Jul 9, 2024
 *      Author: howhow
 */

#ifndef INC_TASK5_H_
#define INC_TASK5_H_

#include "main.h"

#include <stdbool.h>

void delay_ms(int milliseconds);
void stopTimer();
void task5_init();
void task5_main_while();
void task5_callback(uint16_t GPIO_Pin);
void startDelay();
void doToggle5(bool is_open);

#endif /* INC_TASK5_H_ */
```

@tab task5.c

```c
/*
 * task5.c
 *
 *  Created on: Jul 9, 2024
 *      Author: howhow
 */


#include "task5.h"
#include "task5ass.h"
#include "task4.h"

#include "keypad.h"
#include "lcd.h"

#define LED_GPIO GPIOB
#define D1	GPIO_PIN_10
#define D2	GPIO_PIN_4
#define D3	GPIO_PIN_5
#define D4	GPIO_PIN_3

#define GPIO_RCLK	GPIOB
#define GPIO_SRCLK	GPIOC
#define GPIO_SER	GPIOB

#define	RCLK	GPIO_PIN_7
#define SRCLK	GPIO_PIN_0
#define SER		GPIO_PIN_15

#define LD2_GPIO	GPIOA
#define LD2			GPIO_PIN_5

void delay_ms(int milliseconds) {
    for (int i = 0; i < milliseconds; i++) {
        delay_1ms();
    }
}

void task5_init() {
	GPIO_InitTypeDef GPIO_InitStruct = {0};
	GPIO_InitStruct.Pin = D1 | D2 | D3 | D4;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(LED_GPIO, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = RCLK;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(GPIO_RCLK, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = SRCLK;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(GPIO_SRCLK, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = SER;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(GPIO_SER, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = LD2;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(LD2_GPIO, &GPIO_InitStruct);
}

#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>
#include <math.h>

int time5 = 0;
bool running5 = false;

char input_buffer[17];
int input_buffer_index = 0;

void stopTimer() {
	time5 = 0;
	running5 = false;
	lcd_clear();
	lcd_SendCmd(0b00001111);

	doToggle5(false);
}


void task5_main_while() {
	int word = scan_keypad();

	if (word != 0 && !running5 && time5 == -1) {
		stopTimer();
	}

	if (word == '#') {
		startDelay();
	} else if (word >= '0' && word <= '9') {
		time5 = time5 * 10 + (word - '0');
		char buffer1[17];
		sprintf(buffer1, "%d", time5);
		lcd_SendString(buffer1, 0);
		input_buffer_index++;
		return;
	}

	if (!running5 && time5 == -2) {
		stopTimer();
		return;
	}
	else if (!running5)
		return;
	else if (time5 < 0) {
		lcd_clear();
		lcd_SendString("   Time Out!", 1);

		time5 = -1;
		running5 = false;

		doToggle(false);
		return;
	}

	int nowTime = time5 * 1000;
    // int milliseconds = nowTime % 1000 / 10;
    int total_seconds = nowTime / 1000;
    int seconds = total_seconds % 60;
    int minutes = (total_seconds / 60) % 60;
    char buffer[17];
    sprintf(buffer, "     %02d:%02d", minutes, seconds);
	lcd_SendString(buffer, 1);
	time5--;
	delay_ms(1000);
}

void task5_callback(uint16_t GPIO_Pin) {
	switch (GPIO_Pin) {
	case B1_Pin:
		running5 = false;
		time5 = -2;
		break;
	}
}


void startDelay() {
	// input_buffer[input_buffer_index] = '\0';
	// time5 = atoi(input_buffer);
	input_buffer_index = 0;
	running5 = true;
	lcd_clear();
	lcd_SendCmd(0b00001100);
}

void doToggle5(bool is_open) {
	HAL_GPIO_WritePin(GPIO_RCLK, RCLK, 0);
	for (int k = 0; k < 16; k++) {
		HAL_GPIO_WritePin(GPIO_SER, SER, is_open);
		HAL_GPIO_WritePin(GPIO_SRCLK, SRCLK, 1);
		HAL_Delay(1);
		HAL_GPIO_WritePin(GPIO_SRCLK, SRCLK, 0);
		HAL_Delay(1);
	}
	HAL_GPIO_WritePin(GPIO_RCLK, RCLK, 1);

	GPIO_TypeDef* GPIO[5] = { LED_GPIO, LED_GPIO, LED_GPIO, LED_GPIO, LD2_GPIO };
	uint16_t PIN[5] = { D1, D2, D3, D4, LD2 };

	for(int i = 0; i < 5; i++) {
		HAL_GPIO_WritePin(GPIO[i], PIN[i], is_open);
	}

}

```

@tab task5ass.h

```c
/*
 * task5ass.h
 *
 *  Created on: Jul 9, 2024
 *      Author: howhow
 */

#ifndef TASK5ASS_H
#define TASK5ASS_H

void delay_1ms();


#endif /* INC_TASK5ASS_H_ */

```

@tab task5ass.s

```asm
.syntax unified
.cpu cortex-m4
.thumb

.global delay_1ms

// void delay_1ms(void)
delay_1ms:
    // Save r4, lr
    push {r4, lr}

    // 1ms = 72000000 / 4
    ldr r4, = 72000000 / 10000

delay_loop:
    subs r4, r4, #1
    bne delay_loop

    // pop r4, lr
    pop {r4, lr}
    bx lr

```

:::
