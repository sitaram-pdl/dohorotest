import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const DataChart = () => {
  const details = useSelector((state) => state.details.details);
  const data = {
    labels: details.map((detail) => detail.wasteName),
    datasets: [
      {
        label: 'Net Weight',
        data: details.map(
          (detail) => detail.netWeight || detail.grossWeight - detail.tareWeight
        ),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return (
    <div className='mt-8'>
      <h2 className='text-xl font-bold mb-4'>Waste Net Weight Visualization</h2>
      <Pie data={data} />
    </div>
  );
};

export default DataChart;
