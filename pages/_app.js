import '../styles/globals.css'
import { store } from '../app/store';
import { Provider } from 'react-redux'
import {fetchFields} from '../app/fields/fieldsSlice';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "next-themes"
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps,session }) {
  store.dispatch(fetchFields());
  return (

    <SessionProvider session={session}>
        <Provider store={store}>
              <ToastContainer />
              <Component {...pageProps} />
            </Provider>
    </SessionProvider>

  )
}

export default MyApp
