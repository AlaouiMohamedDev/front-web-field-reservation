import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../app/store';
import { Provider } from 'react-redux'
import {fetchFields} from '../app/fields/fieldsSlice';

function MyApp({ Component, pageProps }: AppProps) {
  store.dispatch(fetchFields());
  return <Provider store={store}>
           <Component {...pageProps} />
        </Provider>
}

export default MyApp
