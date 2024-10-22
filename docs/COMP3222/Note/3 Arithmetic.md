---
title: Arithmetic Circuits
createTime: 2024/10/22 17:52:40
permalink: /COMP3222/7sx4yfuy/
---

## Number Representations

### **1. Unsigned Integers**

- Represented in **binary**, **octal**, and **hexadecimal** formats.
- **Binary Example**:
  - $1101_2 = 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 13_{10}$
- **Octal Example**:
  - $15_8 = 1 \times 8^1 + 5 \times 8^0 = 13_{10}$
- **Hexadecimal Example**:
  - $D_{16} = 13_{10}$

**Conversion Methods**:

- **Binary to Octal**:
  - Group binary digits into sets of three (from right to left) and convert each group to its octal equivalent.
- **Binary to Hexadecimal**:
  - Group binary digits into sets of four and convert each group to its hexadecimal equivalent.

### **2. Signed Numbers**

1. **Sign and Magnitude**:
   - Use the most significant bit (MSB) as the **sign bit**: `0` for positive, `1` for negative.
   - **Example**:
     - $+5_{10} = 0\,101_2$
     - $-5_{10} = 1\,101_2$
2. **1's Complement**:
   - **Negative Representation**: Invert all bits of the positive number.
   - **Example**:
     - $+5_{10} = 0101_2$
     - $-5_{10} = 1010_2$ (1's complement)
3. **2's Complement** (Preferred Method):
   - **Algorithm**:
     - **Method 1**: Invert all bits (find the 1's complement) and add 1.
     - **Method 2**: Copy bits from right to left up to and including the first '1'; then invert the remaining bits to the left.
   - **Example**:
     - $+7_{10} = 0111_2$
     - **Step 1**: Invert all bits: $1000_2$
     - **Step 2**: Add 1: $1000_2 + 1 = 1001_2$
     - So, $-7_{10} = 1001_2$ (2's complement)

**Advantages of 2's Complement**:

- Eliminates the issue of having both positive and negative zero.
- Simplifies binary arithmetic, as subtraction can be performed by addition of the 2's complement.

## Binary Arithmetic

### **1. Half-Adder**

- **Purpose**: Adds two single binary digits $A$ and $B$.

- **Outputs**:

  - **Sum ($S$)**: $S = A \oplus B$ (Exclusive OR)
  - **Carry ($C$)**: $C = A \cdot B$ (AND)

- **Truth Table**:

  | A    | B    | C (Carry) | S (Sum) |
  | ---- | ---- | --------- | ------- |
  | 0    | 0    | 0         | 0       |
  | 0    | 1    | 0         | 1       |
  | 1    | 0    | 0         | 1       |
  | 1    | 1    | 1         | 0       |

### **2. Full-Adder**

- **Purpose**: Adds two binary digits along with a carry-in ($C_{in}$).

- **Outputs**:

  - **Sum ($S$)**: $S = A \oplus B \oplus C_{in}$
  - **Carry-Out ($C_{out}$)**:
    $$ C_{out} = (A \cdot B) + (C_{in} \cdot (A \oplus B)) $$

- **Truth Table**:

  | $A$ | $B$ | $C_{in}$ | $C_{out}$ | $S$ |
  | ------- | ------- | ------------ | ------------- | ------- |
  | 0       | 0       | 0            | 0             | 0       |
  | 0       | 0       | 1            | 0             | 1       |
  | 0       | 1       | 0            | 0             | 1       |
  | 0       | 1       | 1            | 1             | 0       |
  | 1       | 0       | 0            | 0             | 1       |
  | 1       | 0       | 1            | 1             | 0       |
  | 1       | 1       | 0            | 1             | 0       |
  | 1       | 1       | 1            | 1             | 1       |

- **VHDL Implementation**:

  ```vhdl
  LIBRARY ieee;
  USE ieee.std_logic_1164.all;
  
  ENTITY fulladd IS
    PORT (
      Cin, A, B : IN STD_LOGIC;
      S, Cout   : OUT STD_LOGIC
    );
  END fulladd;
  
  ARCHITECTURE LogicFunc OF fulladd IS
  BEGIN
    S <= A XOR B XOR Cin;
    Cout <= (A AND B) OR (Cin AND (A XOR B));
  END LogicFunc;
  ```

## Ripple-Carry Adder

- **Function**: Chains multiple full-adders to add multi-bit binary numbers.
- **How It Works**:
  - The carry-out ($C_{out}$) from each full-adder is connected to the carry-in ($C_{in}$) of the next higher-order adder.
  - **Cascading Delays**: Each bit addition must wait for the carry from the previous bit.
- **Example**: Adding 5 ($0101_2$) and 2 ($0010_2$):

  - **Stage 0** (LSB):
    - $A_0 = 1$, $B_0 = 0$, $C_{in0} = 0$
    - $S_0 = 1 \oplus 0 \oplus 0 = 1$
    - $C_{out0} = (1 \cdot 0) + (0 \cdot (1 \oplus 0)) = 0$
  - **Stage 1**:
    - $A_1 = 0$, $B_1 = 1$, $C_{in1} = C_{out0} = 0$
    - $S_1 = 0 \oplus 1 \oplus 0 = 1$
    - $C_{out1} = (0 \cdot 1) + (0 \cdot (0 \oplus 1)) = 0$
  - **Stages 2 and 3** proceed similarly.

- **Disadvantage**:

  - **Propagation Delay**: Total delay is proportional to the number of bits ($n$).
    $$ \text{Total Delay} = n \times \Delta t_{\text{full-adder}} $$
  - This makes ripple-carry adders inefficient for large bit-widths.

## Carry-Lookahead Adder (CLA)

- **Purpose**: To perform faster addition by reducing carry propagation delay.
- **How It Works**:

  - **Generate ($G_i$)**:
    $$ G_i = A_i \cdot B_i $$
    - Indicates if a carry is generated at bit $i$.
  - **Propagate ($P_i$)**:
    $$ P_i = A_i + B_i $$
    - Indicates if a carry will propagate through bit $i$.
  - **Carry Calculation**:
    $$ C_{i+1} = G_i + (P_i \cdot C_i) $$
  - By calculating $G_i$ and $P_i$ for all bits in parallel, we can compute carries much faster.

- **Benefits**:

  - **Reduced Delay**: Changes carry propagation delay from $O(n)$ to $O(\log n)$.
  - **Parallelism**: Carries are computed in parallel rather than sequentially.

- **Example**:

  - For a 4-bit adder:
    - Compute $G_i$ and $P_i$ for $i = 0$ to $3$.
    - Compute carries:
      $$
      \begin{align*}
      C_1 &= G_0 + P_0 C_0 \\
      C_2 &= G_1 + P_1 C_1 \\
      C_3 &= G_2 + P_2 C_2 \\
      C_4 &= G_3 + P_3 C_3
      \end{align*}
      $$
    - Since $C_1$ depends on $C_0$, $C_2$ depends on $C_1$, and so on, we can expand these equations to depend only on $C_0$, enabling parallel computation.

## Adder/Subtractor Circuits

- **Purpose**: To perform both addition and subtraction using the same hardware.

- **Using XOR for Conditional Inversion**:

  - An XOR gate can invert a bit when a control signal is `1` (subtract) or pass it unchanged when the control signal is `0` (add).
    $$ Y_i' = Y_i \oplus \text{Sub} $$
  - **Sub** is the control bit (`0` for addition, `1` for subtraction).

- **2's Complement Subtraction**:

  - To subtract $Y$ from $X$:
    - Invert $Y$ using XOR gates controlled by $\text{Sub}$.
    - Add $X$ and $Y'$ with the initial carry-in $C_{in} = \text{Sub}$.
    - This effectively adds $X$ and $-Y$.

- **VHDL for 4-bit Adder/Subtractor**:

  ```vhdl
  LIBRARY ieee;
  USE ieee.std_logic_1164.all;
  
  ENTITY adder_subtractor4 IS
    PORT (
      Sub    : IN STD_LOGIC;
      X, Y   : IN STD_LOGIC_VECTOR(3 DOWNTO 0);
      S      : OUT STD_LOGIC_VECTOR(3 DOWNTO 0);
      Cout   : OUT STD_LOGIC
    );
  END adder_subtractor4;
  
  ARCHITECTURE Behavioral OF adder_subtractor4 IS
    SIGNAL Y_inverted : STD_LOGIC_VECTOR(3 DOWNTO 0);
    SIGNAL C          : STD_LOGIC_VECTOR(0 TO 4);
  BEGIN
    -- Conditional inversion of Y
    Y_inverted <= Y XOR (Sub & Sub & Sub & Sub);
  
    -- Initial carry-in is Sub (0 for add, 1 for subtract)
    C(0) <= Sub;
  
    -- Instantiate full-adders
    stage0: fulladd PORT MAP (C(0), X(0), Y_inverted(0), S(0), C(1));
    stage1: fulladd PORT MAP (C(1), X(1), Y_inverted(1), S(1), C(2));
    stage2: fulladd PORT MAP (C(2), X(2), Y_inverted(2), S(2), C(3));
    stage3: fulladd PORT MAP (C(3), X(3), Y_inverted(3), S(3), C(4));
  
    -- Final carry-out
    Cout <= C(4);
  END Behavioral;
  ```

## Overflow Detection

- **Definition**: Overflow occurs when the result of an addition or subtraction exceeds the range that can be represented with the given number of bits.
- **Detection Method**:

  - For signed numbers in 2's complement representation:
    $$ \text{Overflow} = C_{n-1} \oplus C_n $$
    - $C_{n-1}$ is the carry into the most significant bit (MSB).
    - $C_n$ is the carry out of the MSB.
    - If these two carries are different, an overflow has occurred.

- **Example**:

  - Adding $+7_{10} (0111_2)$ and $+3_{10} (0011_2)$:
    - Sum: $0111_2 + 0011_2 = 1010_2$ (which represents -6 in 2's complement)
    - $C_{n-1} = 1$, $C_n = 0$
    - $\text{Overflow} = 1 \oplus 0 = 1$ (Overflow occurred)

## Performance Considerations

1. **Critical Path**:

   - The longest delay path through a circuit, determining the maximum speed (minimum clock period) at which the circuit can operate.
   - In adders, the critical path often involves carry propagation.

2. **Reducing Delay**:

   - **Carry-Lookahead Adders**:
     - Reduce the critical path length by parallelizing carry computations.
     - More complex hardware but significantly faster than ripple-carry adders.
   - **Hierarchical Design**:
     - Break down large adders into smaller blocks (e.g., using carry-lookahead adders for 4-bit blocks within a 16-bit adder).
     - Use **carry-select** or **carry-skip** techniques to further reduce delay.
   - **Pipeline Architecture**:
     - Split the adder into stages with registers between them.
     - Allows for higher clock frequencies at the expense of increased latency.