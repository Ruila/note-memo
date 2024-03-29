---
title: "[JS] call"
---

# [JS] call

:::caution

This is not original content, but just a note from articles I read.

:::

## Intro

The call() method **calls the function** with a given this value and arguments provided individually.

```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// Expected output: "cheese"
```

## Reference

+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
