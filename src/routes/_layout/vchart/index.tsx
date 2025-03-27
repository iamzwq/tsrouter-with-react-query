import { Grid } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { LazyFallback } from '~/components/lazy-fallback';
import { AreaChartDemo } from './components/area-chart';
import { BarChartDemo } from './components/bar-chart';
import { LineChartDemo } from './components/line-chart';
import { PieChartDemo } from './components/pie-chart';

export const Route = createFileRoute('/_layout/vchart/')({
  component: RouteComponent,
  pendingComponent: LazyFallback,
});

function RouteComponent() {
  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 6 }}>
        <BarChartDemo />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <LineChartDemo />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <PieChartDemo />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <AreaChartDemo />
      </Grid>
    </Grid>
  );
}
