import { ControllerProps, FieldPath, FieldValues, useController, useFormContext } from 'react-hook-form';
import { Select, SelectProps, FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput } from '@mui/material';

type ControlledSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> &
  Omit<SelectProps, 'value'> & {
    label?: string;
    options: Option[];
  };

export function ControlledSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  rules,
  defaultValue,
  shouldUnregister,
  control,
  label,
  options,
  ...props
}: ControlledSelectProps<TFieldValues, TName>) {
  const context = useFormContext<TFieldValues>();
  const { field, fieldState } = useController({
    name,
    rules,
    defaultValue,
    shouldUnregister,
    control: control ?? context.control,
  });

  return (
    <FormControl error={!!fieldState.error} fullWidth>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <Select {...field} {...props} value={field.value ?? ''} input={<OutlinedInput label={label} notched />}>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {fieldState.error?.message && <FormHelperText>{fieldState.error.message}</FormHelperText>}
    </FormControl>
  );
}
