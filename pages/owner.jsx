import Head from 'next/head'
import React from 'react'
import AddComplex from '../components/AddComplex'

export default function () {
  return (
    <div className="">
      <Head>
        <title>Owner</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <div className="bg-gray-50 w-full  h-screen font-poppins">
            <AddComplex />
      </div>
        
    </div>
  )
}
