
import Head from 'next/head'
import Image from 'next/image'
import AuthModal from '../components/AuthModal'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Sidebar from '../components/SideBar'
import PopularFields from '../components/PopularFields'
import ReservationsBar from '../components/ReservationsBar'
import BASE_URL from './global'


export async function getServerSideProps(context) {

  const response = await fetch(`${BASE_URL}/entity/reservation-list`)
  const reservations = await response.json();

  const responseRes = await fetch(`${BASE_URL}/entity/completed_reservations_post/`)
  const notificationsOwner = await responseRes.json();

  const responseRes1 = await fetch(`${BASE_URL}/entity/reservations-status/`)
  const notificationsUser = await responseRes1.json();


  return {
    props: {
      reservations:reservations,
      notificationsOwner:notificationsOwner,
      notificationsUser:notificationsUser
    },
  }
}

const Home= ({reservations,notificationsOwner,notificationsUser}) => {


  

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
      <Header notificationsOwner={notificationsOwner} notificationsUser={notificationsUser} />
      <AuthModal />
      <ReservationsBar reservations={reservations} />
      <Banner />
      <Sidebar />
      <PopularFields />
      <Footer />
    </div>
  )
}

export default Home
