import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ImageForm = () => {
  const { handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState('');

  const onSubmit = async (data) => {
    setImageUrl(data.imageUrl);
    console.log('hello');
  };

  console.log(imageUrl);

  return (
    <div className='max-w-xl mx-auto p-4'>
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
  );
};

export default ImageForm;
