import { useMemo, useState } from 'react';
import { Box, Button, Grid2 } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import { useECharts } from '~/hooks';

export const Route = createFileRoute('/_layout/echarts/')({
  component: EChartsComponent,
});

function EChartsComponent() {
  const [loading, setLoading] = useState(false);

  const options = useMemo<EChartsOption>(() => {
    return {
      title: {
        text: 'ECharts',
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value',
      },
      tooltip: {
        trigger: 'axis',
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

  const { chartRef } = useECharts({
    options,
    // theme: customTheme,
    theme: 'dark',
    onChartReady: chart => {
      // 图表初始化完成后的回调
      chart.on('click', params => {
        console.log('click', params);
      });
    },
    loading: loading,
  });
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box ref={chartRef} sx={{ height: 400 }} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Button onClick={() => setLoading(!loading)}>Loading</Button>
      </Grid2>
    </Grid2>
  );
}
