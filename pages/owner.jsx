import Head from 'next/head'
import React from 'react'
import AddComplex from '../components/AddComplex'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DashUser from '../components/DashUser'
import AuthModal from '../components/AuthModal'
export default function () {
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
      <Header />
      <AuthModal />
      <div className="bg-gray-50 w-full grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 font-poppins py-10">
       
        <DashUser />
        <AddComplex />

      </div>
        
      <Footer />
    </div>
  )
}
