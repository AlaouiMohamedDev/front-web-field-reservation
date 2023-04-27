import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { setCookie,getCookie, deleteCookie } from 'cookies-next'



export default function Header({notifications}) {


    const router = useRouter();

   

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
        deleteCookie('role')
        const currentUrl = router.asPath;
        router.push(currentUrl)
    }

    useEffect(() => {

        const header = document.querySelector('.header')
        
        window.addEventListener('scroll', () => {
            if ((window.scrollY || window.pageYOffset) > 10 ) {
                header.classList.add('fixed')
                header.classList.add('z-100')
                header.classList.add('shadow');
                header.classList.add('top-0');
                header.classList.add('w-screen');
                header.classList.remove('py-5');
                header.classList.add('py-3');
            }else{
                header.classList.remove('fixed')
                header.classList.remove('w-screen');
                header.classList.remove('z-100')
                header.classList.remove('shadow');
                header.classList.remove('py-3');
                header.classList.remove('top-0');
                header.classList.add('py-5');
            }        
        })
    },[]);

    const [userName,setUserName] = useState(null)
    
    useEffect(()=>{
        if(getCookie('name') == null)
            setUserName(null)
        else
            setUserName(getCookie('name'))
    },[getCookie('name')])


    const [role,setRole] = useState(null)
    useEffect(()=>{
        if(getCookie('role') == null)
            setRole(null)
        else
            setRole(getCookie('role'))
    },[getCookie('role')])

    

    const sidebar = () => {
        
        const sidebar1 = document.querySelector('.sidebar1')
        const sidebar2 = document.querySelector('.sidebar2')
        sidebar1.classList.remove('hidden')
        sidebar2.classList.remove('-left-full')
        sidebar2.classList.add('left-0');
    }

    const reservationbar = () => {
        
        const reservationbar1 = document.querySelector('.reservationbar1')
        const reservationbar2 = document.querySelector('.reservationbar2')
        reservationbar1.classList.remove('hidden')
        reservationbar2.classList.remove('-right-full')
        reservationbar2.classList.add('right-0');
    }

    const dropDown = () => {
        const dropDown = document.querySelector('.dropDown')
        dropDown.classList.toggle('hidden')
    }
    
    const dropDown1 = () => {
        const dropDown = document.querySelector('.dropDown1')
        dropDown.classList.toggle('hidden')
    }

    const dropDown2 = () => {
        const dropDown = document.querySelector('.dropDown2')
        dropDown.classList.toggle('hidden')
    }


  return (
    <div className=''>
        <div className="bg-main text-white font-poppins text-sm  py-2 flex items-center justify-center space-x-7">
            <h1>FOLLOW US</h1>
            <i className='bx bxl-pinterest' ></i>
            <i className='bx bxl-github' ></i>
            <i className='bx bxl-facebook' ></i>
            <i className='bx bxl-instagram' ></i>
        </div>
        <div className="flex  bg-white font-poppins text-sm justify-evenly px-5 shadow-sm  py-4 text-gray-600 header select-none">
            <div className="flex items-center space-x-10">
                <img src="./images/logo-name.png" className="w-[170px] "/>
                <div className="md:flex items-center space-x-7 hidden">
                    <a onClick={()=>{router.push('/')}} className=" text-main cursor-pointer">Welcome</a>
                    <a onClick = {() => router.push("/fields")}  className=" cursor-pointer">Fields</a>
                    <a onClick = {() => router.push("/posts")}  className=" cursor-pointer">Posts</a>
                    <a href="" className=" cursor-pointer">About Us</a>
                    <a href="" className=" cursor-pointer">Contact Us</a>
                </div>
            </div>

            {/* ------ */}
            
        </div>
        

    </div>
  )
}
