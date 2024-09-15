---
title: Matplotlib refresher
createTime: 2024/09/14 12:05:12
permalink: /COMP9444/giizsbnb/
---

## Getting started with Matplotlib

In this section,  we'll give a brief introduction to the [Matplotlib](http://matplotlib.org/) module which is one of the most popular Python packages used for data visualization.

### Plot

The first function we introduce is `plot`, which allows you to plot 2D data. 

```python
import numpy as np
import matplotlib.pyplot as plt

# We plot the graph of y = x^2
x = np.arange(-10, 10) # x coordinate
y = x**2 # y coordinate

plt.plot(x, y) # Plot the graph
plt.show()  # You need to call plt.show() to show the plotted graph

```

### Multiple functions

We can also plot multiple functions in the same graph, and add a title, legend, and axis labels:

```python
import numpy as np
import matplotlib.pyplot as plt

# Create the x and y coordinates
x = np.arange(-10, 10) 
y1 = x**2 
y2 = x**3

# Plot multiple functions
plt.plot(x, y1)
plt.plot(x, y2)
plt.xlabel('x axis')
plt.ylabel('y axis')
plt.title('introduction to matplotlib')
plt.legend(['x^2', 'x^3'])
plt.show()
```

### Subplot

Sometimes we want to can plot different funtions in the different plot but in the same figure, in this case we can use the `subplot` function. 

```python
import numpy as np
import matplotlib.pyplot as plt

# subplot(nrows, ncols, plot_number)
# Arugments are number of rows and colums of the plot 
# and the active plot number

# Create the x and y coordinates
x = np.arange(-10, 10) 
y1 = x**2 
y2 = x**3

# Create a subplot grid with 1 row and 2 colums
# and set the active plot number to 1
plt.subplot(1, 2, 1)

# Make the first plot at the active plot 
plt.plot(x, y1)
plt.title('x^2')

# Set the active plot number and make the second plot
plt.subplot(1, 2, 2)
plt.plot(x, y2)
plt.title('x^3')

# Show the figure.
plt.show()
```

## Imshow

You can also use the `imshow` function to show **images**. 

```python
import numpy as np
from cv2 import imread
import matplotlib.pyplot as plt

img = imread('cat.jpg')

# Plot the image
plt.imshow(img)

# Imshow works better if the data is with type unit8, here we 
# cast the image to uint8 explicitly.
plt.imshow(np.uint8(img))

# Show the image
plt.show()
```

![img](img/cat.jpeg)

## Getting started with Matplotlib

In this section, we'll give a brief introduction to the Matplotlib module which is one of the most popular Python packages used for data visualization.

Please check the [Matplotlib official website](https://matplotlib.org/stable/tutorials/index.html) for more tutorials.


<iframe src="https://nbviewer.jupyter.org/urls/unsw.cdn.t.bigtomcat.com/unsw_docs/COMP9444/Ed/week0.ipynb" width="800" height="400"></iframe>

```ipynb
%matplotlib inline

import numpy as np
import matplotlib.pyplot as plt

# We plot the graph of y = x^2
x = np.arange(-10, 10) # x coordinate
y = x**2 # y coordinate

plt.plot(x, y) # Plot the graph
plt.show()  # You need to call plt.show() to show the plotted graph


import numpy as np
import matplotlib.pyplot as plt

# Create the x and y coordinates
x = np.arange(-10, 10) 
y1 = x**2 
y2 = x**3
y3 = np.cos(x **2)
y4 = np.sin(x **2)

fig, ax = plt.subplots(2,2)
ax[0,0].plot(x, y1)
ax[0,0].set_title('Axis [0,0]')
ax[0,1].plot(x, y2)
ax[0,1].set_title('Axis [0,1]')
ax[1,0].plot(x, y3)
ax[1,0].set_title('Axis [1,0]')
ax[1,1].plot(x, y4)
ax[1,1].set_title('Axis [1,1]')

for a in ax.flat:
    a.set(xlabel='x-label', ylabel='y-label')

# Hide x labels and tick labels for top plots and y ticks for right plots.
for a in ax.flat:
    a.label_outer()
    
# Plot multiple functions
#plt.plot(x, y1)
#plt.plot(x, y2)
#plt.xlabel('x axis')
#plt.ylabel('y axis')
#plt.title('introduction to matplotlib')
#plt.legend(['x^2', 'x^3'])
#plt.show()

import numpy as np
from cv2 import imread
import matplotlib.pyplot as plt

img = imread('cat.jpeg')

# OpenCV stores color images using the BGR convention 
# while matplotlib uses the RGB convention.
plt.imshow(img[:,:,[2,1,0]])

# Show the image
plt.show()
```

