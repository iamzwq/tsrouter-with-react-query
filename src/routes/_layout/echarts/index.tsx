import { useMemo } from 'react';
import { Box, Grid2 } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import { useECharts } from '~/hooks';

export const Route = createFileRoute('/_layout/echarts/')({
  component: EChartsComponent,
});

function EChartsComponent() {
  const options = useMemo<EChartsOption>(() => {
    return {
      title: {
        text: 'ECharts',
      },
      xAxis: {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true,
        },
      },
      series: [
        {
          type: 'bar',
          barWidth: 30,
          encode: {
            x: 'year',
            y: 'sales',
          },
          itemStyle: {
            borderRadius: [15, 15, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#713600' },
              { offset: 1, color: '#FFCA99' },
            ]),
          },
        },
      ],
      dataset: {
        source: [
          { year: '2015', sales: 15423 },
          { year: '2016', sales: 23534 },
          { year: '2017', sales: 18483 },
          { year: '2018', sales: 34523 },
          { year: '2019', sales: 32489 },
          { year: '2020', sales: 28782 },
        ],
      },
    };
  }, []);

  const chartRef = useECharts(options);
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box ref={chartRef} sx={{ height: 400 }} />
      </Grid2>
    </Grid2>
  );
}
