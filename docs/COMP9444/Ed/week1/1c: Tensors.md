---
title: '1c: Tensors'
createTime: 2024/09/24 00:44:42
permalink: /COMP9444/yvw79t0d/
---

<div>

## Tensor Basics

You will be expected to have good understanding of deep learning frameworks such as PyTorch to excel in the course. You need to edit or write PyTorch code for your assignment 1 and also you need to write code for the group project. 

Although we won't be teaching PyTorch, as we believe you can quickly grasp it based on your understanding of the Python programming language. However, we will be refreshing some important aspects of PyTorch and giving demos wherever possible throughout the term. 



### **What is PyTorch?**

PyTorch is a Python-based scientific computing package serving two broad purposes:

- A replacement for Numpy to use the power of GPUs and other accelerators
- An automatic differentiation library that is useful to implement neural networks

**Tensors**

Tensors are a specialised data structure that are very similar to arrays and matrices. In PyTorch, tensors encode the inputs and outputs of a model, as well as the model's parameters. Tensors are similar to Numpy's ndarrays, except that tensors can run on GPUs or other specialised hardware to accelerate computing. 

Neural network computations are just a bunch of linear algebra operations on *tensors*, a generalisation of matrices. A vector is a 1-dimensional tensor, a matrix is a 2-dimensional tensor, an array with three indices is a 3-dimensional tensor (RGB color images for example). The fundamental data structure for neural networks are tensors and PyTorch (or other deep learning frameworks such as TensorFlow, etc. ) is built around tensors.

**Tensor Initialisation**

Tensors can be created directly from data. The data type is automatically inferred.

```python
import torch
import numpy as np
data = [[1,2], [3,4]]
x_data = torch.tensor(data)
print(x_data)
```

Tensors can be created from Numpy arrays (and vice versa)

```python
import numpy as np
np_array = np.array(data)
print(np_array)
x_data = torch.from_numpy(np_array)
print(x_data)
```

We can also call `torch.tensor()` with the optional `dtype` parameter, which will set the data type. Some useful datatypes are: `torch.boo`l, torch.float, and torch.long

```python
import torch
data = [[1,2], [3,4]]
x_data = torch.tensor(data, dtype=torch.float)
print(x_data)
```

```python
import torch
data = [[1,2], [3,4]]
x_data = torch.tensor(data, dtype=torch.bool)
print(x_data)
```

**Tensor from a Numpy Array**

We can also initialise a tensor from a `Numpy` array.

```python
import numpy as np
import torch
data = [[1,2], [3,4]]
ndarray = np.array(data)
x_tensor = torch.from_numpy(ndarray)
print(x_tensor)
```

**From existing Tensor**

```python
import torch

initial_tensor = torch.tensor([[4., 5.], [6., 7.]])
print(initial_tensor)

# Initialise a new tensor of 1s
new_tensor_ones = torch.ones_like(initial_tensor)
print(new_tensor_ones)

# Initialise a new tensor of 0s
new_tensor_zeros = torch.zeros_like(initial_tensor)
print(new_tensor_zeros)

# Initialise a new tensor with all elements sampled from a uniform distribution between 0 and 1
new_tensor_rand = torch.rand_like(initial_tensor)
print(new_tensor_rand)

# Initialise a new tensor where all elements are sampled from a normal distribution
new_tensor_randn = torch.randn_like(initial_tensor)
print(new_tensor_randn)
```

**Instantiating tensors by specifying their shapes**

There are many ready methods where we can instantiate tensors by specifying their shapes, namely, torch.zeros(), torch.ones(), torch.rand(), and torch.randn()

```python
import torch
shape = (2, 3, 4)

x_zeros = torch.zeros(shape)
print(x_zeros)

x_ones = torch.ones(shape)
print(x_ones)

torch.manual_seed(142)
random = torch.rand(shape)
print(random)
```

You can also create a tensor with `torch.arange(start, end, step, *)`, which returns a `1-D` tensor with elements from `0` to `end-1`. 

```python
import torch
x = torch.arange(start=0, end=10, step=2)
print(x)
```

**Tensor Shape**

You can use `dtype` to check the data type of a tensor

```python
import torch
x = torch.rand(3,2)
print(x.dtype)
```

The shape property  can be used to check the shape of a tensor. It helps to identify dimensions of a tensor. 

```python
import torch 
x = torch.Tensor([[11, 12], [13, 14], [15, 16]])
print(x.shape)
```

We can also check the size of a particular dimension of a tensor using `size()` method

```python
import torch 
x = torch.Tensor([[11, 12], [13, 14], [15, 16]])
print(x.shape)
print(x.size(0))
```

We can also change the shape of a tensor with the `view()` method. 

```python
import torch 
x = torch.Tensor([[11, 12], [13, 14], [15, 16]])
print(x.shape)

# we can change the shape from (2,3) to (3,2)
x_view = x.view(3,2)
print(x_view)

# You can also use torch.reshape() for this
x_reshaped = torch.reshape(x, (3,2))
print(x_reshaped)
```

**Device**

Torch uses `device()` property to store tensors. Using `device()` property, we can determine tensor is stored on which device: GPU or CPU. 

```python
import torch
x = torch.Tensor([[7, 8], [9, 10], [15, 17]])
print(x)

# Determine on which device tensor is stored
print(x.device)

# Determine is a GPU is available, if so, move the tensor to the GPU
print(torch.cuda.is_available())

if torch.cuda.is_available():
    x.to('cuda')

```

**Tensor Operations**

We can perform many operations with tensors, similar to `Numpy`. 

```python
import torch

# creating a tensor
x = torch.ones(2, 3, 4)
print(x)

# Element-wise addition
print(x + 3)

# Element-wise subtraction
print(x - 0.5)

```

```python
# Element-wise multiplication
import torch

# creating a tensor
x = torch.ones(2, 3, 4)
print(x)

print(x * 2)
```

```python
# Element-wise Division
import torch

# creating a tensor
x = torch.ones(2, 3, 4)
print(x)

print(x / 2)
```

We can use `torch.cat()` to concatenate tensors

```python
import torch

# creating a tensor
x = torch.ones(2, 2, 4)
print(x)

y = torch.ones(2, 2, 4)
print(y)

z_cat = torch.cat([x, y], dim=0)
print(z_cat)
```

```python
import torch

# creating a tensor
x = torch.ones(2, 2, 4)
print(x)

y = torch.ones(2, 2, 4)
print(y)

z_cat = torch.cat([x, y], dim=1)
print(z_cat)
```

**Arithmetic Operations**

We can apply various arithmetic operations on tensors, similar to Numpy operations.

```python
import torch
x = torch.tensor([1, 2, 3], dtype=torch.float)
y = torch.tensor([4, 5, 6], dtype=torch.float)
print(x+y)

# you can also use torch.add()
print(torch.add(x,y))

```

```python
# You can also do complex operations on tensors
import torch
x = torch.tensor([1, 2, 3], dtype=torch.float)
y = torch.tensor([4, 5, 6], dtype=torch.float)

print(torch.add(x,y))
print(torch.add(x,y).sum())
```

**Dot Product and Matrix Multiplication**

```python
import torch
x = torch.tensor([1, 2, 3], dtype=torch.float)
y = torch.tensor([4, 5, 6], dtype=torch.float)
# Dot product
print(x.dot(y))
```

```python
import torch
x = torch.tensor([[1, 2, 3], [4, 5, 6]], dtype=torch.float)
y = torch.tensor([[1, 2], [3, 4], [5, 6]], dtype=torch.float)

# Matrix Multiplication
print(torch.matmul(x, y))

# you can also use torch.mm() 
print(torch.mm(x, y))

# or you can use x@y
print(x@y)
```

## PyTorch Installation and more

There are many excellent PyTorch tutorials online and also on LinkedIn Learning.

### [PyTorch Installation and Getting started](https://pytorch.org/get-started/locally/)

The best and obvious place to start learning PyTorch is the PyTorch official documentation. The PyTorch community has created a well-documented set of tutorials, which provides a guided path from the basics of tensors to constructing deep neural networks. 

### [PyTorch Essential Training: Deep Learning](https://www.linkedin.com/learning/pytorch-essential-training-deep-learning-23753149?trk=learning-serp_learning-search-card_search-card&upsellOrderOrigin=default_guest_learning) (1 hour 21 mins)

Topics include:

- PyTorch overview and Introduction to Google Colab
- Tensors
- Creating Tensors
- Manipulate Tensors
- Developing a Deep Learning Model



### [Hands-On PyTorch Machine Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning?trk=learning-serp_learning-search-card_search-card&upsellOrderOrigin=default_guest_learning) (56 mins)

Topics include:

- PyTorch Basics
- Torchvision
- Torchaudio
- Torchtext

</div>