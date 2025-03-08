import { useEffect, useRef } from 'react';
import { debounce } from '@mui/material';
import type { EChartsOption } from 'echarts';
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

export const useECharts = (chartOptions: EChartsOption, theme: string = 'default') => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = echarts.init(chartRef.current, theme);
      chartInstanceRef.current.setOption(chartOptions);

      const resizeObserver = new ResizeObserver(
        debounce(() => {
          chartInstanceRef.current?.resize();
        })
      );

      resizeObserver.observe(chartRef.current);

      return () => {
        resizeObserver.disconnect();
        chartInstanceRef.current?.dispose();
      };
    }
  }, [chartOptions, theme]);

  return chartRef;
};
