---
title: Optimized Logic Functions
createTime: 2024/10/22 15:29:40
permalink: /COMP3222/2ue3qyah/
---

## What is Logic Optimization?

**Goal**: Find the most efficient way to implement a logic function to minimize cost, power consumption, and increase speed in digital circuits.

Logic optimization is crucial in digital circuit design as it directly impacts the performance and efficiency of hardware systems. By simplifying logic functions, we can reduce the number of gates required, decrease power consumption, and improve the overall speed of the circuit.

- **Example**:
  Original function:
  $$
  f(x_1, x_2, x_3) = \Sigma m(0, 2, 4, 5, 6)
  $$
  Simplified form:
  $$
  f = x_3 + x_1 \cdot \bar{x}_2
  $$
  This reduction minimizes the number of logic gates needed, saving resources and improving performance.

- **Complex Example**:
  Consider a more complex logic function:
  $$
  f(a, b, c, d) = \Sigma m(1, 3, 7, 11, 15)
  $$
  Through optimization techniques, this function can be simplified to:
  $$
  f = a \cdot b + c \cdot d
  $$
  This demonstrates how higher-order functions can be effectively minimized.

## Karnaugh Maps (K-Maps) Explained

Karnaugh Maps are **graphical tools** for simplifying logic functions by grouping adjacent cells that represent minterms with common variables. They help visualize patterns that lead to simpler expressions.

- **How It Works**:

  - Each grouping of adjacent 1s corresponds to a term where variables can be eliminated.
  - Larger groups eliminate more variables, leading to greater simplification.

- **Detailed Example**:

  Consider the function $f(A, B, C) = \Sigma m(1, 2, 3, 5, 7)$.

  **Step 1**: Draw a three-variable Karnaugh Map.

  ```:no-line-numbers
    BC
        00  01  11  10
      +---------------+
  A=0 | 0 | 1 | 1 | 0 |
      +---------------+
  A=1 | 0 | 1 | 0 | 1 |
      +---------------+
  ```

  **Step 2**: Mark the cells corresponding to outputs of 1.

  **Step 3**: Group the cells to find the largest possible groups:

  - Group 1: Cells at (A=0, B=0, C=1) and (A=0, B=0, C=0) [Cells 1 and 2]
  - Group 2: Cells at (A=0, B=1, C=1) and (A=1, B=1, C=0) [Cells 3 and 5]
  - Group 3: Cell at (A=1, B=0, C=1) [Cell 7]

  **Step 4**: Write the simplified logic expression:

  - From Group 1: $\bar{A} \bar{B}$
  - From Group 2: $B \bar{C}$
  - From Group 3: $A \bar{B} C$

  **Simplified Function**:
  $$
  f = \bar{A} \bar{B} + B \bar{C} + A \bar{B} C
  $$

## Prime Implicants and Essential Prime Implicants

- **Prime Implicant**: A product term obtained by combining the maximum possible number of adjacent 1s in the Karnaugh Map, which cannot be combined further.

- **Essential Prime Implicant**: A prime implicant that covers at least one minterm not covered by any other prime implicant.

  **Concrete Example**:

  For the function $f(A, B, C) = \Sigma m(1, 3, 7, 11, 15)$:

  **Step 1**: Draw the Karnaugh Map and mark the 1s.

  **Step 2**: Identify all prime implicants:

  - **P1**: Covers minterms 7 and 15.
  - **P2**: Covers minterms 3 and 7.
  - **P3**: Covers minterms 11 and 15.
  - **P4**: Covers minterm 1.

  **Step 3**: Determine essential prime implicants:

  - **P4** is essential because minterm 1 is only covered by P4.
  - Check other prime implicants for uniqueness.

  **Step 4**: Write the minimized logic expression including all essential prime implicants.

## VHDL Example for Logic Function Implementation

Below is a VHDL snippet that describes a logic function:

```vhdl
LIBRARY ieee;
USE ieee.std_logic_1164.all;

ENTITY func1 IS
    PORT (x1, x2, x3: IN BIT; f: OUT BIT);
END func1;

ARCHITECTURE LogicFunc OF func1 IS
BEGIN
    -- Original unsimplified function
    f <= (NOT x1 AND NOT x2 AND NOT x3) OR  -- minterm m0
         (NOT x1 AND x2 AND NOT x3) OR      -- minterm m2
         (x1 AND NOT x2 AND NOT x3) OR      -- minterm m4
         (x1 AND NOT x2 AND x3) OR          -- minterm m5
         (x1 AND x2 AND NOT x3);            -- minterm m6
END LogicFunc;
```

**Line-by-Line Explanation**:

- **Library Declarations**: Import standard logic libraries required for VHDL.
- **ENTITY Declaration**: Defines the module `func1` with inputs `x1`, `x2`, `x3` and output `f`.
- **ARCHITECTURE Body**: Implements the logic function using the specified minterms.
  - Each line within `f <=` corresponds to a minterm where the output `f` is `1`.

**Simplification**:

Using logic optimization techniques, the function simplifies to:
$$
f = \bar{x}_3 + x_1 \cdot \bar{x}_2
$$

This means the same logic can be implemented more efficiently, reducing hardware resources.

**Simulation Results**:

By simulating the VHDL code, we can verify that the simplified expression produces the same output `f` for all input combinations as the original expression.

## SOP vs POS Representations

- **Sum of Products (SOP)**: A logic expression where multiple ANDed terms (products) are ORed together.

  **Example**:

  $$
  f(x_1, x_2, x_3) = \Sigma m(2, 3, 4, 6, 7)
  $$

  **Expanded Form**:

  $$
  f = \bar{x}_1 x_2 \bar{x}_3 + \bar{x}_1 x_2 x_3 + x_1 \bar{x}_2 \bar{x}_3 + x_1 x_2 \bar{x}_3 + x_1 x_2 x_3
  $$

- **Product of Sums (POS)**: A logic expression where multiple ORed terms (sums) are ANDed together.

  **Example**:

  $$
  f(x_1, x_2, x_3) = \Pi M(0, 1, 5)
  $$

  **Expanded Form**:

  $$
  f = (x_1 + x_2 + x_3)(x_1 + x_2 + \bar{x}_3)(x_1 + \bar{x}_2 + x_3)
  $$

**When to Use SOP or POS**:

- **SOP**: Preferred when the function is true (outputs `1`) for fewer input combinations.
- **POS**: Preferred when the function is false (outputs `0`) for fewer input combinations.

**Implementation Differences**:

- **SOP Circuits**: Typically use AND gates feeding into an OR gate.
- **POS Circuits**: Use OR gates feeding into an AND gate.

Understanding the difference helps in choosing the most efficient implementation for a given logic function.

## NAND and NOR Gates: The Preferred Choice

NAND and NOR gates are commonly used in **VLSI (Very Large Scale Integration)** design because:

1. **Reduced Transistor Count**:

   - **CMOS Implementation**:
     - **NAND Gate**: Uses fewer transistors by arranging PMOS and NMOS transistors efficiently.
     - **NOR Gate**: Similarly optimized in CMOS technology.
   - This leads to smaller chip area and lower power consumption.

2. **Universality**:

   - **NAND and NOR Gates** are universal gates, meaning they can be used to construct any other type of logic gate, including AND, OR, and NOT gates.
   - This simplifies manufacturing and design processes.

3. **De Morgan’s Theorem**:

   - Facilitates the transformation of AND-OR logic into NAND-NAND or NOR-NOR configurations.
   - **Examples**:
     - $A + B = (A \cdot B)'$ (Using De Morgan's Law for NAND implementation)
     - $A \cdot B = (A' + B')'$ (Using De Morgan's Law for NOR implementation)

**Additional Examples**:

- **Implementing NOT Gate Using NAND**:
  - $\text{NOT } A = A \uparrow A$
- **Implementing AND Gate Using NAND**:
  - $A \cdot B = (A \uparrow B)'$

## Introduction to FPGAs

An **FPGA (Field Programmable Gate Array)** is a programmable hardware device that allows for reconfiguration to implement various logic functions, making it highly versatile in digital system design.

- **Lookup Table (LUT)**:

  - **Function**: A LUT stores the truth table of a logic function.
  - **Operation**: Inputs to the LUT select a specific output value, effectively implementing any combinational logic function within its input size.

- **Detailed Example**:

  - **Four-Input LUT**:
    - Can implement any logic function with up to four inputs.
    - Stores $2^4 = 16$ output values corresponding to all possible input combinations.
  - **Configuration**:
    - By programming the LUT's memory, the FPGA can realize different logic functions without changing the hardware.

- **Applications**:

  - **Rapid Prototyping**: FPGAs allow for quick testing and iteration of digital designs.
  - **Reconfigurable Computing**: Useful in systems that require updates or changes after deployment.

## Handling "Don't Care" Conditions

In digital circuits, certain input combinations may never occur or the output may be irrelevant. These are known as **"don't care" conditions** and are denoted by $D$.

- **Utilizing "Don't Care" Conditions**:

  - **Simplification**: They provide flexibility in logic simplification, as they can be assigned either a `0` or `1` to achieve the simplest expression.
  - **Karnaugh Map Application**:
    - Include "don't care" cells when grouping to form larger groups.
    - This can lead to the elimination of more variables.

- **Practical Example**:

  Consider the function $f(A, B, C) = \Sigma m(1, 3, 7)$ with don't care conditions $D(2, 5)$.

  **Step 1**: Draw the Karnaugh Map and mark the 1s and don't care conditions.

  **Step 2**: Use the don't care conditions to form larger groups.

  - Group cells $m(1, 3, 2, 5)$ to create a larger block, simplifying the function further.

  **Step 3**: Write the simplified logic expression:

  $$
  f = B
  $$

**Caution**:

- When using don't care conditions, ensure that the assignments do not affect the required functionality of the circuit.

## Factoring for Multilevel Implementations

Multilevel logic designs reduce the number of gates by sharing common terms but may introduce additional propagation delays due to increased logic levels.

- **Corrected Example**:

  Original expression:

  $$
  f = x_1 x_2 x_3 + x_1 x_2 x_4
  $$

  **Factored Form**:

  $$
  f = x_1 x_2 (x_3 + x_4)
  $$

  - **Explanation**:
    - Common factors $x_1 x_2$ are extracted.
    - The expression $x_3 + x_4$ remains, introducing an additional logic level (OR gate).

- **Trade-Offs**:

  - **Advantages**:
    - Reduces the total number of gates required.
    - Saves on hardware resources and potentially reduces power consumption.
  - **Disadvantages**:
    - Additional logic levels can increase signal propagation delay.
    - May impact the overall speed of the circuit.


