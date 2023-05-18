import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { setCookie,getCookie,deleteCookie } from 'cookies-next';
import axios from 'axios';


export default function SideBar() {

  const router = useRouter()
  


  return (
    
    <div className="top-[68px] side w-[250px] bg-custBlue  lg:flex flex-col hidden fixed lg:static h-screen">
      <div className="w-full py-[1.5rem] flex  justify-center items-center shadow">
          <img src="../images/logo-white.png" className='h-[24px] span '/>
          <img src="../images/logo.png" className='h-[30px] hidden span'/>
      </div>
      <div className="w-full px-[20px] flex flex-col pt-5 space-y-5">
          <h1 className='text-[10px] text-gray-500 font-bold tracking-widest span'>MENU</h1>
          <div onClick={()=>router.push('dashboard')} className="w-full flex pl-3 items-center itemP justify-between text-[15px] text-[#8590a5] hover:text-main cursor-pointer">
            <div className="flex space-x-3 items-center">
              <i className='bx bx-home-alt text-lg'></i>
              <span className="span">Dashboard</span>
            </div>
            <div className="span flex items-center justify-center bg-main w-[20px] font-semibold h-[15px] rounded-full text-white text-[12px]">9</div>
          </div>
          <div onClick={()=>router.push('/')} className="w-full flex pl-3 items-center itemP justify-between text-[15px] text-[#8590a5] hover:text-main cursor-pointer">
            <div className="flex space-x-3 items-center">
              <i className='bx bx-world text-lg' ></i>
              <span className="span">Web Site</span>
            </div>
            <i className='span bx bx-chevron-right text-md'></i>
          </div>
          <h1 className='text-[10px] text-gray-500 font-bold tracking-widest span'>PAGES</h1>
          <div onClick={()=>router.push('complexe')} className="w-full flex pl-3 items-center itemP justify-between text-[15px] text-[#8590a5] hover:text-main cursor-pointer">
            <div className="flex space-x-3 items-center">
              <i className='bx bxs-component text-lg' ></i>
              <span className="span">Complexe</span>
            </div>
            <i className='span bx bx-chevron-right text-md'></i>
          </div>
          <div  onClick={()=>router.push('fields')} className="w-full flex pl-3 items-center itemP justify-between text-[15px] text-[#8590a5] hover:text-main cursor-pointer">
            <div className="flex space-x-3 items-center">
              <i className='bx bx-football text-lg' ></i>
              <span className="span">Field</span>
            </div>
            <i className='span bx bx-chevron-right text-md'></i>
          </div>
          <div onClick={()=>router.push('reservation')} className="w-full flex pl-3 items-center itemP justify-between text-[15px] text-[#8590a5] hover:text-main cursor-pointer">
            <div className="flex space-x-3 items-center">
              <i className='bx bx-book-bookmark text-lg' ></i>
              <span className="span">Reservation</span>
            </div>
            <i className='span bx bx-chevron-right text-md'></i>
          </div>
          <div className="w-full flex pl-3 items-center itemP justify-between text-[15px] text-[#8590a5] hover:text-main cursor-pointer">
            <div className="flex space-x-3 items-center">
              <i className='bx bx-run text-lg' ></i>
              <span className="span">Player</span>
            </div>
            <i className='span bx bx-chevron-right text-md'></i>
          </div>
          <div onClick={()=>router.push('owner')} className="w-full flex pl-3 items-center itemP justify-between text-[15px] text-[#8590a5] hover:text-main cursor-pointer">
            <div className="flex space-x-3 items-center">
              <i className='bx bx-face text-lg' ></i>
              <span className="span">Owner</span>
            </div>
            <i className='span bx bx-chevron-right text-md'></i>
          </div>
          <div className="w-full flex pl-3 items-center itemP justify-between text-[15px] text-[#8590a5] hover:text-main cursor-pointer">
            <div className="flex space-x-3 items-center">
              <i className='bx bx-wrench text-lg' ></i>
              <span className="span">Admin</span>
            </div>
            <i className='span bx bx-chevron-right text-md'></i>
          </div>
      </div>
    </div>
  )
}