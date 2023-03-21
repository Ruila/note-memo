---
title: "[React] useCallback"
---

# [React] useCallback

## Intro

useCallback is a React Hook that lets you cache a function definition between re-renders.

## Example

```javascript title=Parent.tsx
export const Parent = (): JSX.Element => {
  const [count, setCount] = useState<number>(0)

  const reset = useCallback(() => {
    console.info("demo")
    setCount(0)
  }, [])

  const add = () => {
    console.info("add")
    setCount(count + 1)
  }

  return <div className="flex">
      <div>
        count: {count}
      </div>
      <div onClick={add} className="mx-4">add</div>
      <Child reset={reset} />
  </div>
}
```

```javascript title="Child.tsx"
type ChildProps = {
  reset: () => void
}

export const Child: React.FunctionComponent<ChildProps> = React.memo(({ reset }) => {
    console.info("Child")
    return (<div className="w-[70px]" onClick={reset}>
      reset
    </div>)
  }
)
```

console.info("demo") will not trigger when you click reset button.

Because the reset function is memorized with **useCallback**, it **keep the same location in memory**.

So Child component wrapped with **React.memo** will get the same reset function.


## Reference

+ @ [geeksforgeeks](https://www.geeksforgeeks.org/reactjs-reconciliation/) - ReactJS Reconciliation
