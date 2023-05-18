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


export async function getServerSideProps(context) {
  
  const response = await fetch(`${BASE_URL}/entity/list_fields`)
  const fields = await response.json();

  const responseCat = await fetch(`${BASE_URL}/entity/list_category_letter/`)
  const cats = await responseCat.json();

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
      session:session,
      cats:cats
    },
  }
}
export default function ({fields,reservations,notificationsUser,notificationsOwner,joinedList,session,cats}) {
  return (
    <div className="">
      <Head>
        <title>Fields</title>
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
       <Banner />
       <FieldList cats={cats}  fields={fields} />
      <Footer />
    </div>
  )
}
