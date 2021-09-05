import { useEffect } from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  //TODO: Fix issue of server side rendering of material-ui elements
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
