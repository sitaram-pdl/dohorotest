import { useSelector } from 'react-redux';

function DetailsTable() {
  const details = useSelector((state) => state.details.details);
  const status = useSelector((state) => state.details.status);
  let detail = details.processed_text ? JSON.parse(details.processed_text) : {};
  if (status !== 'succeeded') return <></>;

  return (
    <div className='mt-8'>
      <h2 className='text-xl font-bold mb-4'>Extracted Details Table</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Date:</strong>
            </td>
            <td>{detail.Date}</td>
          </tr>
          <tr>
            <td>
              <strong>Time:</strong>
            </td>
            <td>{detail.Time}</td>
          </tr>
          <tr>
            <td>
              <strong>Ticket Number:</strong>
            </td>
            <td>{detail['Ticket Number']}</td>
          </tr>
          <tr>
            <td>
              <strong>Issuing Company:</strong>
            </td>
            <td>{detail['Issuing Company']}</td>
          </tr>
          <tr>
            <td>
              <strong>Truck Number:</strong>
            </td>
            <td>{detail['Truck Number'] || 'N/A'}</td>
          </tr>
          <tr>
            <td>
              <strong>Waste Name:</strong>
            </td>
            <td>{detail['Waste Name']}</td>
          </tr>
          <tr>
            <td>
              <strong>Gross Weight:</strong>
            </td>
            <td>{detail['Gross Weight'] || 'N/A'}</td>
          </tr>
          <tr>
            <td>
              <strong>Tare Weight:</strong>
            </td>
            <td>{detail['Tare Weight'] || 'N/A'}</td>
          </tr>
          <tr>
            <td>
              <strong>Net Weight:</strong>
            </td>
            <td>{detail['Gross Weight'] - detail['Tare Weight'] || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailsTable;
