import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../app/store';
import { Provider } from 'react-redux'
import {fetchFields} from '../app/fields/fieldsSlice';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
  store.dispatch(fetchFields());
  return (

  // <ThemeProvider enableSystem={true} attribute="class">
    <Provider store={store}>
           <ToastContainer />
           <Component {...pageProps} />
        </Provider>
     // </ThemeProvider>
  )
}

export default MyApp
