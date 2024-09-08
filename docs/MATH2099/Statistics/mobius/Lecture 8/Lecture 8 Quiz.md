---
title: Lecture 8 Quiz
createTime: 2024/09/08 00:04:35
permalink: /MATH2099/9rbfxezw/
---


<script setup>
import HSelect from "@HSelect"
</script>

## Question 1

<div class="how_qb">

In the paper titled "Hunters ring dinner bell for ravens..." (White, 2005), ecologist Crow White asked the question whether ravens actually fly towards (not away from!?) the sound of gunshots, to scavenge the carcass they might find. He went to twelve locations, counted the number of ravens he could see, then shot his gun, waited ten minutes, and counted again. Results are below.

Before: 2,1,3,0,1,6,3,1,2,3,5,2
After: 4,0,7,3,3,6,2,1,4,4,7,3

Let $\mu_1$ be the true mean number of ravens before the gunshot, and $\mu_2$ is the true mean number of ravens after the gunshot.

We want to test $H_0: \mu_1$ <HSelect type="Mobius" :values="[
    {label: '=', selected: true},
    {label: '>'},
    {label: '<'}]" /> $\mu_2$ against $H_a: \mu_1$ <HSelect type="Mobius" :values="[
    {label: '>'},
    {label: '<', selected: true},
    {label: '='},]" /> $\mu_2$.

The test statistic is `-2.80306` *(Enter your answer correct to 2 decimal places).*

This statistic would come from a <HSelect type="Mobius" :values="[
    {label: 'standard normal'},
    {label: 't distribution with 11 degrees of freedom', selected: true},
    {label: 't distribution with 22 degrees of freedom'}]" />  distribution if$H_0$ were true.

The $P$-value is `0.009` *(Enter your answer correct to 3 decimal places).*

So we conclude that:

- [ ] There is strong evidence for $H_0$, that is, there is strong evidence that there is no difference in ravens before and after gunshots.
- [ ] There is no evidence for $H_0$, that is, there is no evidence that there is no difference in ravens before and after gunshots.
- [x] There is strong evidence against $H_0$, that is, there is strong evidence that there are more ravens after gunshots.
- [ ] There is no evidence against $H_0$, that is, there is no evidence that there are more ravens after gunshots.

</div>

## Question 2

<div class="how_qb">

The void volume within a textile fabric affects comfort, flammability, and insulation properties. Permeability of a fabric refers to the accessibility of void space to the flow of a gas or liquid. We have summary information on air permeability (in cm³/cm²/sec) for two different types of plain weave fabric (see below).
 

Cotton: 51.6,49.5,50.3,47.7,47.7,50.1,51.6,55.2,48.6,50.4,49.8,46.0

Acetate: 58.9,55.5,62.1,57.8,60.3,58.6,60.8,58.5,61.2,61.8,64.3,59.5

(1) Find a 98% confidence interval for the true difference in mean permeability, $\mu_{\text{Acetate}} - \mu_{\text{Cotton}}$.


( `7.67` , `12.46` ) _Enter your answers correct to 2 decimal place_

(2) What assumptions did you make to answer this question? Do they seem reasonable? Tick all that apply.

- [x] We have two independent random samples of measurements.<br>&emsp;&nbsp; (Whether this is satisfied depends on the study design.)
- [ ] The sample mean difference is approximately normal.<br>&emsp;&nbsp; (Seems reasonable since $n\hat{p}(1 - \hat{p}) > 5$.)
- [ ] Data are approximately normal.<br>&emsp;&nbsp; (But data are strongly skewed, from the normal quantile plot, so this is not reasonable.)
- [x] Standard deviations are equal.<br>&emsp;&nbsp; (Seems reasonable, from the data.)
- [x] Data are approximately normal.<br>&emsp;&nbsp; (Seems reasonable from the normal quantile plot.)

</div>