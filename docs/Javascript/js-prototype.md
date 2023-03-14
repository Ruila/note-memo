---
sidebar_position: 1
title: "[JS] prototype chain"
---

# [JS] Inheritance and the prototype chain

:::caution

This is not original content, but just a note from articles I read.

:::

## Intro

When it comes to inheritance, **JavaScript only has one construct**: **objects**.

Each object has a private property which holds a link to another object called its prototype.

## What are the differences between \__proto__ and prototype?

```javascript
var b = new Foo(20);
var c = new Foo(30);
```

![img](./img/js-prototype.png)

**\__proto__** is the actual object that is used in the lookup chain to resolve methods, etc.

**prototype** is the object that is used to build **\__proto__** when you create an object with new:

```javascript
( new Foo ).__proto__ === Foo.prototype
( new Foo ).prototype === undefined
```

## Reference

+ @ [dmitrysoshnikov](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/) - JavaScript. The Core.
+ @ [stackoverflow](https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript) - __proto__ VS. prototype in JavaScript
