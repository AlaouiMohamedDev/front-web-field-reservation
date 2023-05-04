import '../styles/globals.css'
import { store } from '../app/store';
import { Provider } from 'react-redux'
import {fetchFields} from '../app/fields/fieldsSlice';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "next-themes"
import {SessionProvider} from 'next-auth/react'
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProgressBar from '@badrap/bar-of-progress';


const progress = new ProgressBar({
  size : 4,
  color:"#00CCBF",
  className : "z-100",
  delay :100,
})

Router.events.on(`routeChangeStart` , progress.start);
Router.events.on(`routeChangeComplete` , progress.finish)
Router.events.on(`routeChangeError` , progress.finish)



function Loading(){
  

  const router =useRouter();
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    const handleStart = (url) => (url != router.asPath) && setLoading(true);
    const handleComplete = () => setLoading(false) ;

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError',handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError',handleComplete);
    }
  })

  return  loading && (
  <div className="bg-white/50 z-100 fixed h-screen w-screen flex items-center justify-center">
    <img src="https://res.cloudinary.com/realmoro/image/upload/v1683225808/logo-a_cewrtk.png" className="animate-pulse md:w-[300px]" />
  </div>
  )

}

function MyApp({ Component, pageProps,session }) {

 
  store.dispatch(fetchFields());
  return (
    <>
      <Loading />
      <SessionProvider session={session}>
          <Provider store={store}>
                <ToastContainer />
                <Component {...pageProps} />
              </Provider>
      </SessionProvider>
    </>

  )
}

export default MyApp
