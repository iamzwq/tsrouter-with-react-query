import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { EChartsCoreOption, EChartsType, SetOptionOpts } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { debounce } from '~/utils';
import lightTheme from './theme/light.json';

echarts.use([
  BarChart,
  LineChart,
  PieChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
]);

echarts.registerTheme('light', lightTheme);

export interface ReactEchartsProps {
  ref?: React.Ref<ReactEchartsRef>;
  option: EChartsCoreOption;
  className?: string;
  style?: React.CSSProperties;
  theme?: string | object;
  onEvents?: Record<string, (params: any, instance: EChartsType) => void>;
  opts?: SetOptionOpts;
}

export interface ReactEchartsRef {
  getInstance: () => EChartsType | null;
}

export function ReactECharts({
  ref,
  option,
  className,
  style = { width: '100%', height: '100%' },
  theme = 'light',
  onEvents,
  opts,
}: ReactEchartsProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<EChartsType | null>(null);

  useImperativeHandle(ref, () => ({
    getInstance: () => chartInstance.current,
  }));

  const initChart = () => {
    if (!chartRef.current) return;

    disposeChart();

    chartInstance.current = echarts.init(chartRef.current, theme, {
      renderer: 'canvas',
      ...opts,
    });

    bindEvents();
    updateChart();
  };

  const updateChart = () => {
    if (!chartInstance.current) return;

    chartInstance.current.setOption(option, {
      notMerge: true,
      ...opts,
    });
  };

  // 绑定事件
  const bindEvents = () => {
    if (!chartInstance.current || !onEvents) return;

    Object.entries(onEvents).forEach(([eventName, handler]) => {
      chartInstance.current?.on(eventName, params => {
        handler(params, chartInstance.current!);
      });
    });
  };

  const disposeChart = () => {
    if (!chartInstance.current) return;
    chartInstance.current.dispose();
    chartInstance.current = null;
  };

  useEffect(() => {
    initChart();
    return () => disposeChart();
  }, [theme]);

  // 监听配置变化
  useEffect(() => {
    if (chartInstance.current) {
      updateChart();
    }
  }, [option]);

  useEffect(() => {
    if (!chartRef.current) return;
    const resizeChart = debounce(() => {
      chartInstance.current?.resize();
    }, 200);
    const observer = new ResizeObserver(resizeChart);
    observer.observe(chartRef.current);
    // window.addEventListener('resize', resizeChart);
    return () => {
      observer.disconnect();
      // window.removeEventListener('resize', resizeChart);
    };
  }, []);

  return <div ref={chartRef} className={className} style={{ position: 'relative', ...style }} />;
}
