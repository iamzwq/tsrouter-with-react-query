import { Grid } from '@mui/material';
import { type EChartsCoreOption, graphic } from 'echarts/core';
import { ReactECharts } from './index';

// 柱状图配置
const barOption: EChartsCoreOption = {
  title: {
    text: '柱状图示例',
    left: 'center',
    textStyle: { color: '#333', fontWeight: 'bold', fontSize: 20 },
  },
  grid: {
    top: '12%',
    left: '3%',
    right: '3%',
    bottom: '3%',
    containLabel: true,
  },
  tooltip: { trigger: 'item', backgroundColor: '#fff', borderColor: '#eee', textStyle: { color: '#333' } },
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E'],
    axisLine: { lineStyle: { color: '#888' } },
    axisLabel: { color: '#666', fontSize: 14 },
    axisTick: { alignWithLabel: true },
  },
  yAxis: {
    axisLine: { show: false },
    splitLine: { lineStyle: { color: '#eee' } },
    axisLabel: { color: '#666', fontSize: 14 },
  },
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10],
      itemStyle: {
        borderRadius: [6, 6, 0, 0],
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#4f8cff' },
          { offset: 1, color: '#70e1f5' },
        ]),
        shadowColor: 'rgba(79,140,255,0.2)',
        shadowBlur: 8,
      },
      barWidth: 36,
    },
  ],
};

// 折线图配置
const lineOption = {
  title: {
    text: '折线图示例',
    left: 'center',
    textStyle: { color: '#333', fontWeight: 'bold', fontSize: 20 },
  },
  tooltip: { trigger: 'axis', backgroundColor: '#fff', borderColor: '#eee', textStyle: { color: '#333' } },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: { lineStyle: { color: '#888' } },
    axisLabel: { color: '#666', fontSize: 14 },
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    splitLine: { lineStyle: { color: '#eee' } },
    axisLabel: { color: '#666', fontSize: 14 },
  },
  series: [
    {
      name: '访问量',
      type: 'line',
      data: [150, 230, 224, 218, 135, 147, 260],
      smooth: true,
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: { color: '#ff7c7c', width: 4 },
      itemStyle: { color: '#ff7c7c', borderColor: '#fff', borderWidth: 2 },
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(255,124,124,0.3)' },
          { offset: 1, color: 'rgba(255,255,255,0.1)' },
        ]),
      },
      shadowColor: 'rgba(255,124,124,0.2)',
      shadowBlur: 8,
    },
  ],
};

// 饼图配置
const pieOption = {
  title: {
    text: '饼图示例',
    left: 'center',
    textStyle: { color: '#333', fontWeight: 'bold', fontSize: 20 },
  },
  tooltip: { trigger: 'item', backgroundColor: '#fff', borderColor: '#eee', textStyle: { color: '#333' } },
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: { color: '#666', fontSize: 14 },
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 3,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowBlur: 10,
      },
      label: {
        show: true,
        position: 'outside',
        color: '#333',
        fontSize: 14,
      },
      labelLine: { show: true, length: 20, length2: 10, lineStyle: { color: '#aaa' } },
      data: [
        { value: 1048, name: '搜索引擎', itemStyle: { color: '#4f8cff' } },
        { value: 735, name: '直接访问', itemStyle: { color: '#ff7c7c' } },
        { value: 580, name: '邮件营销', itemStyle: { color: '#70e1f5' } },
        { value: 484, name: '联盟广告', itemStyle: { color: '#ffd36e' } },
        { value: 300, name: '视频广告', itemStyle: { color: '#a1e3a1' } },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 20,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },
  ],
};

export function DemoECharts() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, lg: 6 }} height={400}>
        <ReactECharts option={barOption} />
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }} height={400}>
        <ReactECharts option={lineOption} />
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }} height={400}>
        <ReactECharts option={pieOption} />
      </Grid>
    </Grid>
  );
}
