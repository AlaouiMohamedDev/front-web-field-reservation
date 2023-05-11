
import Head from 'next/head'
import SideBar from '../../components/admin/SideBar';
import HeaderDash from '../../components/admin/HeaderDash';
import Home from '../../components/admin/Home';
import { useEffect } from 'react';


export default function Dashboard (){


  useEffect(() => {

    const side = document.querySelector('.side')
    const inside = document.querySelector('.inside')
    const grid1 = document.querySelector('.grid1')
    const grid2 = document.querySelector('.grid2')
    const grid22 = document.querySelector('.grid22')

   const headersah = document.querySelector('.headerdash')


    window.addEventListener('scroll', () => {
        if ((window.scrollY || window.pageYOffset) > 100) {
            side.classList.remove('lg:static')
            side.classList.add('left-0')
            inside.classList.add('lg:pl-[260px]')
            grid1.classList.remove('lg:grid-cols-4')
            grid2.classList.remove('lg:grid-cols-3')
            grid22.classList.add('lg:col-span-2')
            headersah.classList.add('fixed')
            headersah.classList.add('w-screen')
            headersah.classList.add('top-0')
            headersah.classList.add('z-100')
        } else {
          side.classList.add('lg:static')
          side.classList.remove('left-0')
          inside.classList.remove('lg:pl-[260px]')
          grid1.classList.add('lg:grid-cols-4')
          grid2.classList.add('lg:grid-cols-3')
          grid22.classList.remove('lg:col-span-2')
          headersah.classList.remove('fixed')
          headersah.classList.remove('w-screen')
          headersah.classList.remove('top-0')
          headersah.classList.remove('z-100')
        }
    })
}, []);
  

  return (
    <div className="w-full flex flex-col lg:flex-row-reverse bg-gray-100 h-full justify-between  dark:bg-custBlue m-0 p-0 relative font-work">
      <Head>
        <title>Dashboard - admin</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap&family=Work+Sans&display=swap" rel="stylesheet" />
       </Head>

       <div className='flex flex-col w-full'>
          <HeaderDash />
          <Home />
       </div>
        <SideBar />

      
      {/* <Home /> */}

    </div>
  )
}

