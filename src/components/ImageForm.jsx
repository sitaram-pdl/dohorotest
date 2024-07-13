import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { extractDetails } from '../redux/DetailSlice';

const ImageForm = () => {
  const { handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();
  const status = useSelector((state) => state.details.status);
  // const error = useSelector((state) => state.details.error);

  const onSubmit = async () => {
    dispatch(extractDetails(imageUrl));
  };

  return (
    <div className='max-w-xl  p-4 flex'>
      <div>
        <>{status}</>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='imageUrl'
            >
              Image URL
            </label>
            <input
              id='imageUrl'
              name='imageUrl'
              type='url'
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Extract Details
          </button>
        </form>
      </div>
      <div>
        {status === 'succeeded' ? (
          <img className='h-28 w-28' src={imageUrl}></img>
        ) : null}
      </div>
    </div>
  );
};

export default ImageForm;
