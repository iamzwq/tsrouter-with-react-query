import { ControllerProps, FieldPath, FieldValues, useController, useFormContext } from 'react-hook-form';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';

type ControlledCheckboxGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  label?: string;
  options: Option[];
  row?: boolean;
};

export function ControlledCheckboxGroup<
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
  row,
}: ControlledCheckboxGroupProps<TFieldValues, TName>) {
  const context = useFormContext<TFieldValues>();
  const { field, fieldState } = useController({
    name,
    rules,
    defaultValue,
    shouldUnregister,
    control: control ?? context.control,
  });

  const handleChange = (value: string) => {
    const currentValues = (field.value as string[]) || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v: string) => v !== value)
      : [...currentValues, value];
    field.onChange(newValues);
  };

  return (
    <FormControl error={!!fieldState.error} component="fieldset">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup row={row}>
        {options.map(option => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={((field.value as string[]) || []).includes(option.value as string)}
                onChange={() => handleChange(option.value as string)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
      {fieldState.error?.message && <FormHelperText>{fieldState.error.message}</FormHelperText>}
    </FormControl>
  );
}
