---
title: Lab sheet 4 (weeks 8 and 9)
createTime: 2024/08/25 20:06:27
permalink: /DESN2000/moyj3tku/
---

::: right 
_Last edited: 15/07/2024_
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

Write a programme that slowly increases the brightness of LEDs D1-D4 on the coast  board and LD2 on the NUCELO board. Once 100% brightness is reached, slowly decrease  the brightness back to 0% and repeat the process. You must use hardware PWM if the  corresponding microcontroller pins have such hardware PWM support. For pins without  such hardware PWM, you should implement the PWM signal using software.

::: tabs

@tab task1.h

```c
/*
 * task1.h
 *
 *  Created on: Jul 21, 2024
 *      Author: howhow
 */

#ifndef INC_TASK1_H_
#define INC_TASK1_H_

#include "main.h"

void task1_main(TIM_HandleTypeDef htims[]);
void task1_main_while();

#endif /* INC_TASK1_H_ */
```

@tab task1.c

```c
/*
 * task1.c
 *
 *  Created on: Jul 21, 2024
 *      Author: howhow
 */


#include "task1.h"

void task1_main(TIM_HandleTypeDef htims[]) {

	  HAL_TIM_PWM_Init(&htims[2]);
	  HAL_TIM_PWM_Init(&htims[3]);
	  HAL_TIM_PWM_Start(&htims[2], TIM_CHANNEL_1);	// PA5 	-> LED LD2
	  HAL_TIM_PWM_Start(&htims[2], TIM_CHANNEL_3);	// PB10	-> LED D1
	  HAL_TIM_PWM_Start(&htims[3], TIM_CHANNEL_1);	// PB4	-> LED D2
	  HAL_TIM_PWM_Start(&htims[3], TIM_CHANNEL_2);	// PB5	-> LED D3
	  HAL_TIM_PWM_Start(&htims[2], TIM_CHANNEL_2);	// PB3	-> LED D4

	  TIM2->PSC = 0; 	//set prescaller to 0 (no divider)
	  TIM2->CNT = 0;	// seset the current count
	  TIM2->ARR = 255;	// set the maximum count value

	  TIM3->PSC = 0; 	//set prescaller to 0 (no divider)
	  TIM3->CNT = 0;	// seset the current count
	  TIM3->ARR = 255;	// set the maximum count value
}

void task1_main_while() {

	for (int i = 0; i < 200/*255*/; i++) {
		TIM2->CCR1 = i;
		TIM2->CCR2 = i;
		TIM2->CCR3 = i;
		TIM3->CCR1 = i;
		TIM3->CCR2 = i;
		HAL_Delay(5);
	}

	for (int i = 200/*255*/; i > 0; i--){
		TIM2->CCR1 = i;
		TIM2->CCR2 = i;
		TIM2->CCR3 = i;
		TIM3->CCR1 = i;
		TIM3->CCR2 = i;
		HAL_Delay(5);
	}
}
```
:::

### Task 2 (20%)

Write a programme that takes a frequency value (integer) from the user through the keypad and then generates a sound wave of the requested frequency from the buzzer. The user input must be interactively displayed on the LCD. The ‘*’ key should be used as a backspace. Pressing the ‘#’ button should start generating the sound and will stop takingany keypresses. Pressing any of the SW1-SW4 buttons should stop the sound and take a new frequency input. Note that the sound that you generate should be in form of short beeps with sufficient silence between the delays, so that it is not that unpleasant (please do not do a continuous beep).


::: tabs

@tab task2.h

```c
/*
 * task2.h
 *
 *  Created on: Jul 21, 2024
 *      Author: howhow
 */

#ifndef INC_TASK2_H_
#define INC_TASK2_H_

#include "main.h"

void task2_init();
void task2_main(TIM_HandleTypeDef htims[]);
void task2_main_while();

void clear();


#endif /* INC_TASK2_H_ */
```

@tab task2.c

```c
/*
 * task2.c
 *
 *  Created on: Jul 21, 2024
 *      Author: howhow
 */

#include <stdio.h>
#include <stdbool.h>

#include "lcd.h"
#include "keypad.h"
#include "task2.h"

#define SW1P	GPIOA
#define SW1		GPIO_PIN_1
#define SW2P	GPIOA
#define SW2		GPIO_PIN_4
#define SW3P	GPIOB
#define SW3		GPIO_PIN_0
#define	SW4P	GPIOC
#define SW4		GPIO_PIN_1

void task2_init() {
	GPIO_InitTypeDef GPIO_InitStruct = {0};
	GPIO_InitStruct.Pin = SW1;
	GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(SW1P, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = SW2;
	GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(SW2P, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = SW3;
	GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(SW3P, &GPIO_InitStruct);

	GPIO_InitStruct.Pin = SW4;
	GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(SW4P, &GPIO_InitStruct);
}

void task2_main(TIM_HandleTypeDef htims[]) {
	  HAL_TIM_PWM_Init(&htims[1]);
	  HAL_TIM_PWM_Start(&htims[1], TIM_CHANNEL_3);	// PC2 	-> BUZZ

	  // TIM1->PSC = 0; //set prescaller to 0 (no divider)
	  // TIM1->CNT = 0;	// seset the current count

	  lcd_SendString("Frequency Value", 0);
}

int freq = 0;

bool running1 = false;

void task2_main_while() {


	char buffer1[17];
	sprintf(buffer1, "%dHz", freq);
	lcd_SendString(buffer1, 1);

	int word = scan_keypad();

	if (word == '*') {
		freq /= 10;
		clear();

		return;
	} else if (word >= '0' && word <= '9') {
		freq = freq * 10 + (word - '0');

		return;
	} else if (word == '#') {
		running1 = true;
	} else if (!running1) {
		return;
	}

	int aar = 72000 / freq;

	HAL_Delay(2000);

	TIM1->ARR = aar;	// 72000/260
	TIM1->CCR3 = aar / 3 * 2; // arr * 2/3
	HAL_Delay(500);
	TIM1->CCR3 = 0;

	if (HAL_GPIO_ReadPin(SW1P, SW1) ||
		HAL_GPIO_ReadPin(SW2P, SW2)	||
		HAL_GPIO_ReadPin(SW3P, SW3) ||
		HAL_GPIO_ReadPin(SW4P, SW4) ) {

		clear();
		running1 = false;
		freq = 0;
	}


}


void clear() {
	lcd_clear();
	lcd_SendString("Frequency Value", 0);
}
```
:::

### Task 3 (20%)

Write a program that lights up all LEDs on the board (D1-D20 on coaST and the LD2 on NUCLEO) whenever you cover any of the two LDRs on the coaST board. As long as an LDR is covered, the lights should be up.

::: tabs

@tab task3.h

```c
/*
 * task3.h
 *
 *  Created on: Jul 21, 2024
 *      Author: howhow
 */

#ifndef INC_TASK3_H_
#define INC_TASK3_H_

#include "main.h"
#include <stdbool.h>


void task3_init();
// void task3_main(TIM_HandleTypeDef htims[]);
void task3_main_while(ADC_HandleTypeDef hadcs[]);

void doToggle3(bool isOpen);

#endif /* INC_TASK3_H_ */
```

@tab task3.c

```c
/*
 * task3.c
 *
 *  Created on: Jul 21, 2024
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

void task3_main_while(ADC_HandleTypeDef hadcs[]) {

	  HAL_ADC_PollForConversion(&hadcs[2], 1);
	  HAL_ADC_PollForConversion(&hadcs[3], 1);
	  uint16_t val2 = HAL_ADC_GetValue(&hadcs[2]);
	  uint16_t val3 = HAL_ADC_GetValue(&hadcs[3]);

//	  char buffer[10];
//	  sprintf(buffer, "%d\r\n", val);
//	  HAL_UART_Transmit(&huart2, (uint8_t *)buffer, strlen(buffer), 10);

	  if (val2 > 500 && val3 > 500) {
		  doToggle3(false);
	  } else {
		  doToggle3(true);
	  }

	  HAL_Delay(5);
}

void doToggle3(bool isOpen) {
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
		HAL_GPIO_WritePin(GPIO[i], PIN[i], isOpen);
	}
}
```

:::

### Task 4 (20%)

Write a programme that illuminates the LEDs on the board (you can limit yourself to pins that support hardware PWM), based on the level of light intensity as detected by one of the LDRs of your choice. The level of brightness of the LEDs should be proportional to the level of darkness


::: tabs

@tab task4.h

```c
/*
 * task4.h
 *
 *  Created on: Jul 21, 2024
 *      Author: howhow
 */

#ifndef INC_TASK4_H_
#define INC_TASK4_H_

#include "main.h"

void task4_main(TIM_HandleTypeDef htims[], ADC_HandleTypeDef hadcs[]);
void task4_main_while(ADC_HandleTypeDef hadcs[], UART_HandleTypeDef huart2);


#endif /* INC_TASK4_H_ */
```

@tab task4.c

```c
/*
 * task4.c
 *
 *  Created on: Jul 21, 2024
 *      Author: howhow
 */

#include <string.h>
#include <stdio.h>
#include "task4.h"

int max = 0;
int store = 0;

void task4_main(TIM_HandleTypeDef htims[], ADC_HandleTypeDef hadcs[]) {

	  HAL_TIM_PWM_Init(&htims[2]);
	  HAL_TIM_PWM_Init(&htims[3]);
	  HAL_TIM_PWM_Start(&htims[2], TIM_CHANNEL_1);	// PA5 	-> LED LD2
	  HAL_TIM_PWM_Start(&htims[2], TIM_CHANNEL_3);	// PB10	-> LED D1
	  HAL_TIM_PWM_Start(&htims[3], TIM_CHANNEL_1);	// PB4	-> LED D2
	  HAL_TIM_PWM_Start(&htims[3], TIM_CHANNEL_2);	// PB5	-> LED D3
	  HAL_TIM_PWM_Start(&htims[2], TIM_CHANNEL_2);	// PB3	-> LED D4

	  HAL_Delay(1000);
	  HAL_ADC_Start(&hadcs[2]);
	  HAL_ADC_PollForConversion(&hadcs[2], 1);
	  max = HAL_ADC_GetValue(&hadcs[2]);


	  TIM2->PSC = 0; 	//set prescaller to 0 (no divider)
	  TIM2->CNT = 0;	// seset the current count
	  TIM2->ARR = max;	// set the maximum count value

	  TIM3->PSC = 0; 	//set prescaller to 0 (no divider)
	  TIM3->CNT = 0;	// seset the current count
	  TIM3->ARR = max;	// set the maximum count value
}

void task4_main_while(ADC_HandleTypeDef hadcs[], UART_HandleTypeDef huart2) {

	HAL_ADC_Start(&hadcs[2]);
	HAL_ADC_PollForConversion(&hadcs[2], 1);
	int val2 = HAL_ADC_GetValue(&hadcs[2]);

//	char buffer[10];
//	sprintf(buffer, "%d\r\n", max);
//	HAL_UART_Transmit(&huart2, (uint8_t *)buffer, strlen(buffer), 10);

	val2 = max - val2 - 200;

	if (val2 > max)	val2 = max;
	if (val2 < 0)	val2 = 0;

//	if (val2 > store) {
//		for (int i = store; i < val2; i++) {
//			TIM2->CCR1 = i;
//			TIM2->CCR2 = i;
//			TIM2->CCR3 = i;
//			TIM3->CCR1 = i;
//			TIM3->CCR2 = i;
//			HAL_Delay(5);
//		}
//	} else {
//		for (int i = store; i > val2; i--) {
//			TIM2->CCR1 = i;
//			TIM2->CCR2 = i;
//			TIM2->CCR3 = i;
//			TIM3->CCR1 = i;
//			TIM3->CCR2 = i;
//			HAL_Delay(5);
//		}
//	}
//	store = val2;

	TIM2->CCR1 = val2;
	TIM2->CCR2 = val2;
	TIM2->CCR3 = val2;
	TIM3->CCR1 = val2;
	TIM3->CCR2 = val2;

	HAL_Delay(10);
}
```

:::

### Task 5 (20%)

Write a programme that takes commands in the form of the following example from a user through the UART, executes them and sends the result back to the user through UART.

```bash
get LDRR24 5 3
```

The second argument can be LDRR24 or LDRR32. The third argument (value 5 in the example) is the number of readings required to take. The fourth argument (value 3 in theexample) is the number of seconds between consecutive readings. This example requests that 5 readings be taken from the LDRR24 with 3-second intervals.

Based on the command provided by the user, the programme should take readings from the requested LDR and send the results back. You should start the relevant ADC only when a command has been issued. That is, you shouldn’t be simply reading the ADC in a while loop. 

Assume that the argument 3 and 4 are integers and the arguments are separated by spaces. Assume that the user doesn’t make any errors in input commands. Send the readings as soon as they are taken, rather than waiting until all the readings are taken. Make sure to interactively show what the user is typing.

See the example below from the serial terminal:

```bash
get LDRR24 3 4
1032 1033 8000 
get LDRR32 5 3
800 801 800 802 805
```

Hint: Scan UART character by character until the “enter key” press is detected.

::: tabs

@tab task5.h

```c
/*
 * task5.h
 *
 *  Created on: Jul 21, 2024
 *      Author: howhow
 */

#ifndef INC_TASK5_H_
#define INC_TASK5_H_

#include "main.h"

void task5_main();
void task5_main_while(ADC_HandleTypeDef hadcs[], UART_HandleTypeDef huart2);

void readLDR();

#endif /* INC_TASK5_H_ */
```

@tab task5.c

```c
/*
 * task5.c
 *
 *  Created on: Jul 21, 2024
 *      Author: howhow
 */


#include "task5.h"

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

ADC_HandleTypeDef hadcs[4];
UART_HandleTypeDef huart;

void task5_main() {


}

char read_buffer[50];
int read_index = 0;

char command[10];
char ldr[10];
int	num_reading = 0;
int interval = 0;

void task5_main_while(ADC_HandleTypeDef hadc[], UART_HandleTypeDef huart2) {

	HAL_ADC_PollForConversion(&hadcs[2], 1);
	HAL_ADC_PollForConversion(&hadcs[3], 1);

	hadcs[2] = hadc[2];
	hadcs[3] = hadc[3];
	huart = huart2;

	char a;
	while (HAL_UART_Receive(&huart2, (uint8_t *)&a, 1, 1000)  != HAL_OK );

	if (a == '\r' || a == '\n') {
		HAL_UART_Transmit(&huart2, (uint8_t *)"\r\n", 2, 10);

		read_buffer[read_index] = '\0';

		sscanf(read_buffer, "%s %s %d %d", command, ldr, &num_reading, &interval);
        if (strcmp(command, "get") == 0)	readLDR();

        read_index = 0;

	} else {
		char buffer[5];
		sprintf(buffer,"%c",a);
		HAL_UART_Transmit(&huart2, (uint8_t *)buffer, strlen(buffer), 10);

		read_buffer[read_index] = a;
		read_index++;
	}

}

void readLDR() {

	ADC_HandleTypeDef hadc = (strcmp(ldr, "LDRR24") == 0) ? hadcs[2] : hadcs[3];

	for (int i = 0; i < num_reading; i++) {
		int val = HAL_ADC_GetValue(&hadc);

		char buffer[10];
		sprintf(buffer,"%d ", val);
		HAL_UART_Transmit(&huart, (uint8_t *)buffer, strlen(buffer), 10);

		if (num_reading - i != 1)	HAL_Delay(interval * 1000);
	}
	HAL_UART_Transmit(&huart, (uint8_t *)"\r\n", 2, 10);

}
```
:::