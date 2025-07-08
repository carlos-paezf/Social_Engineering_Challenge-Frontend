import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import { config } from './config';

function App () {
  return (
    <>
      {/* TODO */ }
      <ReactQueryDevtools initialIsOpen={ config.showDevtools } />
    </>
  );
}

export default App;
