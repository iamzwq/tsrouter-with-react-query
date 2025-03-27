import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import { Autocomplete, AutocompleteProps, TextField, type TextFieldProps } from '@mui/material';

export type ControlledAutocompleteProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
> = UseControllerProps<TFieldValues, TName> &
  Omit<
    AutocompleteProps<TValue, Multiple, DisableClearable, FreeSolo>,
    'name' | 'defaultValue' | 'value' | 'renderInput'
  > & {
    label?: string;
    textFieldProps?: TextFieldProps;
    transform?: {
      input?: (value: TValue) => unknown;
      output?: (value: unknown) => TValue;
    };
  };

export function ControlledAutocomplete<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  name,
  control,
  rules,
  defaultValue,
  shouldUnregister,
  transform,
  label,
  textFieldProps,
  ...autocompleteProps
}: ControlledAutocompleteProps<TFieldValues, TName, TValue, Multiple, DisableClearable, FreeSolo>) {
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

  const handleChange: AutocompleteProps<TValue, Multiple, DisableClearable, FreeSolo>['onChange'] = (
    event,
    newValue,
    reason,
    details
  ) => {
    const transformedValue = transform?.output ? transform.output(newValue) : newValue;
    onChange(transformedValue);
    autocompleteProps.onChange?.(event, newValue, reason, details);
  };

  const displayValue = transform?.input ? transform.input(value as TValue) : value;

  return (
    <Autocomplete
      {...autocompleteProps}
      // @ts-ignore
      value={displayValue ?? null}
      onChange={handleChange}
      onBlur={onBlur}
      renderInput={params => (
        <TextField
          {...params}
          {...textFieldProps}
          name={name}
          label={label}
          inputRef={ref}
          error={!!error}
          helperText={error?.message || textFieldProps?.helperText}
        />
      )}
    />
  );
}
