---
title: Tutorial 01 Solutions
createTime: 2024/08/27 18:10:21
permalink: /COMP2511/fjgabztg/
---

::: details Src

::: tabs

@tab HelloWorld.java
```java
package example;

/**
 * Prints "Hello World" to the console.
 *
 * @author Robert Clifton-Everest
 *
 */
public class HelloWorld {

    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }

}
```

@tab Shouter.java
```java
package example;

public class Shouter {
    private String message;

    public Shouter(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String toString() {
        return "Shouter message = " + message;
    }

    public void printMe() {
        System.out.println(this);
    }

    public void shout() {
        System.out.println(message.toUpperCase());
    }

    public static void main(String[] args) {
        Shouter s = new Shouter("you are awesome");
        s.printMe();
        System.out.println(s);

        s.shout();
    }
}
```

@tab Sum.java
```java
package example;

import java.util.Scanner;
import java.util.Arrays;

public class Sum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] numbers = scanner.nextLine().split(" ");

        // The long but simple way
        int sum = 0;
        for (String number : numbers) {
            sum += Integer.parseInt(number);
        }
        System.out.println("The sum is " + sum);

        // using streams!
        System.out.println("The sum is " + Arrays.asList(numbers).stream()
                                                  .mapToInt(Integer::parseInt)
                                                  .sum());
        scanner.close();
    }
}
```

:::

## A. Introduction

Your tutor will run a short introduction/icebreaker activity.

## B. Solving Design Problems

* In groups, your tutor is going to give you a design problem to think about and discuss.
* Come back together, and reflect with your tutor on how you came up with those answers.
> Design Problem: UNSW has decided that they want to create their own light rail, which takes students from upper campus to lower campus. Design a solution for this - how will it work? What will need to be changed about the campus layout for it to work?

## C. Hello Java and Git Revision

Your tutor is going to import the `tute01` code into VSCode and will complete the Hello World program. Things to note:

* The JDK version used (java-11-openjdk on the CSE system; possibly jdk-11 on your laptop).
* How new classes are created.
* How VSCode's autocomplete gives detailed information about the methods that can be invoked.
* Where the output appears.

After completing the program, your tutor will `git add`, `commit`, and `push` the changes.

> See `HelloWorld.java`

## D. Java Programming

1. Inside a new file called `Sum.java`, write a program that uses the `Scanner` class which reads in a line of numbers separated by spaces, and sums them.

> See `Sum.java`

2. Inside a new file `Shouter.java`, Write a program that stores a message and has methods for getting the message, updating the message and printing it out in all caps. Write a `main()` method for testing this class.

> See `Shouter.java`

## E. Abstraction

What is abstraction? What examples of abstraction have we seen in previous courses? How does abstraction allow us to write better software? Discuss how OOP takes abstraction to another level from what we have seen previously.

> [This tutorial recording from 21T3](https://youtu.be/H69hOjEfZQU) goes through this exercise (start of video)