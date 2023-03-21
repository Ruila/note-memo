---
title: "[JS] closure"
---

# [JS] closure

:::caution

This is not original content, but just a note from articles I read.

:::

## Intro

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**).

In other words, a closure gives you **access to an outer function's scope from an inner function**.

In JavaScript, closures are **created every time a function is created**, at function creation time.

## Scoping with let and const

Traditionally (before ES6), JavaScript only had two kinds of scopes: **function scope** and **global scope**.

Variables declared with var are **either function-scoped or global-scoped**, depending on whether they are declared within a function or outside a function.

This can be tricky, because blocks with curly braces do not create scopes:

```javascript
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

In **ES6**, JavaScript introduced the let and const declarations, which, among other things like temporal dead zones, **allow you to create block-scoped variables**.

```javascript
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

In essence, **blocks are finally treated as scopes in ES6**, **but only if you declare variables with let or const**.

## Reference

+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) - closure
