---
title: 🐟 Week 02
createTime: 2024/08/27 20:33:52
permalink: /COMP2511/xwupu562/
---

## 🧬 Inheritance

---

In Java, a class can inherit attributes and methods from another class. The class that inherits the properties is known as the sub-class or the child class. The class from which the properties are inherited is known as the superclass or the parent class.

Also known ask a “**is-a**” relationship

## 🧩 Inheritance and Constructor Usage

```java
package shapes;

public class Shape {
    public String color;
    public Shape(String color) {
				super();
        System.out.println("Inside Shape constructor");
        this.color = color;
    }
    public void method1() {
	    System.out.println("hi");
    }
}
```

```java
public class Rectangle extends Shape {
    public int height;
    public int width;

    public Rectangle(String color) {
        super(color);
        System.out.println("Inside Rectangle constructor with one argument");
    }

    public Rectangle(String name, int width, int height) {
        this(name);
        this.width = width;
        this.height = height;
        System.out.println("Inside Rectangle constructor with three arguments");
    }
    
    @Override
    public void method1() {
	    System.out.println("hello");
    }
    
    public static void main(String[] args) {
        Rectangle r = new Rectangle("red", 10, 20);
        System.out.println(r.color);
        System.out.println(r.width);
        System.out.println(r.height);
        r.method1(); //
    }
}
```

- What is the difference between `super` and `this`?

  `super` refers to the immediate parent class whereas `this` refers to the current class

- What is the role of `this()` in a constructor?

  - `super()` acts as a parent class constructor and should be the first line in a child class constructor
  - `this()` acts as a current class constructor (can be used for method overloading)

- In the provided code, what does `super(color)` do?

  In the provided code, `super(color)` calls the constructor of the superclass `Shape`, passing `color` as an argument. This sets the color of the `Shape` part of the `Rectangle` to the provided color.

- Does Shape’s constructor call `super()` and if so, what does that do?

  The Shape's constructor does not explicitly call `super()`. However, in Java, every constructor automatically calls `super()` as the first line if no other call to `super()` or `this()` is explicitly made. This calls the parent class's no-argument constructor. In this case, Shape's parent class is Object (as Object is the parent of all classes in Java), so it would call Object's no-argument constructor. This helps to ensure that all of the parent class's attributes are correctly initialized.

- How does the Rectangle class inherit properties from the Shape class?

  The Rectangle class inherits properties from the Shape class through the 'extends' keyword in its class declaration. This means that it automatically has any attributes and methods that the Shape class has, unless the Rectangle class overrides them. In the provided code, this includes the 'color' attribute from the Shape class.

## 🔬 Understanding Static Fields and Methods

```java
package circle;

public class Circle extends Object {
    // Every class extends Object, it is not needed though
    private static final double pi = 3.14159;
    private int r;
	
    // Only 1 variable for all Circle objects
    private static int no_circles = 0; 

    public Circle(int r) {
        super(); // not needed
        no_circles++;
        this.r = r;
    }
    
    public double circumference() {
        return 2 * pi * r;
    }
    
    public static int getCirclesCreated() {
        return no_circles;
    }
    
    public static void main(String[] args) {
        Circle c = new Circle(5);
        System.out.println(c.circumference());

        // Static methods can be called without an instance
        System.out.println(Circle.getCirclesCreated()); // 1
        Circle c1 = new Circle(5);
        Circle c2 = new Circle(5);
        System.out.println(Circle.getCirclesCreated()); // 3
    }
}
```

- What is the purpose of making a field `static` in a class and when should we use it?

  **Static fields** are variables that are common and available to all instances of a Class. They belong to the Class, rather than an instance.

- How do `static` methods differ from non-static methods and what are some typical use cases for each?

  Static methods belong to the class itself and can be called without creating an instance of the class. They are often used as utility or helper methods. Non-static methods, on the other hand, require an instance of the class to be called and are typically used when needing to access or modify the instance fields of a class.

- Can a `static` method access non-static fields in the class? Why or why not?

  A `static` method cannot access non-static fields in the class because a `static` method belongs to the class itself, not an instance of the class. Non-static fields are associated with instances of the class, so they don't exist when a `static` method is called without an instance of the class.

- Can you override a `static` method? Why or why not?

  The `static` keyword signifies that a method or field belongs to the class, not an instance, allowing direct access without creating an instance. In Java, `static` and non-static methods can't override each other due to their different scopes - class and instance.

## 📚 Documentation

### Pros of Commenting: 📝

- **Clarity:** 💡 Comments can provide additional insight into what a block of code is supposed to accomplish, making it easier to understand.
- **Collaboration:** 👥 They facilitate collaboration by helping other developers understand your code, which can be particularly useful in team environments.
- **Debugging:** 🐞 Comments can help during debugging by providing context about what each part of the code is supposed to do.
- **Documentation:** 📚 Well-commented code can serve as its own form of documentation, making it easier to revisit, maintain and update.

### Cons of Commenting: ❌

- **Maintenance**: ⏲️ If comments are not updated along with code changes, they can become **stale** and misleading.
- **Redundancy:** 🔄 Overly descriptive comments can be redundant if the code is self-explanatory, leading to unnecessary clutter.
- Could possibly hint that your design/code is **too complex**

### 📚 JavaDoc

- JavaDoc is a standardized method for documenting Java code.
- It's primarily used for writing comments specifically for class and method definitions.
- JavaDoc comments facilitate the automatic generation of documentation pages.
- While the use of JavaDoc is not required in COMP2511 unless specified, it's beneficial to adopt this practice in assignments to improve code readability and maintainability.

```java
/**
 * The class represents a circle with a specific radius.
 * It provides methods to calculate the area and circumference of the circle.
 */
public class Circle {
    /**
     * The radius of the circle.
     */
    private double radius;

    /**
     * Constructs a Circle object with the specified radius.
     * 
     * @param radius the radius of the circle
     * @throws IllegalArgumentException if radius is negative
     */
    public Circle(double radius) {
        if (radius < 0) {
            throw new IllegalArgumentException("Radius cannot be negative");
        }
        this.radius = radius;
    }

    /**
     * Returns the radius of the circle.
     * 
     * @return the radius of the circle
     */
    public double getRadius() {
        return radius;
    }

    /**
     * Sets the radius of the circle.
     * 
     * @param radius the new radius of the circle
     * @throws IllegalArgumentException if radius is negative
     */
    public void setRadius(double radius) {
        if (radius < 0) {
            throw new IllegalArgumentException("Radius cannot be negative");
        }
        this.radius = radius;
    }

    /**
     * Calculates and returns the area of the circle.
     * 
     * @return the area of the circle
     */
    public double getArea() {
        return Math.PI * Math.pow(radius, 2);
    }
}
```

## 🟢Access Modifier

![img](img/image%20(2).png)

```java
public class MyClass {
    private int x; // Can only be accessed within MyClass
    public int y; // Can be accessed anywhere
    protected int z; // Can be accessed within the same package and through inheritance
    int w; // AKA 'package private' - Can be accessed within the same package (default access modifier)
}
```

## 👨‍💻 Code Demonstration

- Construct an **`Employee`** class, equipped with fields for **`name`** and **`salary`**.
- Develop setters and getters, ensuring they are thoroughly documented using JavaDoc.
- Create a **`Manager`** class, which **extends** the **`Employee`** class, and incorporates an additional **`hireDate`** field.
- Override the **`toString()`** method to provide a custom string representation of the object.
- Implement the **`equals()`** method to enable accurate comparison of objects.