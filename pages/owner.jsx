import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import AddComplex from '../components/AddComplex'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserBanner from '../components/UserBanner'
import AuthModal from '../components/AuthModal'
import UserInfo from '../components/UserInfo'
import ReservationsBar from '../components/ReservationsBar'
import Complexlist from '../components/owner/Complexlist'
import { getCookie } from 'cookies-next'
import ReservationList from '../components/owner/ReservationList'
import BASE_URL from './global'
import ReservationUserList from '../components/user/ReservationUserList'



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
export default function ({reservations,notificationsOwner,notificationsUser}) {

  const [userName,setUserName] = useState(null)
    
    useEffect(()=>{
        if(getCookie('first_name') == null)
            setUserName(null)
        else
            setUserName(getCookie('first_name'))
    },[getCookie('first_name')])


    const [role,setRole] = useState(null)
    useEffect(()=>{
        if(getCookie('role') == null)
            setRole(null)
        else
            setRole(getCookie('role'))
    },[getCookie('role')])

  return (
    <div className="">
      <Head>
        <title>Owner</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <Header notificationsOwner={notificationsOwner} notificationsUser={notificationsUser} />
      <AuthModal />
      <ReservationsBar reservations={reservations} />
      {/* grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 */}
      <div className="bg-gray-50 w-full grid grid-cols-1 font-poppins py-10">
       
        {/* <DashUser /> */}
        <UserBanner />
        {
           userName !=null
           &&
           role == 'host'
           &&
           <>
           <AddComplex />
           
           <Complexlist /> 
           
           <ReservationList reservations={reservations}/>
           </>
        }
        {
          userName !=null
          &&
          role == 'client'
          &&
          <ReservationUserList notificationsUser={notificationsUser}/>
        }
        <UserInfo />
      </div>
        
      <Footer />
    </div>
  )
}
