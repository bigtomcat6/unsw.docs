---
title: Final Exam 2021 T2 (Stats questions)
createTime: 2024/09/12 00:35:01
permalink: /MATH2099/mpl1lx3p/
---

<script setup>
import HSelect from "@HSelect"
</script>

**Engineering Statistics - Past Exams Practice**

## Question 1

<div class="how_qb">

::: center
**This Statistics question is worth [20 marks]**
:::

Tech Wiz collected data in October 2013 to investigate the battery life (in hours) $Y$ and screen size (in inches) $X$ for a sample of tablet computers. Tech Wiz wanted to investigate whether the screen size is associated with battery life. 

Below is the data from the table reproduced in a format that you can copy-paste easily.

**Screen size (in inches):**

```:no-line-numbers
10.1 7 10.6 9 8.4 11.6 10 8 9.7 9.7 10.1 12.2 8 7 7 10.1 10.1 10 10.1 10 8.3 8.4 8 10 7.9 7 10.1 8.3 10.1 8 10 7 7 7 8 10.1 8 7 10 10.6 10.5 8.3 8 7
```

 

**Battery life (in hours):**

```:no-line-numbers
8.5 7.3 11.6 9.5 9 12.6 8.4 8.9 13.1 13.2 9.6 10 8.5 9.8 9.7 13 9 8.3 9.6 12.4 6 12.1 8.3 8 12.1 7.3 9.5 7 11 14.2 9.5 7 11.5 9.3 8.2 8.7 8.5 7.7 8.4 6.9 13.4 6.4 7.9 4.6
```

 

The following linear regression model should be fit to these data:

$$ Y=\beta_0+\beta_1 X+\epsilon. $$

Use _Matlab_ to answer the questions below.

**a)** Fit an appropriate linear regression model to these data using _Matlab_.

**i)** **[1 mark]** What proportion of variability in the response $Y$ is explained by the predictor $X$?

 `number` *(Enter your answer correct to at least 4 decimal places)*

**ii)** **[1 mark]** How would you describe the quality of the fit of the above linear model? 

- [ ] Good fit

- [ ] Excellent fit

- [ ] Poor fit

**b)** **[1 mark]** Determine the observed sample correlation coefficient between $X$ and $Y$.

 `number` *(Enter your answer correct to at least 4 decimal places)*

**c)** **[2 marks]** Assume $\sigma$ is the standard deviation of the error term $\epsilon$. Give an estimate of $\sigma$ (with units).

 `number` <HSelect type="Mobius" :values="[
    {label: '(no unit)'},
    {label: 'computers'},
    {label: 'inches'},
    {label: 'hours'}]" /> *(Enter your numerical answer correct to at least 2 decimal places)*

**e)** **[2 marks]** Compute a two-sided $95\%$ confidence interval of the expected change in the average battery life (in hours) $Y$ for a change of $0.9$ inches in screen size $X$.

**[** `number` **,** `number` **]** *(Enter your answer correct to at least 4 decimal places)*

**f)** **[4 marks]** Perform a hypothesis test to determine whether the variable $X$ is significant in this model.

Hypotheses:

$H_0:$ <HSelect type="Mobius" :values="[
    {label: 'β₁', selected: true},
    {label: 'β₀'},
    {label: 'X'},
    {label: 'Y'},
    {label: 'ε'}]" /> <HSelect type="Mobius" :values="[
    {label: '≥'},
    {label: '≠'},
    {label: '='},
    {label: '≤'}]" /> `number`		   	   

$H_1:$ <HSelect type="Mobius" :values="[
    {label: 'β₁', selected: true},
    {label: 'β₀'},
    {label: 'X'},
    {label: 'Y'},
    {label: 'ε'}]" /> <HSelect type="Mobius" :values="[
    {label: '≥'},
    {label: '≠'},
    {label: '='},
    {label: '≤'}]" /> `number`

*(Enter the exact values of the numerical answers)*		   	   

The observed test statistic is $t =$ `number` . *(Enter your answer correct to at least 4 decimal places)*

The test statistic follows a $t$ distribution on `number` degrees of freedom if $H_0$ is true. *(Enter the exact value)*

The $p$-value is `number` . *(Enter your answer correct to at least 4 decimal places)*

 Hence, we have  <HSelect type="Mobius" :values="[
    {label: 'some'},
    {label: 'strong'},
    {label: 'no'}]" />  evidence that there is an association between screen size and battery life.

**g)** **[1 mark]** Write down a **Matlab** command that computes the $p$-value in part f). You may use the functions: **normcdf**, **norminv**, **tcdf**, or **tinv**.

<textarea></textarea>

**h)** Consider a screen size of $X = 5$ inches.

 **i)** **[1 mark]** Estimate the average battery life when the screen size is $X = 5$ inches.

 `number` *(Enter your answer correct to at least 4 decimal places)*

**ii)** **[2 marks]** Suppose that Tech Wiz receives a new tablet computer. Compute a two-sided $97\%$ prediction interval for the tablet computer's battery life when the screen size is $X = 5$ inches.

**[** `number` **,** `number` **]**  *(Enter your answer correct to at least 4 decimal places)*

**j)** **[4 marks]** For each of the following, determine if they are an assumption that must be satisfied in order for the regression analysis to be valid. Where appropriate, construct a plot to help aid with the assumption checking and comment on the validity of the assumption. 

The errors are independent of one another.


- [ ] Yes, it is an assumption needed but it does not seem reasonable here.

- [ ] No, it is not an assumption needed.

- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.

- [ ] Yes, it is an assumption needed and it seems (approximately) reasonable.

Plot to aid with the comment: <HSelect type="Mobius" :values="[
    {label: 'Residual vs fits plots'},
    {label: 'Plots cannot help with checking this assumption'},
    {label: 'Boxplot'},
    {label: 'Normal quantile plot'},
    {label: 'Histogram'}]" />

The errors have the same variance.

- [ ] Yes, it is an assumption needed and it seems (approximately) reasonable.

- [ ] No, it is not an assumption needed.

- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.

- [ ] Yes, it is an assumption needed but it does not seem reasonable here.

Plot to aid with the comment: <HSelect type="Mobius" :values="[
    {label: 'Residual vs fits plots'},
    {label: 'Plots cannot help with checking this assumption'},
    {label: 'Boxplot'},
    {label: 'Normal quantile plot'},
    {label: 'Histogram'}]" />

The errors have been drawn from a normal distribution.

- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.

- [ ] No, it is not an assumption needed.

- [ ] Yes, it is an assumption needed and it seems (approximately) reasonable.

- [ ] Yes, it is an assumption needed but it does not seem reasonable here.

Plot to aid with the comment: <HSelect type="Mobius" :values="[
    {label: 'Residual vs fits plots'},
    {label: 'Plots cannot help with checking this assumption'},
    {label: 'Boxplot'},
    {label: 'Normal quantile plot'},
    {label: 'Histogram'}]" />

The mean of $y$ is a linear function of $x$.

- [ ] Yes, it is an assumption needed but it does not seem reasonable here.

- [ ] Yes, it is an assumption needed and it seems (approximately) reasonable.

- [ ] No, it is not an assumption needed.

- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.

Plot to aid with the comment:  <HSelect type="Mobius" :values="[
    {label: 'Residual vs fits plots'},
    {label: 'Plots cannot help with checking this assumption'},
    {label: 'Boxplot'},
    {label: 'Normal quantile plot'},
    {label: 'Histogram'}]" />

::: center
**End of Question**

Continue to the next Question 
:::

</div>

## Question 2

<div class="how_qb">

::: center
**This Statistics question is worth [6 marks]**
:::

A certain electronic fuse is reported by the manufacturer to have failed to protect valuable computer equipment from power surges in 18 times out of 190 independent tests.

Use Matlab to answer the questions below.

**a)** **[2 marks]** Calculate a 95% approximate confidence interval for π, the true long-run proportion (or probability) of all such trials that would result in failure. 

**[** `number` **,** `number` **]** *(Enter your answer correct to at least 4 decimal places)*

**b)** **[2 marks]** What assumptions do you need to make to ensure that the above interval is a valid confidence interval for π? Do these assumptions seem reasonable?  Tick all answers that apply.


- [ ] We have a random sample.<br>&emsp;
(Depends on the study design, we can't check this assumption.)

- [ ] $\hat{P}$ is approximately normal<br>&emsp;
(Seems reasonable, from the normal quantile plot.)

- [ ] We have a random sample<br>&emsp;
(Does not seem reasonable, from what we know of the study design.)

- [ ] $\hat{P}$ is approximately normal<br>&emsp;
(Seems reasonable, since  $n \pi_0(1-\pi_0) >5$.)

- [ ] $\hat{P}$ is approximately normal<br>&emsp;
(We can't check this assumption.)

- [ ] We have a random sample.<br>&emsp;
(Seems reasonable, from what we know of the study design.)

- [ ] The data are approximately normal<br>&emsp;
(Seems reasonable, from the normal quantile plot.)

- [ ] $\hat{P}$ is approximately normal<br>&emsp;
(Seems reasonable, since  $n \hat{p}(1-\hat{p}) >5$.)

**c)** **[2 marks]** Manufacturer would like to estimate the proportion of all such trials that would result in failure to within 0.03 of its true value, with 98% confidence. How many independent trials would be needed to achieve this? (You may use the above data to approximate π if needed.)

 `number` *(Enter your answer correct as an integer)*

::: center
**End of Question**

Continue to the next Question 
:::


</div>


## Question 3

<div class="how_qb">

::: center
**This Statistics question is worth [6 marks]**
:::

An environmental science student at Pennbrook University made 10 independent measurements of the pH level for two different solutions resulting in the following data:

measurements of solution `A = [6.25,6.30,6.28,6.29,6.24,6.26,6.23,6.29,6.22,6.28]; `

measurements of solution `Z = [6.28,6.24,6.33,6.26,6.23,6.31,6.27,6.29,6.34,6.27]; `

True mean of such measurements is equal to the actual pH level of the solution. The student claims that the two different solutions came from the same source and their pH levels are equal.  

From the data, is there evidence to support the student's claim?  

**a)** **[4 marks]** Use Matlab to perform an appropriate hypothesis test.

Let $\mu_1$ be the true mean of measurements of solution $A$ and $\mu_2$ is the true mean of measurements of solution $Z$ . 

We want to test 

$H_0:$ <HSelect type="Mobius" :values="[
    {label: 'X̄₂'},
    {label: 'X̄₁ - X̄₂'},
    {label: 'X̄₁'},
    {label: 'μ₂'},
    {label: 'μ₁ - μ₂'},
    {label: 'μ₁'}]" /> <HSelect type="Mobius" :values="[
    {label: '≥'},
    {label: '≠'},
    {label: '='},
    {label: '≤'}]" /> `number` *(Enter the exact value)*

$H_1:$ <HSelect type="Mobius" :values="[
    {label: 'X̄₂'},
    {label: 'X̄₁ - X̄₂'},
    {label: 'X̄₁'},
    {label: 'μ₂'},
    {label: 'μ₁ - μ₂'},
    {label: 'μ₁'}]" /> <HSelect type="Mobius" :values="[
    {label: '≥'},
    {label: '≠'},
    {label: '='},
    {label: '≤'}]" /> `number` *(Enter the exact value)*



The test statistic is   *(Enter your answer correct to at least 2 decimal places.)*

 

This statistic would come from a     			   	 distribution if $H_0$ were true.

 

The $P$-value is   *(Enter your answer correct to at least 3 decimal places.)*

So we conclude that:

- [ ] There is no evidence for $H_0$, that is, there is no evidence that the two different solutions came from the same source. 


- [ ] There is strong evidence against $H_0$, that is, there is strong evidence the two different solutions came from different sources. 


- [ ] There is no evidence against ‌$H_0$, that is, there is no evidence against the claim that the two different solutions came from the same source. 

- [ ] There is strong evidence for $H_0$, that is, there is strong evidence that the two different solutions came from different sources. 



**b)** **[1 marks]** Enter the numerical expression for calculation of the test statistic in part a)

(e.g. for the expression $\frac{3.56 - 0}{2.8/\sqrt{8}}$  type in the box (3.56-0)/(2.8/sqrt(8)) as a text ). 

<textarea></textarea>

**c)** **[2 marks]** What assumptions did you make to answer this question? Do they seem reasonable? Tick all that apply. 

- [ ] Paired differences are normally distributed.<br>&emsp;
(Seems reasonable, from the normal quantile plot.)

- [ ] We have two independent random samples of measurements.<br>&emsp;
(Depends on the study design, we can't check this assumption.)

- [ ] We have two independent random samples of measurements.<br>&emsp;
(Seems reasonable, from the study design)

- [ ] Standard deviations are equal.<br>&emsp;
(Does not seem reasonable.)

- [ ] Paired differences are a random sample.<br>&emsp;
(Seems reasonable, from the study design)

- [ ] Paired differences are a random sample.<br>&emsp;
(Depends on the study design, we can't check this assumption.)

- [ ] Data come from normal distributions.<br>&emsp;
(Does not seem reasonable, from the normal quantile plots.)

- [ ] Standard deviations are equal.<br>&emsp;
(Seems reasonable, from the data.)

- [ ] Paired differences are normally distributed.<br>&emsp;
(Does not seem reasonable, from the normal quantile plots.)

- [ ] Data come from normal distributions.<br>&emsp;
(Seems reasonable, from the normal quantile plots.)

::: center
**End of Question**

Continue to the next Question 
:::

</div>

## Question 4

<div class="how_qb">

::: center
**This Statistics question is worth [5 marks]**
:::

Consider the rolling of two fair six-sided dice. Let ${T}_1$ and ${T}_2$ denote the random value rolled by the first and second die, respectively.

**a) [1 mark]** Calculate the probability

$P({T}_1+{T}_2= 2) =$ `number` *(Enter your answer correct to at least 4 decimal places)*

**b) [2 marks]** Calculate the probability that ${T}_1 + {T}_2$ is an even number.

 

 `number` *(Enter your answer correct to at least 4 decimal places)*

**c) [2 marks] i)** Determine the conditional probability that ${T}_2 = 4$ given that ${T}_1 = 6$.


 $P({T}_2 = 4 | {T}_1 = 6) =$ `number` *(Enter your answer correct to at least 4 decimal places)*

 **ii)** Are the events $\{ {T}_1 = 6\}$ and $\{ {T}_2 = 4\}$ independent? <HSelect type="Mobius" :values="[
    {label: 'Yes'},
    {label: 'No'}]" />

::: center
**End of Question**

Continue to the next Question 
:::

</div>

## Question 5

<div class="how_qb">

::: center
**This Statistics question is worth [5 marks]**
:::

<div class="mobius-slideb-block">

**For the questions below, you will need to use Maple syntax for expressions involving $\mu$,  $\sigma$ :** 

::: center
**for $\mu$  write `mu` and for $\sigma$  write `sigma`**

**for $\frac{3}{2} \mu$  write `3/2\*mu` and for $\frac{2}{5} \sigma^2$  write `2/5\*sigma^2`**
:::

</div>

Suppose that $X_1,X_2,\ldots$ are independent normally distributed random variables with mean $\mu$ and standard deviation $\sigma$ , that is $X_i \sim {\cal N} (\mu,\sigma)$  for all $i=1,2,\ldots$.



Define a random variable $T = X_{3} - \frac{X_{7}+X_{10}}{5}$.

 

**a)** **[1 mark]** Find the mean of $T$

$\mathbb{E}(T) =$ ` `



**b)** **[1 mark]** Find the variance of $T$ 

$\mathbb{V}ar(T) =$  ` `



**c) [1 mark]** Explain in plain language why the random variable $Y$ is normally distributed. 

<textarea></textarea>

**d)** **[2 marks]** Let $\bar X_n= \dfrac{X_1+\cdots+X_n}{n}$ be the average of the first $n$ observations. Compute the following probability on Matlab.

 

$\mathbb{P}\left(\sqrt{n}\; | \bar X_{n} -\mu| > 0.45 \; \sigma \right)=$ `number`  *(Enter your answer correct to at least 4 decimal places)*

::: center
**End of Question**

Continue to the next Question 
:::

</div>

## Question 6

<div class="how_qb">

::: center
**This Statistics question is worth [7 marks]**
:::

We are interested in estimating the area of a plot of land. Suppose that we measure its height (the random variable H) and width (the random variable W) with an instrument two independent times so that we have the four independent measurements $H_1$, $H_2$, $W_1$ and $W_2$.

Assume that $E(H_i)=47$, $E(W_i)=48$and $Var(H_i)=Var(W_i)=2$for $i=1,2.$ 

Let $\widehat{W} =\frac{W_1 + W_2}{2}$be an estimator of the width and $\widehat{H} =\frac{H_1 + H_2}{2}$be an estimator of the height of the rectangle.

**a)** **[1 mark]** Find the expected value and the variance of the estimator of the width.

$E(\widehat{W}) =$ `number` *(Enter the exact value)*

$Var(\widehat{W}) =$ `number` *(Enter the exact value)*

**b)** **[1 mark]** Find the expected value and the variance of the estimator of the height.

$E(\widehat{H}) =$ `number` *(Enter the exact value)*

$Var(\widehat{H}) =$ `number` *(Enter the exact value)*

<div class="mobius-slideb-block">

Hints for parts c) and d):

For any random variable X the variance is $Var(X) = E(X^2) - (E(X))^2$.

For any two *independent* random variables X and Y we have $E(XY) = E(X) E(Y)$and $E(X^2Y^2) = E(X^2) E(Y^2)$.

</div>

**c)** **[2 marks]** If we estimate the area of a rectangle via the estimator $\widehat{A}_1 = \widehat{W} \times \widehat{H}$, calculate its variance 

$Var(\widehat{A}_1)=$ `number` *(Enter the exact value)*

 

**d)** **[2 marks]** If we estimate the area of a rectangle via the estimator 

$$ \hat{A}_2 = \frac{H_1W_1 + H_2W_2}{2} $$

determine its variance

$Var(\widehat{A}_2)=$ `number` *(Enter the exact value)*

 

**e)** **[1 mark]** Compare two estimators of the area $\widehat{A}_1$and $\widehat{A}_2$. Which of these two methods of estimation (if any) is more "efficient" and why? (Type your explanations as a **text only**, refer to the estimators as A1 and A2.)

<textarea></textarea>

::: center
**End of Question**

**END of EXAM**
:::

</div>