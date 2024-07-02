---
title: Week 1 Practice Class
author:
createTime: 2024/07/02 22:01:48
permalink: /MATH2099/grbaprk7/
---

## MATH2099 - Mathematics 2B (Statistics component) 

_and MATH2859 - Probability, Statistics and Information_

<HGlobalLink title="Week 1 Course Info - Slide" md5="b1d04b0585c954296a9e13026eec328e"/>

### Assessment 

***To pass this course, you must achieve at least 50% in your final combined mark for the course. Additionally, you must achieve at least 40% in Linear Algebra and 40% in Statistics, that is, a minimum of 20/50 in each component.***

Linear Algebra component contributes 50% to your final mark for MATH2099, 

Statistics component contributes 50% to your final mark for MATH2099, consisting of

- Ten online lectures and quizzes in Mobius (due Weeks 2-5 and 7-10): 10% of final mark
- Statistics Midterm Test (Week 7): 10% of final mark
Final exam: 30% of final mark

### Course Schedule

|Week|Topic covered|
|:--:|---|
|1|Probability (revision)<br>Descriptive statistics |
|2|Random variables|
|3|Special random variables|
|4|Sampling distributions and the Central Limit Theorem|
|5|Confidence intervals for means and proportions|
|6|Flex Week: No Classes|
|7|Hypothesis testing|
|8|Inference concerning differences in means|
|9|Regression analysis|
|10|Analysis of variance|

* All online lectures and quizzes are due Tuesdays at 11am on Mobius

Midterm tests are held in computing labs, see EXM in your Week 7 timetable for the date and time.

## Exercises Week 1 : Descriptive Statistics

- <HGlobalLink title="Week 1 Practice Class - slides" md5="0a96b923ee4dd8e0a926c6c508462d21"/>
- <HGlobalLink title="Week 1 Practice Class (annotated)" md5="6574d4b41a7a4583de687ccae644034a"/>
- <HGlobalLink title="Practice Class Week 1 - Solutions" md5="699356cd7a1bc474f624ae23c7d73524"/>

### Exercise 1^*^

If you haven’t already, **read the Course Outline**. Do you have any questions?

---

### Exercise 2^*^

Did you **complete Online Lecture 1** on Möbius before class? Do you have any questions?

---

### Exercise 3

#### a) Answer the following yes/no questions, and explain your answer

- (i) Will the sample mean always correspond to one of the observations of the sample?

    ::: info Answer

    No, the mean need not be an observed value. Consider the sample $\{0, 1\}$, its mean is $0.5$.

    ::: details

    - Example: $\{x, x_1, \cdots , x_n\}$, sample mean $\bar{x} = \frac{x_1 + \cdots + x_n}{n}$.

    - Counter example: $\{2, 2, 5\}$, sample mean $\bar{x} = \frac{2 + 2 + 5}{3} = 3$. sample mean here is 3, whitch is not an observed from the sample.

    :::

- (ii) Will exactly half of the observations in a sample always fall below the mean?

    ::: info Answer

    No, that is the definition of the median.

    ::: details

    $\{ 2, 3, 4, 10 \}$

    - Median: $m = \frac{3 + 4}{2} = 3.5$ ← half of observations fall below the median.
    - Mean: $\bar{x} = \frac{2 + 3 + 4 + 10}{4} = \frac{19}{4} = 4.75$ ← more than half (3 out of 4) observations fall below the mean.
    :::

- (iii) Will the sample mean always be the most frequently occurring data value in the sample?

    ::: info Answer
    No, as the mean need not even be an observed value. The most frequently occurring data value in the sample is called the sample mode.

    ::: details

    This is definition if <u>mode</u>, not sample mean.

    $\{2, 2, 2, 10, 5, 5, 15\}$

    - Mode: 2
    - Sample mean: $\bar{x} = \frac{2 + 2 + 2 + 10 + 5 + 5 + 15}{7} = \frac{41}{7} \approx 5.857$

    Sample mean $\neq$ mode

    $5.86 \neq 2$

    :::

- (iv) Can the sample standard deviation be equal to zero?

    ::: info Answer

    Yes, when all the observations are equal, there is no dispersion in the sample.

    ::: details

    Sample: $\{x, x_2, \cdots, x_n \}$

    - Sample Mean: $\bar{x} = \frac{x_1 + \cdots + x_n}{n}$
    - Sample Standard Deviation: $s = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2}$

    e.g: $\{2, 2, 2\}$

    - $\bar{x} = \frac{2 + 2 + 2}{3} = 2$
    - $s = \sqrt{\frac{1}{3-1} \sum_{i=1}^{3} (x_i - 2)^2} = \sqrt{\frac{1}{2} (0 + 0 + 0)} = 0$

    :::

- (v) Can the sample median be equal to the sample mean?

    ::: info Answer

    Yes, but this only happens when the distribution of the observed values is exactly symmetric.

    ::: details

    e.g $\{1, 3, 5\}$

    - median: $m = 3$
    - mean: $\bar{x} = \frac{1 + 3 + 5}{3} = 3$

    $\therefore m = \bar{x}$

    :::


#### b)

- (i) Suppose that you add 10 to all of the observations in a sample. How does this change the sample mean? How does it change the sample standard deviation?

    ::: info Answer

    Adding 10 to all observations is like shifting the whole sample by a distance of 10. The new mean is also shifted by 10, however the dispersion in the sample is not affected by this shift so that the standard deviation is unchanged.

    ::: details

    Sample mean will increase by 10, but sample stabdard deviation will be the same.

    - $\{2, 3, 4\}$ → $\{12, 13, 14\}$

    - $\bar{x} = \frac{2 + 3 + 4}{3} = 3$ → $\bar{x} = \frac{12 + 13 + 14}{3} = 13$

    - $s = \sqrt{\frac{1}{2} ((2 - 3)^2 + (3 - 4)^2 + (4 - 3)^2} = 1$ → $s = \sqrt{\frac{1}{2} ((12 - 13)^2 + (13 - 14)^2 + (14 - 13)^2} = 1$

    :::

- (ii) Suppose that you multiply all of the observations in a sample by 2. How does this change the sample mean? How does it change the sample standard deviation?

    ::: info Answers

    Multiplying all the observations by 2 is like shifting and stretching the sample. The new mean is affected by the shifting and is the initial mean multiplied by 2, while the dispersion is affected by the stretching, so that the new standard deviation is also the initial standard deviation multiplied by 2.

    ::: details

    both will double

    - $\bar{x_{new}} = 2 \bar{x}$
    - $s_{new} = 2 s$

    :::

- (iii) A sample of temperature measurements in a furnace yielded a sample average of 446°Celsius and a sample standard deviation of 5.8°Celsius. You would like to communicate this information to an American colleague. What are the sample average and the sample standard deviation expressed in °Fahrenheit? _(Hint : temperature in °C = (temperature in °Fahrenheit - 32)×5/9)_

    ::: info Answer

    We have $\bar{x} = 446$ and $s_x = 5.8$ in °C. Denote $y$ the temperature in °F. Similarly to above, we have
    $$\bar{y} = \frac{9}{5} \times \bar{x} + 32 = 834.8$$
    and
    $$s_y = \frac{9}{5} s_x = 10.44$$
    both expressed in °F.

    ::: details

    - Sample $\{x_1, \cdot, x_n\}$ (°C)
    - given $\bar{x} = 446$ and $s_x = 5.8$ (°C)

    transform to $\{y_1, y_2, \cdot, y_n\}$ (°F)

    formula: $y_i = \frac{9}{5} x_i + 32$

    - $\bar{y} = \frac{9}{5} \bar{x} + 32 = 834.8$ (°F)
    - $s_y = \frac{9}{5} s_x = 10.44$ (°F)

    :::

---

### Exercise 4

An experiment to investigate the survival time (in hours) of an electronic component consists of placing the parts in a test cell and running them for 100 hours under elevated temperature conditions (this is called an ‘accelerated life test’). Eight components were tested with the following resulting failure times :

<div style="text-align:center">

75 63 100^+^ 36 51 45 80 90
</div>

The observation 100^+^ indicates that the unit still functioned at 100 hours. Is there any meaningful
measure of location that can be calculated for these data? What is its numerical value?

::: info Answer

Yes, the median is a meaningful location measure, as it is unaffected by extreme values. So the unobserved value beyond 100 hours could be anything; the median would remain unchanged. Specifically, no matter the exact value of 100+, the median is

$$m = \frac{1}{2} (63 + 75) = 69 \text{ hours}, $$

as the sample size is even and 63 and 75 are the central values of the sample.

::: 

---

### Exercise 5

Consider a sample of observations $x_1, x_2, \ldots, x_n$. For what value is the quantity $\frac{1}{n-1} \sum_{i=1}^{n} (x_i - a)^2$ minimised? Interpret in terms of the location and dispersion parameters that you know.

::: info Answer

Differentiate the function $f(a) = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - a)^2$ with respect to $a$:

$$\frac{d}{da} f(a) = \frac{-2}{n-1} \sum_{i=1}^{n} (x_i - a)$$

Set this to 0 :

$$\sum_{i=1}^{n} (x_i - a) = 0$$

it follows

$$\sum_{i=1}^{n} x_i = na$$

or

$$a = \frac{1}{n} \sum_{i=1}^{n} x_i = \bar{x}$$

(you can check that the second derivative of $f(a)$ is always positive)

\~\~ the sample mean is the value that minimizes the sum of the squared deviations.

Note that $f(\bar{x})$ is the sample variance.

::: details

- Sample variance: $s^2 = 1/{n - 1} \sum_{i=1}^{n} (x_i - \bar{x})^2$ (when $a = \bar{x}$)

Let $f(a) = 1/{n - 1} \sum_{i=1}^{n} (x_i - a)^2$

$\begin{aligned} \frac{d}{da} f(a) &= 1/{n - 1} (-2) \sum_{i=1}^{n} (x_i - a)  \\ &= \frac{-2}{n - 1} (\sum_{i=1}^{n} x_i - \sum_{i=1}^{n} a) \\ &= - \frac{2}{n - 1} (\sum_{i=1}^{n} x_i - n a) \end{aligned}$

Let $\frac{d}{da} = 0$ and solve

$\displaystyle \sum_{i=1}^{n} x_i - n a = 0$

$\displaystyle a = \frac{1}{n} \sum_{i=1}^{n} x_i = \bar{x}$

:::

---

### Exercise 6^*^

**Complete Lecture 1 Quiz** on Möbius.

---

:::center
_End of Statistics Practice Class Week 1._

_Before next week’s class, please c**omplete the Revision Lecture and Online Lecture 2**._
:::