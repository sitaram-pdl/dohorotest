import { Provider } from 'react-redux';
import { store } from './redux/store';
import ImageForm from './components/ImageForm';
import DetailsTable from './components/DetailsTable';
import DataChart from './components/DataChart';

function App() {
  return (
    <Provider store={store}>
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Image Details Extractor</h1>
        <ImageForm />
        <DetailsTable />
        <DataChart />
      </div>
    </Provider>
  );
}

export default App;
