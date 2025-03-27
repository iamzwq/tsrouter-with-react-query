import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, type SelectProps } from '@mui/material';

export type ControlledSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> = UseControllerProps<TFieldValues, TName> &
  Omit<SelectProps, 'name' | 'value' | 'defaultValue' | 'inputRef'> & {
    options: Array<{
      value: TValue;
      label: string;
      disabled?: boolean;
    }>;
    transform?: {
      input?: (value: TValue) => unknown;
      output?: (event: { target: { value: unknown } }) => TValue;
    };
  };

export function ControlledSelect<
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
  options,
  label,
  ...selectProps
}: ControlledSelectProps<TFieldValues, TName, TValue>) {
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

  const handleChange: SelectProps['onChange'] = (event, child) => {
    const newValue = transform?.output ? transform.output(event) : (event.target.value as TValue);
    onChange(newValue);
    selectProps.onChange?.(event, child);
  };

  const displayValue = transform?.input ? transform.input(value as TValue) : value;

  return (
    <FormControl fullWidth={selectProps.fullWidth} error={!!error}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        {...selectProps}
        name={name}
        value={displayValue ?? ''}
        onChange={handleChange}
        onBlur={onBlur}
        inputRef={ref}
        label={label}
      >
        {options.map(option => (
          <MenuItem key={String(option.value)} value={option.value as any} disabled={option.disabled}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
}
