---
title: Lab sheet 2 (weeks 3 and 4)
author: How
createTime: 2024/06/23 00:39:19
permalink: /DESN2000/s1c24h0j/
---

::: right 
_Last edited: 12/06/2024_
:::

Make reasonable assumptions if not explicitly stated and state such assumptions to your demonstrator when getting marked.

### Task 1 (10%)

Follow the debugging tutorial available under lab 2 in WebCMS. Demonstrate to your tutor, how you will debug an example bug using debugging tools available in cubeIDE and answer any question. Yes, this is an easy mark. But we want to ensure you all learn debugging methods so that life will become easier in the long run.

### Task 2 (20%)

Write a programme that displays the following on the LCD.

|Hello|
|:--|
|World|

You may want to implement the LCD code from scratch if you are courageous. But if you need some guidance, refer to the following for initialising the LCD.

```c
 // 1. wait for enough time to stabilise
 HAL_Delay(50);
 // 2. send command 0011 (function set) and wait for >=4.1 ms (enough wait inside the pulse)
 LCD_PutNibble(0b0011); LCD_Pulse();
 // 3. send command 0011 (function set) again and wait for >=100 us
 // fill this
 // 4. send command 0011 (function set) again
 // fill this
 // 5. send command 0010 to set to 4-bit bus mode
 // fill this
 // 6. send command 0010 1100 (function set: 4-bit mode, 2-lines, 5x8 font)
 LCD_SendCmd(0b00101100);
 // 7. Send command 0000 1000 to display ON/OFF
 LCD_SendCmd(0b00001000);
 // 8. Send command to clear the display
 // fill this
 // 9. Send command set entry mode (increment cursor, no display shift)
 // fill this
 // 10. send command 0000 1111 to display on, cursor on, blink on
 // fill this
```
Check the week 2 Monday lecture on implementing functions such as `LCD_PutNibble` and `LCD_Pulse`.

Hints:
- Use #define statements to define LCD controller instructions with sensible names
- Make sure you don’t forget to add `__HAL_RCC_GPIOD_CLK_ENABLE()`

::: tabs

@tab task2.h

```c
/*
 * task2.h
 *
 *  Created on: Jun 12, 2024
 *      Author: howhow
 */

#ifndef INC_TASK2_H_
#define INC_TASK2_H_

#include "main.h"

void task2_init();
void task2_main();

void lcd_init();
void lcd_PutNibble(uint8_t c);
void lcd_Pulse();
void lcd_SendCmd(uint8_t cmd);
void lcd_SendData(uint8_t data);

void lcd_Shift(uint8_t row, uint8_t col);
void lcd_SendString(const char *str, int row);
void lcd_clear();


#endif /* INC_TASK2_H_ */
```

@tab task2.c

```c
/*
 * task2.c
 *
 *  Created on: Jun 12, 2024
 *      Author: howhow
 */
#include "task2.h"
#include <string.h>

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


void task2_init() {
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
}

void lcd_init() {
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

void task2_main() {
	lcd_init();
	// HAL_GPIO_WritePin(GPIOB, GPIO_PIN_4, 1); // LED D2

//	lcd_SendData('H');
//	lcd_SendData('e');
//	lcd_SendData('l');
//	lcd_SendData('l');
//	lcd_SendData('o');

	lcd_SendCmd(0b00001100);
	lcd_SendString("HeLLo", 0);
	lcd_SendString("World", 1);

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
	debug_printf("A\r\n");
	// HAL_GPIO_TogglePin(GPIOB, GPIO_PIN_4);
	// ITM_SendChar('!');
	HAL_GPIO_WritePin(E_PORT, LCD_E, 1);	// PD2
	HAL_Delay(5);
	HAL_GPIO_WritePin(E_PORT, LCD_E, 0);
	HAL_Delay(5);
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


### Task 3 (20%)

Write a programme that displays the relevant character on the LCD when a key on the keypad is pressed. One key press should only produce one character – debounce! When the first row of the LCD is full, you should go to the second row. When the second row is full, clear the display and start from the top left of the LCD.

::: tabs

@tab task3.h

```c
/*
 * task3.h
 *
 *  Created on: Jun 18, 2024
 *      Author: howhow
 */

#ifndef INC_TASK3_H_
#define INC_TASK3_H_

#include "main.h"

void task3_init();
void task3_main();
void task3_main_while();

uint8_t scan_keypad();


#endif /* INC_TASK3_H_ */
```

@tab task3.c

```c
/*
 * task3.c
 *
 *  Created on: Jun 18, 2024
 *      Author: howhow
 */


#include "task3.h"
#include "task2.h"

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

int number_word = 0;

uint8_t deb_word = 0;
int deb = 0;

void task3_init() {
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


void task3_main(){
	lcd_init();	// From Task2

	int wait_sec = 0;
	if (wait_sec == 0) {
		lcd_init();
		lcd_SendCmd(0b00001100);
			lcd_SendString("Task 3", 0);
		HAL_Delay(1000);
		lcd_SendCmd(0b00001111);
		lcd_clear();
		wait_sec++;
	}
}



void task3_main_while() {

	uint8_t word = scan_keypad();
	if (word > 0) {
		if (number_word == 16)	lcd_Shift(1,0);
		if (number_word == 32) {
			lcd_clear();
			number_word = 0;
		}

		lcd_SendData(word);
		number_word++;
	}
	HAL_Delay(50);

}

uint8_t scan_keypad() {
	uint16_t COL[4] = {KC1, KC2, KC3, KC4};
	uint16_t ROW[4] = {KR1, KR2, KR3, KR4};

	uint8_t word = 0;
	for(int c = 0; c < 4; c++) {
		HAL_GPIO_WritePin(KC_PORT, COL[c], 1);
		// HAL_Delay(1);
		for(int r = 0; r < 4; r++) {
			if(HAL_GPIO_ReadPin(KR_PORT, ROW[r])) {
				if (deb_word == 0) {
					deb_word = KEYWORDS[r][c];
				}

				if (deb == 1 && deb_word == KEYWORDS[r][c]) {
					HAL_GPIO_WritePin(KC_PORT, COL[c], 0);
					// HAL_Delay(1);
					// deb_word = 0;

					deb_word = KEYWORDS[r][c];
					deb++;
					return KEYWORDS[r][c];
				}

				if (deb_word == KEYWORDS[r][c]) {
					deb++;
				} else {
					deb_word = 0;
					deb = 0;
				}

			} else if (deb_word == KEYWORDS[r][c]) {
				deb_word = 0;
				deb = 0;
			}
		}
		HAL_GPIO_WritePin(KC_PORT, COL[c], 0);
		// HAL_Delay(1);
	}

	return word;
}

```

:::

### Task 4 (30%)

Implement a simple calculator using the keypad and the LCD. The keys A, B, C, D and # should be used for +, -, x, / and =, respectively. To clear the display use * key. See the following example:

|1+2-3/2+2=|
|:--|
|3.5|

Assume that the expression on row 1 is not longer than 16 characters. Handle errors such as invalid syntax and division by 0, while giving an appropriate error message.

::: tabs

@tab task4.h

```c
/*
 * task4.h
 *
 *  Created on: Jun 18, 2024
 *      Author: howhow
 */

#ifndef INC_TASK4_H_
#define INC_TASK4_H_

#include "main.h"

void task4_init();
void task4_main();
void task4_main_while();

void cals_clear();
void do_cals();
void showAnswer(const char *str);


int precedence(char op);
void infix_to_postfix(const char *infix, char *postfix);
double evaluate_postfix(const char *postfix);



#endif /* INC_TASK4_H_ */
```

@tab task4.c

```c
/*
 * task4.c
 *
 *  Created on: Jun 18, 2024
 *      Author: howhow
 */

#include <stdio.h>
#include <ctype.h>
#include <math.h>

#include "task4.h"

#include "task3.h"
#include "task2.h"

static char cals[16] = "";
int cals_index = 0;


void task4_init() {


}

void task4_main() {
	task3_main();
	lcd_init();
	lcd_SendCmd(0b00001100);
	lcd_SendString("Task 4", 0);
	lcd_SendCmd(0b00001111);
}



void task4_main_while() {

	uint8_t word = scan_keypad();

	if (cals_index == 15)
		if (word != '#' && word != '*')	return;


	if (word > 0) {
		if (cals_index == 0)	cals_clear();

		switch(word) {
		case 'A':	word = '+';	break;
		case 'B':	word = '-';	break;
		case 'C':	word = '*';	break;
		case 'D':	word = '/';	break;
		case '#':	do_cals();	return;
		case '*':	cals_clear();	return;
		}
		cals[cals_index++] = word;
		lcd_SendData(word);
	}

}


void cals_clear(){
	memset(cals, 0, sizeof(cals));
	cals_index = 0;
	lcd_clear();
}

#define ERR_NONE 0
#define ERR_SYNTAX 1
#define ERR_DIV_ZERO 2

typedef struct {
    char message[16];
    int error_code;
} ErrorState;

ErrorState error_state = { .message = "", .error_code = ERR_NONE };

void do_cals() {
	lcd_SendData('=');

	// static char expression[32] = "";
	// static int exp_pos = 0;
	char postfix[32] = "";

	infix_to_postfix(cals, postfix);

	if (error_state.error_code != ERR_NONE) {
		showAnswer(error_state.message);
		return;
	}

	double result = evaluate_postfix(postfix);

	if (error_state.error_code != ERR_NONE) {
		showAnswer(error_state.message);
		return;
	}

	char result_str[16];
	// The float formatting support is not enabled, check your MCU Settings from "Project Properties > C/C++ Build > Settings > Tool Settings", or add manually "-u _printf_float" in linker flags.
	snprintf(result_str, sizeof(result_str), "%.2f", result);
	// exp_pos = 0;

	showAnswer(result_str);
}

void showAnswer(const char *str) {
	memset(cals, 0, sizeof(cals));
	lcd_SendString(str, 1);
	cals_index = 0;
}


/**** Calculate ****/

#define MAX_EXPR_LEN 32
#define MAX_STACK_SIZE 32

typedef struct {
    double stack[MAX_STACK_SIZE];
    int top;
} Stack;


void init_stack(Stack *s) {
    s->top = -1;
}

int is_empty(Stack *s) {
    return s->top == -1;
}

int is_full(Stack *s) {
    return s->top == MAX_STACK_SIZE - 1;
}

void push(Stack *s, double val) {
    if (!is_full(s)) {
        s->stack[++(s->top)] = val;
    }
}

double pop(Stack *s) {
    if (!is_empty(s)) {
        return s->stack[(s->top)--];
    }
    return 0;
}

double peek(Stack *s) {
    if (!is_empty(s)) {
        return s->stack[s->top];
    }
    return 0;
}

int precedence(char op) {
    switch (op) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}


void infix_to_postfix(const char *infix, char *postfix) {
    Stack s;
    init_stack(&s);
    int j = 0;
    error_state.error_code = ERR_NONE;
    int last_char_was_operator = 1;  // 假设前一个字符是操作符，以处理表达式开头的负号

    char mod_infix[MAX_EXPR_LEN];
    strcpy(mod_infix, infix);

    for (int i = 0; mod_infix[i]; i++) {
        if (isdigit(mod_infix[i]) || mod_infix[i] == '.') {
            postfix[j++] = mod_infix[i];
            last_char_was_operator = 0;
        } else if (mod_infix[i] == '(') {
            push(&s, mod_infix[i]);
            last_char_was_operator = 1;
        } else if (mod_infix[i] == ')') {
            while (!is_empty(&s) && peek(&s) != '(') {
                postfix[j++] = ' ';
                postfix[j++] = pop(&s);
            }
            if (is_empty(&s)) {
                error_state.error_code = ERR_SYNTAX;
                strcpy(error_state.message, "Syntax Error");
                return;
            }
            pop(&s); // 移除 '('
            last_char_was_operator = 0;
        } else {
            if (last_char_was_operator && (mod_infix[i] == '+' || mod_infix[i] == '-')) {
                if (mod_infix[i] == '-' && (i == 0 || mod_infix[i-1] == '(')) {
                    // 处理开头或括号后的负号
                    postfix[j++] = ' ';
                    postfix[j++] = '0';
                    postfix[j++] = ' ';
                    postfix[j++] = '-';
                    last_char_was_operator = 1;
                } else if (mod_infix[i] == '-' && (i > 0 && mod_infix[i-1] == '-')) {
                    // 处理连续减号，视为正号
                    mod_infix[i] = '0';
                    mod_infix[i - 1] = '+';
                } else {
                    error_state.error_code = ERR_SYNTAX;
                    strcpy(error_state.message, "Syntax Error");
                    return;
                }
            } else if (last_char_was_operator) {
                error_state.error_code = ERR_SYNTAX;
                strcpy(error_state.message, "Syntax Error");
                return;
            } else {
                postfix[j++] = ' '; // 添加分隔符
                while (!is_empty(&s) && precedence(peek(&s)) >= precedence(mod_infix[i])) {
                    postfix[j++] = ' ';
                    postfix[j++] = pop(&s);
                }
                push(&s, mod_infix[i]);
                last_char_was_operator = 1;
            }
        }
    }

    while (!is_empty(&s)) {
        char top = pop(&s);
        if (top == '(' || top == ')') {
            error_state.error_code = ERR_SYNTAX;
            strcpy(error_state.message, "Syntax Error");
            return;
        }
        postfix[j++] = ' ';
        postfix[j++] = top;
    }
    postfix[j] = '\0';
}

double evaluate_postfix(const char *postfix) {
    Stack s;
    init_stack(&s);
    double a, b;
    error_state.error_code = ERR_NONE;

    for (int i = 0; postfix[i]; i++) {
        if (isdigit(postfix[i])) {
            double num = 0;
            while (isdigit(postfix[i]) || postfix[i] == '.') {
                if (postfix[i] == '.') {
                    i++;
                    double frac = 0.1;
                    while (isdigit(postfix[i])) {
                        num += (postfix[i] - '0') * frac;
                        frac *= 0.1;
                        i++;
                    }
                } else {
                    num = num * 10 + (postfix[i] - '0');
                    i++;
                }
            }
            push(&s, num);
            i--; // 调整索引
        } else if (postfix[i] == ' ') {
            continue;
        } else {
            b = pop(&s);
            a = pop(&s);
            switch (postfix[i]) {
                case '+':
                    push(&s, a + b);
                    break;
                case '-':
                    push(&s, a - b);
                    break;
                case '*':
                    push(&s, a * b);
                    break;
                case '/':
                	if (b == 0) {
						error_state.error_code = ERR_DIV_ZERO;
						strcpy(error_state.message, "Divide by Zero");
						return 0;
					}
                    push(&s, a / b);
                    break;
            }
        }
    }
    return pop(&s);
}
```

:::

### Task 5 (20%)

Without using HAL functions, write a programme that increments a counter when SW1 is pressed and decrements when SW2 is pressed. The counter is only 4-bit and should be displayed on LEDs D4-D1. For this task, you are NOT allowed to use HAL functions. Instead, you should be directly accessing relevant memory addresses in C. What you have to write in C directly would be the following:
- Everything inside the `MX_GPIO_Init(void)`
- Infinite while loop inside the main function

Hints: You can first write a programme using HAL, and then replace each HAL function with direct C code, one by one. This way, it would be easier to debug. Check the week 2 Friday lecture if you need help

::: tabs

@tab task5.h

```c
/*
 * task5.h
 *
 *  Created on: Jun 18, 2024
 *      Author: howhow
 */

#ifndef INC_TASK5_H_
#define INC_TASK5_H_

#include "main.h"

void my_delay(uint32_t count);
void task5_init();
void task5_main();
void task5_main_while();


#endif /* INC_TASK5_H_ */

```

@tab task5.c

```c
/*
 * task5.c
 *
 *  Created on: Jun 18, 2024
 *      Author: howhow
 */

#include <stdint.h>

#include "task5.h"
#include "task2.h"

#define RCC_AHBENR      (*((volatile uint32_t *)0x40021014))

#define PORTA_MODER    (*((volatile uint32_t *)0x48000000))
#define PORTA_OTYPE     (*((volatile uint32_t *)0x48000004))
#define PORTA_OSPEEDR  (*((volatile uint32_t *)0x48000008))
#define PORTA_PUPDR     (*((volatile uint32_t *)0x4800000C))
#define PORTA_IDR        (*((volatile uint32_t *)0x48000010))
#define PORTA_ODR       (*((volatile uint32_t *)0x48000014))

#define PORTB_MODER    (*((volatile uint32_t *)0x48000400))
#define PORTB_OTYPE     (*((volatile uint32_t *)0x48000404))
#define PORTB_OSPEEDR  (*((volatile uint32_t *)0x48000408))
#define PORTB_PUPDR     (*((volatile uint32_t *)0x4800040C))
#define PORTB_IDR        (*((volatile uint32_t *)0x48000410))
#define PORTB_ODR       (*((volatile uint32_t *)0x48000414))

#define PORTC_MODER    (*((volatile uint32_t *)0x48000800))
#define PORTC_OTYPE     (*((volatile uint32_t *)0x48000804))
#define PORTC_OSPEEDR  (*((volatile uint32_t *)0x48000808))
#define PORTC_PUPDR     (*((volatile uint32_t *)0x4800080C))
#define PORTC_IDR        (*((volatile uint32_t *)0x48000810))
#define PORTC_ODR       (*((volatile uint32_t *)0x48000814))

//#define LED_GPIO GPIOB
//
//#define D1	GPIO_PIN_10
//#define D2	GPIO_PIN_4
//#define D3	GPIO_PIN_5
//#define D4	GPIO_PIN_3
//
//#define SW1P	GPIOA
//#define SW1		GPIO_PIN_1
//#define SW2P	GPIOA
//#define SW2		GPIO_PIN_4
//#define SW3P	GPIOB
//#define SW3		GPIO_PIN_0
//#define SW4P	GPIOC
//#define SW4		GPIO_PIN_1

#define D1	10
#define D2	4
#define D3	5
#define D4	3

#define SW1	1
#define SW2	4
#define SW3	0
#define SW4	1

void my_delay(uint32_t count) {
    for(uint32_t i = 0; i < count; i++) {
        for(uint32_t j = 0; j < 10000; j++) {
        }
    }
}

void task5_init() {
	/*
	GPIO_InitTypeDef GPIO_InitStruct = {0};
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
	*/

	// None HAL

	RCC_AHBENR |= (1 << 17);	// GPIOA
	RCC_AHBENR |= (1 << 18);	// GPIOB
	RCC_AHBENR |= (1 << 19);	// GPIOC

	// GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
    PORTB_MODER &= ~((0x3 << (2 * 3)) | (0x3 << (2 * 4)) | (0x3 << (2 * 5)) | (0x3 << (2 * 10)));
    PORTB_MODER |= ((0x1 << (2 * 3)) | (0x1 << (2 * 4)) | (0x1 << (2 * 5)) | (0x1 << (2 * 10)));

	// GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
    PORTA_MODER &= ~(0x3 << (2 * SW1));
    PORTA_MODER &= ~(0x3 << (2 * SW2));
    PORTB_MODER &= ~(0x3 << (2 * SW3));
    PORTC_MODER &= ~(0x3 << (2 * SW4));


}


void task5_main() {
	lcd_init();
	lcd_SendCmd(0b00001100);
	lcd_SendString("Task 5", 0);
}

int deb5 = 0;

uint8_t number = 0;

void task5_main_while() {

	/*
	if (HAL_GPIO_ReadPin(SW1P, SW1)) {
		if (deb5 != 0) return;
		if (number < 0b1111)	number++;
		deb5++;
	} else if (HAL_GPIO_ReadPin(SW2P, SW2)) {
		if (deb5 != 0) return;
		if (number > 0)			number--;
		deb5++;
	} else {
		deb5 = 0;
	}
	*/

	if (PORTA_IDR & (1 << SW1)) {
		if (deb5 != 0) return;
		if (number < 0b1111)	number++;
		deb5 = 1;
	} else if (PORTA_IDR & (1 << SW2)) {
		if (deb5 != 0) return;
		if (number > 0)			number--;
		deb5 = 1;
	} else {
		deb5 = 0;
	}

	// LED

	/*
	uint16_t LED[4] = {D4, D3, D2, D1};
	for (int i = 0; i < 4; i++) {
		HAL_GPIO_WritePin(LED_GPIO, LED[i], (number >> i) & 1);
	}

	HAL_Delay(500);
	*/

	uint16_t LED[4] = {D4, D3, D2, D1};
	for (int i = 0; i < 4; i++) {
		if ((number >> i) & 1)	PORTB_ODR |= (1 << LED[i]);
		else					PORTB_ODR &= ~(1 << LED[i]);
	}

	my_delay(1);

}

```

:::