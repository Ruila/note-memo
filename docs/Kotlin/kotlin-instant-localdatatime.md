---
title: "[Kotlin] Instant v.s. LocalDatetime"
---

# [Kotlin] Instant v.s. LocalDatetime

## tl;dr

`Instant` and `LocalDateTime` are two entirely different animals: One represents a moment, the other does not.

`Instant` represents a moment, a specific point in the timeline.
`LocalDateTime` represents a date and a time-of-day.
But lacking a time zone or offset-from-UTC, **this class cannot represent a moment**.
It represents potential moments along a range of about 26 to 27 hours, the range of all time zones around the globe.
A `LocalDateTime` value is inherently **ambiguous**.

## Reference

+ @ [kotest](https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/instant.md)
