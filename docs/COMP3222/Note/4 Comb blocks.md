---
title: Comb blocks
createTime: 2024/10/22 22:58:00
permalink: /COMP3222/zvy6svwk/
---


## Multiplexers (MUX)

A **Multiplexer (MUX)** is a combinational circuit that selects one of many input signals and forwards the selected input into a single line. It uses **select lines** to choose which input to send to the output.

### **2-to-1 Multiplexer**

- **Function**:

  A 2-to-1 MUX has two data inputs ($w_0$ and $w_1$), one select input ($s$), and one output ($f$). The output $f$ depends on the value of the select signal $s$.

  **Boolean Expression**:

  $$
  f = \bar{s} \cdot w_0 + s \cdot w_1
  $$

- **Truth Table**:

  | $s$ | $w_0$ | $w_1$ | $f$ |
  | ------- | --------- | --------- | ------- |
  | 0       | 0         | X         | 0       |
  | 0       | 1         | X         | 1       |
  | 1       | X         | 0         | 0       |
  | 1       | X         | 1         | 1       |

  *Note: 'X' denotes a "don't care" condition because that input does not affect the output when $s$ is at that value.*

- **VHDL Code**:

  ```vhdl
  LIBRARY ieee;
  USE ieee.std_logic_1164.all;
  
  ENTITY mux2to1 IS
    PORT (
      w0, w1 : IN  STD_LOGIC;
      s      : IN  STD_LOGIC;
      f      : OUT STD_LOGIC
    );
  END mux2to1;
  
  ARCHITECTURE Behavior OF mux2to1 IS
  BEGIN
    f <= w0 WHEN s = '0' ELSE w1;
  END Behavior;
  ```

- **Explanation**:

  - **ENTITY**: Defines the interface with inputs $w_0$, $w_1$, select signal $s$, and output $f$.
  - **ARCHITECTURE**: Implements the behavior where $f$ takes the value of $w_0$ when $s = '0'$, and $w_1$ when $s = '1'$.

### **Building a 4-to-1 MUX using 2-to-1 MUXes**

- **Concept**:

  - A 4-to-1 MUX selects one of four inputs ($w_0$ to $w_3$) based on two select lines ($s_1, s_0$).
  - You can build a 4-to-1 MUX using three 2-to-1 MUXes arranged hierarchically.

- **Implementation**:

  - **First Stage**:

    - Use two 2-to-1 MUXes to select between pairs of inputs:
      - MUX1 selects between $w_0$ and $w_1$ based on $s_0$.
      - MUX2 selects between $w_2$ and $w_3$ based on $s_0$.

  - **Second Stage**:

    - Use a third 2-to-1 MUX to select between the outputs of MUX1 and MUX2 based on $s_1$.

- **VHDL Code**:

  ```vhdl
  LIBRARY ieee;
  USE ieee.std_logic_1164.all;
  
  ENTITY mux4to1 IS
    PORT (
      w0, w1, w2, w3 : IN  STD_LOGIC;
      s              : IN  STD_LOGIC_VECTOR(1 DOWNTO 0);
      f              : OUT STD_LOGIC
    );
  END mux4to1;
  
  ARCHITECTURE Structural OF mux4to1 IS
    SIGNAL m0, m1 : STD_LOGIC;
  BEGIN
    -- First stage MUXes
    m0 <= w0 WHEN s(0) = '0' ELSE w1;
    m1 <= w2 WHEN s(0) = '0' ELSE w3;
    -- Second stage MUX
    f <= m0 WHEN s(1) = '0' ELSE m1;
  END Structural;
  ```

- **Explanation**:

  - **First Stage**:
    - $m0$ selects between $w_0$ and $w_1$.
    - $m1$ selects between $w_2$ and $w_3$.
  - **Second Stage**:
    - $f$ selects between $m0$ and $m1$ based on $s_1$.

## Decoders and Encoders

### **Binary Decoder**

- **Function**:

  A **decoder** converts an $n$-bit binary input into a one-hot $2^n$-bit output. For each input combination, only one output line is high (1), and the rest are low (0).

- **Example**: **2-to-4 Decoder**

  - **Truth Table**:

    | En   | $w_1$ | $w_0$ | $y_3$ | $y_2$ | $y_1$ | $y_0$ |
    | ---- | --------- | --------- | --------- | --------- | --------- | --------- |
    | 0    | X         | X         | 0         | 0         | 0         | 0         |
    | 1    | 0         | 0         | 1         | 0         | 0         | 0         |
    | 1    | 0         | 1         | 0         | 1         | 0         | 0         |
    | 1    | 1         | 0         | 0         | 0         | 1         | 0         |
    | 1    | 1         | 1         | 0         | 0         | 0         | 1         |

  - **VHDL Code**:

    ```vhdl
    LIBRARY ieee;
    USE ieee.std_logic_1164.all;
    
    ENTITY dec2to4 IS
      PORT (
        w  : IN  STD_LOGIC_VECTOR(1 DOWNTO 0);
        En : IN  STD_LOGIC;
        y  : OUT STD_LOGIC_VECTOR(3 DOWNTO 0)
      );
    END dec2to4;
    
    ARCHITECTURE Behavior OF dec2to4 IS
    BEGIN
      PROCESS (w, En)
      BEGIN
        IF En = '1' THEN
          CASE w IS
            WHEN "00" => y <= "1000";
            WHEN "01" => y <= "0100";
            WHEN "10" => y <= "0010";
            WHEN "11" => y <= "0001";
            WHEN OTHERS => y <= "0000";
          END CASE;
        ELSE
          y <= "0000";
        END IF;
      END PROCESS;
    END Behavior;
    ```

- **Explanation**:

  - **Enable Signal ($En$)**: Activates the decoder when high ('1').
  - **Output Lines ($y_3$ to $y_0$)**: Only one line is high based on the binary input $w$.

- **Applications**:

  - Memory address decoding.
  - Selecting specific devices or functions in microprocessor systems.

### **Encoders**

- **Function**:

  An **encoder** performs the reverse operation of a decoder by converting $2^n$ input lines into an $n$-bit binary code.

- **Priority Encoders**:

  - Handle situations where multiple inputs might be high simultaneously by assigning priority to each input.
  - Outputs the binary code corresponding to the highest-priority active input.

- **VHDL Code for a 4-to-2 Priority Encoder**:

  ```vhdl
  LIBRARY ieee;
  USE ieee.std_logic_1164.all;
  
  ENTITY priority_encoder IS
    PORT (
      w : IN  STD_LOGIC_VECTOR(3 DOWNTO 0);
      y : OUT STD_LOGIC_VECTOR(1 DOWNTO 0);
      z : OUT STD_LOGIC  -- Valid output indicator
    );
  END priority_encoder;
  
  ARCHITECTURE Behavior OF priority_encoder IS
  BEGIN
    PROCESS (w)
    BEGIN
      IF w(3) = '1' THEN
        y <= "11";
      ELSIF w(2) = '1' THEN
        y <= "10";
      ELSIF w(1) = '1' THEN
        y <= "01";
      ELSIF w(0) = '1' THEN
        y <= "00";
      ELSE
        y <= "00";
      END IF;
    END PROCESS;
    z <= '1' WHEN w /= "0000" ELSE '0';  -- Indicates at least one input is active
  END Behavior;
  ```

- **Explanation**:

  - Checks inputs from highest to lowest priority.
  - Outputs the binary code of the highest-priority active input.
  - The valid signal $z$ indicates whether any input is active.

## Logic Function Implementation with Multiplexers

- **Shannon’s Expansion Theorem**:

  Any Boolean function can be implemented using multiplexers by expanding it in terms of one of its variables.

  **Formula**:

  $$
  f(w_1, ..., w_n) = \bar{w}_1 \cdot f(0, w_2, ..., w_n) + w_1 \cdot f(1, w_2, ..., w_n)
  $$

- **Example**: Implementing a **3-input Majority Function** using a 4-to-1 MUX.

  - **Majority Function Definition**:

    - Outputs '1' if the majority of the inputs are '1'.

  - **Truth Table**:

    | $w_2$ | $w_1$ | $w_0$ | $f$ |
    | --------- | --------- | --------- | ------- |
    | 0         | 0         | 0         | 0       |
    | 0         | 0         | 1         | 0       |
    | 0         | 1         | 0         | 0       |
    | 0         | 1         | 1         | 1       |
    | 1         | 0         | 0         | 0       |
    | 1         | 0         | 1         | 1       |
    | 1         | 1         | 0         | 1       |
    | 1         | 1         | 1         | 1       |

  - **Implementation Steps**:

    1. Use $w_1$ and $w_0$ as the select lines for the MUX.
    2. Determine the MUX inputs ($d_0$ to $d_3$) based on $w_2$:
       - $d_0 = 0$
       - $d_1 = w_2$
       - $d_2 = w_2$
       - $d_3 = 1$

  - **VHDL Code**:

    ```vhdl
    LIBRARY ieee;
    USE ieee.std_logic_1164.all;
    
    ENTITY majority_mux IS
      PORT (
        w0, w1, w2 : IN  STD_LOGIC;
        f          : OUT STD_LOGIC
      );
    END majority_mux;
    
    ARCHITECTURE Behavior OF majority_mux IS
    BEGIN
      WITH w1 & w0 SELECT
        f <= '0'    WHEN "00",
             w2     WHEN "01",
             w2     WHEN "10",
             '1'    WHEN OTHERS;
    END Behavior;
    ```

- **Explanation**:

  - The `WITH...SELECT` statement selects the output based on the concatenation of `w1` and `w0`.
  - This method reduces the complexity by using the MUX to implement the logic function directly.

## Combinational VHDL Constructs

1. **Concurrent Statements**:

   - Executed continuously and simultaneously.

   - Used outside of processes.

   - **Example**:

     ```vhdl
     f <= a AND b;
     ```

2. **Sequential Statements**:

   - Executed in the order they appear within a `PROCESS` block.

   - Allow for complex decision-making.

   - **Example**:

     ```vhdl
     PROCESS (a, b)
     BEGIN
       IF a = '1' THEN
         f <= b;
       ELSE
         f <= '0';
       END IF;
     END PROCESS;
     ```

3. **Selected Signal Assignment**:

   - Assigns a value to a signal based on the value of a select expression.

   - **Syntax**:

     ```vhdl
     WITH select_expression SELECT
       signal_name <= value_1 WHEN choice_1,
                      value_2 WHEN choice_2,
                      ...
                      value_n WHEN OTHERS;
     ```

   - **Example**:

     ```vhdl
     WITH s SELECT
       f <= w0 WHEN "00",
            w1 WHEN "01",
            w2 WHEN "10",
            w3 WHEN OTHERS;
     ```

## Examples Using MUXes and Decoders

- **16-to-1 MUX Built Using 4-to-1 MUXes**

  - **Concept**:

    - Construct a larger multiplexer by hierarchically connecting smaller ones.
    - Use four 4-to-1 MUXes for the first stage and one 4-to-1 MUX for the second stage.

  - **Implementation**:

    - **First Stage**:

      - Divide the 16 inputs into four groups ($w_0$ to $w_3$, $w_4$ to $w_7$, etc.).
      - Each 4-to-1 MUX selects one input from its group based on the lower two bits of the select signal ($s(1 \text{ DOWNTO } 0)$).

    - **Second Stage**:

      - The outputs of the first stage MUXes become inputs to the final 4-to-1 MUX.
      - The higher two bits of the select signal ($s(3 \text{ DOWNTO } 2)$) determine which group's output is selected.

  - **VHDL Code**:

    ```vhdl
    LIBRARY ieee;
    USE ieee.std_logic_1164.all;
    
    ENTITY mux16to1 IS
      PORT (
        w : IN  STD_LOGIC_VECTOR(15 DOWNTO 0);
        s : IN  STD_LOGIC_VECTOR(3 DOWNTO 0);
        f : OUT STD_LOGIC
      );
    END mux16to1;
    
    ARCHITECTURE Structural OF mux16to1 IS
      SIGNAL m : STD_LOGIC_VECTOR(3 DOWNTO 0);
    BEGIN
      -- First stage: Four 4-to-1 MUXes
      G1: FOR i IN 0 TO 3 GENERATE
        Muxes: mux4to1 PORT MAP (
          w0 => w(4*i),
          w1 => w(4*i+1),
          w2 => w(4*i+2),
          w3 => w(4*i+3),
          s  => s(1 DOWNTO 0),
          f  => m(i)
        );
      END GENERATE;
      -- Second stage: One 4-to-1 MUX
      Mux5: mux4to1 PORT MAP (
        w0 => m(0),
        w1 => m(1),
        w2 => m(2),
        w3 => m(3),
        s  => s(3 DOWNTO 2),
        f  => f
      );
    END Structural;
    ```

- **Explanation**:

  - **Hierarchy**:

    - The design leverages modularity by reusing the 4-to-1 MUX component.
    - Simplifies the construction of complex multiplexers.

  - **Select Lines**:

    - $s(1 \text{ DOWNTO } 0)$: Controls selection within each group in the first stage.
    - $s(3 \text{ DOWNTO } 2)$: Controls selection among the groups in the second stage.