---
title: "[JS] Params in function are passed by reference ? or by value ?"
---

# [JS] Params in function are passed by reference ? or by value ?

## Primitive type

The `name` in function as param is different variable from the `name` declared in global.

```javascript
let name = "Will"; // 1. assume it's stored at 0x01 in memory
let digit = 0; // 2. assume it's stored at 0x02 in memory

function change(name, digit) { // 4. assume that name is stored at 0x03, digit is stored at 0x04
    name = "John" // 5. change value at 0x03
    digit = 2 // 6. change value at 0x04
}

change(name, digit); // 3.

console.info(name); // "Will"
console.info(digit); // 0
```

## Object type

```javascript
let obj = { name: "Will", digit: 0}; // 1. assume it's stored at 0x01 in memory which value is address of objet(0x999).

function change(obj) { // 3. assume obj is stored at 0x02 in memory which value is 0x999 from args.
    obj.name = "John" // 4. change value at 0x999
    obj.digit = 2   // 5. change value at 0x999
}

change(obj); // 2.

console.info(obj.name); // "John"
console.info(obj.digit); // 2
```

```javascript
let obj = { name: "Will", digit: 0}; // 1. assume it's stored at 0x01 in memory which value is address of objet(0x999).

function change(obj) { // 3. assume obj is stored at 0x02 in memory which value is 0x999 from args.
    obj = { // 4. this obj is stored at 0x100
        name: "John", // 5. change value at 0x100
        digit: 2   // 6. change value at 0x100
    }
}

change(obj); // 2. 

// 7. console obj from 0x999
console.info(obj.name); // "John"
console.info(obj.digit); // 2
```

## Reference

+ @[Huli](https://blog.techbridge.cc/2018/06/23/javascript-call-by-value-or-reference/) - 深入探討 JavaScript 中的參數傳遞：call by value 還是 reference？
+ @[flexiple.com](https://flexiple.com/javascript/javascript-pass-by-reference-or-value/) - Javascript pass by reference or value
