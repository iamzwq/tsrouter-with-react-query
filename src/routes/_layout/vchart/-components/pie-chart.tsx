import { Legend, Pie, PieChart } from '@visactor/react-vchart';

const pieData = [
  { type: 'oxygen', value: '46.60' },
  { type: 'silicon', value: '27.72' },
  { type: 'aluminum', value: '8.13' },
  { type: 'iron', value: '5' },
  { type: 'calcium', value: '3.63' },
  { type: 'sodium', value: '2.83' },
  { type: 'potassium', value: '2.59' },
  { type: 'others', value: '3.5' },
];

export function PieChartDemo() {
  return (
    <PieChart data={{ id: 'id2', values: pieData }}>
      <Pie
        innerRadius={0.5}
        outerRadius={0.8}
        categoryField="type"
        valueField="value"
        padAngle={0.5}
        pie={{
          style: {
            cornerRadius: 10,
          },
          state: {
            hover: {
              outerRadius: 0.85,
            },
          },
        }}
        label={{
          visible: true,
        }}
      />
      <Legend visible={true} position="middle" orient="left" />
    </PieChart>
  );
}
