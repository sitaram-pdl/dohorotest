import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { extractDetails, closeDetailModal } from '../redux/DetailSlice';
import { addItemInTable } from '../redux/ItemSlice';

import Details from './Details';

const ImageForm = () => {
  const { handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();

  const status = useSelector((state) => state.details.status);

  const openDetailModal = useSelector((state) => state.details.openDetailModal);

  const onSubmit = async () => {
    dispatch(extractDetails(imageUrl));
  };

  const onModalClose = () => {
    dispatch(closeDetailModal());
  };

  return (
    <form className='grid grid-cols-3 gap-2' onSubmit={handleSubmit(onSubmit)}>
      <div className='col-span-2 flex flex-col gap-3'>
        <label
          className='block text-gray-700 text-sm font-bold'
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

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          {status == 'loading' ? '... Processing' : 'Extract Details'}
        </button>
      </div>
      <div className='h-56'>
        {imageUrl && (
          <img className='animate-fade-in h-[inherit]' src={imageUrl}></img>
        )}
      </div>
      {openDetailModal ? <Modal close={onModalClose} /> : null}
      {status === 'failed' ? <ErrorModal close={() => {}} /> : null}
    </form>
  );
};

// eslint-disable-next-line react/prop-types
const ErrorModal = ({ close }) => {
  const error = useSelector((state) => state.details.error);

  console.log(
    error.includes(`'message': "`)
      ? error.trim(`'message': "`)[1].trim('"')[0]
      : error
  );

  return (
    <div className='fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center'>
      <div
        onClick={close}
        className='absolute z-0 top-0 left-0 h-full w-full bg-black/60'
      ></div>
      <div className='bg-white z-10 rounded-lg p-8'>{error}</div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Modal = ({ close }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details.details);
  const items = useSelector((state) => state.items);

  const isAddable = items.some((item) => item.id === details.id);

  return (
    <div className='fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center'>
      <div
        onClick={close}
        className='absolute z-0 top-0 left-0 h-full w-full bg-black/60'
      ></div>
      <div className='bg-white z-10 rounded-lg p-8'>
        <Details />
        {!isAddable && (
          <button
            type='submit'
            onClick={() => dispatch(addItemInTable(details))}
            className='bg-blue-500 w-full mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Add Details
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageForm;
