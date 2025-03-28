import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import {
  Checkbox,
  type CheckboxProps,
  FormControl,
  FormControlLabel,
  type FormControlLabelProps,
  FormHelperText,
} from '@mui/material';

export type ControlledCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> &
  Omit<FormControlLabelProps, 'control'> & {
    checkboxProps?: Omit<CheckboxProps, 'defaultValue' | 'onChange' | 'checked'>;
  };

export function ControlledCheckbox<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  defaultValue,
  shouldUnregister,
  checkboxProps,
  ...props
}: ControlledCheckboxProps<TFieldValues, TName>) {
  const context = useFormContext<TFieldValues>();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control: control ?? context.control,
    rules,
    defaultValue,
    shouldUnregister,
  });

  return (
    <FormControl error={!!error}>
      <FormControlLabel
        {...props}
        control={<Checkbox checked={value ?? false} onChange={e => onChange(e.target.checked)} {...checkboxProps} />}
      />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
}
