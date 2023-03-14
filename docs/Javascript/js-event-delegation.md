---
sidebar_position: 1
title: "[JS] event delegation"
---

# [JS] event delegation

:::caution

This is not original content, but just a note from articles I read.

:::

## Intro

Event delegation is a way which benefit from **event bubbling** can reduce the number of listeners.

```javascript
<div class="parent">
  <div class="child" data-name="a"></div>
  <div class="child" data-name="b"></div>
  <div class="child" data-name="c"></div>
  <div class="subitem" data-name="d"></div>
</div>
```

```javascript
$('.parent').on('click', '.child', function(){
  console.log($(this).data('name'));
});
```

## Reference

+ @ [summer](https://www.cythilya.tw/2015/07/08/javascript-event-delegation/) - Event Delegation 事件委派
