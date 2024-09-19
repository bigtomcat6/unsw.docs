---
title: AC Power
createTime: 2024/09/15 22:40:20
permalink: /ELEC2134/5p214moa/
---

<div><!--编写时主题Katex丢内容bug-->

## AC Transmission

- **Power Loss**: $P_{\text{loss}} = I^2 R$
- **Power Transmitted**: $P_T = VI$
- AC is more efficient for long-distance transmission.
- Higher voltage reduces current, making power transmission more efficient.

### AC Power – Resistive Load
- Voltage: $v(t) = V_m \cos(\omega t)$
- Current: $i(t) = I_m \sin(\omega t)$
- **Power**: $p(t) = v(t) \times i(t) = \boxed{ V_m I_m \cos^2(\omega t) } ← \text{always positive}$
- **Average Power**: $P_{\text{avg}} = \frac{V_m I_m}{2}$

### AC Power – Inductive Load
- Voltage: $v(t) = V_m \cos(\omega t)$
- Current: $i(t) = I_m \sin(\omega t)$
- **Power**: $p(t) = \frac{V_m I_m}2 \boxed{ \sin(2\omega t) } ← \text{average power} = 0$
- **Average Power**: Zero (energy alternates between source and load).

### AC Power – Capacitive Load
- Voltage: $v(t) = V_m \cos(\omega t)$
- Current: $i(t) = -I_m \sin(\omega t)$
- **Power**: $p(t) = - \frac{V_m I_m}2 \boxed{ \sin(2\omega t) } ← \text{always positive}$
- **Average Power**: Zero (similar to inductive load but opposite in sign).

### Reactive Power
- **Reactive Power (Q)**: $Q = V_{\text{rms}} I_{\text{rms}} \sin(\theta)$
- Measured in Volt-Ampere Reactive (VAR).
- It represents energy that oscillates between the source and reactive components.

### Apparent Power
- **Apparent Power (S)**: $S = V_{\text{rms}} I_{\text{rms}}$
- Measured in Volt-Amperes (VA).
- **Relationship**: $S^2 = P^2 + Q^2$

### Power Triangle
- **Power Factor (pf)**: $pf = \cos(\theta)$
  - $\theta$ is the phase angle between voltage and current.
  - If current lags voltage (inductive load): **Lagging Power Factor**.
  - If current leads voltage (capacitive load): **Leading Power Factor**.

### Complex Power
- **Complex Power (S)**: $S = \frac 1 2 V I^* = P + jQ$
  - Real part: Active Power ($P$).
  - Imaginary part: Reactive Power ($Q$).

### Maximum Average Power Transfer
- Maximum power is transferred when the load impedance is the complex conjugate of the source impedance.
- **Condition**: $Z_L = Z_{\text{source}}^*$
- **Maximum Power**: $P_{L \, (max)} = \frac 1 8 \frac{|V_{\text{oc}}|^2}{R_{\text{source}}}$ <br/>($|V_{oc}|$ is the maximum amplitude of the source voltage).

> Note: For purely resistive loads, $R_L = |Z_L|$ and ower needs to be calculated directly from the circuit

### Power Factor Correction
- Capacitors are added in parallel to inductive loads to improve the power factor.
- **Goal**: Increase $\cos(\theta)$ towards unity (1).
- $\theta → 0, Q → 0$ ➡️ $\cos(\theta) → 1$ (unity or 100% power factor).
- Improves system efficiency and reduces energy costs.

</div>