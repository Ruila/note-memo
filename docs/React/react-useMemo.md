---
title: "[React] useMemo"
---

# [React] useMemo

## Intro

useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

## Example

```javascript title=Parent.tsx
export const UseMemoDemo = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const reset = () => {
    setCount(0);
  };

  const add = () => {
    setCount(count + 1);
  };

  const sum = useMemo(() => {
      console.info("recalculate");
      return [1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
    []);

  return <div className="flex">
    <div>
      sum: {sum}
    </div>
    <div>
      count: {count}
    </div>
    <div onClick={add} className="mx-4">add</div>
    <Child reset={reset} />
  </div>;
};

```

```javascript title="Child.tsx"
type ChildProps = {
  reset: () => void
}

export const Child: React.FunctionComponent<ChildProps> = ({ reset }) => {
  return (<div className="w-[70px]" onClick={reset}>
    reset
  </div>)
}
```

It will not trigger **console.info("recalculate")** when click add button because sum function is memorized with useMemo.

If you want to recalculate sum as the **count** change, add **count** to the dependency of useMemo.



## Reference

+ @ [react docs](https://beta.reactjs.org/reference/react/useMemo) - useMemo
