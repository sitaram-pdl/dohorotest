import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import calculateNetWeight from '../lib/calculateNetWeight';
import { useSelector } from 'react-redux';

const normalizeData = (array) => {
  return array.map((item) => {
    const netWeight = parseFloat(calculateNetWeight(item).split(' ')[0]);

    return {
      name: item['Waste Name'],
      value: isNaN(netWeight) ? 2 : netWeight,
    };
  });
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const DataCharts = () => {
  const items = useSelector((state) => state.items);
  const data = normalizeData(items);

  const COLORS = items.map(() => getRandomColor());

  return (
    <div className='lg:w-1/2'>
      <ResponsiveContainer width='100%' height={400}>
        <PieChart>
          <Pie data={data} labelLine={false} fill='#8884d8' dataKey='value'>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataCharts;
