---
title: Tutorial 5
createTime: 2024/08/28 16:22:31
permalink: /COMP2511/sv4z023a/
---

::: details Src/restaurant

::: tabs 

@tab JSONHelper.java
```java
package restaurant;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.json.JSONArray;

public class JSONHelper {
    public static JSONArray readInData(String filename) {
        try {
            return new JSONArray(new String(Files.readAllBytes(Paths.get(filename))));
        } catch (IOException e) {
            return null;
        }
    }
}
```

@tab Meal.java
```java
package restaurant;

public class Meal {
    private String name;
    private double cost;

    public Meal(String name, int cost) {
        this.name = name;
        this.cost = cost;
    }

	public double getCost() {
		return cost;
    }
    
    public String getName() {
        return name;
    }

}
```

@tab Restaurant.java
```java
package restaurant;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

public class Restaurant {

    private String chargingStrategy = "standard";
    private String name;
    private List<Meal> menu = new ArrayList<Meal>();
    private List<String> members = new ArrayList<String>();
    
    public Restaurant(String name) {
        this.name = name;
        JSONArray menuJSON = JSONHelper.readInData("src/restaurant/prices.json");

        for (Object Meal : menuJSON) {
            JSONObject jsonMeal = (JSONObject) Meal;
            menu.add(new Meal(jsonMeal.getString("meal"), jsonMeal.getInt("cost")));
        }
    }

    public double cost(List<Meal> order, String payee) {
        switch (chargingStrategy) {
            case "standard":
                return order.stream().mapToDouble(meal -> meal.getCost()).sum();
            case "holiday":
                return order.stream().mapToDouble(meal -> meal.getCost() * 1.15).sum();
            case "happyHour":
                if (members.contains(payee)) {
                    return order.stream().mapToDouble(meal -> meal.getCost() * 0.6).sum();
                } else {
                    return order.stream().mapToDouble(meal -> meal.getCost() * 0.7).sum();
                }
            case "discount":
                if (members.contains(payee)) {
                    return order.stream().mapToDouble(meal -> meal.getCost() * 0.85).sum();
                } else {
                    return order.stream().mapToDouble(meal -> meal.getCost()).sum();
                }
            default: return 0;
        }
    }

    public void displayMenu() {
        double modifier = 0;
        switch (chargingStrategy) {
            case "standard": modifier = 1; break;
            case "holiday": modifier = 1.15; break;
            case "happyHour": modifier = 0.7; break;
            case "discount": modifier = 1; break;
        }
        
        for (Meal meal : menu) {
            System.out.println(meal.getName() + " - " + meal.getCost() * modifier);
        }
    }

    public static void main(String[] args) {
        Restaurant r = new Restaurant("XS");
        r.displayMenu();
    }

}
```

@tab prices.json
```json
[
    {"meal": "avocado on toast", "cost": 20},
    {"meal": "bacon and eggs", "cost": 15},
    {"meal": "granola", "cost": 12},
    {"meal": "brekky burger", "cost": 13}
]
```

:::

## A. Strategy Pattern

Inside `src/restaurant` is a solution for a restaurant payment system with the following requirements:

* The restaurant has a menu, stored in a JSON file. Each meal on the menu has a name and price
* The system displays all of the standard meal names and their prices to the user so they can make their order
* The user can enter their order as a series of meals, and the system returns their cost
* The prices on meals often vary in different circumstances. The restaurant has four different price settings:
    * Standard - normal rates
    * Holiday - 15% surcharge on all items for all customers
    * Happy Hour - where registered members get a 40% discount, while standard customers get 30%
    * Discount - where registered members get a 15% discount and standard customers pay normal prices
* The prices displayed on the menu are the ones for standard customers in all settings

Currently, the code uses switch statements to handle each of the different four cases.
* How does the code violate the open/closed principle?
* How does this make the code brittle?

Refactor the code to use the Strategy Pattern to handle the four settings.

Here is the strategy interface to get you started:

```java
public interface ChargingStrategy {

    /**
     * The cost of a meal.
     */
    public double cost(List<Meal> order, boolean payeeIsMember);

    /**
     * Modifying factor of charges for standard customers.
     */
    public double standardChargeModifier();

}
```

## B. Observer Pattern

In `src/youtube`, create a model for the following requirements of a Youtube-like video creating and watching service using the Observer Pattern:
* A Producer has a name, a series of subscribers and videos
* When a producer posts a new video, all of the subscribers are notified that a new video was posted
* A User has a name, and can subscribe to any Producer
* A video has a name, length and producer

Write a simple test with print statements inside `YoutubeTest.java`.

Once this is done, think about what if we want to be able to produce videos and subscribe to videos as well (the way youtube actually works). In groups, draw a UML diagram refactoring the code so that the `Producer` and `User` classes are merged, whilst still using the Observer Pattern.

## C. State Pattern

This exercise continues on from Exercise B.

Extend your solution to accomodate the following requirements:

* Users can view a video, and a viewing has a series of states:
    * Playing state - the video is playing (Upon entering this state, set playback on)
    * Ready state - the video is paused, ready to play (Upon entering this state, set playback off)
    * Locked state - the video is temporarily 'locked' from having its state changed

The actions and state transitions are as follows:

| State      | Lock       | Play  | Next      |
| -----      | -------       | -------       | ----      |
| Locked     | If playback is going, switch to Playing State. <br> If not, switch to Ready State | Return Error: Locked | Return Error: Locked |
| Playing    | Switch to Locked State | Stops playback and switch to Ready State | Starts playing the next video |
| Ready      | Switch to Locked State | Starts playback and switch to Playing State | Starts playing the next video |