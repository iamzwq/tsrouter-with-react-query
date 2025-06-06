import { FormProvider, useForm } from 'react-hook-form';
import { Button, Grid } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import {
  ControlledAutocomplete,
  ControlledCheckbox,
  ControlledSelect,
  ControlledTextField,
} from '~/components/ds-controlled-form';
import { LazyFallback } from '~/components/lazy-fallback';
import { cities, countries } from './constants';

export const Route = createFileRoute('/_layout/form-example/')({
  component: RouteComponent,
  pendingComponent: LazyFallback,
});

const DEFAULT_VALUES = {
  country: null,
  cities: [],
  username: '',
  email: '',
  age: 18,
  gender: '',
  interests: [],
  agreeTerms: false,
};

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['form-example', 'get-default-values'],
    queryFn: () => new Promise<typeof DEFAULT_VALUES>(resolve => setTimeout(() => resolve(DEFAULT_VALUES), 1000)),
  });
  const methods = useForm({
    values: data,
    resetOptions: {
      keepDirtyValues: true, // 保持脏字段不变，但更新默认值
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <ControlledAutocomplete
              label="Country"
              name="country"
              rules={{ required: 'Country is required' }}
              options={countries}
              getOptionLabel={option => (option as Option).label}
              isOptionEqualToValue={(option, value) => option.value === value.value}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <ControlledAutocomplete
              name="cities"
              control={methods.control} // 也可以显式传递 control
              rules={{ required: 'At least one city is required' }}
              // shouldUnregister={true}
              multiple
              label="Cities"
              options={cities}
              getOptionLabel={option => (option as Option).label}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              textFieldProps={{
                variant: 'outlined',
                placeholder: 'Select cities...',
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <ControlledTextField
              name="username"
              label="Username"
              rules={{ required: 'Username is required' }}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <ControlledTextField
              name="email"
              label="Email"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <ControlledTextField
              name="age"
              label="Age"
              type="number"
              rules={{
                min: { value: 18, message: 'Must be at least 18 years old' },
                max: { value: 120, message: 'Must be less than 120 years old' },
              }}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <ControlledSelect
              name="gender"
              label="Gender"
              rules={{ required: 'Gender is required' }}
              options={[
                { value: 'M', label: 'Male' },
                { value: 'F', label: 'Female' },
                { value: 'O', label: 'Other' },
              ]}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <ControlledSelect
              multiple
              name="interests"
              label="Interests"
              rules={{ required: 'At least one interest is required' }}
              options={[
                { value: 'travel', label: 'Travel' },
                { value: 'food', label: 'Food' },
                { value: 'books', label: 'Books' },
                { value: 'games', label: 'Games' },
              ]}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <ControlledCheckbox
              name="agreeTerms"
              label="我同意条款"
              // required={true}
              rules={{ required: 'You must agree to the terms and conditions' }}
              checkboxProps={{
                color: 'secondary',
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}></Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}
