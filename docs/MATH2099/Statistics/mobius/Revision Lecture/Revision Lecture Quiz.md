---
title: Revision Lecture Quiz
author: How
createTime: 2024/06/10 21:39:28
permalink: /MATH2099/8xh2czzz/
---

## Question 1

<div class="how_qb">

**Concept**

$22\%$ of people have read one of the Harry Potter books, and $42\%$ of people wear glasses. $21\%$ of people have read one of the Harry Potter books and wear glasses.

**a)** What percentage of people have either read one of the Harry Potter books or wear glasses?

- `43` $\%$ _(Enter the exact value)_

**b)** What percentage of people have neither read one of the Harry Potter books nor wear glasses?

- `57` $\%$ _(Enter the exact value)_

::: details Solution

To solve these problems, we can use the principle of inclusion and exclusion. We have the following data from the problem statement:

- 22% of people have read one of the Harry Potter books.
- 42% of people wear glasses.
- 21% of people have both read one of the Harry Potter books and wear glasses.

**Part (a): Either Read Harry Potter Books or Wear Glasses**

Using the principle of inclusion and exclusion for two sets $A$ and $B$ (where $A$ represents those who have read Harry Potter books, and $B$ represents those who wear glasses), the formula to calculate the percentage of people who are in either group is:
$$|A \cup B| = |A| + |B| - |A \cap B|$$

Plugging in the values:
$$|A \cup B| = 22\% + 42\% - 21\% = 43\%$$

So, 43% of people have either read one of the Harry Potter books or wear glasses.

**Part (b): Neither Read Harry Potter Books Nor Wear Glasses**

To find the percentage of people who neither read the books nor wear glasses, we calculate the complement of the union of the two sets:
$$\text{Neither} = 100\% - |A \cup B| = 100\% - 43\% = 57\%$$

Therefore, the answers are:
- (a) 43% of people have either read one of the Harry Potter books or wear glasses.
- (b) 57% of people have neither read one of the Harry Potter books nor wear glasses.

:::

</div>

## Question 2

<div class="how_qb">

A survey of the people living in a particular suburb found that the probability that a person above the age of 21 has ever been overseas is $0.63$, and the probability that someone who is 21 years old or younger has ever been overseas is $0.49$. It is known that the proportion of the people living in that suburb who is above the age of 21 is $0.48$.

**a)** What is the chance that a randomly selected person living in the suburb has been overseas?

- `0.557` _(Enter your answer correct to 3 decimal places)_

**b)** A randomly chosen person living in the suburb has been overseas. What is the probability that they are above the age of 21?

- `0.543` _(Enter your answer correct to 3 decimal places)_

::: details Solution

To solve these probability questions, let's denote:

- $P(O)$ as the probability that a randomly selected person has been overseas.
- $P(A)$ as the probability that a person is above the age of 21.
- $P(O|A)$ as the probability that a person above the age of 21 has been overseas.
- $P(O|A^c)$ as the probability that a person 21 years old or younger has been overseas.

From the problem, we know:
- $P(O|A) = 0.63$
- $P(O|A^c) = 0.49$
- $P(A) = 0.48$

We can use the law of total probability for $P(O)$:
$$P(O) = P(O|A)P(A) + P(O|A^c)P(A^c)$$
$$P(O) = 0.63 \times 0.48 + 0.49 \times (1 - 0.48)$$

Calculating $P(O)$:

$$P(O) = 0.63 \times 0.48 + 0.49 \times 0.52$$
$$P(O) = 0.3024 + 0.2548 = 0.5572$$

**Answer to (a)**
The probability that a randomly selected person living in the suburb has been overseas is approximately 0.557.

For part (b), we need to find $P(A|O)$, the probability that a person is above the age of 21 given they have been overseas. We can use Bayes' theorem:
$$P(A|O) = \frac{P(O|A)P(A)}{P(O)}$$

$$P(A|O) = \frac{0.63 \times 0.48}{0.5572}$$

Calculating $P(A|O)$:

$$P(A|O) = \frac{0.3024}{0.5572} \approx 0.5427$$

**Answer to (b)**
The probability that a randomly chosen person who has been overseas is above the age of 21 is approximately 0.543.

:::

</div>

