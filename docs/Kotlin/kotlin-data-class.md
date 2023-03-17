---
sidebar_position: 1
title: "[Kotlin] Data Class"
---

# [Kotlin] Data Class

In Kotlin, these are called data classes and are marked with data which main purpose is to hold data:

```
data class User(val name: String, val age: Int)
```

The compiler automatically derives the following members from all properties declared in the primary constructor:

+ equals()/hashCode() pair

+ toString() of the form "User(name=John, age=42)"

+ componentN() functions corresponding to the properties in their order of declaration.

+ copy() function (see below).

## Rules

To ensure consistency and meaningful behavior of the generated code, data classes have to fulfill the following requirements:

+ The primary constructor needs to have **at least one parameter**.

+ All primary constructor parameters need to be marked as **val** or **var**.

+ Data classes cannot be **abstract**, **open**, **sealed**, or **inner**.

## Properties declared in the class body

Only the property name will be used inside the **toString()**, **equals()**, **hashCode()**, and **copy()** implementations.

```
data class Person(val name: String) {
    var age: Int = 0
}
val person1 = Person("John")
println(person1.toString())   // Person(name=John)
```



## Copying

Use the copy() function to copy an object, allowing you to **alter some of its properties** while keeping the rest unchanged.

```
val jack = User(name = "Jack", age = 1)
val olderJack = jack.copy(age = 2)
```

## Destructuring declarations

```
val jane = User("Jane", 35)
val (name, age) = jane
println("$name, $age years of age") // prints "Jane, 35 years of age"
```

## Reference

+ @[kotlinlang.org](https://kotlinlang.org/docs/data-classes.html)
