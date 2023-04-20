
import React, { useContext, useState,useEffect } from 'react'
import  { useRouter} from 'next/router';
import { setCookie,getCookie,deleteCookie } from 'cookies-next';
import axios from 'axios';



export default function Sidebar() {


    const logOut =async ()=>{
        // const response =await axios.get(`http://127.0.0.1:5000/logout/${user.id}`);
        // deleteCookie('token');
        // deleteCookie('admin');
        // deleteCookie('name');
        // deleteCookie('id');
        // deleteCookie('public_id');
        // deleteCookie('name');
        // deleteCookie('email');
        // deleteCookie('adress')
        // deleteCookie('tel')
        // deleteCookie('image')
        document.location.reload()
        //document.location.replace('http://localhost:3000/')
    }

    
    const router = useRouter();

    const closeSidebar = () =>{
        const sidebar1 = document.querySelector('.sidebar1')
        const sidebar2 = document.querySelector('.sidebar2')
        sidebar1.classList.add('hidden')
        sidebar2.classList.add('-left-full')
        sidebar2.classList.remove('left-0')
    }


    
  return (
    <aside className="select-none">
            <div onClick={closeSidebar} className="sidebar1 w-full hidden h-screen fixed top-0 z-100 bg-gray-500 opacity-60  transform duration-100">

            </div>
           <div className="sidebar2 text-sm flex flex-col w-2/3 lg:w-1/3 h-screen top-0 fixed bg-white z-100  -left-full transform duration-500 ">
                <div className=" flex items-center justify-between px-2 py-5 text-sm">
                    <img src="./images/logo-name.png" alt="kiri tirank logo" className="h-8 "/>
                    <i onClick={closeSidebar} className='bx bx-x  text-2xl font-bold rounded cursor-pointer'></i>
                </div>
                <div className="flex flex-col px-5 text-gray-700  text-left font-semibold">
                    <span onClick={()=>router.push('/')} className="cursor-pointer hover:text-gray-500 py-4 border-y border-gray-200">Acceuil</span>
                    <span onClick={()=>router.push('/fields')} className="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">Fields</span>
                  
                    <span  className="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">About Us</span>
                    <span className="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">Contact Us</span>
                </div>
              

            </div>
    </aside>
  )
}