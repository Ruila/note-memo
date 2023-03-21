---
title: "[CSS] selector priority"
---

# [CSS] selector priority

## Intro

The priority level of the selector is decided in Point of combination of selectors.
+ style attribute = a
+ number of ID attributes in the selector = b
+ number of other attributes and pseudo-classes in the selector = c
+ number of element names and pseudo-elements in the selector = d

## Example

```css
article p span{
   color: blue;
 }
 #red{
   color: red;
 }
```

```html
<body>
  <article>
    <p>This is <span id="red">paragraph</span>.</p>
  </article>
</body>
```

"article p span" are "a=0, b=0, c=0, d=3 (0003)".
"#red" is "a=0, b=1, c=0, d=0 (0100)".

In this instance, paragraph becomes a red character. Because "#red(0100)" is bigger than "article p span(0003)".

## Reference

+ @[w3](https://www.w3.org/wiki/Css/Training/Priority_level_of_selector) - Css/Training/Priority level of selector
