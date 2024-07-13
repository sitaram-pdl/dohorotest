import { useSelector } from 'react-redux';

const DetailsTable = () => {
  const details = useSelector((state) => state.details.details);

  return (
    <div className='mt-8'>
      <h2 className='text-xl font-bold mb-4'>Extracted Details Table</h2>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Waste Name</th>
            <th>Net Weight</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td className='border px-4 py-2'>{detail.date}</td>
              <td className='border px-4 py-2'>{detail.wasteName}</td>
              <td className='border px-4 py-2'>
                {detail.netWeight || detail.grossWeight - detail.tareWeight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
