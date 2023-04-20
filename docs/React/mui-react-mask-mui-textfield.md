---
title: "[MUI] React-Mask with TextField of MUI"
---

## Example

```typescript jsx
interface TextMaskCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
  mask: string
}

const TextMaskCustom = React.forwardRef<HTMLElement, TextMaskCustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props
    return (
      <IMaskInput
        {...other}
        mask={props.mask}
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref as any}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    )
  }
)

type PostalCodeInputProps = {
  mask: string
} & TextFieldProps


export const PostalCodeInput: React.FunctionComponent<PostalCodeInputProps> = ({
  ...props
}) => {
  return (
      <TextField
          InputProps={{
              inputComponent: TextMaskCustom as any,
          }}
          inputProps={{
              mask: props.mask, // passing mask as customized props
          }}
      />
  )
}
```

**Material UI TextField** provides a few 'Props' style attributes to apply configuration to the child components that are combined to make the input.

Two of note are:

+ `InputProps`: This provides properties to the Material UI component that is selected based on the `variant` property i.e. `OutlinedInput`, `FilledInput`, etc.
+ `inputProps`: This provides properties to the underlying input which is being used, by default this is an `input`.

## Reference

+ @ [stackoverflow](https://stackoverflow.com/questions/73494943/react-material-ui-textfield-controlled-input-with-custom-input-component-wit)
+ @ [MUI](https://mui.com/material-ui/react-text-field/#select)
