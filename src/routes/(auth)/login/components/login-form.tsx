import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import { z } from 'zod';
import { ControlledTextField } from '~/components/controlled-form';

const formSchema = z.object({
  username: z.string().min(1, { message: '用户名不能为空' }),
  password: z.string().min(1, { message: '密码不能为空' }),
});

type FormValues = z.infer<typeof formSchema>;

export function LoginForm() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    console.log(data);
    const to = new URLSearchParams(location.search).get('redirectTo') || '/';
    navigate({ to });
  });

  return (
    <Box component="form" onSubmit={onSubmit} className="flex w-[380px] flex-col gap-4">
      <Typography variant="h4" component="h1" className="text-center">
        登录
      </Typography>
      <ControlledTextField name="username" control={control} label="Username" size="medium" required />
      <ControlledTextField name="password" control={control} label="Password" type="password" size="medium" required />

      <Button type="submit" size="large" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
