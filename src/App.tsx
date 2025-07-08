import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import { config } from './config';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

function App () {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={ config.showDevtools } />
    </>
  );
}

export default App;
