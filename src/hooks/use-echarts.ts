import { useCallback, useEffect, useRef } from 'react';
import { debounce } from '@mui/material';
import type { EChartsInitOpts, EChartsOption } from 'echarts';
import { BarChart, PieChart } from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import darkTheme from '~/assets/echarts-theme/dark.json';
import lightTheme from '~/assets/echarts-theme/light.json';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  BarChart,
  PieChart,
  CanvasRenderer,
  DatasetComponent,
  LabelLayout,
  UniversalTransition,
  TransformComponent,
]);

echarts.registerTheme('dark', darkTheme);
echarts.registerTheme('light', lightTheme);

interface UseEChartsProps {
  options: EChartsOption; // 图表配置项
  theme?: string | object; // 主题，可选
  onChartReady?: (chart: echarts.ECharts) => void; // 图表初始化完成回调
  opts?: EChartsInitOpts;
  autoResize?: boolean; // 是否自动调整大小
  notMerge?: boolean; // 是否不合并数据
  lazyUpdate?: boolean; // 是否延迟更新
}

export const useECharts = ({
  options,
  theme = 'light',
  opts,
  onChartReady,
  autoResize = true,
  notMerge = false,
  lazyUpdate = false,
}: UseEChartsProps) => {
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onChartReadyRef = useRef(onChartReady);
  useEffect(() => {
    onChartReadyRef.current = onChartReady;
  }, [onChartReady]);

  // 初始化图表
  const initChart = useCallback(() => {
    if (containerRef.current) {
      chartInstanceRef.current?.dispose();
      chartInstanceRef.current = echarts.init(containerRef.current, theme, opts);
      chartInstanceRef.current.setOption(options);

      if (onChartReadyRef.current) {
        onChartReadyRef.current(chartInstanceRef.current);
      }
    }
  }, [theme, opts]); // eslint-disable-line react-hooks/exhaustive-deps

  // DOM ref callback
  const chartRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null) {
        containerRef.current = node;
        initChart();
      }
    },
    [initChart]
  );

  // 监听 options 变化自动更新
  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.setOption(options, notMerge, lazyUpdate);
    }
  }, [options, notMerge, lazyUpdate]);

  // 自动调整大小
  useEffect(() => {
    if (!autoResize) return;

    const resize = debounce(() => {
      chartInstanceRef.current?.resize();
    });

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      resize.clear();
    };
  }, [autoResize]);

  // 清理函数
  useEffect(() => {
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return chartRef;

  // return {
  //   chartRef,
  //   getChart: useCallback(() => chartInstanceRef.current, []),
  //   setOption: useCallback((option: EChartsOption, notMerge?: boolean, lazyUpdate?: boolean) => {
  //     chartInstanceRef.current?.setOption(option, notMerge, lazyUpdate);
  //   }, []),
  // };
};
