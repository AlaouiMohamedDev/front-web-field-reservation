import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { setCookie,getCookie, deleteCookie } from 'cookies-next'

export default function Header() {

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
                    <a onClick={()=>{router.push('/')}} className=" text-main">Welcome</a>
                    <a onClick = {() => router.push("/fields")}  className="">Fields</a>
                    <a href="" className="">About Us</a>
                    <a href="" className="">Contact Us</a>
                </div>
            </div>
            <div className="flex items-center space-x-5 text-xl ">
                <i className='bx bx-search cursor-pointer'></i>
                { userName == null ?
                    <i onClick={ModalAuth}  className='bx bx-user cursor-pointer' ></i>
                :
                
                <div className='relative'>
                <button onClick={dropDown} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-sm flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{userName}<svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <div id="dropdownNavbar" className="dropDown hidden z-10 absolute top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                        <li>
                            <a onClick = {() => router.push("/owner")} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a  className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a  className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        </ul>
                        <div className="py-1">
                        <a onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>
            </div>
                    
                }
                {userName!=null && <i onClick={reservationbar} className='bx bx-book-bookmark cursor-pointer'></i>}
                <i onClick= {sidebar} className='bx bx-menu-alt-right cursor-pointer '></i>
            </div>
        </div>
        

    </div>
  )
}
