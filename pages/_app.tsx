import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {fetchProducts} from '../app/products/productsSlice';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
