import SettingsIcon from '@mui/icons-material/Settings';
import { Box, IconButton, Typography } from '@mui/material';
import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { AccountMenu } from '~/layout/account-menu';
import { NotificationsPopover } from '~/layout/notifications-popover';
import { ThemePopover } from '~/layout/theme-popover';

import LogoIconUrl from '/favicon.svg';

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <>
      <Box
        className="sticky top-0 flex h-8 gap-3 border-b border-b-(--border-color) px-2"
        sx={{
          zIndex: theme => theme.zIndex.appBar,
          background: 'rgba(var(--palette-background-defaultChannel), 0.8)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <Box
          className="my-1 flex shrink-0 items-center gap-0.5 rounded-lg px-1.5 select-none"
          component={Link}
          to="/"
          sx={{ background: 'linear-gradient(to top right, #f472b6, #ef4444, #facc15)' }}
        >
          <img src={LogoIconUrl} alt="logo-icon" className="size-4" />
          <Typography textTransform="uppercase" fontWeight="bold" fontSize={24} color="white">
            tsrouter
          </Typography>
        </Box>
        <div className="hidden items-center gap-2 sm:flex">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/posts" activeProps={{ className: 'font-bold text-(--primary-color)' }}>
            Posts
          </Link>
          <Link to="/echarts" activeProps={{ className: 'font-bold text-(--primary-color)' }}>
            Echarts
          </Link>
          <Link to="/vchart" activeProps={{ className: 'font-bold text-(--primary-color)' }}>
            VChart
          </Link>
          <Link to="/form-example" activeProps={{ className: 'font-bold text-(--primary-color)' }}>
            Form Example
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-x-1">
          <ThemePopover />
          <IconButton className="animate-spin">
            <SettingsIcon />
          </IconButton>
          <NotificationsPopover />
          <AccountMenu />
        </div>
      </Box>
      <main className="flex grow flex-col p-2">
        <Outlet />
      </main>
    </>
  );
}
