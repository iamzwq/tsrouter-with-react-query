import { ControllerProps, FieldPath, FieldValues, useController, useFormContext } from 'react-hook-form';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';

type ControlledRadioProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  label?: string;
  options: Option[];
  row?: boolean;
};

export function ControlledRadioGroup<
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
}: ControlledRadioProps<TFieldValues, TName>) {
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
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup {...field} value={field.value ?? ''} row={row}>
        {options.map(option => (
          <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
        ))}
      </RadioGroup>
      {fieldState.error?.message && <FormHelperText>{fieldState.error.message}</FormHelperText>}
    </FormControl>
  );
}
