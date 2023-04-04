
import Head from 'next/head'
import Image from 'next/image'
import AuthModal from '../components/AuthModal'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Sidebar from '../components/SideBar'
import PopularFields from '../components/PopularFields'
const Home= () => {


  

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
       </Head>
      <Header />
      <AuthModal />
      <Banner />
      <Sidebar />
      <PopularFields />
      <Footer />
    </div>
  )
}

export default Home
