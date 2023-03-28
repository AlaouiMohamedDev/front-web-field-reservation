import Head from 'next/head'
import React from 'react'
import AddComplex from '../components/AddComplex'
import Header from '../components/Header'
export default function () {
  return (
    <div className="">
      <Head>
        <title>Owner</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <Header />
      <div className="bg-gray-50 w-full h-screen font-poppins">
        <div className="p-7 flex flex-col items-center space-y-2">
          <h1 className="text-2xl text-Cblue font-bold">Complex <c className="text-main">Configuration</c></h1>
          <div className='flex items-center space-x-2 '>

            <span className='bg-main h-1 w-[200px] rounded'></span>
          </div>
        </div>
        
        <AddComplex />
      </div>
        
    </div>
  )
}
