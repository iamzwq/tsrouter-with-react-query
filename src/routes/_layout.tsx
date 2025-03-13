import SettingsIcon from '@mui/icons-material/Settings';
import { Box, IconButton, Typography } from '@mui/material';
import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { AccountMenu } from '~/layout/account-menu';
import { NotificationsPopover } from '~/layout/notifications-popover';

import LogoIconUrl from '/favicon.svg';

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <>
      <Box
        className="sticky top-0 flex h-8 gap-4 border-b border-b-(--border-color) bg-(--bg-color) px-2"
        sx={{ zIndex: theme => theme.zIndex.appBar }}
      >
        <Box
          className="my-1 flex items-center gap-0.5 rounded-lg px-1.5 select-none"
          component={Link}
          to="/"
          sx={{ background: 'linear-gradient(to top right, #f472b6, #ef4444, #facc15)' }}
        >
          <img src={LogoIconUrl} alt="logo-icon" className="size-4" />
          <Typography textTransform="uppercase" fontWeight="bold" fontSize={24} color="white">
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
          <Link to="/posts" activeProps={{ className: 'font-bold text-(--primary-color)' }}>
            Posts
          </Link>
          <Link to="/echarts" activeProps={{ className: 'font-bold text-(--primary-color)' }}>
            Echarts
          </Link>
        </div>
        <div className="ml-auto flex items-center">
          <IconButton className="animate-spin">
            <SettingsIcon />
          </IconButton>
          <NotificationsPopover />
          <AccountMenu />
        </div>
      </Box>
      <main className="p-2">
        <Outlet />
      </main>
    </>
  );
}
