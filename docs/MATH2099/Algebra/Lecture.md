---
title: Lecture
author:
createTime: 2024/05/31 21:57:46
permalink: /MATH2099/Algebra/Lecture
---

## Week 1 Thrusday

# Chapter 1: Linear Equations and Matrices

::: details 
PDF: [Linear Equations and Matrices](/MATH2099/MATH2099_LA_Chap01_1pp.pdf)
:::

### 1.1 Matrix Multiplication


The Linear Algebra strand of this course builds on the substantial amount of linear algebra included in first-year Mathematics courses. The Algebra notes of MATH1131 and MATH1231 can be downloaded from MATH2099 Moodle. We assume that you are familiar with the topics on linear algebra covered in first-year courses.

::: info Objectives of this section:

- To revise matrix multiplication.
- Matrix partitioned into submatrices.

:::

#### Matrix Multiplication

- $M_{mn}(\mathbb{C})$ is the set of $m \times n$ matrices with entries in $\mathbb{C}$.
- The sum of two matrices is defined if and only if they are of the same size. An entry of the sum is the sum of the corresponding entries of the two summands.
::: note
$$\begin{pmatrix} 3 & 1 \\ 4 & 2\end{pmatrix} + \begin{pmatrix} 2 & 0 \\ 0 & 9\end{pmatrix} = \begin{pmatrix} 5 & 4 \\ 1 & 11\end{pmatrix}$$
:::
- We can always multiply a matrix $A$ by a scalar $\lambda$; an entry of the matrix $\lambda A$ is the product of $\lambda$ and the corresponding entry of $A$.
- If $A$ is $m \times n$ and $B$ is $q \times p$, then the product $AB$ exists if and only if $n = q$ and the resulting matrix is $m \times p$. In general, $AB \neq BA$.
::: note
$$(m \times n) \times (n \times p) = m \times p.$$
:::

::: tip Definition:
Let $A \in M_{mn}$, $B = (b_1 | \cdots | b_p) \in M_{np}$. 

We define the **matrix product $AB$** to be the $m \times p$-matrix

$$ AB = (Ab_1 | \cdots | Ab_p) \in M_{mp}. $$

In other words, we make matrix-vector product of $A$ with each column of $B$.

::: details Example

Suppose $A$ and $B$ are matrices given by:

$$ A = \begin{pmatrix} 2 & -3 & 1 \\ 0 & 4 & -2 \end{pmatrix}, \quad B = \begin{pmatrix} 2 & 0 \\ 9 & 9 \end{pmatrix}. $$

Find the products $AB$ and $BA$ (if they exist).

::: details Solution

**1. For $AB$:**

- $A$ is a $2 \times 3$ matrix $(n_A = 3)$.
- $B$ is a $2 \times 2$ matrix $(n_B = 2)$.

$\therefore AB$ is a $2 \times 2$ matrix.

$\because 3 \neq 2 \quad (n_A \neq n_B)$

$\therefore AB$ and $BA$ are not exist.

---

**2. For $BA$:**

$BA = \begin{pmatrix} 2 & 0 \\ 9 & 9 \end{pmatrix} \begin{pmatrix} 2 & -3 & 1 \\ 0 & 4 & -2 \end{pmatrix}$

$\quad\quad= \begin{pmatrix} 2(2) + 0(0) & 2(-3) + 0(4) & 2(1) + 0(-2) \\ 9(2) + 9(0) & 9(-3) + 9(4) & 9(1) + 9(-2) \end{pmatrix}$

$\quad\quad= \begin{pmatrix} 2 & -6 & 2 \\ 18 & 9 & -9 \end{pmatrix}$.

:::

---

Another way to think of the product of matrices $A$ and $B$ is that the $ij$-th entry of $AB$ is the product of $i$-th row of $A$ with the $j$-th column of $B$:

$$ [AB]_{ij} = (a_{i1} \cdots a_{in}) \begin{pmatrix} b_{1j} \\ \vdots \\ b_{nj} \end{pmatrix} = a_{i1}b_{1j} + \cdots + a_{in}b_{nj} = \sum_{k=1}^{n} a_{ik}b_{kj}. $$

We can generalize this to matrices which are partitioned into submatrices.

::: details Example

Suppose that $A = \begin{pmatrix} M & N \\ P & Q \end{pmatrix}$, $B = \begin{pmatrix} R \\ T \end{pmatrix}$. The submatrices $M$ and $P$, $N$ and $Q$, $R$ and $T$ have the same number of columns pair by pair. Likewise, $M$ and $N$, $P$ and $Q$ have the same number of rows, by pair.

Then $AB = \begin{pmatrix} MR + NT \\ PR + QT \end{pmatrix}$, provided that each entry is well-defined.
:::

---

In particular, if $v_1, v_2, \ldots, v_n \in \mathbb{R}^m$, then:

$$ (v_1 | v_2 | \cdots | v_n) \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix} = x_1v_1 + x_2v_2 + \cdots + x_n v_n. $$

**Let $A$ be an $n \times n$ matrix and $v_1, v_2, v_3 \in \mathbb{R}^n$. Suppose that:**

$$ \begin{cases} Av_1 = \lambda v_1 \\ Av_2 = \alpha v_1 + \lambda v_2 \\ Av_3 = \beta v_1 + \gamma v_2 + \lambda v_3 \end{cases} $$

and

$$ M = \begin{pmatrix} \lambda & \alpha & \beta \\ 0 & \lambda & \gamma \\ 0 & 0 & \lambda \end{pmatrix}. $$

Hence,

$$A(v_1 | v_2 | v_3)$$
$$= (Av_1 | Av_2 | Av_3)$$
$$= (\lambda v_1 | \alpha v_1 + \lambda v_2 | \beta v_1 + \gamma v_2 + \lambda v_3)$$
$$= (v_1 | v_2 | v_3) \begin{pmatrix} \lambda & \alpha & \beta \\ 0 & \lambda & \gamma \\ 0 & 0 & \lambda \end{pmatrix}.$$

Therefore,

$$ A(v_1 | v_2 | v_3) = (v_1 | v_2 | v_3) M. $$

::: note
 - $\lambda = \begin{pmatrix} \lambda & 0 & 0 \\ 0 & \lambda & 0 \\ 0 & 0 & \lambda \end{pmatrix}$
 - See Chapter 4 for a use for this.
:::

---

### 1.2 Matrix Algebra

::: info Objectives of this section
- To recap properties of matrices.
- Matrix transpose, inverse; symmetric, skew-symmetric and orthogonal matrices.
:::

#### Properties of Matrices:

Suppose $A, B, C$ are matrices and $\lambda, \mu$ are scalars (either $\mathbb{R}$ or $\mathbb{C}$). 

**Assuming all relevant sums exist.**

1. $A + B = B + A$ (commutativity of addition)
2. $(A + B) + C = A + (B + C)$ (associativity of addition)
3. $A + O = A$ ( $O$ is a zero matrix with every entry zero)
4. $A + (-A) = O$ ($-A$ is the negative of $A$)
5. $\lambda (\mu A) = (\lambda \mu) A$
6. $(\lambda + \mu) A = \lambda A + \mu A$ (Distributive laws)
7. $\lambda (A + B) = \lambda A + \lambda B$ (Distributive laws)

**Assuming all relevant sums and products exist.**

8. $A(BC) = (AB)C$ (associativity of multiplication)
9. $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$
10. $A(\lambda B) = \lambda (AB) = A(\lambda B)$
11. $AI = IA = A$ ( $I$ is an identity matrix: a square matrix with diagonal entries 1 and other entries 0)

::: warning Question

**What is the “obvious” property that is missing?**

**Answer:** Commutativity – matrix multiplication is **not commutative** ( $AB \neq BA$ usually).
:::

---

#### Transpose and Inverse

::: tip Definition:

Let $A$ be an $m \times n$ matrix. The **transpose** of $A$, denoted by $A^T$, is the $n \times m$ matrix whose $ij$-entry is the $ji$-entry of $A$, for all $1 \leq i \leq m$ and $1 \leq j \leq n$.
:::

::: note e.g.
 $\begin{pmatrix} 3 & 4 \\ 7 & 9 \\ 2 & 1 \end{pmatrix}^T = \begin{pmatrix} 3 & 7 & 2 \\ 4 & 9 & 1 \end{pmatrix}$
:::

::: tip Definition:

Let $A$ be an $n \times n$ matrix. A matrix $X$ is called an **inverse** of $A$ iff $AX = XA = I$. 

If an inverse of $A$ exists, we say $A$ is **invertible**. 

Otherwise, we say $A$ is **singular** or **non-invertible**.
:::

::: note
$A^{-1}$
:::
---

#### Symmetric, Skew-symmetric, Orthogonal Matrices

::: tip  Definition:

- We call a matrix $A$ symmetric iff $A^T = A$.
- We call a matrix $A$ skew-symmetric iff $A^T = -A$.
- We call a matrix $A$ orthogonal iff $A^T A = A A^T = I$, i.e. $A^T = A^{-1}$.
:::

::: note
 - $\begin{pmatrix} 3 & 4 \\ 4 & 9 \end{pmatrix}$ is symmetric.
 - $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ is skew-symmetric.
 - Orthogonal:<br><br>
  $A = \frac{1}{5} \begin{pmatrix} 4 & -4 \\ 4 & 3 \end{pmatrix}$<br>
  $AA^T = \frac{1}{5} \begin{pmatrix} 4 & -4 \\ 4 & 3 \end{pmatrix} \frac{1}{5} \begin{pmatrix} 4 & 4 \\ -4 & 3 \end{pmatrix} = \frac{1}{25} \begin{pmatrix} 25 & 0 \\ 0 & 25 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$
:::

---

#### Properties of Transpose and Inverse

I will assume you know the following properties of transpose and inverse (see First Year Notes for the proofs):

1. $(A^T)^T = A$, for all $A \in M_{mn}$.
2. $(\lambda A + \mu B)^T = \lambda A^T + \mu B^T$, for all $A, B \in M_{mn}$ and scalars $\lambda, \mu$.
3. If $AB$ exists, then $(AB)^T = B^T A^T$.
::: note
 - $A: 2 \times 3 \quad \quad B: 3 \times 4$
 - $A^T: 3 \times 2 \quad\quad B^T: 4 \times 3$
:::
4. If $A \in M_{nn}$ is invertible, then the inverse of $A$ is unique.
::: note
 $A^{-1}$
:::
5. If both $A$ and $B$ (in $M_{nn}$) are invertible, then $AB$ is invertible and $(AB)^{-1} = B^{-1} A^{-1}$.
::: note
$(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}(IB) = (B^{-1}B) I = I$
:::

::: details Example

**Prove that if $A$ is invertible then $(A^{-1})^T = (A^T)^{-1}$.**


::: details Proof

We need to prove that $(A^{-1})^T$ is the inverse of $A^T$.

Now, $A^T (A^{-1})^T = (A^{-1} A)^T = I^T = I$, and $(A^{-1})^T A^T = (A A^{-1})^T = I^T = I$.

Hence $(A^{-1})^T$ is the inverse of $A^T$ and the result follows.

:::

::: details Example

Let $A, B, C$ be invertible matrices of the same size; suppose that $A$ is symmetric, $B$ is skew-symmetric and $C$ is orthogonal (i.e. $C^{-1} = C^T$). 

Simplify: $BB^T C^{-1} (AB C^T)^{-1} (CA)^T B^{-1}.$

::: details Solution

$BB^T C^{-1} (AB C^T)^{-1} (CA)^T B^{-1}$<br>
$= BB^T C^{-1} (C^T)^{-1} B^{-1} A^{-1} A^T C^T B^{-1}$<br>
$= B(-B)C^{-1} (C^{-1})^{-1} B^{-1} A^{-1} AC^{-1} B^{-1}$<br>
$= B(-B) (C^{-1} C) B^{-1} (A^{-1} A) C^{-1} B^{-1}$<br>
$= B(-B) I B^{-1} I C^{-1} B^{-1}$<br>
$= -B B B^{-1} C^{-1} B^{-1}$<br>
$= -B I C^{-1} B^{-1}$<br>
$= -BC^{-1} B^{-1} = -B(BC)^{-1}$

:::

---

### 1.3 Gaussian Elimination

::: info Objectives of this section:
- To revise Gaussian Elimination.
- To apply Gaussian Elimination to solve system of equation and to find inverse.
:::

#### Solving System of Linear Equations by Gaussian Elimination

::: details Example

Find the value of $c$ such that the system of linear equations

$$\begin{align*} x_1 \, &- \quad x_2 \, &=& \, 3 \\ x_1 \, & \quad \quad \quad \quad \quad \;\; - \, cx_3 \, &=& \, 1 \\  -2x_1 \, &+ \, (c+2)x_2 \;** - \, 4x_3 \, &=& \, -c - 8 \end{align*}$$

has infinitely many solutions. Solve the system for this value of $c$.

::: details Solution

We reduce the augmented matrix

$$\left( \begin{array}{ccc|c} 1 & -1 & 0 & 3 \\ 1 & 0 & -c & 1 \\ -2 & c+2 & -4 & -c-8 \end{array} \right)$$

$$R_2 \rightarrow R_2 - R_1$$
$$R_3 \rightarrow R_3 + 2 R_1$$

$$\left( \begin{array}{ccc|c} 1 & -1 & 0 & 3 \\ 0 & 1 & -c & -2 \\ 0 & c & -4 &  -c - 2 \end{array} \right)$$

$$R_3 \rightarrow R_3 - c R_2$$

$$\left( \begin{array}{ccc|c} 1 & -1 & 0 & 3 \\ 0 & 1 & -c & -2 \\ 0 & 0 & c^2 - 4 & c - 2\end{array} \right)$$

---

So our reduced system in augmented form is:

$$\left( \begin{array}{ccc|c} 1 & -1 & 0 & 3 \\ 0 & 1 & -c & -2 \\ 0 & 0 & c^2 - 4 & c - 2\end{array} \right)$$

When $c^2 - 4 \neq 0$, the **right-hand column is non-leading** and **all columns on the left are leading**, so the system has a _**unique**_ solution.

There are only two possibilities left: $c^2 - 4 = 0$ i.e. $c = \pm 2$.

When $c = -2$, the last row of the row-echelon form is $(0 \ 0 \ 0 | - 4)$, the system is **inconsistent** and so has _**no**_ solutions.

When $c = 2$, the system is **consistent** and **there is a non-leading column** on the left, so the system has _**infinitely many**_ solutions.

---

If $c = 2$ our reduced system becomes:

$$\left( \begin{array}{ccc|c} 1 & -1 & 0 & 3 \\ 0 & 1 & -2 & -2 \\ 0 & 0 & 0 & 0\end{array} \right)$$

To solve the system in this case, we first set the variable for the non-leading column to a parameter. Let $x_3 = t$. Then we back-substitute:

- Row 2: $x_2 - 2x_3 = -2$ and so $x_2 = -2 + 2t$.
- Row 1: $x_1 - x_2 = 3$ and so $x_1 = 3 + (-2 + 2t) = 1 + 2t$.

Hence the solution is:

$$x = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 1 + 2t \\ -2 + 2t \\ t \end{pmatrix} = \begin{pmatrix} 1 \\ -2 \\ 0 \end{pmatrix} + t \begin{pmatrix} 2 \\ 2 \\ 1 \end{pmatrix}, \ t \in \mathbb{R}.$$

:::

---

#### Finding Inverses

For a $2 \times 2$ matrix, we have a formula for the inverse.

Let $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$. If $ad - bc \neq 0$, then $A$ is invertible and

$$A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}.$$

In general, we can find the inverse of $A$ by reducing $(A | I)$ to reduced row-echelon form. 

If all columns on the left of the result are leading (at this stage the augmented matrix is in row-echelon form), then $A$ is invertible. Otherwise, the inverse of $A$ does not exist.

If $A$ is invertible, we continue to reduce the matrix to reduced row-echelon form $(I | B)$, and then $A^{-1} = B$.

---

::: details Example

Is the matrix

$$A = \begin{pmatrix} 1 & -1 & 2 \\ -1 & 1 & 1 \\ -1 & 2 & 0 \end{pmatrix}$$

invertible? If yes, find the inverse.

::: details Solution

$$\left( \begin{array}{ccc|ccc} 1 & -1 & 2 & 1 & 0 & 0 \\ -1 & 1 & 1 & 0 & 1 & 0 \\ -1 & 2 & 0 & 0 & 0 & 1 \\ \end{array} \right)$$

$$R_2 \rightarrow R_2 + R_1$$
$$R_3 \rightarrow R_3 + R_1$$

$$\left( \begin{array}{ccc|ccc}
1 & -1 & 2 & 1 & 0 & 0 \\
0 & 0 & 3 & 1 & 1 & 0 \\
0 & 1 & 2 & 1 & 0 & 1 \\
\end{array} \right)$$

$$R_2 \rightarrow R_3$$
$$R_3 \rightarrow R_2$$

$$\left( \begin{array}{ccc|ccc}
1 & -1 & 2 & 1 & 0 & 0 \\
0 & 1 & 2 & 1 & 0 & 1 \\
0 & 0 & 3 & 1 & 1 & 0 \\
\end{array} \right)$$

$$R_2 \rightarrow R_2 + R_1$$

$$\left( \begin{array}{ccc|ccc}
1 & 0 & 4 & 2 & 0 & 1 \\
0 & 1 & 2 & 1 & 0 & 1 \\
0 & 0 & 3 & 1 & 1 & 0 \\
\end{array} \right)$$

$$\rightarrow
\left( \begin{array}{ccc|ccc}
1 & 0 & 0 & \frac{2}{3} & -\frac{4}{3} & 0 \\
0 & 1 & 0 & \frac{1}{3} & \frac{4}{3} & 1 \\
0 & 0 & 1 & \frac{1}{3} & \frac{1}{3} & 0 \\
\end{array} \right) $$
$$\rightarrow
A^{-1} = \frac{1}{3} \left( \begin{array}{ccc}
2 & -4 & 0 \\
1 & -4 & 3 \\
1 & 1 & 0 \\
\end{array} \right)$$

:::

---
---