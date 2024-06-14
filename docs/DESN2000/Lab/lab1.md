---
title: Lab sheet 1 (weeks 1 and 2)
author:
createTime: 2024/06/06 21:32:54
permalink: /DESN2000/33x7cjnw/
---

::: right 
_Last edited: 27/05/2024_
:::

See the “Assessment Guide for Laboratory Exercises” document on the course page for details on marking. You should use the provided UNSW coaST board for these exercises.
Make reasonable assumptions if not explicitly stated and state such assumptions to your demonstrator when getting marked

### Task 1 (20%)

Write a programme that turns on the corresponding direct LED on the development board as long as the corresponding direct button is pressed. For example, when SW1 is pressed, D1 should light up. When multiple buttons are pressed, all the corresponding LEDs should light up.


::: tabs

@tab task1.h

```c
/*
 * task1.h
 *
 *  Created on: Jun 4, 2024
 *      Author: howhow
 */

#ifndef INC_TASK1_H_
#define INC_TASK1_H_



#include "stm32f3xx_hal.h"
#include "main.h"

#define LED_GPIO GPIOB
#define D1	GPIO_PIN_10
#define D2	GPIO_PIN_4
#define D3	GPIO_PIN_5
#define D4	GPIO_PIN_3

#define SW1P	GPIOA
#define SW1		GPIO_PIN_1
#define SW2P	GPIOA
#define SW2		GPIO_PIN_4
#define SW3P	GPIOB
#define SW3		GPIO_PIN_0
#define	SW4P	GPIOC
#define SW4		GPIO_PIN_1


void task1_init(GPIO_InitTypeDef GPIO_InitStruct);
void task1_main();
void check_pin(GPIO_TypeDef* SW_GPIO, GPIO_PinState SW, uint16_t LED);

#endif /* INC_TASK1_H_ */

```

@tab task1.c

```c
/*
 * task1.c
 *
 *  Created on: Jun 4, 2024
 *      Author: howhow
 */

#include "task1.h"


void task1_init(GPIO_InitTypeDef GPIO_InitStruct) {
	GPIO_InitStruct.Pin = D1 | D2 | D3 | D4;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(LED_GPIO, &GPIO_InitStruct);

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

	HAL_GPIO_WritePin(LED_GPIO, D1 | D2 | D3 | D4, 0);
}


void task1_main() {
	check_pin(SW1P, SW1, D1);
	check_pin(SW2P, SW2, D2);
	check_pin(SW3P, SW3, D3);
	check_pin(SW4P, SW4, D4);
	HAL_Delay(100);
}


void check_pin(GPIO_TypeDef* SW_GPIO, GPIO_PinState SW, uint16_t LED) {
	if (HAL_GPIO_ReadPin(SW_GPIO, SW)) {
		HAL_GPIO_WritePin(LED_GPIO, LED, 1);
	} else {
		HAL_GPIO_WritePin(LED_GPIO, LED, 0);
	}
}

```

:::

### Task 2 (20%)

Write a programme that shows the lower nibble (the four lower significant bits) of a 16-bit number on the LEDs D4-D1. D4 should have the most significant bit of the nibble. The 16-bit number can be hardcoded in your programme as an uint16_t integer variable. 

::: tabs

@tab task2.h

```c
/*
 * task2.h
 *
 *  Created on: Jun 4, 2024
 *      Author: howhow
 */

#ifndef INC_TASK2_H_
#define INC_TASK2_H_

#include "stm32f3xx_hal.h"
#include "main.h"

#define LED_GPIO GPIOB
#define D1	GPIO_PIN_10
#define D2	GPIO_PIN_4
#define D3	GPIO_PIN_5
#define D4	GPIO_PIN_3

void task2_init(GPIO_InitTypeDef GPIO_InitStruct);
void task2_main();


#endif /* INC_TASK2_H_ */

```

@tab task2.c

```c
/*
 * task2.c
 *
 *  Created on: Jun 4, 2024
 *      Author: howhow
 */


#include "task2.h"


void task2_init(GPIO_InitTypeDef GPIO_InitStruct) {
	GPIO_InitStruct.Pin = D1 | D2 | D3 | D4;
	GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(LED_GPIO, &GPIO_InitStruct);
}

void task2_main() {
	uint16_t pattern = 0b0000111100001100;		// 16-bit
	uint8_t lower = pattern & 0b1111;

	uint16_t LED[4] = {D1, D2, D3, D4};
	for (int i = 0; i < 4; i++) {
	  // HAL_GPIO_WritePin(LED_GPIO, LED[i], (lower >> i) & 1);
		HAL_GPIO_WritePin(LED_GPIO, LED[i], (lower >> i) << 7);
	}
}

```

:::


### Task 3 (30%)

Write a programme that moves a 16-bit pattern on the LED bar. The pattern can be a hardcoded uint16_t integer variable which you can define as for example “uint16_t pattern = 0b0000111100001100”. By default the pattern should move to the right and the right corner should wrap to the left corner. Pressing the SW1 button should change the direction of the pattern movement. Make sure your buttons are appropriately debounced in the software.

::: tabs

@tab task3.h

```c
/*
 * task3.h
 *
 *  Created on: Jun 4, 2024
 *      Author: howhow
 */

#ifndef INC_TASK3_H_
#define INC_TASK3_H_

#include "stm32f3xx_hal.h"
#include "main.h"

#define GPIO_RCLK	GPIOB
#define GPIO_SRCLK	GPIOC
#define GPIO_SER	GPIOB

#define	RCLK	GPIO_PIN_7
#define SRCLK	GPIO_PIN_0
#define SER		GPIO_PIN_15

#define SW1P	GPIOA
#define SW1		GPIO_PIN_1

void task3_init(GPIO_InitTypeDef GPIO_InitStruct);
void task3_main();


#endif /* INC_TASK3_H_ */
```

@tab task3.c

```c
/*
 * task3.c
 *
 *  Created on: Jun 4, 2024
 *      Author: howhow
 */


#include "task3.h"
#include "stdbool.h"

uint16_t pattern = 0b0000111100001100;
bool right = true;
int deb = 0;

void task3_init(GPIO_InitTypeDef GPIO_InitStruct) {
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

	GPIO_InitStruct.Pin = SW1;
	GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
	GPIO_InitStruct.Pull = GPIO_NOPULL;
	GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(SW1P, &GPIO_InitStruct);
}


void task3_main() {

	if (right)	pattern = ((pattern & 1) << 15 ) | (pattern >> 1);
	else		pattern = (pattern << 1) | ((pattern >> 15) & 1);

	HAL_GPIO_WritePin(GPIO_RCLK, RCLK, 0);
	for (int k = 0; k < 16; k++) {
		HAL_GPIO_WritePin(GPIO_SER, SER, (pattern >> k) & 1);
		HAL_GPIO_WritePin(GPIO_SRCLK, SRCLK, 1);
		HAL_Delay(10);
		HAL_GPIO_WritePin(GPIO_SRCLK, SRCLK, 0);
		HAL_Delay(10);
	}
	HAL_GPIO_WritePin(GPIO_RCLK, RCLK, 1);

	// Debounce
	if (HAL_GPIO_ReadPin(SW1P, SW1)) {
		deb++;
		if (deb == 1) {
			right = !right;
		}
	} else {
		deb = 0;
	}
}
```

:::

### Task 4 (30%)

Write a programme that increments a binary counter on the LED bar when SW1 is pressed. Initially, the counter starts with 0. When SW2 is pressed, the counter should decrement. You should make sure the counter does not overflow or underflow. Pressing SW3 should reset the counter to 0. Pressing SW4 should set the counter to the maximum possible count. You must make sure the buttons are debounced in the software so that one press only leads to one increment/decrement.

::: tabs

@tab task4.h

```c
/*
 * task4.h
 *
 *  Created on: Jun 4, 2024
 *      Author: howhow
 */

#ifndef INC_TASK4_H_
#define INC_TASK4_H_

#include "stm32f3xx_hal.h"
#include "main.h"

#define GPIO_RCLK	GPIOB
#define GPIO_SRCLK	GPIOC
#define GPIO_SER	GPIOB

#define	RCLK	GPIO_PIN_7
#define SRCLK	GPIO_PIN_0
#define SER		GPIO_PIN_15

#define SW1P	GPIOA
#define SW1		GPIO_PIN_1
#define SW2P	GPIOA
#define SW2		GPIO_PIN_4
#define SW3P	GPIOB
#define SW3		GPIO_PIN_0
#define	SW4P	GPIOC
#define SW4		GPIO_PIN_1

typedef enum {
	max,
	min,
	up,
	down
} types;


void task4_init(GPIO_InitTypeDef GPIO_InitStruct);
void task4_main();
void debounce(types TYPE);

#endif /* INC_TASK4_H_ */
```

@tab task4.c

```c
/*
 * task4.c
 *
 *  Created on: Jun 4, 2024
 *      Author: howhow
 */

#include "task4.h"

uint16_t number = 0;

int	deb4 = 0;


void task4_init(GPIO_InitTypeDef GPIO_InitStruct) {

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


void task4_main() {

	if (HAL_GPIO_ReadPin(SW1P, SW1)) {
		debounce(up);
	} else if (HAL_GPIO_ReadPin(SW2P, SW2)) {
		debounce(down);
	} else if (HAL_GPIO_ReadPin(SW3P, SW3)) {
		debounce(min);
	} else if (HAL_GPIO_ReadPin(SW4P, SW4)) {
		debounce(max);
	} else {
		deb4 = 0;
	}

	HAL_GPIO_WritePin(GPIO_RCLK, RCLK, 0);
	for (int k = 0; k < 16; k++) {
		HAL_GPIO_WritePin(GPIO_SER, SER, (number >> k) & 1);
		HAL_GPIO_WritePin(GPIO_SRCLK, SRCLK, 1);
		HAL_Delay(10);
		HAL_GPIO_WritePin(GPIO_SRCLK, SRCLK, 0);
		HAL_Delay(10);
	}
	HAL_GPIO_WritePin(GPIO_RCLK, RCLK, 1);
}

void debounce(types TYPE) {
	deb4++;
	if (deb4 == 1) {

		switch(TYPE) {

		case up: {

			if (number < UINT16_MAX)
				number++;
			break;
		}
		case down: {

			if (number > 0)
				number--;
			break;
		}
		case max: {

			number = UINT16_MAX;
			break;
		}
		case min: {

			number = 0;
			break;
		}

		}

	}
}
```

:::