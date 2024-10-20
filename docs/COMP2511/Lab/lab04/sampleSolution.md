---
title: Lab04 Sample Solution
createTime: 2024/10/06 23:29:40
permalink: /COMP2511/pucfya6i/
---

::: file-tree
- lab04/...
    - main/java/unsw/enrolment
        - CourseOffering.java
        - Enrolment.java
        - Grade.java
        - Student.java
    - main/java/unsw/banking
        - BankAccount.java
        - LoggedBankAccount.java
    - main/test/unsw/enrolment
        - EnrolmentTest.java
    - blog.md

:::

::: details 🛡️ Core Exercise: Enrolments

::: tabs

@tab CourseOffering

`CourseOffering.java`

```java
package unsw.enrolment;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import unsw.enrolment.exceptions.InvalidEnrolmentException;

public class CourseOffering { // extends Course {
    private Course course;
    private String term;
    private List<Enrolment> enrolments = new ArrayList<Enrolment>();

    public CourseOffering(Course course, String term) {
        // Task1 PartC
        // super(course.getCourseCode(), course.getTitle());
        this.course = course;
        this.term = term;
        this.course.addOffering(this);
    }

    public Course getCourse() {
        return course;
    }

    public String getCourseCode() {
        return course.getCourseCode();
    }

    public List<Course> getCoursePrereqs() {
        return course.getPrereqs();
    }

    public String getTerm() {
        return term;
    }

    public Enrolment addEnrolment(Student student) throws InvalidEnrolmentException {
        if (checkValidEnrolment(student)) {
            Enrolment enrolment = new Enrolment(this, student);
            enrolments.add(enrolment);
            student.addEnrolment(enrolment);
            return enrolment;
        } else {
            throw new InvalidEnrolmentException("student has not satisfied the prerequisites");
        }
    }

    /*
    private boolean checkValidEnrolment(Student student) {
        List<Course> prereqs = getCoursePrereqs();
        for (Course prereq : prereqs) {
            List<Enrolment> studentEnrolments = student.getEnrolments();
            boolean valid = false;
            // Task1 PartB
            for (Enrolment enrolment : studentEnrolments) {
                if (enrolment.getCourse().equals(prereq) && enrolment.getGrade() != null) {
                    if (enrolment.getGrade().getMark() >= 50 && enrolment.getGrade().getGrade() != "FL"
                            && enrolment.getGrade().getGrade() != "UF") {
                        valid = true;
                        break;
                    }
                }
            }
            if (!valid) {
                return false;
            }
        }
        return true;
    }
    */

    // Task1 PartB
    private boolean checkValidEnrolment(Student student) {
        List<Course> prereqs = getCoursePrereqs();

        /*
        for (Course prereq : prereqs) {
            boolean valid = student.getEnrolments().stream()
                    .anyMatch(enrolment -> enrolment.hasPassedPrerequisite(prereq));
            if (!valid) {
                return false;
            }
        }
        */
        // Task2
        return prereqs.stream().allMatch(prereq -> student.getEnrolments().stream()
                .anyMatch(enrolment -> enrolment.hasPassedPrerequisite(prereq)));

        // return true;
    }

    public List<Student> studentsEnrolledInCourse() {
        List<Student> students = enrolments.stream().map(Enrolment::getStudent).collect(Collectors.toList());
        return students;
    }

}

```

@tab Enrolment

`Enrolment.java`
    
```java
package unsw.enrolment;

public class Enrolment {
    private CourseOffering offering;
    private Grade grade;
    private Student student;

    public Enrolment(CourseOffering offering, Student student) {
        this.offering = offering;
        this.student = student;
    }

    public Student getStudent() {
        return student;
    }

    public CourseOffering getOffering() {
        return offering;
    }

    public boolean hasPassedCourse() {
        if (grade == null) {
            return false;
        }

        // return grade.getMark() >= 50 && grade.getGrade() != "FL" && grade.getGrade() != "UF";
        return grade.isPass();
    }

    // Task1 PartB
    public boolean hasPassedPrerequisite(Course prereq) {
        return this.getCourse().equals(prereq) && this.getGrade() != null && this.getGrade().isPass();
    }

    public Course getCourse() {
        return offering.getCourse();
    }

    public String getTerm() {
        return offering.getTerm();
    }

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }
}

```

@tab Grade

`Grade.java`

```java
package unsw.enrolment;

public class Grade {
    private int mark;
    private String grade;
    private CourseOffering offering;

    private static final int PASS_MARK = 50;
    private static final String FAIL_GRADE_FL = "FL";
    private static final String FAIL_GRADE_UF = "UF";

    public Grade(CourseOffering offering, int mark, String grade) {
        this.offering = offering;
        this.mark = mark;
        this.grade = grade;
    }

    // Task1 PartA
    public boolean isPass() {
        if (grade == null) {
            return false;
        }
        return mark >= PASS_MARK && !grade.equals(FAIL_GRADE_FL) && !grade.equals(FAIL_GRADE_UF);
    }

    public int getMark() {
        return mark;
    }

    public String getGrade() {
        return grade;
    }

    public CourseOffering getOffering() {
        return offering;
    }
}

```

@tab Student

`Student.java`

```java
package unsw.enrolment;

import java.util.ArrayList;
import java.util.List;

public class Student {
    private String zid;
    private ArrayList<Enrolment> enrolments = new ArrayList<Enrolment>();
    private String name;
    private int program;
    private String[] streams;

    public Student(String zid, String name, int program, String[] streams) {
        this.zid = zid;
        this.name = name;
        this.program = program;
        this.streams = streams;
    }

    public boolean isEnrolled(CourseOffering offering) {
        // for (Enrolment enrolment : enrolments) {
        //     if (enrolment.getOffering().equals(offering)) {
        //         return true;
        //     }
        // }

        // Task2
        return enrolments.stream().anyMatch(e -> e.getOffering().equals(offering));

        // return false;
    }

    public void setGrade(Grade grade) {
        // for (Enrolment enrolment : enrolments) {
        //     if (enrolment.getOffering().equals(grade.getOffering())) {
        //         enrolment.setGrade(grade);
        //     }
        // }

        // Task2
        enrolments.stream().filter(e -> e.getOffering().equals(grade.getOffering())).forEach(e -> e.setGrade(grade));
    }

    public void addEnrolment(Enrolment enrolment) {
        enrolments.add(enrolment);
    }

    public List<Enrolment> getEnrolments() {
        return enrolments;
    }

    // Task3
    public String getZid() {
        return zid;
    }

    public String getName() {
        return name;
    }

    public int getProgram() {
        return program;
    }

    public String[] getStreams() {
        return streams;
    }
}

```

@tab EnrolmentTest

`EnrolmentTest.java`

```java
package unsw.enrolment;

import java.io.IOException;

import unsw.enrolment.exceptions.InvalidEnrolmentException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;

import org.junit.jupiter.api.Test;

public class EnrolmentTest {
    private List<Student> parseStudentsCSV(String path) {
        String fileContents;

        try {
            fileContents = new String(EnrolmentTest.class.getResourceAsStream(path).readAllBytes());
        } catch (IOException e) {
            return null;
        }

        CSVParser csvParser = null;

        try {
            csvParser = CSVParser.parse(fileContents, CSVFormat.RFC4180);
        } catch (IOException e) {
            return null;
        }

        List<Student> students = new ArrayList<Student>();

        csvParser.forEach(record -> {
            if (record.getRecordNumber() == 1)
                return;
            students.add(new Student(record.get(0), record.get(1), Integer.parseInt(record.get(2)),
                    record.get(3).split(" ")));
        });

        return students;
    }

    @Test
    public void testIntegration() {
        // Create courses
        Course cs1511 = new Course("COMP1511", "Programming Fundamentals");
        Course cs1531 = new Course("COMP1531", "Software Engineering Fundamentals");
        cs1531.addPrereq(cs1511);
        Course cs2521 = new Course("COMP2521", "Data Structures and Algorithms");
        cs2521.addPrereq(cs1511);

        CourseOffering cs1511Offering = new CourseOffering(cs1511, "19T1");
        CourseOffering cs1531Offering = new CourseOffering(cs1531, "19T1");
        CourseOffering cs2521Offering = new CourseOffering(cs2521, "19T2");

        // Create a student
        Student student1 = new Student("z5555555", "Jon Snow", 3707, new String[] {
                "SENGAH"
        });

        // Enrol the student in COMP1511 for T1 (this should succeed)
        assertDoesNotThrow(() -> {
            cs1511Offering.addEnrolment(student1);
        });
        assertTrue(student1.isEnrolled(cs1511Offering));

        // Enrol the student in COMP1531 for T1 (this should fail as they
        // have not met the prereq)
        assertThrows(InvalidEnrolmentException.class, () -> {
            cs1531Offering.addEnrolment(student1);
        });

        // Give the student a passing grade for COMP1511
        Grade student1comp1511grade = new Grade(cs1511Offering, 98, "HD");
        student1.setGrade(student1comp1511grade);

        // Enrol the student in 2521 & 1531 (this should succeed as they have met
        // the prereqs)
        assertDoesNotThrow(() -> {
            cs2521Offering.addEnrolment(student1);
            cs1531Offering.addEnrolment(student1);
        });

        assertTrue(student1.isEnrolled(cs2521Offering));
        assertTrue(student1.isEnrolled(cs1531Offering));
    }

    @Test
    public void testComparator() {
        List<Student> students = parseStudentsCSV("/students.csv");

        // Task3: anonymous
        students.sort(new Comparator<Student>() {
            @Override
            public int compare(Student s1, Student s2) {
                int programComparison = Integer.compare(s1.getProgram(), s2.getProgram());
                if (programComparison != 0) {
                    return programComparison;
                }
                int streamsComparison = Integer.compare(s1.getStreams().length, s2.getStreams().length);
                if (streamsComparison != 0) {
                    return streamsComparison;
                }
                int nameComparison = s1.getName().compareTo(s2.getName());
                if (nameComparison != 0) {
                    return nameComparison;
                }
                return s1.getZid().compareTo(s2.getZid());
            }
        });

        // Task3: lambda
        students.sort(Comparator.comparingInt(Student::getProgram).thenComparingInt(s -> s.getStreams().length)
                .thenComparing(Student::getName).thenComparing(Student::getZid));

        assertEquals("z5204829", students.get(0).getZid());
        assertEquals("z5122521", students.get(1).getZid());
    }

    @Test
    public void testEmptyList() {
        List<Student> students = new ArrayList<>();

        students.sort(Comparator.comparingInt(Student::getProgram).thenComparingInt(s -> s.getStreams().length)
                .thenComparing(Student::getName).thenComparing(Student::getZid));

        // Empty list
        assertTrue(students.isEmpty());
    }

    @Test
    public void testSingleStudent() {
        List<Student> students = Arrays.asList(new Student("z1234567", "John Doe", 3781, new String[] {
                "COMPA1"
        }));

        students.sort(Comparator.comparingInt(Student::getProgram).thenComparingInt(s -> s.getStreams().length)
                .thenComparing(Student::getName).thenComparing(Student::getZid));

        // Only one student
        assertEquals(1, students.size());
        assertEquals("z1234567", students.get(0).getZid());
    }

    @Test
    public void testDuplicateStudents() {
        List<Student> students = Arrays.asList(new Student("z1234567", "John Doe", 3781, new String[] {
                "COMPA1"
        }), new Student("z1234567", "John Doe", 3781, new String[] {
                "COMPA1"
        }));

        students.sort(Comparator.comparingInt(Student::getProgram).thenComparingInt(s -> s.getStreams().length)
                .thenComparing(Student::getName).thenComparing(Student::getZid));

        // Student 1 and Student 2 are the same
        assertEquals(2, students.size());
        assertEquals("z1234567", students.get(0).getZid());
        assertEquals("z1234567", students.get(1).getZid());
    }

    @Test
    public void testIncompleteData() {
        List<Student> students = Arrays.asList(new Student("z1234567", "John Doe", 3781, new String[] {
                "COMPA1"
        }), new Student("z7654321", null, 3791, new String[] {
                "COMPA1"
        }));

        students.sort(Comparator.comparingInt(Student::getProgram).thenComparingInt(s -> s.getStreams().length)
                .thenComparing(Student::getName, Comparator.nullsLast(Comparator.naturalOrder()))
                .thenComparing(Student::getZid));

        // NULL
        assertEquals("z1234567", students.get(0).getZid());
        assertEquals("z7654321", students.get(1).getZid());
    }
}

```

:::


::: details 💰 Core Exercise: The Bank's Contract

::: tabs

@tab BankAccount

`BankAccount.java`

```java
package banking;

public class BankAccount {
    private double balance;

    // Class invariant: balance >= 0

    /**
     * Constructs a new BankAccount with the given initial balance.
     *
     * @param initialBalance the initial balance, must be >= 0
     */
    public BankAccount(double initialBalance) {
        if (initialBalance < 0) {
            throw new IllegalArgumentException("Initial balance must be non-negative");
        }
        this.balance = initialBalance;
    }

    /**
     * Deposits a specified amount into the bank account.
     *
     * Preconditions:
     * 1. amount must be > 0
     *
     * Postconditions:
     * - balance is increased by amount
     * - balance >= 0 (class invariant)
     *
     * @param amount the amount to deposit, must be > 0
     */
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be greater than zero");
        }
        balance += amount;
    }

    /**
     * Withdraws a specified amount from the bank account if there are sufficient funds.
     *
     * Preconditions:
     * - amount must be > 0
     * - balance >= amount
     *
     * Postconditions:
     * - balance is decreased by amount
     * - balance >= 0 (class invariant)
     *
     * @param amount the amount to withdraw, must be > 0 and <= balance
     */
    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be greater than zero");
        }
        if (balance < amount) {
            throw new IllegalArgumentException("Insufficient funds");
        }
        balance -= amount;
    }

    /**
     * Returns the current balance of the bank account.
     *
     * @return the current balance
     */
    public double getBalance() {
        return balance;
    }
}

```

@tab LoggedBankAccount

`LoggedBankAccount.java`

```java
package banking;

import java.util.ArrayList;
import java.util.List;

/**
 * Represents a bank account with logging capabilities.
 */
public class LoggedBankAccount extends BankAccount {
    private List<String> transactionLog;

    /**
     * Constructs a new LoggedBankAccount with the given initial balance.
     *
     * @param initialBalance the initial balance, must be >= 0
     */
    public LoggedBankAccount(double initialBalance) {
        super(initialBalance);
        transactionLog = new ArrayList<>();
    }

    /**
     * Deposits a specified amount into the bank account and logs the transaction.
     *
     * Preconditions:
     * - amount must be > 0
     *
     * Postconditions:
     * - balance is increased by amount
     * - balance >= 0 (class invariant)
     * - transaction is logged
     *
     * @param amount the amount to deposit, must be > 0
     */
    @Override
    public void deposit(double amount) {
        super.deposit(amount);
        logTransaction("Deposited: " + amount);
    }

    /**
     * Withdraws a specified amount from the bank account if there are sufficient funds and logs the transaction.
     *
     * Preconditions:
     * - amount must be > 0
     * - balance >= amount
     *
     * Postconditions:
     * - balance is decreased by amount
     * - balance >= 0 (class invariant)
     * - transaction is logged
     *
     * @param amount the amount to withdraw, must be > 0 and <= balance
     */
    @Override
    public void withdraw(double amount) {
        super.withdraw(amount);
        logTransaction("Withdrew: " + amount);
    }

    /**
     * Logs a transaction.
     *
     * @param message the transaction message to log
     */
    private void logTransaction(String message) {
        transactionLog.add(message);
    }

    /**
     * Returns the transaction log.
     *
     * @return the transaction log
     */
    public List<String> getTransactionLog() {
        return transactionLog;
    }
}

```

:::

::: details Blog

#### 🛡️ Core Exercise: Enrolments

##### Task 1

###### Part A

**Q1: What is the code smell present in this snippet? What is the design problem causing the smell?**

**Code smell:**

 - Magic numbers and strings: `50`, `FL`, `UF`.
 - Incorrect string comparison: Using `!=` for string comparison.
 - Responsibility: The logic to determine if a course is passed is tightly coupled with the `Enrolment` class.

**Design Problem:**
- The `hasPassedCourse` method contains hardcoded values and logic that should be part of the `Grade` class.

**Refactoring Steps:**
1. Extract magic values into constants within the `Grade` class.
2. Move the logic to determine if a grade is a pass to the `Grade` class.
3. Use `.equals()` for string comparison to avoid bugs.
4. Update the `Enrolment` class to use the new method from the `Grade` class.

###### Part B

Q2: Find this code, and in your blog note down the code smells you detected which led you to your conclusion.

**Code Smells:**
- **Chain of Calls**: The method `checkValidEnrolment` in `CourseOffering` class uses chain of calls like `enrolment.getCourse().equals(prereq)` and `enrolment.getGrade().getMark()`.
- **Direct Access to Internal States**: Directly accessing the internal states of `Student`, `Enrolment`, and `Grade` classes leads to strong coupling and violates the Law of Demeter.

**Refactoring Steps:**
1. **Identify Chain of Calls**: Locate the chain of calls in the `checkValidEnrolment` method.
2. **Introduce Intermediate Methods**: Add new methods in `Enrolment` and `Grade` classes to encapsulate the logic.
3. **Simplify Method Calls**: Update the `checkValidEnrolment` method to use the new methods.

**Design Decisions:**
- **Encapsulation**: By moving the logic to Enrolment and Grade classes, we encapsulate the behavior, reduce coupling, and adhere to the Law of Demeter.
- **Simplified Interface**: The `checkValidEnrolment` method now has a simplified interface, making the code easier to understand and maintain.

###### Part C

**Problem:**
- The `CourseOffering` class inherits from `Course` class, which may not be appropriate as a `CourseOffering` is not a type of `Course`. This inheritance relationship violates the Liskov Substitution Principle because it alters the expected behavior of the `Course` class methods.

**Refactoring Steps:**
1. **Identify the Issue**: Recognize that `CourseOffering` should not inherit from `Course` as it represents a different concept.
2. **Change Inheritance to Composition**: Modify `CourseOffering` to use composition instead of inheritance, containing a `Course` object instead of extending `Course`.

##### Task 3

**Anonymous**
+ More explicit and easier to understand for beginners.
+ Clearly defines the comparator logic in one place.
- Verbose and require more boilerplate code.
- Less readable and maintainable due to the length.

**Lambda**
+ Concise and readable, reducing boilerplate code.
+ Easier to write and understand for experienced developers.
- May be less clear for beginners or those unfamiliar with lambda expressions.
- Can be harder to debug due to the lack of explicit method names.

**Conclusion:**
While both approaches are valid, the lambda expression is preferred due to its conciseness and readability. It allows for cleaner code and easier maintenance.

##### Core Blogging: Reflect on the Enrolments Lab

During the Enrolments Lab, I encountered challenges such as identifying code smells, adhering to design principles like the Law of Demeter and Liskov Substitution Principle, and refactoring code to use Java Streams. These tasks enhanced my understanding of encapsulation, reducing coupling, and the benefits of functional programming. The lab taught me how to write clearer, more maintainable code, and the experience significantly improved my approach to software design, ensuring my code is now more robust and easier to modify.

---

#### 💰 Core Exercise: The Bank's Contract

##### Task 1

###### Explain why the code is consistent with the preconditions and postconditions.

In the `BankAccount` and `LoggedBankAccount` classes, we have explicitly defined preconditions and postconditions in the JavaDoc comments for each method, and the code implementation strictly adheres to these conditions:

**`deposit` Method**:
   - Preconditions: The `amount` must be greater than 0.
   - The implementation checks if the `amount` is greater than 0, and if not, it throws an `IllegalArgumentException`.
   - Postconditions: The balance is increased by `amount`, and the balance must be greater than or equal to 0.
   - If the preconditions are met, the balance is increased by the `amount`, ensuring the balance is always non-negative.

**`withdraw` Method**:
   - Preconditions: The `amount` must be greater than 0, and the balance must be greater than or equal to the `amount`.
   - The implementation checks if the `amount` is greater than 0 and if the balance is sufficient; if not, it throws an `IllegalArgumentException`.
   - Postconditions: The balance is decreased by `amount`, and the balance must be greater than or equal to 0.
   - If the preconditions are met, the balance is decreased by the `amount`, ensuring the balance is always non-negative.


###### Explain why balance >= 0 is a class invariant for both classes. I.e., give a small informal proof of why this is always true if your preconditions are met.

The proof that `balance >= 0` is a class invariant is as follows:

**Constructor**:
   - In both `BankAccount` and `LoggedBankAccount`, the constructor checks and ensures that the initial balance (`initialBalance`) is non-negative.
   - Therefore, any account instance is initialized with `balance >= 0`.

**`deposit` Method**:
   - Preconditions: `amount > 0`.
   - If the precondition is met, the `balance` is increased by `amount`. Since `amount` is positive, the balance after the deposit remains non-negative.

**`withdraw` Method**:
   - Preconditions: `amount > 0` and `balance >= amount`.
   - If the preconditions are met, the `balance` is decreased by `amount`. Given that the original `balance` is at least `amount`, the balance after withdrawal remains non-negative.

From the above analysis, it is clear that as long as the preconditions are satisfied, the class invariant `balance >= 0` will always hold true.


###### Are your class definitions consistent with the Liskov Substitution Principle?

The Liskov Substitution Principle (LSP) requires that subclasses should be substitutable for their base classes without affecting the correctness of the program. In our implementation:

- `LoggedBankAccount` extends `BankAccount`**: `LoggedBankAccount` enhances the base class by adding logging functionality, without altering the behavior of the base class methods or violating their preconditions and postconditions.

- **Consistency**: The `deposit` and `withdraw` methods in `LoggedBankAccount` call the corresponding methods in the superclass (`BankAccount`) and then log the transaction. This extension does not impact the correctness of the superclass methods or break the class invariant.

Therefore, `LoggedBankAccount` can seamlessly replace `BankAccount` without compromising the program's correctness, thus adhering to the Liskov Substitution Principle.

:::