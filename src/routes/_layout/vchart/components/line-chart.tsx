import { Line, LineChart } from '@visactor/react-vchart';

const lineData = [
  { time: '2:00', value: 8 },
  { time: '4:00', value: 9 },
  { time: '6:00', value: 11 },
  { time: '8:00', value: 14 },
  { time: '10:00', value: 16 },
  { time: '12:00', value: 17 },
  { time: '14:00', value: 17 },
  { time: '16:00', value: 16 },
  { time: '18:00', value: 15 },
];

export function LineChartDemo() {
  return (
    <LineChart data={{ id: 'id1', values: lineData }}>
      <Line xField="time" yField="value" />
    </LineChart>
  );
}
