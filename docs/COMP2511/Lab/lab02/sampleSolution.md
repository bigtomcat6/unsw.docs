---
title: Lab02 Sample Solution
createTime: 2024/09/22 22:55:43
permalink: /COMP2511/2w4thyko/
---

::: file-tree
- lab02/...
    - main
        - java
            - staff
                - Lecturer.java
                - StaffMember.java
            - hotal
                - Hotel.java
                - Booking.java
                - BookingSystemController.java
                - Room.java
                - StandardRoom.java
                - EnsuiteRoom.java
                - PenthouseRoom.java
    - test
        - java
            - staff
                - StaffTest.java
    - blog.md
:::

::: details 🔱 Core Exercise: Staff

::: tabs

@tab Lecturer

`Lecturer.java`

```java
package staff;

import java.time.LocalDate;

public class Lecturer extends StaffMember {
    private String school;
    private char status;

    public Lecturer(String name, double salary, LocalDate hire, LocalDate end, String school, char status) {
        super(name, salary, hire, end);
        this.school = school;
        this.status = status;
    }

    /**
     * Get the school of the lecturer
     * @return the school of the lecturer
     */
    public String getSchool() {
        return school;
    }

    /**
     * Get the status of the lecturer
     * @return the status of the lecturer
     */
    public char getStatus() {
        return status;
    }

    /**
     * Set the school of the lecturer
     * @param school the school of the lecturer
     */
    public void setSchool(String school) {
        this.school = school;
    }

    /**
     * Set the status of the lecturer
     * @param status the status of the lecturer
     */
    public void setStatus(char status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Lecturer [school=" + school + ", status=" + status + "]";
    }

    @Override
    public boolean equals(Object obj) {
        if (!super.equals(obj))
            return false;

        Lecturer l = (Lecturer) obj;
        return school.equals(l.getSchool()) && status == l.getStatus();
    }
}

```

@tab StaffMember

`StaffMember.java`

```java
package staff;

import java.time.LocalDate;

/**
 * A staff member
 * @author Robert Clifton-Everest
 *
 */
public class StaffMember {
    private String name;
    private double salary;
    private LocalDate hire;
    private LocalDate end;

    /**
     * Create a new staff member
     * @param name
     * @param salary
     * @param hire
     * @param end
     */
    public StaffMember(String name, double salary, LocalDate hire, LocalDate end) {
        this.name = name;
        this.salary = salary;
        this.hire = hire;
        this.end = end;
    }

    /**
     * Get the name of the staff member
     * @return the name of the staff member
     */
    public String getName() {
        return name;
    }

    /**
     * Get the salary of the staff member
     * @return the salary of the staff member
     */
    public double getSalary() {
        return salary;
    }

    /**
     * Get the date the staff member was hired
     * @return the date the staff member was hired
     */
    public LocalDate getHire() {
        return hire;
    }

    /**
     * Get the date the staff member's contract ends
     * @return the date the staff member's contract ends
     */
    public LocalDate getEnd() {
        return end;
    }

    /**
     * Set the salary of the staff member
     * @param salary the new salary of the staff member
     */
    public void setSalary(double salary) {
        this.salary = salary;
    }

    /**
     * Set the date the staff member's contract ends
     * @param end the new date the staff member's contract ends
     */
    public void setEnd(LocalDate end) {
        this.end = end;
    }

    @Override
    public String toString() {
        return "StaffMember [name=" + name + ", salary=" + salary + ", hire=" + hire + ", end=" + end + "]";
    }

    @Override
    public boolean equals(Object obj) {

        if (obj == null) {
            return false;
        }

        if (obj == this) {
            return true;
        }

        if (this.getClass() != obj.getClass()) {
            return false;
        }

        StaffMember oth = (StaffMember) obj;
        return this.name.equals(oth.name) && this.salary == oth.salary && this.hire.equals(oth.hire)
                && this.end.equals(oth.end);
    }

}

```

@tab StaffTest

`StaffTest.java`

```java
package staff;

import java.time.LocalDate;

public class StaffTest {
    // Add your tests here
    public void printStaffDetails(StaffMember s) {
        System.out.println(s.toString());
    }

    public static void main(String[] args) {
        LocalDate d1 = LocalDate.of(2023, 01, 01);
        LocalDate d2 = LocalDate.of(2024, 01, 01);

        StaffMember s1 = new StaffMember("Hao Hao", 5000.05, d1, d2);
        StaffMember s2 = new StaffMember("Abu", 3000.20, d1, d2);

        Lecturer l1 = new Lecturer("Hao Hao", 10000, d1, d2, "CSE", 'A');
        Lecturer l2 = new Lecturer("Hao Hao", 10000, d1, d2, "CSE", 'A');

        StaffTest test = new StaffTest();
        System.out.println("---Printing Staff(s)---");
        test.printStaffDetails(s1);
        test.printStaffDetails(s2);
        test.printStaffDetails(l1);

        System.out.println("---Equals Method---");
        if (s1.equals(s2))
            System.out.println("s1 is equals to s2");
        else
            System.out.println("s1 is NOT equals to s2");

        if (l1.equals(s1))
            System.out.println("l1 is equals to s1");
        else
            System.out.println("l1 is NOT equals to s1");

        /* reflective */
        if (l1.equals(l1))
            System.out.println("l1 is equals to l1");
        else
            System.out.println("l1 is NOT equals to l1");

        /* symmetric */
        if (l1.equals(l2))
            System.out.println("l1 is equals to l2");
        else
            System.out.println("l1 is NOT equals to l2");

        /* null check */
        if (l1.equals(null))
            System.out.println("l1 is equals to null");
        else
            System.out.println("l1 is NOT equals to null");
    }

}

```

:::

::: details 🏨 Core Exercise: Hotel

::: tabs

@tab Hotel

`Hotel.java`

```java
package hotel;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

public class Hotel {
    private List<Room> rooms = new ArrayList<Room>();
    private String name;

    public Hotel(String name) {
        this.name = name;
    }

    /**
     * Makes a booking in any available room with the given preferences.
     *
     * @param arrival
     * @param departure
     * @param standard - does the client want a standard room?
     * @param ensuite - does the client want an ensuite room?
     * @param penthouse - does the client want a penthouse room?
     * @return If there were no available rooms for the given preferences, returns false.
     * Returns true if the booking was successful
     */
    public boolean makeBooking(LocalDate arrival, LocalDate departure, boolean standard, boolean ensuite,
            boolean penthouse) {
        for (Room room : rooms) {
            if (roomDesired(room, standard, ensuite, penthouse) && room.book(arrival, departure) != null) {
                return true;
            }
        }

        return false;
    }

    // private boolean roomDesired(Room room, boolean standard, boolean ensuite, boolean penthouse) {
    //     if (room instanceof StandardRoom) {
    //         if (standard)
    //             return true;
    //         else
    //             return false;
    //     } else if (room instanceof EnsuiteRoom) {
    //         if (ensuite)
    //             return true;
    //         else
    //             return false;
    //     } else if (room instanceof PenthouseRoom) {
    //         if (penthouse)
    //             return true;
    //         else
    //             return false;
    //     } else {
    //         return false;
    //     }
    // }

    private boolean roomDesired(Room room, boolean standard, boolean ensuite, boolean penthouse) {
        return (room instanceof StandardRoom && standard) || (room instanceof EnsuiteRoom && ensuite)
                || (room instanceof PenthouseRoom && penthouse);
    }

    /**
     * @return A JSON Object of the form:
     * { "name": name, "rooms": [ each room as a JSON object, in order of creation ]}
     */
    public JSONObject toJSON() {
        // return null;
        JSONObject json = new JSONObject();
        JSONArray roomsJson = new JSONArray();
        for (Room room : rooms) {
            roomsJson.put(room.toJSON());
        }
        json.put("rooms", roomsJson);
        json.put("name", name);
        return json;
    }

    public String getName() {
        return name;
    }

    public void addRoom(String roomType) {
        Room room = null;

        switch (roomType) {
        case "standard":
            room = new StandardRoom();
            break;
        case "ensuite":
            room = new EnsuiteRoom();
            break;
        case "penthouse":
            room = new PenthouseRoom();
            break;
        default:
            break;
        }

        rooms.add(room);

        // Which is better design/style?
        // switch (roomType) {
        // case "standard":
        //     rooms.add(new StandardRoom());
        //     break;
        // case "ensuite":
        //     rooms.add(new EnsuiteRoom());
        //     break;
        // case "penthouse":
        //     rooms.add(new PenthouseRoom());
        //     break;
        // default:
        //     break;
        // }

    }
}

```

@tab Booking

`Booking.java`

```java
package hotel;

import java.time.LocalDate;

import org.json.JSONObject;

public class Booking {
    private LocalDate arrival;
    private LocalDate departure;

    public Booking(LocalDate arrival, LocalDate departure) {
        this.arrival = arrival;
        this.departure = departure;
    }

    /**
    * @return a JSONObject of the form {"arrival": arrival, "departure": departure}
    */
    public JSONObject toJSON() {
        JSONObject booking = new JSONObject();
        booking.put("arrival", arrival.toString());
        booking.put("departure", departure.toString());
        return booking;
    }

    /**
     * Checks whether two dates overlap
     * @param start
     * @param end
     */
    public boolean overlaps(LocalDate start, LocalDate end) {
        // return false;

        // Check if this booking's range overlaps with the provided range
        return !((departure.isBefore(start) || departure.isEqual(start))
                || (arrival.isAfter(end) || arrival.isEqual(end)));
    }

}

```

@tab BookingSystemController

`BookingSystemController.java`

```java
package hotel;

import java.time.LocalDate;
import java.util.ArrayList;

import org.json.JSONObject;

/**
 * BookingSystemController
 *
 * @author Nick Patrikeos
 */
public class BookingSystemController {
    private ArrayList<Hotel> hotels = new ArrayList<Hotel>();

    /**
     * Creates a new hotel
     * @param hotelName
     */
    public void createHotel(String hotelName) {
        Hotel hotel = new Hotel(hotelName);
        hotels.add(hotel);
    }

    /**
     * Adds a room to the hotel with the given name.
     * @param hotelName
     * @param roomType
     */
    public void addRoom(String hotelName, String roomType) {
        Hotel hotel = findHotel(hotelName);
        hotel.addRoom(roomType);
    }

    /**
     * Makes a booking at the hotel with the given name with the given requirements.
     * @param hotelName
     * @param arrival
     * @param departure
     * @param standard - does the client want a standard room?
     * @param ensuite - does the client want an ensuite room?
     * @param penthouse - does the client want a penthouse room?
     * @return Whether the booking was successfully made
     */
    public boolean makeBooking(String hotelName, LocalDate arrival, LocalDate departure, boolean standard,
            boolean ensuite, boolean penthouse) {
        Hotel hotel = findHotel(hotelName);
        return hotel.makeBooking(arrival, departure, standard, ensuite, penthouse);
    }

    /**
     * @param hotelName
     * @return The JSON representation of a hotel
     */
    public JSONObject hotelJSON(String hotelName) {
        Hotel hotel = findHotel(hotelName);
        return hotel.toJSON();
    }

    /**
     * Finds a hotel by name
     */
    private Hotel findHotel(String hotelName) {
        return hotels.stream().filter(h -> h.getName().equals(hotelName)).findFirst().get();
    }
}

```

@tab Room

`Room.java`

```java
package hotel;

import java.time.LocalDate;
import java.util.List;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

public abstract class Room {
    private List<Booking> bookings = new ArrayList<Booking>();

    /**
     * Checks if the room is not booked out during the given time.
     * If so, creates a booking for the room at that time.
     * @param arrival
     * @param departure
     * @return The booking object if the booking succeeded, null if failed
     */
    public Booking book(LocalDate arrival, LocalDate departure) {
        for (Booking booking : bookings) {
            if (booking.overlaps(arrival, departure)) {
                return null;
            }
        }

        Booking booking = new Booking(arrival, departure);
        bookings.add(booking);
        return booking;
    }

    /**
     * @return A JSON object of the form:
     * {
     *  "bookings": [ each booking as a JSON object, in order of creation ],
     *  "type": the type of the room (standard, ensuite, penthouse)
     * }
     */
    public JSONObject toJSON() {
        // return null;
        JSONObject json = new JSONObject();
        JSONArray bookingsJson = new JSONArray();
        for (Booking booking : bookings) {
            bookingsJson.put(booking.toJSON()); // Ensure Booking class has a toJSON method
        }
        json.put("bookings", bookingsJson);
        json.put("type", this.getType());
        return json;
    }

    /**
     * Prints a welcome message to the guest staying in the room.
     */
    public void printWelcomeMessage() {
    };

    /**
     * @return The type of the room (standard, ensuite, penthouse)
     */
    protected abstract String getType();

}

```

`StandardRoom.java`

```java
package hotel;

// import java.time.LocalDate;
// import java.util.ArrayList;
// import java.util.List;

// import org.json.JSONObject;

public class StandardRoom extends Room {
    // private List<Booking> bookings = new ArrayList<Booking>();

    // @Override
    // public Booking book(LocalDate arrival, LocalDate departure) {
    //     for (Booking booking : bookings) {
    //         if (booking.overlaps(arrival, departure)) {
    //             return null;
    //         }
    //     }

    //     Booking booking = new Booking(arrival, departure);
    //     bookings.add(booking);
    //     return booking;
    // }

    // @Override
    // public JSONObject toJSON() {
    //     // TODO
    //     return null;
    // }
    @Override
    public void printWelcomeMessage() {
        System.out.println("Welcome to your standard room. Enjoy your stay :)");
    }

    @Override
    protected String getType() {
        return "standard";
    }

}

```

`EnsuiteRoom.java`

```java
package hotel;

// import java.time.LocalDate;
// import java.util.ArrayList;
// import java.util.List;

// import org.json.JSONObject;

public class EnsuiteRoom extends Room {
    // private List<Booking> bookings = new ArrayList<Booking>();

    // @Override
    // public Booking book(LocalDate arrival, LocalDate departure) {
    //     for (Booking booking : bookings) {
    //         if (booking.overlaps(arrival, departure)) {
    //             return null;
    //         }
    //     }

    //     Booking booking = new Booking(arrival, departure);
    //     bookings.add(booking);
    //     return booking;
    // }

    // @Override
    // public JSONObject toJSON() {
    //     // TODO add your code here
    //     return null;
    // }
    @Override
    public void printWelcomeMessage() {
        System.out
                .println("Welcome to your beautiful ensuite room which overlooks the Sydney harbour. Enjoy your stay");
    }

    @Override
    protected String getType() {
        return "ensuite";
    }

}

```

`PenthouseRoom.java`

```java
package hotel;

// import java.time.LocalDate;
// import java.util.ArrayList;
// import java.util.List;

// import org.json.JSONObject;

public class PenthouseRoom extends Room {
    // private List<Booking> bookings = new ArrayList<Booking>();

    // @Override
    // public Booking book(LocalDate arrival, LocalDate departure) {
    //     for (Booking booking : bookings) {
    //         if (booking.overlaps(arrival, departure)) {
    //             return null;
    //         }
    //     }

    //     Booking booking = new Booking(arrival, departure);
    //     bookings.add(booking);
    //     return booking;
    // }
    // @Override
    // public JSONObject toJSON() {
    //     // TODO Auto-generated method stub
    //     return null;
    // }
    @Override
    public void printWelcomeMessage() {
        System.out.println(
                "Welcome to your penthouse apartment, complete with ensuite, lounge, kitchen and master bedroom.");
    }

    @Override
    protected String getType() {
        return "penthouse";
    }

}

```

:::

::: details Blog

Task 1

Q1: Why is this approach considered good design? What principles does it makes use of?

The approach illustrated in the diagram and described for the hotel booking system is considered good design primarily due to its adherence to key principles of software engineering: abstraction, encapsulation, and modularization.

- Abstraction: Abstraction allows the system to hide the complex underlying implementations and expose only the necessary components to the user.

- Encapsulation: The internal state of the objects can only be changed by an object’s methods (controlled access). It enhances security and robustness, reducing the chance of unintended interference and bugs.

- Modularization: This separation allows for easier maintenance and scalability as the system grows. Each module can be developed, tested, and debugged independently before integrating into the larger system.

---

Q2: What is meant by the term "black-box"? How are the tests inside BookingSystemTest black-box?

- The term “black-box” in the context of software engineering refers to a system or component where the internal workings are hidden from the user or client. The focus is solely on the input and output of the system, not on how the input is transformed into the output. This concept aligns with the principle of abstraction, allowing users to interact with a system without needing to understand its inner mechanics.

- The tests inside BookingSystemTest are black-box tests because they focus on the external behavior of the BookingSystem class. The tests interact with the public methods of the BookingSystem class and verify the expected outputs based on specific inputs. The tests do not concern themselves with the internal implementation details of the BookingSystem class, treating it as a black box.

---

Task 2

Q3: What does this method do? What does it return, and what side effects does it have?

The makeBooking method in the Hotel class plays a critical role in managing room bookings based on client preferences for room types (standard, ensuite, penthouse).

It iterates through the list of rooms in the hotel. For each room, it checks if the room matches the desired type (standard, ensuite, penthouse) through the roomDesired method. If a room matches and can be booked for the specified dates (checked by calling book on the room object), it immediately returns true.

Returns false if no rooms meet the criteria or if all suitable rooms are already booked for the requested date range.

- Side Effects: The primary side effect of this method is modifying the state of a `Room` object by marking it as booked for certain dates. This state change affects the availability of the room for other potential bookings.
 
---

Q4: In your opinion, which is better quality code, Code A or B? Justify your answer.

Code B would typically be the preferable choice for its straightforwardness and efficiency in executing the desired functionality.

- Code A: 
  * Easy to debugging
  * Flexibility to modifications
  * But uses an extra variable and more lines

- Code B: 
  * Efficiency in Simplicity
  * But reduced readability and maintainability

---

Task 3

Q5: What are some code smells (features of the code that make it poor quality) present in this method?

- The structure of the checks is repeated for each type of room. This repetition can lead to errors if modifications are needed in the future and changes are not consistently applied across all conditions.
- Using instanceof tightly couples the method to specific room types, making it less flexible and harder to extend with new room types without modifying this method.


---

Task 4

Q6: Note down all of the code smells you can see.

- Repetitive Code: If there are common methods or properties across the three room types, having them implemented repeatedly in each subclass can be a sign of redundant code. This not only makes maintenance harder but also increases the risk of inconsistencies.

- Overuse of interfaces when common implementation exists.

---

Q7: Reflect on your thought process, the steps you took to refactor and how you have improved the design of the system.

1. I started by assessing the existing design, identifying repetitive and redundant code, and areas lacking encapsulation.

2. I decided to use an abstract class to share common functionality.

3. I implemented shared methods in the abstract class and allowed for specialized behaviors via abstract methods, ensuring each room type could handle specifics on its own.

4. After refactoring, I ensured that the RefactoringRegressionTests still passed, confirming that my changes preserved existing functionalities.

Improvements Made: The new design is easier to maintain and modify as most shared logic is now centralized.

---

Reflections

This extensive lab exercise involved building, refactoring, and extending a hotel booking system in Java. The activity required applying key software engineering principles such as object-oriented programming, abstraction, encapsulation, and more. It also involved implementing JSON serialization to prepare the system for real-world applications like web services.

Learned
- Abstraction and Encapsulation
- Code Refactoring
- JSON Serialization

Challenges Faced
- Understanding Inheritance and Interfaces
- Ensuring Test Coverage
- Design Decision Trade-offs

:::