import { useSelector } from 'react-redux';
import calculateNetWeight from '../lib/calculateNetWeight';

function Details() {
  const details = useSelector((state) => state.details.details);

  const netWeight = calculateNetWeight(details);

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Extracted Details Table</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Date:</strong>
            </td>
            <td>{details.Date}</td>
          </tr>
          <tr>
            <td>
              <strong>Time:</strong>
            </td>
            <td>
              {typeof details.Time === 'string'
                ? details.Time
                : JSON.stringify(details.Time)}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Ticket Number:</strong>
            </td>
            <td>{details['Ticket Number']}</td>
          </tr>
          <tr>
            <td>
              <strong>Issuing Company:</strong>
            </td>
            <td>{details['Issuing Company']}</td>
          </tr>
          <tr>
            <td>
              <strong>Truck Number:</strong>
            </td>
            <td>{details['Truck Number'] || 'NaN'}</td>
          </tr>
          <tr>
            <td>
              <strong>Waste Name:</strong>
            </td>
            <td>{details['Waste Name']}</td>
          </tr>
          <tr>
            <td>
              <strong>Gross Weight:</strong>
            </td>
            <td>{details['Gross Weight'] || 'NaN'}</td>
          </tr>
          <tr>
            <td>
              <strong>Tare Weight:</strong>
            </td>
            <td>{details['Tare Weight'] || 'NaN'}</td>
          </tr>
          <tr>
            <td>
              <strong>Net Weight:</strong>
            </td>
            <td>{netWeight}</td>
          </tr>
        </tbody>
      </table>
      {details.id && <img className='w-full mt-5 h-48' src={details.id} />}
    </>
  );
}

export default Details;
