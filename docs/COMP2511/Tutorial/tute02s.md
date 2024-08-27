---
title: Tutorial 02 Solutions
createTime: 2024/08/27 19:57:16
permalink: /COMP2511/t68g3wmr/
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

::: details Src/employee

::: tabs

@tab Employee.java
```java
package employee;

/**
 * A named salaried employee
 *
 * @author Robert Clifton-Everest
 *
 */
public class Employee {
    private String name;
    private int salary;

    /**
     * Creates an Employee with the given name and salary.
     * @param name The full name of the employee.
     * @param salary The employee's yearly salary in dollars.
     */
    public Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }

    /**
     * Returns the employee's name
     * @return The full name of the employee.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the employee's name
     * @param name The employee's new name.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns the employee's salary.
     * @return The employee's yearly salary in dollars.
     */
    public int getSalary() {
        return salary;
    }

    /**
     * Set the employee's salary.
     * @param salary The employee's yearly salary in dollars.
     */
    public void setSalary(int salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return getClass().getName() + "[name=" + name + ", salary=" + salary + "]";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;
        Employee other = (Employee) obj;
        if (name.equals(other.name) && salary == other.salary)
            return true;
        return false;
    }
}

```

@tab Manager.java
```java
package employee;

import java.time.LocalDate;

/**
 * An employee that is also a manager.
 * @author Robert Clifton-Everest
 *
 */
public class Manager extends Employee {

    private LocalDate hireDate;

    /**
     * Create a manager with the given name, salary and hiring date.
     * @param name The full name of the manager.
     * @param salary The manager's salary in dollars.
     * @param hireDate The date the manager was hired.
     */
    public Manager(String name, int salary, LocalDate hireDate) {
        super(name, salary);
        this.hireDate = hireDate;
    }

    /**
     * Create a manager with the given name and salary.
     *
     * The manager is recorded as having been hired today.
     *
     * @param name The full name of the manager.
     * @param salary The manager's salary in dollars.
     * @param hireDate The date the manager was hired.
     */
    public Manager(String name, int salary) {
        this(name, salary, LocalDate.now());
    }

    /**
     * Get the manager's hire date.
     * @return The date the manager was hired.
     */
    public LocalDate getHireDate() {
        return hireDate;
    }

    @Override
    public String toString() {
        return super.toString() + "[hireDate=" + hireDate + "]";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!super.equals(obj)) return false;
        Manager manager = (Manager) obj;
        if (hireDate.equals(manager.hireDate))
            return true;
        return false;
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

        // ANSWER: ALL OF THEM
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

        // ANSWER: NO
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

// ANSWER: We cannot make the access modifier more restrictive - only the first will work (second is default)

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

        // Not really, unless in really big projects with lots of packages
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
        // System.out.println("varPub: " + a.varPub);
        // TODO Does the following line compile if uncommented?
        // System.out.println("varPro: " + a.varPro);

        // ANSWER: No, because of a rule in java: A protected method of a class may be accessed
        // from outside the package in which it is declared only by the code
        // that is responsible for the implementation of the object
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

> `super`: The instance of the super class  
> `this`: The instance of this class (like self in python)  
> `super(...)` Runs the respective method in the super class  
> `this(...)` Runs the respective method in this class with the given parameters (used for method overloading)

## B. JavaDoc & Commenting

Within the `src` directory, create a new package called `employee`.

Create an `Employee` class which has private fields for an employee's name and salary and appropriate getters, setters, and constructors. Document the class with [JavaDoc](https://www.oracle.com/au/technical-resources/articles/java/javadoc-tool.html).

Use VSCode to create the getters and setters.

> See `Employee.java`

In this course we are not going to require that you write JavaDoc, except when specified.

- What is meant by the term "self-documenting code"?

> Code that documents itself - it is readable inherently, through use of meaning variable and function names.

- Explain why comments can be considered a code smell.

> Comments can go stale - the code is updated but the comment remains the same, meaning they become irrelevant/misleading
>
> It could be argued that the requirement for a comment means that the code is not self-documenting (i.e. is not readable enough).
>
> Rule of thumb - is the code understandable to someone who has never seen the code before, who is at the same level as you? This can become a bit blurry when there is very domain-specific code and you have to understand the domain (what the code is trying to achieve) to understand the code, no matter how well your variables are named. Comments can be helpful here. Food for thought.

- Discuss as a class whether code should have comments / JavaDoc

## C. Basic Inheritance & Polymorphism

This exercise continues on from the `Employee` class in Exercise B.

- How many constructors should the class have? What arguments should they take?

> Only one. If we don't define a constructor Java automatically generates one that takes no arguments. It makes little sense to have an employee with no name or salary, so the constructor should take the name and salary as arguments.

Create a `Manager` class that is a subclass of `Employee` and has a field for the manager's hire date.

> See `Manager.java`

- What constructors are appropriate?

> Because we are inheriting from Employee, Java forces us to write a constructor that calls `super(...)`, so we have to write at least one. In this case, it makes sense to have a constructor that takes the name, salary and hire date, but you could also argue there should be one that just takes the name and salary and sets the hire date to the current day. It depends on context of how the class will be used whether you want the former, the latter, or both constructors.

- Is it appropriate to have a getter for the hire date? What about a setter?

> One can assume that if the hire date is stored it is information that will be needed at some point, so a getter is necessary. However, unlike the name or salary, it is unlikely that the hire date will be updated, so a setter would only serve to break that reasonable assumption about the class.

Override the `toString()` method inherited from `Object` in both classes.

- What should the result of `toString()` contain?

> The [documentation](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--) for the `toString()` method states that it should return a string that "textually represents" the object. In this case, it should contain the name, salary and hire date (in the case of `Manager`), but also the runtime class of the object.

- Does the method in `Manager` call the one in `Employee`?

> In order to satisfy the above requirement and not introduce unnecessary repetition, the superclass method must be called.

## D. Equals

This exercise continues on from the work in Exercise C.

- What does the `==` operator do when comparing objects?

> Compares the objects references. I.e., the result will be true if and only if the two objects being compared are the same instance. Only use this when you want to compare by reference.

- Where have you seen this sort of behaviour before in other languages? How is the underlying data checked for equality in that scenario?

> This is similar to strings in C. We don’t use `==` with strings in C as this compares the pointers to the start of each string. To compare the contents of the string for equality, we’d use `strcmp()`.

- How can we compare two objects for equality?

> Using the `equals()` method, a method that comes from the `Object` class and is therefore inherited by every other class with the ability to be overridden.

- What does it mean for objects to be considered equal?

> There’s a formal definition for what the `equals()` method needs to do as defined by the documentation. As long as the implementation adheres to those properties, then you could define equality for your set of objects in any way that makes sense for your purpose. However, the most common way is to compare all of the fields of the object to see if they are equal, i.e., comparing the contents of the objects in a similar way to how strings are compared in C. That is `Employee`s will be considered equal if their fields are equal.

- What is the relationship between a super type and a sub type in terms of equality? Can a concrete instance of an `Employee` be equal to an instance of a `Manager`

> Although a subtype can also be treated as the supertype, they are inherently unequal. A subtype is a more specific version and hence can’t be treated as an equal to a concrete instance of the supertype. In this example, a `Manager` is a more specific version of an `Employee` with additional fields. However, even if the `Manager` did not have additional fields, there should be something that the `Manager` does to differentiate it from the `Employee`. That is a `Manager` and an `Employee` with the same data in their fields, should still be considered unequal.

Override the `equals()` method inherited from `Object` in both classes.

- What key things should the `equals()` method do?

> Typical Structure of the equals method will include:
> - Check that the passed in object is not null.
>   - `if (object == null) return false`
> - Check if the passed in object is the same instance as the calling object.
>   - `if (this == object) return true`
> - Check the concrete type of the calling object matches the concrete type of the passed in object.
>   - `if (!this.getClass().equals(object.getClass())) return false`
>   - Note this is the robust way to allow subclasses to invoke `super.equals()`.
> - Once confirmed that the passed in object is of the same type (so it can be cast safely), cast the passed in object to the same type as the current class so the fields of that class can be compared between the calling object and the passed in object.

- How should the type of the input object be checked? How should it be compared to the type of the calling object?

> **Do not use** `instanceof` to check the types of objects in the `equals()` method.
>
> Get the concrete type of any object by calling its `getClass()` method. This will give you the runtime type of the object, regardless of what the type is of the variable that it is stored in. Use `getClass()` on the calling object (`this`) and on the passed in object and compare the results for equality to see if both objects have the same type.

- How can the method in `Manager` utilise code in `Employee` to avoid repetition?

> In the `equals()` method for the `Manager` we can call `super.equals(object)` to check if the Employee parts of the passed in `Object` are equal to that of the calling `Manager` so we don’t have to rewrite all of the field comparisons in the `Manager` class. The subclass may also not have access to the fields in the super class, and there may not be getters to retrieve them, so you’d have to call `super.equals(object)`. We don’t want to have to expose stuff to our subclass if we don’t have to, so being able to call the `equals` method defined in the superclass gives us the best design and allows for code reuse.
>
> Note that `super.equals()` still has to check that the passed in object matches the type of the calling object, but the calling object is now a `Manager` and the code that is being run is the equals method that was written in the `Employee` class. Despite being written in the `Employee` class, the code `this.getClass()` actually gives us a Manager because this is referring to the calling object, not the class. So, `this.getClass()` gets us the runtime type of the calling object which in this case is a Manager

## E. Access Modifiers & Packages

In the src/access package, answer the questions marked TODO.

> See code `here`

![](img/image%20(2).png)
