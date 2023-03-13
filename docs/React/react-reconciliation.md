---
sidebar_position: 1
title: "[React] Reconciliation"
---

# [React] Reconciliation

:::caution

This is not original content, but just a note from articles I read.

:::

## Intro

The reconciliation process makes React work faster. Reconciliation is the process through which React updates the Browser DOM.

## Rendering

The term **rendering** in React can closely be identified as making or becoming. In traditional rendering, Browser does the following tasks:

+ Creates a DOM (Document Object Model) represented by a tree structure.
+ Renders any new data to the DOM even if data is similar to previous ones.

This rendering by Browser has a sequence of steps and is rather costly in nature. The concept of Virtual DOM used by React makes rendering much faster.

## How do React do in the process of Reconciliation ?

Important concepts behind the working of the Reconciliation process are:

**1. Virtual DOM**

**2. Diffing Algorithm**

### Virtual DOM

React renders JSX components to the Browser DOM, but keeps a copy of the actual DOM to itself.

This copy is the Virtual DOM. We can think of it as the twin brother of the real or Browser DOM.

The following actions take place in React:

1. React **stores a copy of Browser DOM** which is called **Virtual DOM**.
2. When we **make changes or add data**, React creates a **new Virtual DOM and compares it with the previous one**.
3. Comparison is done by Diffing Algorithm. The cool fact is all these comparisons **take place in the memory** and nothing is yet changed in the Browser.
4. After comparing, React goes ahead and creates a **new Virtual DOM having the changes**. It is to note that as many as 200,000 virtual DOM nodes can be produced in a second.
5. Then it **updates the Browser DOM** with **the least number of changes** possible **without rendering the entire DOM again**. This changes the efficiency of an application tremendously


### Diffing Algorithm

Some concepts used by this Algorithm are:

1. Two elements of different types will produce different trees.
2. Breadth-First Search (BFS) is applied because if a node is found as changed, it will re-render the entire subtree hence Depth First Approach is not exactly optimal. 
3. When comparing two elements of the same type, keep the underlying node as same and only update changes in attributes or styles.
4. React uses optimizations so that a minimal difference can be calculated in O(N) efficiently using this Algorithm.

###

## Reference

+ @ [geeksforgeeks](https://www.geeksforgeeks.org/reactjs-reconciliation/) - ReactJS Reconciliation
