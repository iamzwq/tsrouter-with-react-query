import { Area, AreaChart, Axis } from '@visactor/react-vchart';

const areaData = [
  { time: '2:00', value: 38 },
  { time: '4:00', value: 56 },
  { time: '6:00', value: 10 },
  { time: '8:00', value: 70 },
  { time: '10:00', value: 36 },
  { time: '12:00', value: 94 },
  { time: '14:00', value: 24 },
  { time: '16:00', value: 44 },
  { time: '18:00', value: 36 },
  { time: '20:00', value: 68 },
  { time: '22:00', value: 22 },
];

export function AreaChartDemo() {
  return (
    <AreaChart data={{ id: 'id-area', values: areaData }}>
      <Area
        xField="time"
        yField="value"
        point={{
          visible: false,
        }}
        line={{
          style: {
            curveType: 'stepAfter',
          },
        }}
      />
      <Axis orient="bottom" type="band" trimPadding />
    </AreaChart>
  );
}
