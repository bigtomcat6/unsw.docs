---
title: Flip flops
createTime: 2024/10/22 23:29:31
permalink: /COMP3222/2p7cl10g/
---

## Why Memory Elements Are Needed

In digital systems, it's often necessary to **store data** or maintain a state over time. Memory elements like **flip-flops** and **latches** are used to achieve this by retaining binary information.

- **Example: Alarm System**
  - **Scenario**: In an alarm system, once a sensor detects an intrusion, the alarm should remain active even if the intruder leaves immediately.
  - **Solution**: A flip-flop can be used to store the alarm state. Once set by the sensor trigger, it keeps the alarm active until a **reset** signal is provided to turn it off.
  - **Importance**: This memory capability is essential for systems that need to remember events or conditions beyond their immediate occurrence.

## Flip-Flops & Latches Overview

- **Flip-Flop**:

  - A bistable device that **stores one bit** of information.
  - Changes state on a specific **clock edge** (rising or falling).
  - **Edge-triggered**: Responds only at the moment of the clock transition, minimizing timing issues.

- **Latch**:

  - A simpler memory device compared to a flip-flop.
  - Stores one bit of data based on the level of the clock signal (level-sensitive).
  - **Transparent** when enabled: The output follows the input while the enable signal is active.

- **Applications**:

  - Used in building registers, counters, and memory devices.
  - Essential in synchronizing data in sequential circuits.


## Basic Types of Latches and Flip-Flops

### **SR Latch Using NOR Gates**

- **Structure**:

  - Composed of two cross-coupled NOR gates.
  - Inputs: **Set (S)** and **Reset (R)**.
  - Outputs: **Q** and its complement **Q'**.

- **Operation**:

  - **Set Condition** ($S = 1, R = 0$): Sets $Q = 1$.
  - **Reset Condition** ($S = 0, R = 1$): Resets $Q = 0$.
  - **Hold Condition** ($S = 0, R = 0$): Retains the current state.
  - **Invalid Condition** ($S = 1, R = 1$): Both outputs are forced to 0, which breaks the normal complementary relationship between $Q$ and $Q'$.

- **Issue**:

  - The invalid state ($S = R = 1$) should be avoided as it can lead to indeterminate or metastable states.

### **D Latch and D Flip-Flop**

- **D Latch**:

  - **Input**: Data input **D** and clock/enabling signal **Clk**.
  - **Operation**:

    - When **Clk = 1**: The latch is **transparent**, and the output $Q$ follows the input $D$.
    - When **Clk = 0**: The latch is **closed**, and $Q$ retains its last value.

  - **Advantages**:

    - Prevents invalid states by ensuring only valid input combinations.
    - Simpler design compared to SR latches.

- **D Flip-Flop**:

  - **Edge-Triggered Device**: Captures the input $D$ only on a specific clock edge (rising or falling).

  - **Positive-Edge-Triggered D Flip-Flop**:

    - Responds to the rising edge of the clock signal.
    - Ideal for synchronous circuits where actions are coordinated on clock edges.

  - **Truth Table**:

    | Clock Edge | D (Input) | Q (Next State) |
    | ---------- | --------- | -------------- |
    | Rising     | 0         | 0              |
    | Rising     | 1         | 1              |
    | Falling    | X         | No Change      |

  - **Advantages**:

    - Eliminates the transparency issue of latches.
    - Ensures data is sampled only at discrete times, reducing timing errors.

## Edge-Triggered Flip-Flops

- **Master-Slave Flip-Flop**:

  - Combines two latches in series:

    - **Master Latch**: Captures the input data on one clock phase.
    - **Slave Latch**: Transfers the data to the output on the opposite clock phase.

  - **Operation**:

    - The master latch is enabled when the clock is low, and the slave latch is enabled when the clock is high.
    - This arrangement ensures that changes in input data do not affect the output until the next clock cycle.

- **VHDL Example of a D Flip-Flop**:

  ```vhdl
  LIBRARY ieee;
  USE ieee.std_logic_1164.all;
  
  ENTITY flipflop IS
    PORT (
      D     : IN  STD_LOGIC;
      Clock : IN  STD_LOGIC;
      Q     : OUT STD_LOGIC
    );
  END flipflop;
  
  ARCHITECTURE Behavior OF flipflop IS
  BEGIN
    PROCESS (Clock)
    BEGIN
      IF rising_edge(Clock) THEN
        Q <= D;
      END IF;
    END PROCESS;
  END Behavior;
  ```

  - **Explanation**:

    - **rising_edge(Clock)**: A built-in function that checks for a transition from '0' to '1'.
    - Ensures that $Q$ is updated only on the rising edge of the clock.

## Registers and Shift Registers

### **Registers**

- **Definition**:

  - A register is a group of flip-flops used to store multiple bits of data simultaneously.
  - Common sizes include 8-bit, 16-bit, 32-bit, etc.

- **Functionality**:

  - Used to hold data temporarily during processing.
  - Essential in data transfer operations within a microprocessor.

- **8-Bit Register with Reset**:

  - **VHDL Code**:

    ```vhdl
    LIBRARY ieee;
    USE ieee.std_logic_1164.all;
    
    ENTITY reg8 IS
      PORT (
        D      : IN  STD_LOGIC_VECTOR(7 DOWNTO 0);
        Clock  : IN  STD_LOGIC;
        Resetn : IN  STD_LOGIC;
        Q      : OUT STD_LOGIC_VECTOR(7 DOWNTO 0)
      );
    END reg8;
    
    ARCHITECTURE Behavior OF reg8 IS
    BEGIN
      PROCESS (Resetn, Clock)
      BEGIN
        IF Resetn = '0' THEN
          Q <= (OTHERS => '0');  -- Asynchronously reset to 0
        ELSIF rising_edge(Clock) THEN
          Q <= D;
        END IF;
      END PROCESS;
    END Behavior;
    ```

  - **Explanation**:

    - **Asynchronous Reset**: The register resets immediately when `Resetn` is '0', regardless of the clock.
    - **Data Loading**: On each rising clock edge, the data input $D$ is loaded into the register.

### **Shift Registers**

- **Definition**:

  - A type of register where data can be moved left or right, effectively shifting the bits.
  - Used for serial-to-parallel or parallel-to-serial data conversion.

- **Types**:

  - **Serial-In Serial-Out (SISO)**
  - **Serial-In Parallel-Out (SIPO)**
  - **Parallel-In Serial-Out (PISO)**
  - **Parallel-In Parallel-Out (PIPO)**

- **Parallel-Access Shift Register**:

  - Allows loading data in parallel and shifting it serially.
  - **Applications**:

    - Data serialization for communication protocols.
    - Bit manipulation tasks in algorithms.

## Counters

- **Definition**:

  - Sequential circuits that go through a prescribed sequence of states upon the application of input pulses (typically clock pulses).

- **Types**:

  - **Up-Counter**: Counts incrementally (e.g., 0, 1, 2, ...).
  - **Down-Counter**: Counts decrementally (e.g., 9, 8, 7, ...).
  - **Up/Down Counter**: Can count both up and down based on a control input.
  - **Ring Counter**: A circular shift register with the output of the last flip-flop connected to the input of the first.
  - **Johnson Counter**: A twisted ring counter where the complement of the last flip-flop is fed back to the first.

- **Synchronous Counter**:

  - All flip-flops are driven by the same clock signal.
  - **Advantage**: Reduces propagation delays and glitches common in asynchronous (ripple) counters.

- **VHDL Code for a 4-bit Up-Counter**:

  ```vhdl
  LIBRARY ieee;
  USE ieee.std_logic_1164.all;
  
  ENTITY upcounter IS
    PORT (
      Clock  : IN  STD_LOGIC;
      Resetn : IN  STD_LOGIC;
      Q      : OUT STD_LOGIC_VECTOR(3 DOWNTO 0)
    );
  END upcounter;
  
  ARCHITECTURE Behavior OF upcounter IS
    SIGNAL Count : STD_LOGIC_VECTOR(3 DOWNTO 0);
  BEGIN
    PROCESS (Clock, Resetn)
    BEGIN
      IF Resetn = '0' THEN
        Count <= (OTHERS => '0');  -- Reset count to 0
      ELSIF rising_edge(Clock) THEN
        Count <= Count + 1;
      END IF;
    END PROCESS;
    Q <= Count;
  END Behavior;
  ```

  - **Explanation**:

    - **Count <= Count + 1**: Increments the counter on each rising clock edge.
    - **Overflow**: The counter wraps around to 0 after reaching its maximum value (15 for a 4-bit counter).

## Timing Parameters

Understanding timing parameters is crucial for ensuring reliable operation in synchronous circuits.

1. **Propagation Delay ($t_{pd}$ or $t_{cQ}$)**:

   - The time taken for the output $Q$ to change after the clock edge occurs.
   - Affects the maximum operating frequency of the circuit.

2. **Setup Time ($t_{su}$)**:

   - The minimum time the input data $D$ must be stable **before** the active clock edge.
   - Violating $t_{su}$ can cause metastability or incorrect data being captured.

3. **Hold Time ($t_h$)**:

   - The minimum time the input data $D$ must remain stable **after** the active clock edge.
   - Ensures that the data is properly latched.

### **Example Calculation**

- **Given**:

  - $t_{su} = 0.6 \, \text{ns}$
  - $t_h = 0.4 \, \text{ns}$
  - $t_{cQ} = 0.8 \, \text{ns}$ to $1.0 \, \text{ns}$
  - Inverter (NOT gate) delay $t_{\text{NOT}} = 1.1 \, \text{ns}$

- **Calculating Minimum Clock Period ($t_{\text{min}}$)**:

  $$
  t_{\text{min}} = t_{cQ}^{\text{max}} + t_{\text{NOT}}^{\text{max}} + t_{su} = 1.0 \, \text{ns} + 1.1 \, \text{ns} + 0.6 \, \text{ns} = 2.7 \, \text{ns}
  $$

- **Maximum Clock Frequency ($F_{\text{max}}$)**:

  $$
  F_{\text{max}} = \frac{1}{t_{\text{min}}} = \frac{1}{2.7 \times 10^{-9} \, \text{s}} \approx 370 \, \text{MHz}
  $$

- **Interpretation**:

  - The circuit cannot operate correctly above 370 MHz due to timing constraints.
  - Designers must ensure that the clock frequency is within allowable limits to prevent errors.

## Clock Skew and Its Effects

- **Definition**:

  - **Clock Skew** is the difference in arrival times of the clock signal at different components in a synchronous system.

- **Causes**:

  - Variations in the clock distribution network.
  - Differences in wire lengths, capacitance, and propagation delays.

- **Types of Skew**:

  - **Positive Skew**: The clock arrives later at the destination flip-flop compared to the source flip-flop.
    - **Effect**: Can help meet setup time requirements but may cause hold time violations.
  - **Negative Skew**: The clock arrives earlier at the destination flip-flop.
    - **Effect**: Can cause setup time violations but helps with hold time.

- **Impact on Circuit Design**:

  - **Setup Time Violation**: Occurs if data doesn't arrive at the next flip-flop before the clock edge due to excessive skew.
  - **Hold Time Violation**: Occurs if data changes too soon after the clock edge, possibly being captured incorrectly due to skew.

- **Mitigation Techniques**:

  - Careful clock tree design to balance paths.
  - Use of clock buffers and skew-compensating circuits.
  - Implementing proper timing analysis during the design phase.

## JK and T Flip-Flops

### **JK Flip-Flop**

- **Inputs**: **J**, **K**, and **Clock**.
- **Functionality**:

  - **J = K = 0**: No change (hold state).
  - **J = 0**, **K = 1**: Reset ($Q$ becomes '0').
  - **J = 1**, **K = 0**: Set ($Q$ becomes '1').
  - **J = K = 1**: Toggle ($Q$ changes to the opposite state).

- **Advantage**:

  - Eliminates the invalid state present in the SR flip-flop.
  - Versatile for various applications like counters and control circuits.

### **T Flip-Flop**

- **Input**: **T** (Toggle) and **Clock**.

- **Characteristic Equation**:

  $$
  Q_{\text{next}} = T \oplus Q_{\text{current}}
  $$

- **Functionality**:

  - **T = 0**: No change (hold state).
  - **T = 1**: Toggle the current state.

- **Application**:

  - Commonly used in binary counters and frequency dividers.
  - Simplifies design where toggling behavior is required.

- **VHDL Implementation of a T Flip-Flop**:

  ```vhdl
  LIBRARY ieee;
  USE ieee.std_logic_1164.all;
  
  ENTITY t_flipflop IS
    PORT (
      T     : IN  STD_LOGIC;
      Clock : IN  STD_LOGIC;
      Q     : OUT STD_LOGIC
    );
  END t_flipflop;
  
  ARCHITECTURE Behavior OF t_flipflop IS
  BEGIN
    PROCESS (Clock)
    BEGIN
      IF rising_edge(Clock) THEN
        IF T = '1' THEN
          Q <= NOT Q;
        ELSE
          Q <= Q;
        END IF;
      END IF;
    END PROCESS;
  END Behavior;
  ```

- **Explanation**:

  - On each rising clock edge, if $T = '1'$, the output $Q$ toggles.
  - If $T = '0'$, the output $Q$ remains unchanged.

