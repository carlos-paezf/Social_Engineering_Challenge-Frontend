import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import { config } from './config';
import { AppRoutes } from './routes/AppRoutes';

function App () {
  return (
    <>
      <AppRoutes />
      <ReactQueryDevtools initialIsOpen={ config.showDevtools } />
    </>
  );
}

export default App;
