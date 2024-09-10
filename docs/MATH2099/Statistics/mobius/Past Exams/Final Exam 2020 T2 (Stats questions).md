---
title: Final Exam 2020 T2 (Stats questions)
createTime: 2024/09/11 00:56:08
permalink: /MATH2099/cyk5q8li/
---

<script setup>
import HSelect from "@HSelect"
</script>

**Engineering Statistics - Past Exams Practice**

## Question 1

<div class="how_qb">

**Question 3 [20 marks]**

Consider a manufacturing process for making pistons from metal ingots in which each ingot produces enough material for $1000$ pistons. Sometimes, a piston cracks during cooling after being forged. Past research has shown that, in a batch of $1000$ pistons, the average number of pistons that develop a crack during cooling is dependent on the purity of the ingots. Ingots of known purity $X$ were forged into pistons, and the average number $Y$ of cracked pistons per batch was recorded in the table below. Each batch is made up of a random sample of pistons of the same purity.

| Ingots purity $x_i$                     | $0.95$ | $0.97$ | $0.99$ | $0.98$ | $0.96$ | $0.94$ |
| ----------------------------------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| Average number $y_i$ of cracked pistons | $4.66$ | $3.43$ | $2.07$ | $2.67$ | $3.64$ | $4.99$ |

Below is the data from the table reproduced in a format which you can copy-paste easily.

```matlab:no-line-numbers
0.95 0.97 0.99 0.98 0.96 0.94
4.66 3.43 2.07 2.67 3.64 4.99
```

One has

$$\bar{x} = 0.965$$

and

$$\sum_{i=1}^6 (x_i-\bar{x})^2 = 0.00175.$$

The following linear regression model is fit to these data:

$$ Y=\beta_0+\beta_1 X+\epsilon. $$
Use the following _Matlab_ regression output to answer the questions below.

*(Note that you may need to adjust the width of your browser window for the output to be displayed properly)*



```matlab:no-line-numbers
Linear regression model:
  Y ~ 1 + X

Estimated Coefficients:
               Estimate      SE         tStat     pValue
               ________   ________   ________   __________
  (Intercept)    60.870      3.997      15.23     0.000108
  X             -59.371      4.141     -14.34     0.000138


Number of observations: 6, Error degrees of freedom: 4
Root Mean Squared Error: 0.1732
R-squared: 0.9809
```

**a)** Use the _Matlab_ regression output to answer this part.

 

**i)** [1 mark] What proportion of variability in the response $Y$ is explained by the predictor $X$?



 `number`​ *(Enter your answer correct to at least 4 decimal places)*

**ii)** [1 mark] How would you describe the quality of the fit of the above linear model?

- [ ] Poor fit

- [ ] Average fit

- [ ] Good fit

- [ ] Excellent fit

**b)** [1 mark] Determine the observed sample correlation coefficient between $X$ and $Y$.

 `number` <HSelect type="Mobius" :values="[
    {label: 'ingots'},
    {label: 'batches'},
    {label: 'pistons'},
    {label: '(no unit)'}]" /> *(Enter your answer correct to at least 4 decimal places)*

**c)** [2 marks] Assume $\sigma$ is the standard deviation of the error term $\epsilon$. Give an estimate of $\sigma$ (with units).

 `number` *(Enter your numerical answer correct to at least 4 decimal places)*

**d)** [1 mark] Give an estimate of the expected change in the average number of cracked pistons per batch $Y$ for a change of $0.01$ in the ingots purity $X$.

 `number` *(Enter your answer correct to at least 4 decimal places)*

**e)** [5 marks] Perform a hypothesis test to determine whether the variable $X$ is significant in this model, at the $5\%$ level of significance.

 Hypotheses:

$H_0:$ <HSelect type="Mobius" :values="[
    {label: 'β₁'},
    {label: 'β₀'},
    {label: 'X'},
    {label: 'Y'},
    {label: 'ε'}]" /> <HSelect type="Mobius" :values="[
    {label: '≠'},
    {label: '>'},
    {label: '<'},
    {label: '='}]" /> `number`

$H_1:$  <HSelect type="Mobius" :values="[
    {label: 'β₁'},
    {label: 'β₀'},
    {label: 'X'},
    {label: 'Y'},
    {label: 'ε'}]" /> <HSelect type="Mobius" :values="[
    {label: '≠'},
    {label: '>'},
    {label: '<'},
    {label: '='}]" /> `number`

*(Enter the exact values of the numerical answers)*

The observed test statistic is $t =$ `number` . *(Enter your answer correct to at least 2 decimal places)*

The test statistic follows a $t$ distribution on `number` degrees of freedom if $H_0$ is true. *(Enter the exact value)*



The $p$-value is `number` . *(Enter your answer correct to at least 4 decimal places)*



Hence, we have <HSelect type="Mobius" :values="[
    {label: 'strong'},
    {label: 'some'},
    {label: 'no'}]" /> evidence that there is an association between ingots purity and average
number of cracked pistons per batch. 



**f)** [2 marks] Compute a two-sided $95\%$ confidence interval for the parameter $\beta_1$.



**[** `number` **,** `number` **]**  *(Enter your answer correct to at least 4 decimal places)*



**g)** Consider an ingot purity of $X = 0.975$.


**i)** [1 mark] Estimate the average number of cracked pistons in a batch forged from ingots of purity $X = 0.975$.

 `number` *(Enter your answer correct to at least 2 decimal places)*



**ii)** [2 marks] Compute a two-sided $95\%$ confidence interval for the expectation of $Y$ when ingots purity is set to $X = 0.975$.

**[** `number` **,** `number` **]**  *(Enter your answer correct to at least 4 decimal places)*



**h)** [4 marks] For each of the following, determine if they are an assumption which must be satisfied in order for the regression analysis to be valid, and where appropriate, comment on the validity of the assumption by constructing an appropriate plot.



The mean of $y$ is a linear function of $x$.

- [ ] Yes, it is an assumption needed and it seems (approximately) reasonable.
- [ ] Yes, it is an assumption needed but it does not seem reasonable here.
- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.
- [ ] No, it is not an assumption needed.

The errors have been drawn from a normal distribution.

- [ ] Yes, it is an assumption needed and it seems (approximately) reasonable.
- [ ] Yes, it is an assumption needed but it does not seem reasonable here.
- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.
- [ ] No, it is not an assumption needed.

The errors are independent of one another.

- [ ] Yes, it is an assumption needed and it seems (approximately) reasonable.
- [ ] Yes, it is an assumption needed but it does not seem reasonable here.
- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.
- [ ] No, it is not an assumption needed.

The errors have the same variance.

- [ ] Yes, it is an assumption needed and it seems (approximately) reasonable.
- [ ] Yes, it is an assumption needed but it does not seem reasonable here.
- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.
- [ ] No, it is not an assumption needed.

::: center
**End of Question 3**

Continue on to Question 4 on the next page
:::

</div>

## Question 2

<div class="how_qb">

**Question 2 Part (I) [5 marks]**


Suppose that $X_1,X_2,X_3, \ldots$ are independent normal, and such that $\mathbb{E} \left[X_i\right]=\mu_1$ and $\mathbb{E}\left[X_i^2\right]=\mu_2$ for $i=1, \ldots,10$.

a) [2 marks] Which of these choices is the right formula for

$$\mathbb{V}\operatorname{ar}\left(2(X_{1}+X_{2})-X_{8}\right)?$$

- [ ] $3\left(\mu_2-\mu_1^2\right)$

- [ ] $9\left(\mu_2-\mu_1^2\right)$

- [ ] $3\left(\mu_1^2+\mu_2\right)$

- [ ] $\mu_2-\mu_1^2$

- [ ] $7\left(\mu_2-\mu_1^2\right)$

b) [2 marks] If $\mathbb{E}\left[X_i\right]=0$ and $\mathbb{V}\operatorname{ar}\left(X_i\right)=1$ for all $i$, enter the correct value of 

$$\mathbb{P}\left[\left| \bar X_{10}\right| > 0.1\right]=?$$
where $\bar X_n= \dfrac{(X_1+\cdots+X_n)}{n}$.

 

$\mathbb{P}\left[\left| \bar X_{10}\right| > 0.1\right]=$  `number` *(Enter your answer correct to at least 4 decimal places)*

**c)** [1 mark] If  $\mathbb{E}\left[X_i\right]= 861$ and $\mathbb{V}\operatorname{ar}\left(X_i\right)= 25$ for all $i$, calculate the value of the conditional probability

$$\mathbb{P}\left[X_{5} \lt 861 \mid X_{4} \lt 0\right].$$

$\mathbb{P}\left[X_{5} \lt 861 \mid X_{4} \lt 0\right] =$ `number` *(Enter your answer correct to at least 4 decimal places)*

::: center
**End of Part (I)**

Continue on to Part (II) of Question 2 on the next page
:::

</div>



## Question 3

<div class="how_qb">

**Question 2 Part (II) [2 marks]**

Consider the rolling of two fair six-sided dice. Let $X_1,X_2$ denote the random value rolled by the first and second die, respectively.

Calculate the probability $\mathbb{P}[X_1+X_2= 2]$.

$\mathbb{P}[X_1+X_2= 2] =$ `number` *(Enter your answer correct to at least 4 decimal places)*

::: center
**End of Part (II)**

Continue on to Part (III) of Question 2 on the next page
:::

</div>

## Question 4

<div class="how_qb">

**Question 2 Part (III) [3 marks]**

Recent studies suggest that about $3$ people per $100$ inhabitants of Lyon (in France) are (or have been recently) infected with COVID-19. A nucleic acid test can be administered to detect the presence of the disease. Suppose that  the  reliability of the test is such that:

- the probability of **incorrectly** detecting the presence of the disease in a **healthy** patient is $0.001$ (false positive probability); 
- the probability of **correctly** detecting the presence of the disease in a **sick** patient is $0.991$ (true positive probability).

**a)** [1 mark] Find the probability that a randomly selected inhabitant of Lyon will test positive on the nucleic acid test.  

 `number` *(Enter your answer as a decimal correct to at least 4 decimal places)*

**b)** [2 marks] Find the probability that a randomly selected inhabitant of Lyon is actually healthy, given that their nucleic acid test is positive. 

 `number` *(Enter your answer as a decimal correct to at least 4 decimal places)*



::: center
**End of Part (III)**

Continue on to Part (IV) of Question 2 on the next page
:::

</div>

## Question 5

<div class="how_qb">

**Question 2 Part (IV) [5 marks]**

A study of iron deficiency among infants compared breast-fed with formula-fed babies. A sample of $n_b=25$ breast-fed infants gave a sample mean blood haemoglobin level of ${\bar x}_b = 10.9$ and a sample standard deviation of $s_{b}=1.4$, while an independent sample of $n_f=21$ formula-fed infants gave a sample mean and sample standard deviation of ${\bar x}_f = 10$ and $s_f=2.0$, respectively. From previous experience, haemoglobin levels can be assumed to follow a normal distribution.

**a)** [2 marks] Assuming equal variances between the two populations, calculate a $95\%$ confidence interval for the difference between the breast-fed and formula-fed mean haemoglobin levels.

**[** `number` **,** `number` **]**  *(Enter your answer correct to at least 4 decimal places)*

 

**b)** [1 mark] Based on the confidence interval computation from part (a), which of the following can you conclude at the $\alpha=0.05$ level of significance?

- [ ] Reject $H_0$: the two groups do not have the same mean haemoglobin level. 

- [ ] Do not reject $H_0$: the formula-fed babies are not iron deficient.

**c)** [2 marks] It can be shown that the ratio of the sample variances of the breast-fed to the formula-fed babies follows an $F$-distribution with $n_b-1,n_f-1$ degrees of freedom when the two populations have the same variances. In other words, 

$$\frac{S_b^2}{S_f^2}\sim F_{n_b-1,n_f-1}.$$

Using this result, test whether the population variance of the formula-fed babies is larger than that of the breast-fed babies by computing the appropriate $p$-value.

 `number` *(Enter your answer correct to at least 4 decimal places)*

::: center
**End of Part (IV)**

Continue on to Part (V) of Question 2 on the next page
:::



</div>


## Question 6

<div class="how_qb">

**Question 2 Part (V) [5 marks]**

You wish to examine the effectiveness of a "miracle weight loss" program. The weights (in kg) of $12$ individuals one month before and one month after the programme are given in the table below.

|      | Weight before $B_i$ | Weight after $A_i$ |
| ---- | --------------------- | -------------------- |
| 1    | $98.9$              | $96.7$             |
| 2    | $99.1$              | $99$               |
| 3    | $76$                | $71.7$             |
| 4    | $94.9$              | $91.7$             |
| 5    | $97.2$              | $97.3$             |
| 6    | $64.6$              | $64.9$             |
| 7    | $88.3$              | $96.5$             |
| 8    | $62.3$              | $64.3$             |
| 9    | $67$                | $66.3$             |
| 10   | $87.4$              | $83.4$             |
| 11   | $72.2$              | $68.2$             |
| 12   | $85.1$              | $83.4$             |

Below is the data from the table reproduced in a format which you can copy-paste easily.

```matlab:no-line-numbers
98.9 99.1 76 94.9 97.2 64.6 88.3 62.3 67 87.4 72.2 85.1
96.7 99 71.7 91.7 97.3 64.9 96.5 64.3 66.3 83.4 68.2 83.4
```

Assume that the weight gain (weight after minus weight before) has a normal distribution. 

Using this assumption, perform a hypothesis test to determine whether the method is effective in reducing weight at the $5\%$ level of significance.

 Suppose that $\mu_B$ is the true mean weight of the population before the weight loss program and that $\mu_A$ is the true mean weight of the population after the weight loss program.

 Hypotheses:

$H_0:$ $\mu_B$ <HSelect type="Mobius" :values="[
    {label: '≠'},
    {label: '>'},
    {label: '<'},
    {label: '='}]" />  $\mu_A$

$H_1:$ $\mu_B$ <HSelect type="Mobius" :values="[
    {label: '≠'},
    {label: '>'},
    {label: '<'},
    {label: '='}]" />  $\mu_A$



The observed test statistic is $t =$ `number` . *(Enter your answer correct to 4 decimal places)*

 The test statistic follows a $t$ distribution on `number` degrees of freedom if $H_0$ is true. *(Enter the exact value)*

 The $p$-value is `number` . *(Enter your answer correct to 4 decimal places)*

Hence, we have <HSelect type="Mobius" :values="[
    {label: 'strong'},
    {label: 'some'},
    {label: 'no'}]" />  evidence that the weight loss program is effective.. 

::: center
**End of Part (V)**

**End of Question 2**

**END OF EXAMINATION**
:::

</div>

