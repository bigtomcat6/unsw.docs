---
title: Lecture 1 Quiz
author: How
createTime: 2024/07/01 19:42:35
permalink: /MATH2099/8yv5serp/
---

## Question 1

<div class="how_qb">

Consider the following sample data:

`[77, 99, 86, 40, 78, 63, 59, 88, 36, 86, 90, 52, 6, 26, 75, 4, 44, 18, 78, 57, 75, 79, 90, 74, 37, 91, 43, 84, 57, 100, 27, 32, 86, 79, 10, 11, 76, 11, 84, 46]`

a) Use Matlab or Python to find the sample mean, to one decimal place.  `58.8`

b) Use Matlab or Python to find the sample standard deviation, to one decimal place. `29`

c) Use Matlab or Python to determine the ﬁve number summary

( `4`, `36.5`, `68.5`, `84`,`100` )

d) Compute the interquartile range. `47.5`

e) Using the $1.5 \times \text{iqr}$ criterion, determine whether there are any outliers.

Using the $1.5 \times \text{iqr}$ criterion, any value below `-34.75` or above `155.25` are possible outliers. 

::: details Solution

On Matlab:

```matlab
x = [77, 99, 86, 40, 78, 63, 59, 88, 36, 86, 90, 52, 6, 26, 75, 4, 44, 18, 78, 57, 75, 79, 90, 74, 37, 91, 43, 84, 57, 100, 27, 32, 86, 79, 10, 11, 76, 11, 84, 46];

mean(x) %a)
std(x)  %b)
quantile(x, 0:0.25:1)   %c)
iqr(x)  %d)

q1 = quantile(x, 0.25);
q3 = quantile(x, 0.75);
q1-1.5*iqr(x)   %e)
q3+1.5*iqr(x)   %e)
```

:::

</div>

## Question 2

<div class="how_qb">
	
Use Matlab or Python to construct a histogram of the following data. How would the distribution be best described?

`[3.261, 3.733, 3.608, 3.566, 3.822, 3.112, 3.561, 3.577, 3.658, 3.824, 2.687, 3.571, 3.565, 3.208, .789, 2.691, 3.943]`

- [x] unimodal and left skewed
- [ ] unimodal, right skewed with some apparent outliers
- [ ] unimodal, left skewed, with some apparent outliers
- [ ] bimodal
- [ ] unimodal and right skewed
- [ ] not unimodal, and not symmetric
- [ ] unimodal and symmetric

::: details Solution

On Matlab:

```
x = [3.261, 3.733, 3.608, 3.566, 3.822, 3.112, 3.561, 3.577, 3.658, 3.824, 2.687, 3.571, 3.565, 3.208, .789, 2.691, 3.943];
histogram(x)
```

:::

</div>