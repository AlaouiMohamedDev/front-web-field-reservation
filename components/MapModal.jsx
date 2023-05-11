import React, { useEffect, useState } from "react";
import swal from 'sweetalert2'
import axios from 'axios'
import { setCookie,getCookie, deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import BASE_URL from "./global";
import {useSession,signIn,signOut, getSession} from 'next-auth/react'


// Now you can use BASE_URL anywhere in this file


/*
import  { useRouter} from 'next/router';
import { setCookie,getCookie } from 'cookies-next';*/


export default function MapModal() {

    
    const closeModalMap =()=>{
        const modal= document.querySelector('.mapmodal')
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }


  return (
    <div className="fixed z-100 w-full h-screen top-0 hidden items-center justify-center bg-gray-900/70 mapmodal fade">
        
        <div className="relative flex items-center justify-center w-full h-full md:w-[850px] md:h-[510px] bg-white  zoom-in">
            <div className="flex px-7 md:w-1/2 flex-col items-center space-y-5">
                <div className = "absolute left-0 p-4 top-0" >
                      <i className = "bx bx-x cursor-pointer text-2xl font-semibold hover:text-main" onClick={closeModalMap}/>
                </div>
             </div> 
        </div>
    </div>
  )
}