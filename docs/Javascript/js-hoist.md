---
title: "[JS] hoist"
---

# [JS] hoist

:::caution

This is not original content, but just a note from articles I read.

:::

## Intro

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

example:

```javascript
console.info(student);
console.info(demo);
console.info(declarreFunc);
function demo() {
	console.info("123")
}

var student = "John";

var declarreFunc = function (name) {
    console.log('declarreFunc')
}
```
print:
```javascript
// undefined
// function demo() {
//     console.info("123")
// }
// undefined
```

## let, const and class are non-hoisting !?

No, the [temporal dead zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) strictly forbids any use of the variable before its declaration.

### Temporal dead zone (TDZ)

A **let** or **const** variable is said to be in a **"temporal dead zone" (TDZ)** from the start of the block **until code execution reaches the line where the variable is declared and initialized**.

```javascript
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

The term **"temporal"** is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position).

For example, the code below works because, even though the function that uses the let variable appears **before the variable is declared**, the function is called outside the **TDZ**.

```javascript
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

### var with TDZ

This differs from var variables, which will return a value of undefined if they are accessed before they are declared.

```javascript
{
    // TDZ starts at beginning of scope
    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1;
    let foo = 2; // End of TDZ (for foo)
}
```

## Reference

+ @ [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) - hoisting
+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) - let
