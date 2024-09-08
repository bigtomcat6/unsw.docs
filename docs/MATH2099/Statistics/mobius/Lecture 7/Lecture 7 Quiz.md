---
title: Lecture 7 Quiz
createTime: 2024/09/07 00:45:24
permalink: /MATH2099/0j6mdntf/
---

<script setup>
import HSelect from "@HSelect"
</script>

## Question 1

<div class="how_qb">

Are mathematically minded people more likely to be left-handed than those who aren’t so interested in maths? In a survey of 115 randomly selected students taking second year mathematics courses, 16 are left-handed. In the general population, about 11% of people are left-handed.

Does this provide evidence that second year maths students are more likely to be left-handed than would be expected based on the general population?

Let $\pi$ be the true proportion of people who are left-handed. Then

$H_0 :$ <HSelect type="Mobius" :values="[
    {label: 'p̂'},
    {label: 'μ'},
    {label: 'π', selected: true}]" />  <HSelect type="Mobius" :values="[
    {label: '<'},
    {label: '=', selected: true},
    {label: '>'}]" /> `0.11` and $H_a :$ <HSelect type="Mobius" :values="[
    {label: 'p̂'},
    {label: 'μ'},
    {label: 'π', selected: true}]" /> <HSelect type="Mobius" :values="[
    {label: '<'},
    {label: '='},
    {label: '>', selected: true}]" /> `0.11` .

*(Enter your numerical answers as exact values)*

The test statistic is $z =$ `0.998`. *(Enter your answer correct to 3 decimal places)*

The test statistic comes from a $\mathcal{N}($ `0` $,$ `1` $)$ distribution if $H_0$ is true. *(Enter the exact values)*

The $P$-value is `0.159`. *(Enter your answer correct to 3 decimal places)*

Hence, there is <HSelect type="Mobius" :values="[
    {label: 'no', selected: true},
    {label: 'strong'},
    {label: 'some (inconclusive)'},
    {label: 'very strong'}]" /> evidence against $H_0$, that is, there is <HSelect type="Mobius" :values="[
    {label: 'strong'},
    {label: 'no', selected: true},
    {label: 'some (inconclusive)'},
    {label: 'very strong'}]" /> evidence that mathematically minded people are more likely to be left-handed.

What assumptions did you make? Do these assumptions seem reasonable? Tick all answers that apply.

- [ ] The data are normal <br>&emsp;&nbsp;(Seems reasonable, from the normal quantile plot.)
- [x] $\hat{P}$ is approximately normal <br>&emsp;&nbsp;(Seems reasonable, since $n \pi_0 (1 - \pi_0) > 5$.)
- [x] We have a random sample <br>&emsp;&nbsp;(Seems reasonable, from what we know of the study design.)
- [ ] The data are normal <br>&emsp;&nbsp;(Does not seem reasonable, from the normal quantile plot.)
- [x] The sample mean is normally distributed <br>&emsp;&nbsp;(Seems reasonable for a sample size of 115, by the Central Limit Theorem, and since data aren’t strongly skewed with big outliers.)
- [ ] We have a random sample <br>&emsp;&nbsp;(Does not seem reasonable.)


</div>

## Question 2

<div class="how_qb">

An internet company claims that customers will have a download speed of at least 10 Mb per second, even during busy periods. A sceptical customer collects the following data at 14 randomly chosen times (in Mb per second):  

`6.6, 8.4, 16.5, 5.1, 10.2, 5.3, 11.6, 9.5, 10.5, 7.7, 9.2, 12.9, 1.7, 3.6`

Does this provide evidence that internet speed is less than 10Mb per second, on average?

Let $\mu$ be the true mean download speed, in Mb per second. Then


$H_0 :$ <HSelect type="Mobius" :values="[
    {label: 'μ', selected: true},
    {label: 'X̄'},
    {label: 'π'}]" />  <HSelect type="Mobius" :values="[
    {label: '<'},
    {label: '=', selected: true},
    {label: '>'}]" /> ` 10 ` and $H_a :$ <HSelect type="Mobius" :values="[
    {label: 'μ', selected: true},
    {label: 'X̄'},
    {label: 'π'}]" /> <HSelect type="Mobius" :values="[
    {label: '<', selected: true},
    {label: '='},
    {label: '>'}]" /> ` 10 ` .

*(Enter your numerical answers as exact values)*

The test statistic is `-1.45`. *(Enter your answer correct to 2 decimal places)*

The test statistic comes from a <HSelect type="Mobius" :values="[
    {label: 'N(0,1) distribution'},
    {label: 't distribution with 13 degrees of freedom', selected: true},
    {label: 't distribution with 14 degrees of freedom'}]" /> if $H_0$ is true. *(Enter the exact values)*

The $P$-value is `0.085`. *(Enter your answer correct to 3 decimal places)*

Hence, there is <HSelect type="Mobius" :values="[
    {label: 'very strong'},
    {label: 'some (inconclusive)', selected: true},
    {label: 'strong'},
    {label: 'no'}]" /> evidence against $H_0$, that is, there is <HSelect type="Mobius" :values="[
    {label: 'very strong'},
    {label: 'some (inconclusive)'},
    {label: 'strong', selected: true},
    {label: 'no'}]" /> evidence that the download speed is less than 10Mb per second.

What assumptions did you make? Do these assumptions seem reasonable? Tick all answers that apply.

- [ ] The data are normal <br>&emsp;&nbsp;(Does not seem reasonable, from the normal quantile plot.)
- [x] We have a random sample. <br>&emsp;&nbsp;(Seems reasonable, from what we know of the study design.)
- [ ] $\hat{P}$ is approximately normal <br>&emsp;&nbsp;(Seems reasonable, since $n \pi_0 (1 - \pi_0) > 5$.)
- [ ] We have a random sample <br>&emsp;&nbsp;(Does not seem reasonable.)
- [x] The data are normal <br>&emsp;&nbsp;(Seems reasonable, from the normal quantile plot.)

</div>

