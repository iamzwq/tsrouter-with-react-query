import { IconButton } from '@mui/material';
import { createLazyFileRoute, Link, Outlet } from '@tanstack/react-router';
import SettingsIcon from '@mui/icons-material/Settings';
import { AccountMenu } from '~/layout/account-menu';

export const Route = createLazyFileRoute('/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex h-8 px-2">
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
      <hr />
      <main className="p-2">
        <Outlet />
      </main>
    </>
  );
}
