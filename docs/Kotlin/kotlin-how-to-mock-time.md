---
sidebar_position: 1
title: "[Kotlin] How to mock time ?"
---

# [Kotlin] How to mock time ?

## with kotest

If you want to mock **LocalDateTime**:

```
val currentTime = LocalDateTime.now()

withConstantNow(currentTime) {
  LocalDateTime.now() shouldBe currentTime
  delay(10) // Code is taking a small amount of time to execute, but `now` changed!
  LocalDateTime.now() shouldBe currentTime
}
```

If you want to mock **Instant**: 

```
val currentTime = Instant.now()

withConstantNow(currentTime) {
  Instant.now() shouldBe currentTime
  delay(10) // Code is taking a small amount of time to execute, but `now` changed!
  Instant.now() shouldBe currentTime
}
```

## Reference

+ @ [kotest](https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/instant.md)
