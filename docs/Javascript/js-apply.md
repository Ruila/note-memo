---
sidebar_position: 2
title: "[JS] apply"
---

# [JS] apply

## Intro

The apply() method **calls the specified function** with a given this value, and arguments provided as an array.

```javascript
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2

```

## Reference

+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
