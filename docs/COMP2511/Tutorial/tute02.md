---
title: Tutorial 2
createTime: 2024/08/27 19:29:12
permalink: /COMP2511/dt8gedc7/
---


::: details Src/shapes

::: tabs 

@tab Rectangle.java
```java
package shapes;

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

    public static void main(String[] args) {
        Rectangle r = new Rectangle("red", 10, 20);
    }
}
```

@tab Shape.java
```java
package shapes;

public class Shape {
    public String color;

    public Shape(String color) {
        System.out.println("Inside Shape constructor");
        this.color = color;
    }
}
```

:::

::: details Src/access

::: tabs 

@tab A.java
```java
package access.package1;

/**
 * @author Aarthi A class defining variables with different access modifiers
 */
public class A {
    int var = 10;
    public int varPub = 20;
    protected int varPro = 30;
    private int varPriv = 40;

    public void methodA() {
        // Within same class, have access to all variables (default,
        // private,public,protected)
        System.out.println("var: " + var);
        System.out.println("varPub: " + varPub);
        System.out.println("varPro: " + varPro);
        System.out.println("varPriv: " + varPriv);

        A a = new A();
        // TODO Which of the following lines, when uncommented, will compile?
//        System.out.println("var: " + a.var);
//        System.out.println("varPro: " + a.varPro);
//        System.out.println("varPriv: " + a.varPriv);
    }

    protected void protectedMethod() {
        System.out.println("This method is protected.");
    }

}

```

@tab B.java
```java
package access.package1;

/**
 * @author Aarthi
 * A class defining variables with different access modifiers
 */
public class B extends A {

    public void methodB() {
        // Within the sub-class, have access to variables with default, public
        // and protected scope
        System.out.println("var: " + var);
        System.out.println("varPub: " + varPub);
        System.out.println("varPro: " + varPro);
        // The line below does not compile because
        // sub-classes do not have access to private variables in super class
//        System.out.println("varPriv: " + varPriv);

        B b = new B();
        System.out.println("var: " + b.var);
        System.out.println("varPub: " + b.varPub);
        System.out.println("varPro: " + b.varPro);

        A a = b;
        // TODO Does it make a difference that we're accessing these fields on
        // a variable of type A?
//        System.out.println("var: " + a.var);
//        System.out.println("varPub: " + a.varPub);
//        System.out.println("varPro: " + a.varPro);
    }

    // TODO Which of these two methods will work if uncommented (note the
    // different access modifier)?
//    @Override
//    public void protectedMethod() {
//
//    }

//    @Override
//    void protectedMethod() {
//
//    }

}
```
@tab C.java
```java
package access.package1;

public class C {

    public void methodC() {
        // A class C in the same package as another class A
        // has access to only variables in A with default, public and protected
        // scope

        A a = new A();
        System.out.println("var: " + a.var);
        System.out.println("varPub: " + a.varPub);
        System.out.println("varPro: " + a.varPro);

        // The line below does not compile because
        // this do not have access to private variables in super class
//        System.out.println("varPriv: " + varPriv);

        // TODO Are protected and default useful access modifiers?
    }

}
```

@tab D.java
```java
package access.package2;

import access.package1.A;

public class D {

    public void methodD() {
        // A class D in another package to a class A has only access to
        // variables in A with public scope

        A objA = new A();
        // The line below does not compile because variables with scope default
        // are only visible to classes in the same package
//        System.out.println("var: " + objA.var);
        System.out.println("varPub: " + objA.varPub);

        // The line below does not compile because variables with scope
        // protected are only visible to classes in the same package or
        // sub-classes
//        System.out.println("varPro: " + objA.varPro);

        // The line below does not compile because this class does not have
        // access to private variables in super class
//        System.out.println("varPriv: " + varPriv);
    }
}
```

@tab E.java
```java
package access.package2;

import access.package1.A;

public class E extends A {

    public void methodE() {
        // Subclasses in a different package can access public and protected
        // members.
        System.out.println("varPub: " + varPub);
        System.out.println("varPro: " + varPro);

        // Even if it's another instance of E
        E e = new E();
        System.out.println("varPub: " + e.varPub);
        System.out.println("varPro: " + e.varPro);

        A a = new A();
        System.out.println("varPub: " + a.varPub);
        // TODO Does the following line compile if uncommented?
//        System.out.println("varPro: " + a.varPro);
    }
}
```

@tab TestAccess.java
```java
package access.test;

// Classes A,B,C and D need to be imported as they live in a different package to TestAccess
import access.package1.A;
import access.package1.B;
import access.package1.C;
import access.package2.D;

public class TestAccess {
	
	public static void main(String[] args) {
		
		A objA = new A();
		objA.methodA();  	
	    System.out.println("---");
		B objB = new B();
		objB.methodB();
	    System.out.println("---");		
		C objC = new C();
		objC.methodC();
	    System.out.println("---");
		D objD = new D();
		objD.methodD();
	}
}
```

:::

## A. Code Review

Your tutor will provide you a link or open up the `src/shapes`, and use the `Shape` and `Rectangle` classes.

In groups, analyse the classes to answer the following questions:

1. What is the difference between `super` and `this`?
2. What about `super(...)` and `this(...)`?
3. What are static fields and methods?

## B. JavaDoc & Commenting

Within the `src` directory, create a new package called `employee`.

Create an `Employee` class which has private fields for an employee's name and salary and appropriate getters, setters, and constructors. Document the class with [JavaDoc](https://www.oracle.com/au/technical-resources/articles/java/javadoc-tool.html).

Use VSCode to create the getters and setters. 

In this course we are not going to require that you write JavaDoc, except when specified.

* What is meant by the term "self-documenting code"?
* Explain why comments can be considered a code smell.
* Discuss as a class whether code should have comments / JavaDoc

## C. Basic Inheritance & Polymorphism

This exercise continues on from the `Employee` class in Exercise B.

* How many constructors should the class have? What arguments should they take?

Create a `Manager` class that is a subclass of `Employee` and has a field for the manager's hire date.

* What constructors are appropriate?
* Is it appropriate to have a getter for the hire date? What about a setter?

Override the `toString()` method inherited from `Object` in both classes.

* What should the result of `toString()` contain?
* Does the method in `Manager` call the one in `Employee`?

## D. Equals
This exercise continues on from the work in Exercise C.

* What does the `==` operator do when comparing objects?
* Where have you seen this sort of behaviour before in other languages? How is the underlying data checked for equality in that scenario?
* How can we compare two objects for equality?
* What does it mean for objects to be considered equal? 
* What is the relationship between a super type and a sub type in terms of equality? Can a concrete instance of an `Employee` be equal to an instance of a `Manager`

Override the `equals()` method inherited from `Object` in both classes.
* What key things should the `equals()` method do?
* How should the type of the input object be checked? How should it be compared to the type of the calling object?
* How can the method in `Manager` utilise code in `Employee` to avoid repetition?

## E. Access Modifiers & Packages
In the src/access package, answer the questions marked TODO.