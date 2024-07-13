import ImageForm from './components/ImageForm';
import DataChart from './components/DataChart';
import WasteTable from './components/WasteTable';

function App() {
  return (
    <div className='w-[100vw] min-h-[100vh] border-8 border-teal-500 gap-2 p-8 rel'>
      <h1 className='text-2xl font-bold'>Image Details Extractor</h1>
      <div className='flex w-full h-full justify-between gap-2 flex-col lg:flex-row'>
        <div className='grow'>
          <ImageForm />
          <WasteTable />
        </div>
        <DataChart />
      </div>
    </div>
  );
}

export default App;
