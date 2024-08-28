---
title: Tutorial 05 Solutions
createTime: 2024/08/28 16:26:53
permalink: /COMP2511/kfjtw580/
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

import restaurant.strategy.ChargingStrategy;
import restaurant.strategy.StandardStrategy;

public class Restaurant {

    private ChargingStrategy chargingStrategy = new StandardStrategy();
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

    public double cost(List<Meal> meals, String payee) {
        return chargingStrategy.cost(meals, members.contains(payee));
    }

    public void displayMenu() {
        double modifier = chargingStrategy.standardChargeModifier();
        
        for (Meal meal : menu) {
            System.out.println(meal.getName() + " - " + meal.getCost() * modifier);
        }
    }

    public void addMember(String member) {
        members.add(member);
    }

    public void changeStrategy(ChargingStrategy newStrategy) {
        this.chargingStrategy = newStrategy;
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

@tab strategy

`ChargingStrategy.java`
```java 
package restaurant.strategy;

import restaurant.Meal;

import java.util.List;

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

`DiscountStrategy.java`
```java
package restaurant.strategy;

import java.util.List;

import restaurant.Meal;

public class DiscountStrategy implements ChargingStrategy {

    private final double STANDARD_CHARGE = 1;

    @Override
    public double cost(List<Meal> order, boolean payeeIsMember) {
        double modifier = payeeIsMember ? 0.85 : 1;
        return order.stream().mapToDouble(m -> m.getCost() * modifier).sum();
    }

    @Override
    public double standardChargeModifier() {
        return STANDARD_CHARGE;
    }
    
}
```

`HappyHourStrategy.java`
```java
package restaurant.strategy;

import java.util.List;

import restaurant.Meal;

public class HappyHourStrategy implements ChargingStrategy {

    private final double STANDARD_RATE = 0.7;
    private final double MEMBER_RATE = 0.6;

    @Override
    public double cost(List<Meal> order, boolean payeeIsMember) {
        double modifier = payeeIsMember ? MEMBER_RATE : STANDARD_RATE;
        return order.stream().mapToDouble(m -> m.getCost() * modifier).sum();
    }

    @Override
    public double standardChargeModifier() {
        return STANDARD_RATE;
    }
    
}
```
`HolidayStrategy.java`
```java
package restaurant.strategy;

import java.util.List;

import restaurant.Meal;

public class HolidayStrategy implements ChargingStrategy {

    private final double STANDARD_RATE = 1.15;

    @Override
    public double cost(List<Meal> order, boolean payeeIsMember) {
        return order.stream().mapToDouble(m -> m.getCost() * STANDARD_RATE).sum();
    }

    @Override
    public double standardChargeModifier() {
        return STANDARD_RATE;
    }
    
}
```

`StandardStrategy.java`
```java
package restaurant.strategy;

import java.util.List;

import restaurant.Meal;

public class StandardStrategy implements ChargingStrategy {

    private final double STANDARD_RATE = 1;

    @Override
    public double cost(List<Meal> order, boolean payeeIsMember) {
        return order.stream().mapToDouble(m -> m.getCost()).sum();
    }

    @Override
    public double standardChargeModifier() {
        return STANDARD_RATE;
    }
    
}
```

:::

::: details Src/youtube

::: tabs 

@tab Producer.java
```java
package youtube;

import java.util.ArrayList;
import java.util.List;

public class Producer {
    
    private String name;
    private List<User> subscribers = new ArrayList<User>();
    private List<Video> videos = new ArrayList<Video>();

    public Producer(String name) {
        this.name = name;
    }

    public void addSubscriber(User user) {
        subscribers.add(user);
    }

    public void postVideo(String name, int length) {
        Video video = new Video(name, length, this);
        videos.add(video);

        for (User subscriber : subscribers) {
            subscriber.alertNewVideo(video);
        }
    }

    @Override
    public String toString() {
        return name;
    }

}
```

@tab User.java
```java
package youtube;

public class User {
    
    private String name;

    public User(String name) {
        this.name = name;
    }

    public void subscribeTo(Producer user) {
        user.addSubscriber(this);
    }

    public void alertNewVideo(Video video) {
        System.out.println(name + ": A new video " + video.getName() + " was just posted from " 
                            + video.getProducer() + "!");
    }

    @Override
    public String toString() {
        return name;
    }

}
```

@tab Video.java
```java
package youtube;

public class Video {
    private int length; // Length of the video in seconds
    private Producer producer;
    private String name;

    public Video(String name, int length, Producer producer) {
        this.name = name;
        this.length = length;
        this.producer = producer;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public Producer getProducer() {
        return producer;
    }

    public void setProducer(Producer producer) {
        this.producer = producer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
}
```

@tab YoutubeTest.java
```java
package youtube;

public class YoutubeTest {
    public static void main(String[] args) {
        Producer u1 = new Producer("Nick");
        User u2 = new User("Braedon");
        User u3 = new User("Ian");

        u2.subscribeTo(u1);
        u3.subscribeTo(u1);

        u1.postVideo("The Observer Pattern", 20);

    }
}
```
:::

::: details Src/youtube2

::: tabs 

@tab User.java
```java
package youtube2;

import java.util.ArrayList;
import java.util.List;

public class User {
    
    private String name;
    private List<User> subscribers = new ArrayList<User>();
    private List<Video> videos = new ArrayList<Video>();

    public User(String name) {
        this.name = name;
    }

    public void subscribeTo(User user) {
        user.addSubscriber(this);
    }

    private void addSubscriber(User user) {
        subscribers.add(user);
    }

    public void postVideo(String name, int length) {
        Video video = new Video(name, length, this);
        videos.add(video);

        for (User subscriber : subscribers) {
            subscriber.alertNewVideo(video);
        }
    }

    public void alertNewVideo(Video video) {
        System.out.println(name + ": A new video " + video.getName() + " was just posted from " 
                            + video.getProducer() + "!");
    }

    @Override
    public String toString() {
        return name;
    }

}
```

@tab Video.java
```java
package youtube2;

public class Video {
    private int length; // Length of the video in seconds
    private User producer;
    private String name;

    public Video(String name, int length, User producer) {
        this.name = name;
        this.length = length;
        this.producer = producer;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public User getProducer() {
        return producer;
    }

    public void setProducer(User producer) {
        this.producer = producer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
}
```

@tab Viewing.java
```java
package youtube2;

import youtube2.state.ReadyState;
import youtube2.state.ViewingState;

public class Viewing {
    
    private Video video;
    private Video nextVideo;
    private User user;
    private ViewingState state = new ReadyState(this);
    private boolean playing = false;

    public Viewing(Video video, Video nextVideo, User user) {
        this.video = video;
        this.nextVideo = nextVideo;
        this.user = user;
    }

    public void setPlaying(boolean play) {
        this.playing = play;
    }

    public boolean isPlaying() {
        return playing;
    }

    public void changeState(ViewingState newState) {
        this.state = newState;
    }

    public String getNextVideo() {
        return nextVideo.getName();
    }

    public String lock() {
        return state.onLock();
    }

    public String play() {
        return state.onPlay();
    }

    public String next() {
        this.video = nextVideo;
        return state.onNext();
    }

    public static void main(String[] args) {
        User producer = new User("Ashesh");
        Viewing view = new Viewing(new Video("Video 1", 10, producer), new Video("Video 2", 14, producer), producer);

        System.out.println(view.play());
        System.out.println(view.play());
        System.out.println(view.next());
        System.out.println(view.lock());
        System.out.println(view.play());
        System.out.println(view.next());
        System.out.println(view.play());
    }

}
```

@tab YoutubeTest.java
```java
package youtube2;

public class YoutubeTest {
    public static void main(String[] args) {
        User u1 = new User("Nick");
        User u2 = new User("Braedon");
        User u3 = new User("Ian");

        u2.subscribeTo(u1);
        u3.subscribeTo(u1);

        u1.postVideo("The Observer Pattern", 20);

    }
}
```

@tab state

`ViewingState.java`
```java
package youtube2.state;

import youtube2.Viewing;

public abstract class ViewingState {

    private Viewing viewing;

    public ViewingState(Viewing viewing) {
        this.viewing = viewing;
    }

    public abstract String onLock();

    public abstract String onPlay();

    public abstract String onNext();

    public Viewing getViewing() {
        return viewing;
    }

}
```

`LockedState.java`
```java
package youtube2.state;
import youtube2.Viewing;
public class LockedState extends ViewingState {
    public LockedState(Viewing viewing) {
        super(viewing);
    }
    @Override
    public String onLock() {
        if (getViewing().isPlaying()) {
            getViewing().changeState(new PlayingState(getViewing()));
        } else {
            getViewing().changeState(new ReadyState(getViewing()));
        }
        return "Unlocked.";
    }
    @Override
    public String onPlay() {
        return "Error: Locked";
    }
    @Override
    public String onNext() {
        return "Error: Locked";
    }
    
}
```

`PlayingState.java`
```java
package youtube2.state;

import youtube2.Viewing;

public class PlayingState extends ViewingState {

    public PlayingState(Viewing viewing) {
        super(viewing);
        getViewing().setPlaying(true);
    }

    @Override
    public String onLock() {
        getViewing().changeState(new LockedState(getViewing()));
        return "Locked.";
    }
    

    @Override
    public String onPlay() {
        getViewing().changeState(new ReadyState(getViewing()));
        return "Paused.";
    }

    @Override
    public String onNext() {
        return getViewing().getNextVideo();
    }
    
}
```

`ReadyState.java`
```java
package youtube2.state;

import youtube2.Viewing;

public class ReadyState extends ViewingState {

    public ReadyState(Viewing viewing) {
        super(viewing);
        getViewing().setPlaying(false);
    }

    @Override
    public String onLock() {
        getViewing().changeState(new LockedState(getViewing()));
        return "Locked";        
    }

    @Override
    public String onPlay() {
        getViewing().changeState(new PlayingState(getViewing()));
        return "Playing.";
    }

    @Override
    public String onNext() {
        return getViewing().getNextVideo();
    }
    
}
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
> Not closed for modification / open for extension - we need to continually add to the switch statement
* How does this make the code brittle?
> Makes code more brittle as new requirements cause things to break/more difficult to extend functionality

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
> See `solutions/src/restaurant`


## B. Observer Pattern

In `src/youtube`, create a model for the following requirements of a Youtube-like video creating and watching service using the Observer Pattern:
* A Producer has a name, a series of subscribers and videos
* When a producer posts a new video, all of the subscribers are notified that a new video was posted
* A User has a name, and can subscribe to any Producer
* A video has a name, length and producer

Write a simple test with print statements inside `YoutubeTest.java`.

Once this is done, think about what if we want to be able to produce videos and subscribe to videos as well (the way youtube actually works). In groups, draw a UML diagram refactoring the code so that the `Producer` and `User` classes are merged, whilst still using the Observer Pattern.
> See `solutions/src/youtube`

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
> See `solutions/src/youtube2`