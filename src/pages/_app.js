import '../styles/globals.css';
import '../styles/index.css'; // Import the index.css file
import { Provider } from 'react-redux';
import { store } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
