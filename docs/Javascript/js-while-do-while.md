---
sidebar_position: 1
title: "[JS] while & do while"
---

# [JS] while & do while

## Difference

The significant difference is when the condition is checked.

### while

A while loop checks the condition. As long as the test condition evaluates to true, then executes the loop.

```
// It will execute till i is bigger than 9.

let i = 0;

while (i < 10) {
    i++;
}

console.info(i); // i=10
```

### do while

A do while loop executes the loop and then checks the conditions.

```
// It will execute till i is bigger than 9.

let i = 0;

do {
    i++;
} while (i < 10);

console.info(i); // i=10
```
