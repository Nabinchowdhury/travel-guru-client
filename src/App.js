
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import BackgroundContext from './contexts/BackgroundContext/BackgroundContext';
import routes from './Routes/Routes';

function App() {
  return (
    <div >
      <BackgroundContext>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster />
      </BackgroundContext>
    </div >
  );
}

export default App;
