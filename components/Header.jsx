import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { setCookie,getCookie, deleteCookie } from 'cookies-next'

export default function Header() {

    const router = useRouter();
    const [userName,setUserName] = useState(null)

    const ModalAuth =()=>{
        const modal= document.querySelector('.authmodal')
        modal.classList.remove('hidden')
        modal.classList.add('flex')
    }

    const logout = () => {
        deleteCookie('name')
        deleteCookie('jwt')
        deleteCookie('id')
        deleteCookie('email')
        router.push('/')
    }

    useEffect(() => {

        const header = document.querySelector('.header')
        
        window.addEventListener('scroll', () => {
            if ((window.scrollY || window.pageYOffset) > 10 ) {
                header.classList.add('fixed')
                header.classList.add('z-90')
                header.classList.add('shadow');
                header.classList.add('top-0');
                header.classList.remove('py-5');
                header.classList.add('py-3');
            }else{
                header.classList.remove('fixed')
                header.classList.remove('z-90')
                header.classList.remove('shadow');
                header.classList.remove('py-3');
                header.classList.remove('top-0');
                header.classList.add('py-5');
            }        
        })
    },[]);

    useEffect(()=>{
        if(getCookie('name') == null)
            setUserName(null)
        else
            setUserName(getCookie('name'))
        console.log("🚀 ~ file: Header.jsx:9 ~ Header ~ userName:", userName)
    },[getCookie('name')])

    const sidebar = () => {
        console.log("🚀 ~ file: Header.jsx:38 ~ sidebar ~ sidebar:")
        
        const sidebar1 = document.querySelector('.sidebar1')
        const sidebar2 = document.querySelector('.sidebar2')
        sidebar1.classList.remove('hidden')
        sidebar2.classList.remove('-left-full')
        sidebar2.classList.add('left-0');
    }
  return (
    <div className=''>
        <div className="bg-main text-white font-poppins text-sm  py-2 flex items-center justify-center space-x-7">
            <h1>FOLLOW US</h1>
            <i class='bx bxl-pinterest' ></i>
            <i class='bx bxl-github' ></i>
            <i class='bx bxl-facebook' ></i>
            <i class='bx bxl-instagram' ></i>
        </div>
        <div className="flex  font-poppins text-sm justify-evenly px-5 shadow-sm relative py-4 text-gray-600 header select-none">
            <div className="flex items-center space-x-10">
                <img src="./images/logo-name.png" className="w-[170px] "/>
                <div className="md:flex items-center space-x-7 hidden">
                    <a href="" className=" text-main">Welcome</a>
                    <a onClick = {() => router.push("/fields")}  className="">Fields</a>
                    <a href="" className="">About Us</a>
                    <a href="" className="">Contact Us</a>
                    <a  onClick = {() => router.push("/owner")} className="">Owner</a>
                </div>
            </div>
            <div className="flex items-center space-x-5 text-xl ">
                <i class='bx bx-search cursor-pointer'></i>
                { userName == null ?
                    <i onClick={ModalAuth}  class='bx bx-user cursor-pointer' ></i>
                :
                    <span onClick={logout} className='text-sm cursor-pointer'>{userName}</span>
                }
                <i onClick= {sidebar} class='bx bx-menu-alt-right cursor-pointer '></i>
            </div>
        </div>
        

    </div>
  )
}
