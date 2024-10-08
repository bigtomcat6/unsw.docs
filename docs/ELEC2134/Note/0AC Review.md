---
title: AC Review
createTime: 2024/09/15 17:46:34
permalink: /ELEC2134/Note/9uufirtz/
---

<div><!--编写时主题Katex丢内容bug-->

## AC fundamentals

- In Direct Current (DC), the electric charge flows only in one direction.

<img src="./img/image-20240915175405491.png" alt="image-20240915175405491" style="zoom:33%;" />
<img src="./img/image-20240915175346474.png" alt="image-20240915175346474" style="zoom:33%;" /> 


-  In Alternating Current (AC), the flow of electric charge periodically reverses direction.

<img src="./img/image-20240915175557905.png" alt="image-20240915175557905" style="zoom:33%;" />
<img src="./img/image-20240915175546624.png" alt="image-20240915175546624" style="zoom:33%;" />

## AC transmission

- AC is more efficient and economical to transmit over  long distances

- AC voltage may be increased or decreased with a  transformer

- The power losses ($P_L$) in a conductor are a product of  the square of the current and the resistance of the  conductor. 
    $$Power \;\; loss = I^2R$$
    
- When transmitting a fixed power through a power  line, if the current is doubled, the power loss will be  four times greater. 

- The power transmitted ($P_T$) is equal to the product of  the current and the voltage
    $$P_T = V I$$
    
- The same amount of power can be transmitted with a lower current by increasing the voltage.
  
- Use of a higher voltage leads to significantly more efficient transmission of power.

_Note: DC cannot be stepped-up  or stepped- down by a  transformer_

_Note: High voltage DC  transmission (HVDC) is becoming available but tend to be more expensive, less efficient over short distances._

- **Transformers** can step-up or step-down AC voltage.

## Characteristics of Alternating Current and voltage (AC)

- An alternating current or voltage wave can take several different forms but we will initially only consider the **sine wave (sinusoidal waveform)**

$$v(t) = V_m \sin(2\pi f t)$$

- $v(t)$: Instantaneous  voltage
- $V_m$: Peak voltage
- $f$: Frequency (Hz)
- $t$: Time (s)

$$v(t) = V_m \sin \left(\frac{2\pi}{T}t \right)$$

Therefore $v(t)$ can be re-wirtten as:
$$v(t) = V_m \sin \left(\omega t \right)$$

<img src="./img/image-20240915183742714.png" alt="image-20240915183742714" style="zoom:33%;" />  <img src="./img/image-20240915183754344.png" alt="image-20240915183754344" style="zoom:33%;" />

- Frequency $f = \frac{1}{T} Hz \; (Hertz)$, $T$: Period (s)
- Angular Velocity $\omega = 2\pi f = \frac{2\pi}{T} \; radians/sec$

> The sine wave (or sinusoid) has a pattern that repeats. Hence it is a periodic wave.

## Phase Angle

- Sinusoidal waveform may have a phase delay $\phi$ (degrees or radians).
- General formula: $v(t) = V_m \sin(\omega t \pm \phi)$

::: details Example: Phase Angle Calculation
Given:
- $i_1 = -4 \sin(100\pi t + 25^\circ)$
- $i_2 = 5 \cos(100\pi t - 40^\circ)$

Solution:
- $i_1$ lags $i_2$ by 205°.

(155° + 50° which is the same as 360° -155°)

![image-20240915185327469](img/image-20240915185327469.png)

:::

## Measurements of AC quantities:

From a sinusoidal waveform we can measure the following values:
1. Peak value
2. Peak-peak value
3. Average value
4. Root Mean Square (RMS) value

![image-20240915192738368](img/image-20240915192738368.png)

## Average Value

- **Average value** $V_{ave}$ or $I_{ave}$ of a sine wave is the average of all its instantaneous values over a full **cycle**.

$$V_{ave} = \frac{1}{T} \int_{0}^{T} v(t)\, dt = \frac{\text{Area under the curve over a full cycle}}{\text{Period (T)}}$$

$$\begin{align*}
V_{ave} &= \frac{1}{T} \int_0^T v(t) dt \\
        &= \frac{1}{T} \int_0^{\frac{2\pi}{\omega}} V_m \sin(\omega t) dt \\
        &= \frac{V_m}{T} \left[ \frac{-\cos(\omega t)}{\omega} \right]_0^{\frac{2\pi}{\omega}} \\
V_{ave} &= \frac{V_m}{T\omega} \left[ \cos(\omega t) \right]_0^{\frac{2\pi}{\omega}} = 0
\end{align*}$$

- The average value of a sine wave over a full cycle is **zero** due to the positive and negative halves canceling each other out.

## RMS: Root Mean Square Value

- RMS value measures the **heating effect** of a sine wave, equivalent to the **DC value** that produces the same power in a load.

- RMS value or Effective Value of a periodic waveform:

$$P_{\text{average}} = RI_{\text{rms}}^2 = RI_{\text{dc}}^2$$

$$I_{\text{rms}} = \sqrt{\frac{1}{T} \int_0^T i^2(t) \, dt}$$

$$V_{\text{rms}} = \sqrt{\frac{1}{T} \int_0^T v^2(t) \, dt}$$

## Phasor Representations:
- **Phasor**: A complex number representing the amplitude and phase angle of a sinusoid.
  - Rectangular: $OP = V_m \cos(\theta) + j V_m \sin(\theta)$
  - Polar: $OP = V_m \angle \theta$
  - Exponential: $OP = V_m e^{j\theta}$

## Phasor Concept

- A phasor is a rotating vector

![image-20240915201438758](img/image-20240915201438758.png)

Notation: 

- $v(t)$- instantaneous voltage 
- $V$ is the  corresponding phasor voltage

## V-I Relationship for Circuit Elements:
### Resistor:
- Voltage and current are **in phase**.
- $v(t) = i(t) R = R I_m \cos(\omega t)$

### Inductor:
- Voltage **leads** current by 90°.
- $v_L(t) = \omega L I_m \cos(\omega t + 90^\circ)$

### Capacitor:
- Current **leads** voltage by 90°.
- $i(t) = \omega C V_m \cos(\omega t + 90^\circ)$

## Impedance of Circuit Elements:

- Resistor: $Z_R = R$ <br/> <img src="./img/image-20240915211344634.png" alt="image-20240915211344634" style="zoom:36%;" /> 
- Inductor: $Z_L = j\omega L$ <br/> <img src="./img/image-20240915211521087.png" alt="image-20240915211521087" style="zoom:33%;" /> 
- Capacitor: $Z_C = \frac{1}{j\omega C}$ <br/> <img src="./img/image-20240915211536269.png" alt="image-20240915211536269" style="zoom:33%;" /> 


## AC Circuit Theorems:
::: details Nodal Analysis
Use KCL to find node voltages.

![image-20240915213524328](img/image-20240915213524328.png)

![image-20240915213621036](img/image-20240915213621036.png)
:::

::: details Mesh Analysis
Use KVL to find loop currents.

![image-20240915214033371](img/image-20240915214033371.png)
:::

::: details Superposition Theorem
Calculate the total response by summing individual contributions of independent sources.

$$
\text{Voltage source} → \text{short circuit} \\
\text{Current source} → \text{open circuit}
$$

![image-20240915214549317](img/image-20240915214549317.png)

![image-20240915214612625](img/image-20240915214612625.png)

:::

::: details Sourse Transformation

![image-20240915215112946](img/image-20240915215112946.png)

![image-20240915221813241](img/image-20240915221813241.png)

:::

::: details Thevenin's and Norton's Equivalent Circuits
Simplify circuits into a single voltage or current source with impedance.

![image-20240915222653451](img/image-20240915222653451.png)

![image-20240915222708438](img/image-20240915222708438.png)

![image-20240915222722813](img/image-20240915222722813.png)

:::

</div>