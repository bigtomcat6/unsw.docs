---
title: Lecture Notes
author:
createTime: 2024/05/28 19:51:17
permalink: /DESN2000/Lecture
---

## Week 1 Monday

> [!NOTE]
> IDE: `STM32CubeIDE` - 1.15.1

### Getting Started with cubeIDE

::: warning
`STM32CubeIDE` 使用前必须先注册并登录，否则无法创建项目
:::

::: tip
* 下载地址：[STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html#get-software)

* UNSW WebCMS3: [Getting Started](https://webcms3.cse.unsw.edu.au/files/12a63b255ed3a3ea67875e4b90eeedc6484d05e47d52f8735f78d4313c9761aa)

:::

::: details 如何创建项目

> [!TIP]
> 按照图示顺序操作

* `File` → `New` → `STM32 Project`

![image-20240527160444703](./img/image-20240527160444703.png)

* 在打开的窗口中选择`Board Selector`，选择`NUCLEO-F303RE`，点击`Next`

![image-20240527160951356](./img/image-20240527160951356.png)

* 在`Project Name`中输入项目名称，点击`Finish`

![image-20240527161100525](./img/image-20240527161100525.png)

* 在`Project` → `Generate Code`生成代码

![image-20240527161951134](./img/image-20240527161951134.png)

自此，项目初始化完成

:::

### Project Structure

 在左侧`Project Explorer`中可以看到项目的结构

![image-20240527164335373](./img/image-20240527164335373.png)

* `Core/Inc`：头文件

* `Core/Src`：源文件
 这里`main.c`和一些储存生成的驱动程序和库，我们称之为`HAL`库。(硬件抽象层)

* `Core/Startup`：启动文件

#### `main.c`文件

![image-20240527165638360](./img/image-20240527165638360.png)

在`main.c`文件中，我们可以看到`main`函数，这是程序的入口。

通常编写代码时，确保在`main`函数中的`while(1)`的循环中编写代码。

原因是，如果你在项目设置中更改了某些内容，其他位置的代码可能会被覆盖。或者你可以创建一个新文件，并在这里调用它。

#### 实现一个简单的LED闪烁

::: details 如何找到LED引脚

![image-20240527204130910](./img/image-20240527204130910.png)

![image-20240527204659561](./img/image-20240527204659561.png)

:::

::: tip 提示
MacOS: `⌥` + `/` 开启代码补全
:::


在 `while(1)` 中加入

```c
  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */

	  HAL_GPIO_WritePin(GPIOB, GPIO_PIN_5, 1);		// LED ON
	  HAL_Delay(500);								// Sleep 5000ms
	  HAL_GPIO_WritePin(GPIOB, GPIO_PIN_5, 0);		// LED OFF
	  HAL_Delay(500);								// Sleep 5000ms
  }
  /* USER CODE END 3 */
```

或者使用`HAL_GPIO_TogglePin`函数。

```c
  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */
      HAL_GPIO_TogglePin(GPIOB, GPIO_PIN_5);
      HAL_Delay(500);
  }
  /* USER CODE END 3 */
```

#### 点亮外部板的LED

###### 1. 在`main.h` 的 `Private defines` 中 define LED的引脚

```c
/* USER CODE BEGIN Private defines */
#define D1_GPIO_Port GPIOB
#define D1_Pin GPIO_PIN_10
/* USER CODE END Private defines */
```

###### 2. 将`main.c` 的 `while(1)` 中的代码替换

```c
  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */

//	  HAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, 1);		// LED ON
//	  HAL_Delay(500);								// Sleep 5000ms
//	  HAL_GPIO_WritePin(GPIOA, GPIO_PIN_5, 0);		// LED OFF
//	  HAL_Delay(500);								// Sleep 5000ms

	  // OR
	  HAL_GPIO_TogglePin(D1_GPIO_Port, D1_Pin);		// Switch Status // [!code focus]
	  HAL_Delay(500); // [!code focus]
  }
  /* USER CODE END 3 */
```


然后初始化端口

---