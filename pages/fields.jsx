import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AuthModal from '../components/AuthModal'
import Banner from '../components/fields/Banner'
import FieldList from '../components/fields/FieldList'

export async function getServerSideProps(context) {
  const response = await fetch('http://127.0.0.1:8000/entity/list_fields')
  const fields = await response.json();

  return {
    props: {
      fields:fields
    },
  }
}
export default function ({fields}) {
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
      <Header />
      <AuthModal />
       <Banner />
       <FieldList  fields={fields} />
      <Footer />
    </div>
  )
}
