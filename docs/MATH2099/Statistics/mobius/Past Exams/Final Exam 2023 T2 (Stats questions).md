---
title: Final Exam 2023 T2 (Stats questions)
createTime: 2024/09/14 16:23:32
permalink: /MATH2099/s0bk40k8/
---

<script setup>
import HSelect from "@HSelect"
</script>

**Engineering Statistics - Past Exams Practice**

## Question 1

<div class="how_qb">

::: center
**This Statistics question is worth [22 marks]**
:::

The following table shows how many weeks a random sample of 8 persons have worked at a car inspection station and the number of cars each one inspected between noon and 2PM on a given day:

| Number of weeks employed $x_i$ | $9$  | $12$ | $6$  | $2$  | $5$  | $4$  | $7$  | $1$  |
| -------------------------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| Number of cars inspected $y_i$ | $23$ | $21$ | $18$ | $13$ | $15$ | $14$ | $21$ | $14$ |

Below is the data from the table reproduced in a format which you can copy-paste easily.

```:no-line-numbers
9 12 6 2 5 4 7 1
23 21 18 13 15 14 21 14
```

The following linear regression model is to be fitted to these data to enable us to predict the number of cars inspected during the given 2-hour period in terms of the number of weeks a person has been working at the inspection station:


::: center
*Number of cars inspected = $\beta_0$ + $\beta_1$ (Number of weeks employed) + $\varepsilon$*
:::

Use **MATLAB** to answer the questions below.


**a)** **[3 marks]** **1.** What is a suitable plot to verify that it is reasonable to assume that the regression of the response on the predictor in this relationship is linear? **2**. Make the plot and comment on the relationship between the number of weeks employed and the number of cars inspected in the box below.

<textarea></textarea>

**b)** Fit the linear regression model to these data using **MATLAB.**

**i)** [**2 marks]** What is the equation of the fitted linear regression line?

   *$\hat{y}(x)$* = `number` + `number` *$x$*

​      *Give your answers to at least three decimal places* 

**ii)** [**1 mark]** What proportion of variability in the response is explained by the predictor?

 `number` *Give your answer to at least three decimal places* 


**iii)** **[1 mark]** What is the observed sample correlation between the number of weeks employed and the number of cars inspected?

 `number` *Give your answer to at least three decimal places* 

 

**c)** **[1 mark]** Use the result of part b) to estimate how many cars someone who has been working at the inspection station for 5 weeks can be expected to inspect during the given 2-hour period. 

 `number` *Give your answer to at least four decimal places* 

 

**d)** **[2 marks]** Determine a 98% confidence interval for the average number of cars inspected in the given period of time by a person who has been working at the inspection station for 5 weeks.

 **[** `number` **,** `number` **]** *Give your answers to at least four decimal places* 

 

**e)** **[2 marks]** Compute a 98% prediction interval for the number of cars inspected in the given period of time by a person who has been working at the inspection station for 5 weeks.

 **[** `number` **,** `number` **]** *Give your answer to at least four decimal places* 

 

**f)** **[1 mark]** If number of weeks a person has been working increased by 3 weeks, how much would the expected change in the number of cars inspected be? 

 `number` *Give your answer to at least three decimal places* 

 

**g)** **[2 marks]** Compute a two-sided 95% confidence interval of the expected change in the number of cars inspected for an increase of 3 weeks in the number of weeks employed. 

 **[** `number` **,** `number` **]** *Give your answer to at least three decimal places* 

 

**h)** **[7 marks]** Perform a hypothesis test to determine whether the variable number of weeks employed is significant in this linear regression model.


Hypotheses:

$H_0:$ <HSelect type="Mobius" :values="[
    {label: 'β₁'},
    {label: 'β₀'},
    {label: 'X'},
    {label: 'Y'},
    {label: 'ε'}]" /> 	 <HSelect type="Mobius" :values="[
    {label: '≥'},
    {label: '≠'},
    {label: '='},
    {label: '≤'}]" /> `number`	   	     			   	   

$H_a:$ <HSelect type="Mobius" :values="[
    {label: 'β₁'},
    {label: 'β₀'},
    {label: 'X'},
    {label: 'Y'},
    {label: 'ε'}]" /> 	 <HSelect type="Mobius" :values="[
    {label: '≥'},
    {label: '≠'},
    {label: '='},
    {label: '≤'}]" /> `number`- [ ] 
   *Give the exact values of the numerical answers*

The observed test statistic is $t =$ `number` . *Give your answer to at least three decimal places* 

 

The test statistic follows a $t$ distribution on `number` degrees of freedom if $H_0$ is true. *(Enter the exact value)*

The $p$-value is `number` . *Give your answer to at least four decimal places* 


Write the conclusion of this test, using plain language, in the box below. 

<textarea></textarea>

::: center
**End of Question**

Continue to the next Question
:::

</div>


## Question 2

<div class="how_qb">

::: center
**This Statistics question is worth [11 marks]**
:::

A new method of seeding clouds was successful in 57 of 150 attempts, while an old method is kown to be successful in 28% of attempts. Can we conclude that the new method is better than the old one?

**a)** **[4 marks]** Using the normal approximation to the sample proportion, carry out a one-sided hypothesis test that the true long-run proportion (or probability) of all successful attempts using a new method, $\pi$, exceeds 0.28. Compute the observed test statistic and p-value for a suitably defined hypothesis test. Then state your conclusion in plain language.

Test Statistic = `number` *Give your answer to at least four decimal places* 

 $p$-value = `number` *Give your answer to at least four decimal places* 

Write conclusion of the test in the box below. 

<textarea></textarea>

**b)** **[2 marks]** How large a sample would be required if we wanted to be at least 98% confident that the observed sample proportion $\hat{p}$ differs from the true proportion $\pi$ by at most 0.05, regardless of the value $\pi$?

 `number` *Give your answer as an integer*

**c)** **[3 marks]** Recall that in a hypothesis test, there are two possible ways to reach the wrong conclusion. Type I error refers to the event where we reject the null hypothesis H0 when H0 is true and type II error is the event where we fail to reject H0 when H0 is false. The probability of type II error is

$$ P\left(\text{type II error} \right) = P\left( \text{fail to reject } H_0 \text{ when } H_0 \text{ is not true} \right) = \beta$$

The power of the hypothesis test is

$$ P\left(\text{rejecting } H_0 \text{ when } H_0 \text{ is not true} \right) = 1 - \beta$$

Power measures the ability of a test to detect that H0 is false when an alternative is true.


Suppose the true proportion of successful attempts using a new method is $\pi=0.4$. Calculate the power of the above test in a) at the significance level $\alpha = 0.10$, that is


$$ Power = P \left(\text{rejecting } H_0 \text{ given that } \pi=0.4 \right) $$


$Power=$ `number` *Give your answer to at least four decimal places* 

**d)** **[2 marks]** The p-value calculated above is only an approximate p-value based on the central limit theorem. Instead, calculate the exact p-value. 

Hint: You might want to consider the Binomial distribution.

Exact $p$-value = `number` *Give your answer to at least four decimal places* 


::: center
**End of Question**

Continue to the next Question
:::

</div>


## Question 3

<div class="how_qb">
::: center
**This Statistics question is worth [17 marks]**
:::

Several different aluminum alloys are under consideration for use in heavy-duty circuit-wiring applications. Among the desired properties is low electrical resistance, and specimens of each wire are tested by applying a fixed voltage to a given length of wire and measuring the current passing through the wire.

Given the following results, would you conclude that these alloys differ in resistance? We would like to do an Analysis of Variance (ANOVA) to answer this question. 

| Alloy: | Current (amps)                   |
| :----- | :------------------------------- |
| 1      | 1.049, 1.025, 0.991              |
| 2      | 0.984, 0.993, 0.988, 1.01, 1.001 |
| 3      | 1.102, 1.107, 1.011, 1.034       |
| 4      | 1.073, 1.034, 1.016, 1.01        |

Let $\mu_{\small 1}$, $\mu_{\small 2}$ , $\mu_{\small 3}$ and $\mu_{\small 4}$ denote the true mean current (in amps) for different aluminum alloys of types 1, 2, 3 and 4, respectively. Suppose we are interested in performing an analysis of variance and test for differences in current due to alloy. 

The data from the table are written below in a format which you can copy-paste to MATLAB easily.

Alloy = categorical([1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,4]);

Current = [1.049, 1.025, 0.991, 0.984, 0.993, 0.988, 1.01, 1.001, 1.102, 1.107, 1.011, 1.034, 1.073, 1.034, 1.016, 1.01];

Use **MATLAB** to perform the ANOVA analyses and answer the questions below.

**a)** **[2 marks]** Construct comparative boxplots suitable for this study. What do the boxplots tell you about the currents for different alloys? Comment on the main features, such as the location, spread and shape of different groups in the box below.

<textarea></textarea>

**b)** State the three assumptions that need to be valid for an ANOVA in the box below. 

**i)** **[3 marks]** State the three assumptions in the box below. 

<textarea></textarea>

**ii)** **[2 marks]** In the box below, comment on the suitability of these assumptions for these data.

<textarea></textarea>

**c)** **[2 marks]** Which of the following is the appropriate null and alternative hypothesis for this ANOVA? 

The null hypothesis $H_0$is:

- [ ] $H_0: \mu_1 = 0 \text{ and } \mu_2 = 0 \text{ and } \mu_3 = 0 \text{ and } \mu_4 = 0$
- [ ] $H_0: \mu_1 = \mu_2 = \mu_3 = \mu_4$
- [ ] $H_0: \mu_1 = 0 \text{ or } \mu_2 = 0 \text{ or } \mu_3 = 0 \text{ or } \mu_4 = 0$

The alternative hypothesis $H_a$ is:

- [ ] $H_a: \mu_1 \neq \mu_2 \neq \mu_3 \neq \mu_4 \neq 0$

- [ ] $H_a:$ At least one of the following is true:

$\mu_1 \neq 0$ or  $\mu_2 \neq 0$ or $\mu_3 \neq 0$  or $\mu_4 \neq 0$

- [ ] $H_a : \mu_1 \neq \mu_2 \neq \mu_3 \neq \mu_4$

- [ ] $H_a: \mu_1 \neq 0$ and  $\mu_2 \neq 0$ and $\mu_3 \neq 0$ and $\mu_4 \neq 0$ 

- [ ] $H_a$: At least one of the following is true:<br>&emsp;
$\mu_1 \neq \mu_2$ or  $\mu_1 \neq \mu_3$ or  $\mu_1 \neq \mu_4$ or  $\mu_2 \neq \mu_3$ or $\mu_2 \neq \mu_4$ or  $\mu_3 \neq \mu_4$

**d)** **[4 marks]** The observed test statistic, null distribution, and p-value are:

Test Statistic = `number`  *Give your answer to at least four decimal places*

which comes from an F distribution with `number` and `number` degrees of freedom if $H_0$ is true.

$p$-value = `number` *Give your answer to at least four decimal places*

**e)** **[2 marks]** What is your conclusion from the above analysis?

<textarea></textarea>

**f)** **[2 marks]** Construct a two-sided 95% confidence interval for the difference of the true mean currents for aluminum alloys of types 4 and 2, that is for $\mu_{\small 4}-\mu_{\small 2}$. 

 **[** `number` **,** `number` **]** *Give your answer to at least four decimal places*


::: center
**End of Question**

**End Of Exam**
:::

</div>