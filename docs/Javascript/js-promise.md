---
sidebar_position: 2
title: "[JS] Promise"
---

# [JS] Promise

## Intro

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

## Promise with MacroTask and MicroTask

Immediately after every macrotask, the engine executes all tasks from microtask queue, prior to running any other macrotasks or rendering or anything else.

### Example

```javascript
setTimeout(()=>{ // 1. add to Web APIs queue, then it will be moved to macrotask.
    console.info("setTimeout") // 19. executes next marcotask
}, 0)

new Promise((resolve, reject) => {
    console.log("1"); // 2. construct Promise and executes in stack immediately
    resolve();
  })
.then(() => { // 3. add then event to microtask queue
    console.log("2"); // 4. start executes microtask and executes in stack immediately
    new Promise((resolve, reject) => { 
        console.log("3"); // 5. construct Promise and executes in stack immediately
        resolve();
    })
    .then(() => { // 6. add then event to microtask queue
        console.log("4"); // 10. start executes microtask and executes in stack immediately
    })
    .then(() => { // 11. add then event to microtask queue
        console.log("5"); // 15. start executes microtask and executes in stack immediately
    })
    .then(() => { // 16. add then event to microtask queue
        console.log("10"); // 18. start executes microtask and executes in stack immediately
    });
    
    new Promise((resolve, reject) => {
        console.log("7"); // 7. construct Promise and executes in stack immediately
        resolve();
    })
    .then(() => { // 8. add then event to microtask queue
        console.log("8"); // 12. start executes microtask and executes in stack immediately
    })
    .then(() => { // 13. add then event to microtask queue
        console.log("9"); // 17. start executes microtask and executes in stack immediately
    });
})
.then(() => { // 9. add then event to microtask queue 
    console.log("6"); // 14. start executes microtask and executes in stack immediately
});
```

the history in microtask will be:
2 -> 4 -> 8 -> 6 -> 5 -> 9 -> 10

## Reference

+ @ [javascript.info](https://javascript.info/event-loop#macrotasks-and-microtasks)
+ @ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) - Promise
