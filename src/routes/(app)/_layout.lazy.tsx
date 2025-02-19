import { Box, IconButton, Typography } from '@mui/material';
import { createLazyFileRoute, Link, Outlet } from '@tanstack/react-router';
import SettingsIcon from '@mui/icons-material/Settings';
import { AccountMenu } from '~/layout/account-menu';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export const Route = createLazyFileRoute('/(app)/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <>
      <div className="sticky top-0 flex h-8 gap-4 border-b border-b-(--palette-divider) bg-(--palette-background-default) px-2">
        <Box className="flex items-center gap-0.5 select-none" component={Link} to="/">
          <ThumbUpAltIcon color="primary" sx={{ fontSize: 36 }} />
          <Typography textTransform="uppercase" fontWeight="bold" fontSize={24} color="primary">
            tsrouter
          </Typography>
        </Box>
        <div className="flex items-center gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/dashboard" className="[&.active]:font-bold">
            Dashboard
          </Link>
          <Link to="/posts" className="[&.active]:font-bold">
            Posts
          </Link>
        </div>
        <div className="ml-auto flex items-center">
          <IconButton className="animate-spin">
            <SettingsIcon />
          </IconButton>
          <AccountMenu />
        </div>
      </div>
      <main className="p-2">
        <Outlet />
      </main>
    </>
  );
}
