import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AuthModal from '../components/AuthModal'
import Banner from '../components/fields/Banner'
import FieldList from '../components/fields/FieldList'
import ReservationsBar from '../components/ReservationsBar'
import Sidebar from '../components/SideBar'
import BASE_URL from '../components/global'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Destinations from '../components/Map/destination'


export async function getServerSideProps(context) {
  
  const response = await fetch(`${BASE_URL}/entity/list_fields`)
  const fields = await response.json();

  const response1 = await fetch(`${BASE_URL}/entity/reservation-list`)
  const reservations = await response1.json();

  const responseRes = await fetch(`${BASE_URL}/entity/completed_reservations_post/`)
  const notificationsOwner = await responseRes.json();

  const responseRes1 = await fetch(`${BASE_URL}/entity/reservations-status/`)
  const notificationsUser = await responseRes1.json();
  
  const resp1 = await fetch(`${BASE_URL}/entity/list-joined/`)
  const joinedList = await resp1.json();

  const session =await getSession(context)

  return {
    props: {
      fields:fields,
      reservations:reservations,
      notificationsOwner:notificationsOwner,
      notificationsUser:notificationsUser,
      joinedList:joinedList,
      session:session
    },
  }
}
export default function ({fields,reservations,notificationsUser,notificationsOwner,joinedList,session}) {

    const router = useRouter();
    const { lat } = router.query;
    const { long } = router.query;
    const {name} = router.query;
    const {img} = router.query;

    const latlong={
        lat:lat,
        long:long
    }

  return (
    <div className="">
        <Head>
        <title>Destination</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
        </Head>
        <Header notificationsUser={notificationsUser} notificationsOwner={notificationsOwner} joinedList={joinedList}/>
        <AuthModal session={session} />
        <Sidebar />
        <ReservationsBar reservations={reservations}/>
        <div className={`flex flex-col md:flex-row items-center md:space-x-3 justify-center font-poppins h-[300px] bg-field1 bg-cover bg-bottom text-white`}>
            <img src={img} className='w-[150px] h-[150px] rounded-full object-cover' />
            <div className='flex flex-col space-y-3'>
                <h3 className='text-4xl '>Destination to {name}</h3>
                <div className='flex items-center space-x-2 text-sm'>
                        <span onClick = {() => router.push("/")}  className='cursor-pointer hover:text-main'>Home</span>
                        <i className='bx bx-chevron-right text-lg text-gray-400'></i>
                        <span className=' text-gray-400'>Destination</span>
                    </div>
            </div>
        </div>
        <div className='py-10 px-10'>
            <Destinations field={latlong}/>
        </div>
        <Footer />
  </div>
  )
}
