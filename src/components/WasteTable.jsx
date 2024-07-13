import { useDispatch, useSelector } from 'react-redux';
import { viewDetails } from '../redux/DetailSlice';

const WasteTable = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  if (items.length < 1) return <></>;

  return (
    <div className='w-full overflow-scroll my-2'>
      <table className=' bg-white overflow-scroll border border-gray-200'>
        <thead>
          <tr>
            <th className='px-4 py-2 border'>Date</th>
            <th className='px-4 py-2 border'>Time</th>
            <th className='px-4 py-2 border'>Ticket Number</th>
            <th className='px-4 py-2 border'>Issuing Company</th>
            <th className='px-4 py-2 border'>Truck Number</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className='hover:bg-gray-100'>
              <td className='px-4 py-2 border'>{item.Date}</td>
              {/**There is two type of value in time one is string and other is object */}
              <td className='px-4 py-2 border'>
                {typeof item.Time === 'string'
                  ? item.Time
                  : JSON.stringify(item.Time)}
              </td>
              <td className='px-4 py-2 border'>{item['Ticket Number']}</td>
              <td className='px-4 py-2 border'>{item['Issuing Company']}</td>
              <td className='px-4 py-2 border'>{item['Truck Number']}</td>
              <td
                onClick={() => dispatch(viewDetails(item))}
                className='px-4 py-2 border text-blue-500 underline'
              >
                View Detail
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WasteTable;
