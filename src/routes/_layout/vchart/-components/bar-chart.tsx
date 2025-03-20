import { useRef } from 'react';
import { Axis, Bar, BarChart, Legend } from '@visactor/react-vchart';
import lightTheme from '~/assets/vchart-theme/light.json';

const barData = [
  { type: 'Autocracies', year: '1930', value: 129 },
  { type: 'Autocracies', year: '1940', value: 133 },
  { type: 'Autocracies', year: '1950', value: 130 },
  { type: 'Autocracies', year: '1960', value: 126 },
  { type: 'Autocracies', year: '1970', value: 117 },
  { type: 'Autocracies', year: '1980', value: 114 },
  { type: 'Autocracies', year: '1990', value: 111 },
  { type: 'Autocracies', year: '2000', value: 89 },
  { type: 'Autocracies', year: '2010', value: 80 },
  { type: 'Autocracies', year: '2018', value: 80 },
  { type: 'Democracies', year: '1930', value: 22 },
  { type: 'Democracies', year: '1940', value: 13 },
  { type: 'Democracies', year: '1950', value: 25 },
  { type: 'Democracies', year: '1960', value: 29 },
  { type: 'Democracies', year: '1970', value: 38 },
  { type: 'Democracies', year: '1980', value: 41 },
  { type: 'Democracies', year: '1990', value: 57 },
  { type: 'Democracies', year: '2000', value: 87 },
  { type: 'Democracies', year: '2010', value: 98 },
  { type: 'Democracies', year: '2018', value: 99 },
];

export function BarChartDemo() {
  const chartRef = useRef(null);
  const handleChartClick = () => {
    console.log('图表被点击了');
  };

  return (
    <BarChart
      theme={lightTheme}
      ref={chartRef}
      padding={0}
      data={[{ id: 'id0', values: barData }]}
      onClick={handleChartClick}
    >
      <Bar
        seriesField="type"
        xField={['year', 'type']}
        yField="value"
        animationAppear={{
          duration: 150,
          easing: 'linear',
          oneByOne: true,
          // delay: 500,
        }}
        bar={{
          style: {
            stroke: '#000',
            strokeWidth: 1,
          },
          state: {
            hover: {
              stroke: 'black',
            },
          },
        }}
      />
      <Axis orient="bottom" type="band" />
      <Axis
        orient="left"
        max={200}
        type="linear"
        label={{
          formatMethod: value => `${value} 个`,
        }}
        title={{
          type: 'text',
          // text: '数量',
          // visible: true,
        }}
        unit={{
          visible: true,
          text: '个',
          style: {
            dx: -4,
            dy: -8,
          },
        }}
        domainLine={{
          visible: true,
        }}
      />
      <Legend visible={true} position="middle" orient="top" padding={{ bottom: 12 }} />
    </BarChart>
  );
}
