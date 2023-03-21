---
title: "[Browser] Render"
---

# [Browser] Render

## Process

![browser-render](./img/browser-render.png)
>by [faressoft](https://github.com/faressoft)

1. When the user enters the URL, It will fetch the HTML source code from the server
2. Browser Parse the HTML source code and convert into the Tokens <, TagName, Attribute, AttributeValue, >
3. The Tokens will convert into the nodes and will construct the DOM Tree
4. The CSSOM Tree will generate from the CSS rules
5. The DOM and CSSOM tree will combine into the RenderTree
6. The RenderTree are constructed as below:
+ Start from the root of the dom tree and compute which elements are visible and their computed styles
+ RenderTree will ignore the not visible elements like (meta, script, link) and display:none
+ It will match the visible node to the appropriate CSSOM rules and apply them
7. Reflow: Calculate the position and size of each visible node
8. Repaint: now, the browser will paint the renderTree on the screen

## When occurs Reflow ?

The Reflow happens when changes are made to the elements, that affect the layout of the partial or whole page.

The Reflow of the element will cause the subsequent reflow of all the child and ancestor elements in the DOM

## When occurs Repaint ?

The Repaint occurs when changes are made to the appearance of the elements that change the visibility, but doesn't affect the layout
Eg: Visibility, background color, outline

## Reference

+ @ [DEV](https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg) - Understanding Reflow and Repaint in the browser
