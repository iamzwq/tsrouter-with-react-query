import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import { TextField, type TextFieldProps } from '@mui/material';

export type ControlledTextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> = UseControllerProps<TFieldValues, TName> &
  Omit<TextFieldProps, 'name' | 'defaultValue' | 'value' | 'inputRef'> & {
    transform?: {
      input?: (value: TValue) => unknown;
      output?: (event: React.ChangeEvent<HTMLInputElement>) => TValue;
    };
  };

export function ControlledTextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>({
  name,
  control,
  rules,
  defaultValue,
  shouldUnregister,
  transform,
  ...textFieldProps
}: ControlledTextFieldProps<TFieldValues, TName, TValue>) {
  const context = useFormContext<TFieldValues>();
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control: control ?? context.control,
    rules,
    defaultValue,
    shouldUnregister,
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const newValue = transform?.output ? transform.output(event) : (event.target.value as unknown as TValue);
    onChange(newValue);
    textFieldProps.onChange?.(event);
  };

  const displayValue = transform?.input ? transform.input(value as TValue) : value;

  return (
    <TextField
      {...textFieldProps}
      name={name}
      value={displayValue ?? ''}
      onChange={handleChange}
      onBlur={onBlur}
      inputRef={ref}
      error={!!error}
      helperText={error?.message || textFieldProps.helperText}
    />
  );
}
