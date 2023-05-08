---
title: "[Kotlin] Serialization"
---

# [Kotlin] Serialization

## Serialization

**Serialization** is the process of converting data used by an application to a format that can be transferred over a network or stored in a database or a file.

## Deserialization

**Deserialization** is the opposite process of reading data from an external source and converting it into a runtime object.

## serialVersionUID

The serialization runtime associates with each serializable class a version number, called a **serialVersionUID**, which is used during deserialization to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible with respect to serialization.

:::caution
It is strongly recommended that all serializable classes explicitly declare serialVersionUID values, since the default serialVersionUID computation is highly sensitive to class details that may vary depending on compiler implementations, and can thus result in unexpected InvalidClassExceptions during deserialization.
:::

#### with data class

```kotlin
data class Animal (
    val name: String
): Serializable {
    companion object {
        private const val serialVersionUID: Long = 1L
    }
}
```

:::info
Java often encounters the "long C = 1L" notation,L means long, long takes 8 bytes, indicating range: -9223372036854775808 ~ 9223372036854775807
:::

## Reference

+ [kotlinlang](https://kotlinlang.org/docs/serialization.html) - Serialization
+ [docs](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html) - Interface Serializable
