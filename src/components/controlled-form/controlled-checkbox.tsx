import { ControllerProps, FieldPath, FieldValues, useController, useFormContext } from 'react-hook-form';
import { Checkbox, CheckboxProps, FormControl, FormControlLabel, FormHelperText } from '@mui/material';

type ControlledCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> &
  Omit<CheckboxProps, 'value'> & {
    label?: string;
  };

export function ControlledCheckbox<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  rules,
  defaultValue,
  shouldUnregister,
  control,
  label,
  ...props
}: ControlledCheckboxProps<TFieldValues, TName>) {
  const context = useFormContext<TFieldValues>();
  const { field, fieldState } = useController({
    name,
    rules,
    defaultValue,
    shouldUnregister,
    control: control ?? context.control,
  });

  return (
    <FormControl error={!!fieldState.error}>
      <FormControlLabel
        control={
          <Checkbox {...props} checked={field.value ?? false} onChange={e => field.onChange(e.target.checked)} />
        }
        label={label}
      />
      {fieldState.error?.message && <FormHelperText>{fieldState.error.message}</FormHelperText>}
    </FormControl>
  );
}
