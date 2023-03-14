---
sidebar_position: 2
title: "[JS] bind"
---

# [JS] bind

:::caution

This is not original content, but just a note from articles I read.

:::

## Intro

The bind() method **creates a new function** that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript
const module = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42

```

## Reference

+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
