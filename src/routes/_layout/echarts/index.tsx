import { useEffect, useMemo, useState } from 'react';
import { Box, Grid2, useColorScheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import { useECharts } from '~/hooks';

export const Route = createFileRoute('/_layout/echarts/')({
  component: EChartsComponent,
});

function EChartsComponent() {
  const { systemMode, mode } = useColorScheme();
  const themeMode = systemMode ?? mode;

  const [pieData, setPieData] = useState([
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' },
  ]);

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
        trigger: 'item',
      },
      series: [
        {
          name: 'Sales',
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
          label: {
            show: true,
            position: 'top',
            color: '#713600',
            fontWeight: 'bold',
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

  const barChartRef = useECharts({
    options,
    theme: themeMode,
    onChartReady: chart => {
      // 图表初始化完成后的回调
      chart.on('click', params => {
        console.log('click', params);
      });
    },
  });

  const pieOptions = useMemo<EChartsOption>(() => {
    return {
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 1,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: true,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 18,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: true,
          },
          data: pieData,
        },
      ],
    };
  }, [pieData]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPieData([
        { value: Math.random() * 1000, name: 'Search Engine' },
        { value: Math.random() * 1000, name: 'Direct' },
        { value: Math.random() * 1000, name: 'Email' },
        { value: Math.random() * 1000, name: 'Union Ads' },
        { value: Math.random() * 1000, name: 'Video Ads' },
      ]);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const pieChartRef = useECharts({
    options: pieOptions,
    theme: themeMode,
    onChartReady: chart => {
      console.log('chart ready', chart);
      chart.on('click', params => {
        console.log('click', params);
      });
    },
  });

  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box ref={barChartRef} sx={{ height: 400 }} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box ref={pieChartRef} sx={{ height: 400 }} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}></Grid2>
    </Grid2>
  );
}
