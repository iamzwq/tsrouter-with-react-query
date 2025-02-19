import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { ControlledTextField } from '~/components/controlled-form';

export function LoginForm() {
  const methods = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
    const to = new URLSearchParams(location.search).get('redirectTo') || '/dashboard';
    navigate({ to });
  });

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={onSubmit} className="flex w-[380px] flex-col gap-4">
        <Typography variant="h4" component="h1" className="text-center">
          登录
        </Typography>
        <ControlledTextField
          name="username"
          label="Username"
          size="medium"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 6,
              message: 'Username must be at least 6 characters',
            },
          }}
        />
        <ControlledTextField
          name="password"
          label="Password"
          type="password"
          size="medium"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
        />

        <Button type="submit" size="large" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </FormProvider>
  );
}
