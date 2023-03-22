---
title: "[Kotlin] Instant v.s. LocalDatetime"
---

# [Kotlin] Instant v.s. LocalDatetime

## tl;dr

`Instant` and `LocalDateTime` are two entirely different animals: One represents a moment, the other does not.

`Instant` represents a moment, a specific point in the **UTC** timeline.
It elapsed from the standard Java epoch(beginning of time in Java) of 1970-01-01T00:00:00Z.

`LocalDateTime` represents a date and a time-of-day.
But lacking a time zone or offset-from-UTC, **this class cannot represent a moment**.
It represents potential moments along a range of about 26 to 27 hours, the range of all time zones around the globe.
A `LocalDateTime` value is inherently **ambiguous**.

```
print(time.toInstant(ZoneOffset.UTC)) // 2023-03-22T08:25:10.195027Z.
print(time.toInstant(ZoneOffset.of("+08:00"))) 2023-03-22T16:25:10.195027Z
```

## toInstant

If you want to transform `LocalDateTime` to `Instant`, you have to provide the zone offset, like:
```
user.createdAt?.toInstant(ZoneOffset.UTC)
```

## Reference

+ @ [stackoverflow](https://stackoverflow.com/questions/32437550/whats-the-difference-between-instant-and-localdatetime)
