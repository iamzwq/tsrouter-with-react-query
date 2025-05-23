import { useEffect, useMemo, useState } from 'react';
import { Box, Grid, useColorScheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import type { EChartsOption } from 'echarts';
import { useECharts } from '~/hooks';

export const Route = createFileRoute('/_layout/echarts/')({
  component: EChartsComponent,
});

function EChartsComponent() {
  const { systemMode, mode } = useColorScheme();
  const theme = systemMode ?? mode;

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
        text: 'Echarts Bar Chart',
      },
      grid: {
        top: 40,
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        name: '超长名称示例_超长名称示例',
        nameLocation: 'middle',
        nameGap: 40,
      },
      tooltip: {
        trigger: 'axis',
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
          // itemStyle: {
          //   borderRadius: [15, 15, 0, 0],
          //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //     { offset: 0, color: '#713600' },
          //     { offset: 1, color: '#FFCA99' },
          //   ]),
          // },
          label: {
            show: true,
            position: 'top',
            color: '#713600',
            fontWeight: 'bold',
          },
        },
        {
          name: 'Profit',
          type: 'bar',
          barWidth: 30,
          encode: {
            x: 'year',
            y: 'profit',
          },
        },
      ],
      dataset: {
        source: [
          { year: '2015', sales: 15423, profit: 10000 },
          { year: '2016', sales: 23534, profit: 12000 },
          { year: '2017', sales: 18483, profit: 15000 },
          { year: '2018', sales: 34523, profit: 20000 },
          { year: '2019', sales: 32489, profit: 25000 },
          { year: '2020', sales: 28782, profit: 11000 },
        ],
      },
    };
  }, []);

  const barChartRef = useECharts({
    options,
    theme,
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
    theme,
    onChartReady: chart => {
      console.log('chart ready', chart);
      chart.on('click', params => {
        console.log('click', params);
      });
    },
  });

  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box ref={barChartRef} sx={{ height: 400 }} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box ref={pieChartRef} sx={{ height: 400 }} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}></Grid>
    </Grid>
  );
}
