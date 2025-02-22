import { ControllerProps, FieldPath, FieldValues, useController, useFormContext } from 'react-hook-form';
import { Autocomplete, AutocompleteProps, TextField } from '@mui/material';

type ControlledAutocompleteProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> &
  Omit<AutocompleteProps<Option, any, any, any>, 'renderInput'> & {
    label?: string;
    options: Option[];
  };

export function ControlledAutocomplete<
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
  isOptionEqualToValue,
  ...props
}: ControlledAutocompleteProps<TFieldValues, TName>) {
  const context = useFormContext<TFieldValues>();
  const { field, fieldState } = useController({
    name,
    rules,
    defaultValue,
    shouldUnregister,
    control: control ?? context.control,
  });

  return (
    <Autocomplete
      {...props}
      options={options}
      value={field.value}
      onChange={(_, value) => field.onChange(value)}
      isOptionEqualToValue={(option, value) =>
        isOptionEqualToValue ? isOptionEqualToValue(option, value) : option?.value === value?.value
      }
      renderInput={params => (
        <TextField {...params} label={label} error={!!fieldState.error} helperText={fieldState.error?.message} />
      )}
    />
  );
}
