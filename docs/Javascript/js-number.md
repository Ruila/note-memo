---
title: "[JS] Number"
---

# [JS] Number

## Encoding

The JavaScript Number type is a [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) value, like double in Java or C#.

This means it can represent fractional values, but there are some limits to the stored number's magnitude and precision.

Very briefly, an **IEEE 754 double-precision number** uses 64 bits to represent 3 parts:

+ 1 bit for the sign (positive or negative)
+ 11 bits for the exponent (-1022 to 1023)
+ 52 bits for the mantissa (representing a number between 0 and 1)
```javascript
Number(89.123123366666667777) // will be 89.12312336666666
```

#### Related disscussion

+ [StackOverflow](https://stackoverflow.com/questions/52467772/when-javascript-maximum-number-length-more-than-16-what-happen) - When JavaScript maximum number length more than 16，what happen ？

## Reference

+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) - Number
