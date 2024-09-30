---
title: Lecture 9 Quiz
createTime: 2024/09/25 23:14:52
permalink: /MATH2099/sn64y688/
---

<script setup>
import HSelect from "@HSelect"
</script>

## Question 1

<div class="how_qb">

A major expense for car drivers is fuel, so it is of interest to compare fuel economy across different vehicles. The data below represents the fuel economy (in kilometres per litre) and weight (in tonnes) of $20$ different vehicles.

Weight in tonnes

```matlab:no-line-numbers
1.6, 1.6, 1.12, 1.29, 1.58, 1.63, 1.51, 1.51, 1.53, 1.56, 1.87, 1.83, 1.11, 1.7, 1.9, 1.28, 1.23, 1.02, 1.13, 1.09
```

Fuel Efficiency in kilometres per litre

```matlab:no-line-numbers
8.92, 10.86, 13.59, 11.63, 8.57, 8.87, 13.35, 11.3, 9.62, 8.71, 8.29, 5.61, 12.38, 8.26, 10.84, 14.33, 12.47, 11.62, 15.03, 15.17
```

The linear regression model is given by $Y = \beta_0 + \beta_1 X + \varepsilon$ where $X$ is the predictor and $Y$ is the response variable.

**a)** Estimate the values of $\beta_0$ and $\beta_1$.

$\hat{b}_0 =$ `21.55395` *(Enter your answer correct to 2 decimal places)*

$\hat{b}_1 =$ `-7.276006`  *(Enter your answer correct to 2 decimal places)*

**b)** What proportion of variability in the response is explained by the predictor?

 `0.600833` *(Enter your answer as a proportion, correct to 3 decimal places)*

**c)** Determine the observed sample correlation coefficient between the predictor and the response variable.

 `-0.775134` *(Enter your answer correct to 2 decimal places)*

**d)** Perform a hypothesis test to determine whether the fuel economy is related to vehicle weight.

 Hypotheses:

$H_0:$ <HSelect type="Mobius" :values="[
    {label: 'β₀'},
    {label: 'Y'},
    {label: 'ε'},
    {label: 'β₁', selected: true},
    {label: 'X'}]" />	<HSelect type="Mobius" :values="[
    {label: '≥'},
    {label: '≠'},
    {label: '=', selected: true},
    {label: '≤'}]" /> `0`  	     			   	   

$H_1:$  <HSelect type="Mobius" :values="[
    {label: 'β₀'},
    {label: 'Y'},
    {label: 'ε'},
    {label: 'β₁', selected: true},
    {label: 'X'}]" />	<HSelect type="Mobius" :values="[
    {label: '≥'},
    {label: '≠', selected: true},
    {label: '='},
    {label: '≤'}]" /> `0` 			   	     			   	   

*(Enter the exact value)*

 The observed test statistic is $t =$ `-5.205178` . *(Enter your answer correct to 2 decimal places)*

The test statistic follows a $t$ distribution on `20-2` degrees of freedom if $H_0$ is true. *(Enter the exact value)*

The $p$-value is `5.967768E-5` . *(Enter your answer correct to 4 decimal places)*

Hence, we have `strong`  evidence that there is a relationship between vehicle weight and fuel economy. 

**e)** Compute a two-sided $95\%$ confidence interval for $\beta_1$.

**[** `-10.212759` **,** `-4.339253` **]**  *(Enter your answer correct to 2 decimal places)* 

**f)** Use the linear regression model to estimate fuel efficiency when weight is $1.5$ tonnes.

 `10.639941` *(Enter your answer correct to 2 decimal places)* 

**g)** For each of the following, determine if they are an assumption which must be satisfied in order for the regression analysis to be valid, and where appropriate, comment on the validity of the assumption by constructing an appropriate plot.

The errors have been drawn independently of one another

- [ ] Yes, it is an assumption needed but it does not seem reasonable here.
- [ ] Yes, it is an assumption needed and it seems (approximately) reasonable.
- [x] Yes, it is an assumption needed but we don't have enough information to verify its validity.
- [ ] No, it is not an assumption needed.

The errors have the same variance.

- [ ] Yes, it is an assumption needed but it does not seem reasonable here.
- [x] Yes, it is an assumption needed and it seems (approximately) reasonable.
- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.
- [ ] No, it is not an assumption needed.

The errors have been drawn from a normal distribution.

- [ ] Yes, it is an assumption needed but it does not seem reasonable here.
- [x] Yes, it is an assumption needed and it seems (approximately) reasonable.
- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.
- [ ] No, it is not an assumption needed.

The mean of $y$ is a linear function of $x$.

- [ ] Yes, it is an assumption needed but it does not seem reasonable here.
- [x] Yes, it is an assumption needed and it seems (approximately) reasonable.
- [ ] Yes, it is an assumption needed but we don't have enough information to verify its validity.
- [ ] No, it is not an assumption needed.

</div>