import { useEffect, useRef, useState } from 'react';
import { debounce } from '@mui/material';
import type { EChartsInitOpts, EChartsOption, SetOptionOpts } from 'echarts';
import { BarChart } from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import dartTheme from '~/assets/echarts-theme/dark.json';
import { useMemoizedFn } from './use-memoized-fn';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  DatasetComponent,
  LabelLayout,
  UniversalTransition,
  TransformComponent,
]);

echarts.registerTheme('dark', dartTheme);

interface UseEChartsProps {
  options: EChartsOption; // 图表配置项
  loading?: boolean; // 是否显示加载状态
  theme?: string | object; // 主题，可选
  onChartReady?: (chart: echarts.ECharts) => void; // 图表初始化完成回调
  setOptionOpts?: SetOptionOpts; // setOption 的可选配置
  opts?: EChartsInitOpts;
}

export const useECharts = ({ options, theme, opts, onChartReady, setOptionOpts, loading }: UseEChartsProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [chartInstance, setChartInstance] = useState<echarts.ECharts | null>(null);

  const onChartReadyMemoized = useMemoizedFn((chart: echarts.ECharts) => {
    if (onChartReady) {
      onChartReady(chart);
    }
  });

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current, theme, opts);
    setChartInstance(chart);
    chart.setOption(options, setOptionOpts);

    onChartReadyMemoized(chart);

    const resizeObserver = new ResizeObserver(
      debounce(() => {
        chart.resize();
      })
    );

    resizeObserver.observe(chartRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.dispose();
      setChartInstance(null);
    };
  }, [chartRef, options, theme, opts, setOptionOpts, onChartReadyMemoized]);

  useEffect(() => {
    if (!chartInstance) return;

    if (loading) {
      chartInstance.showLoading();
    } else {
      chartInstance.hideLoading();
    }
  }, [chartInstance, loading]);

  return { chartRef, chartInstance };
};
