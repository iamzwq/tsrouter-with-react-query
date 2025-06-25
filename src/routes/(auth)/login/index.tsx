import { Box, Card, Container, Typography, useTheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import illustrationImg from '~/assets/images/login-illustrations.svg';
import reactLogo from '~/assets/react.svg';
import { LoginForm } from './components/login-form';

export const Route = createFileRoute('/(auth)/login/')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: '登录系统' }],
  }),
});

function RouteComponent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Card
          elevation={8}
          sx={{
            display: 'flex',
            borderRadius: 2,
            overflow: 'hidden',
            minHeight: '600px',
          }}
        >
          {/* 左侧装饰区域 */}
          <Box
            sx={{
              flex: '1 1 50%',
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              p: 6,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <img src={reactLogo} alt="Logo" style={{ height: '60px', animation: 'spin 10s linear infinite' }} />
              <Typography variant="h3" fontWeight="bold">
                React Admin
              </Typography>
              <Typography variant="h4" fontWeight="medium" textAlign="center" gutterBottom>
                欢迎回来！
              </Typography>
              <Box
                component="img"
                src={illustrationImg}
                sx={{
                  mt: 4,
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '280px',
                }}
                alt="Dashboard illustration"
              />
            </Box>
          </Box>

          {/* 右侧登录表单区域 */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 50%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 3, sm: 6 },
            }}
          >
            <Box sx={{ width: '100%', maxWidth: '420px' }}>
              <Box sx={{ mb: 5, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  登录系统
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  请输入您的账号和密码
                </Typography>
              </Box>

              <LoginForm />
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
