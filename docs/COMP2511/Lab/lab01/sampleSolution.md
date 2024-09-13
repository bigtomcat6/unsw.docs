---
title: Lab01 Sample Solution
createTime: 2024/09/13 14:02:03
permalink: /COMP2511/0hgjsmx0/
---

::: details 🔢 Core Exercise: Average

`Averge.java`

```java
package average;

public class Average {
    /**
     * Returns the average of an array of numbers
     *
     * @param nums the array of integer numbers
     * @return the average of the numbers
     */
    public float computeAverage(int[] nums) {
        float result = 0;
        // Add your code

        for (int n : nums) {
            result += n;
        }

        result /= nums.length;

        return result;
    }

    public static void main(String[] args) {
        // Add your code
        int[] array = {
                1, 2, 3, 4, 5, 6
        };
        Average avg = new Average();
        System.out.println("The average is " + avg.computeAverage(array));
    }
}
```

:::


::: details 🍌 Core Exercise: Splitter

`Splitter.java`

```java
package splitter;

import java.util.Scanner;

public class Splitter {
    public static void main(String[] args) {
        System.out.println("Enter a sentence specified by spaces only:");
        // Add your code

        Scanner scanner = new Scanner(System.in);
        String[] words = scanner.nextLine().split(" ");

        for (String word : words) {
            System.out.println(word);
        }

        scanner.close();
    }
}

```
:::

::: details 🛰️ Core Exercise: Satellite

`Satellite.java`

```java
package satellite;

public class Satellite {
    private String name;
    private int height;
    private double position;
    private double velocity;

    /**
     * Constructor for Satellite
     * @param name
     * @param height
     * @param velocity
     */
    public Satellite(String name, int height, double position, double velocity) {
        setName(name);
        setHeight(height);
        setPosition(position);
        setVelocity(velocity);
    }

    /**
     * Getter for name
     */
    public String getName() {
        return name;
    }

    /**
     * Getter for height
     */
    public int getHeight() {
        return height;
    }

    /**
     * Getter for position (degrees)
     */
    public double getPositionDegrees() {
        return position;
    }

    /**
     * Getter for position (radians)
     */
    public double getPositionRadians() {
        return Math.toRadians(position);
    }

    /**
     * Returns the linear velocity (metres per second) of the satellite
     */
    public double getLinearVelocity() {
        return velocity;
    }

    /**
     * Returns the angular velocity (radians per second) of the satellite
     */
    public double getAngularVelocity() {
        // angular velocity = linear velocity / radius
        return getLinearVelocity() / getHeight();
    }

    /**
     * Setter for name
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Setter for height
     * @param height
     */
    public void setHeight(int height) {
        this.height = height;
    }

    /**
     * Setter for velocity
     * @param velocity
     */
    public void setVelocity(double velocity) {
        this.velocity = velocity;
    }

    /**
     * Setter for position
     * @param position
     */
    public void setPosition(double position) {
        this.position = position;
    }

    /**
     * Calculates the distance travelled by the satellite in the given time
     * @param time (seconds)
     * @return distance in metres
     */
    public double distance(double time) {
        //return 0;
        return getLinearVelocity() * time;
    }

    public static void main(String[] args) {
        // Add your code

        Satellite sA = new Satellite("Satellite A", 10000, 122, 55);
        Satellite sB = new Satellite("Satellite B", 5438, 0, 234);
        Satellite sC = new Satellite("Satellite C", 9029, 284, 0);

        System.out.println("I am " + sA.getName() + " at position " + sA.getPositionDegrees() + " degrees, "
                + sA.getHeight() + " km above the centre of the earth and moving at a velocity of "
                + sA.getLinearVelocity() + " metres per second");

        sA.setHeight(9999);
        sB.setPosition(45);
        sC.setVelocity(36.5);

        // Print out Satellite A's position in radians.
        System.out.printf("%.15f\n", sA.getPositionRadians());

        // Print out Satellite B's angular velocity.
        System.out.printf("%.17f\n", sB.getAngularVelocity());

        // Print out the distance Satellite C travels after 2 minutes.
        System.out.println(sC.distance(120));
    }

}

```
:::

::: details 💭 Core Blogging: Goal Setting & Looking Ahead

`blog.md`

```markdown
- What do you want to get out of this course?

Lean some good design paradigms.

- What skills do you want to develop and improve?

Learning how to design a more practical and flexible program

- What do you think will be the biggest challenge of the course? How will you go about meeting this challenge?

The first time using Java, I needed to learn more design skills for coding.

```

::: caution You should write more things here. Don't be like me 🤐
:::