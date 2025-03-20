import { Grid2 } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { LazyFallback } from '~/components/lazy-fallback';
import { AreaChartDemo } from './-components/area-chart';
import { BarChartDemo } from './-components/bar-chart';
import { LineChartDemo } from './-components/line-chart';
import { PieChartDemo } from './-components/pie-chart';

export const Route = createFileRoute('/_layout/vchart/')({
  component: RouteComponent,
  pendingComponent: LazyFallback,
});

function RouteComponent() {
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <BarChartDemo />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <LineChartDemo />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <PieChartDemo />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <AreaChartDemo />
      </Grid2>
    </Grid2>
  );
}
