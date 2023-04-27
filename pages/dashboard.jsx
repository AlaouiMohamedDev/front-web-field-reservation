
import Head from 'next/head'
import SideBar from '../components/admin/SideBar';
import HeaderDash from '../components/admin/HeaderDash';
import Home from '../components/admin/Home';


export default function Dashboard (){



  

  return (
    <div className="w-full flex bg-white justify-between  dark:bg-black m-0 p-0 font-poppins relative">
      <Head>
        <title>Dashboard - admin</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
       </Head>
      <SideBar />
      <HeaderDash />
      <Home />
    </div>
  )
}

