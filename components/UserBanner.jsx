import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'

export default function UserBanner() {


    const [userName,setUserName] = useState(null)

    useEffect(()=>{
        if(getCookie('name') == null)
            setUserName(null)
        else
            setUserName(getCookie('name'))
    },[getCookie('name')])

    const showComplex = () => {
        const addComplex = document.querySelector('.addComplex')
        const userInfo = document.querySelector('.userInfo')
        const complexlist = document.querySelector('.complexlist')
       
        userInfo.classList.add('hidden')
        complexlist.classList.add('hidden')
        addComplex.classList.remove('hidden')
    }

    const showUserInfo = () => {
        const addComplex = document.querySelector('.addComplex')
        const userInfo = document.querySelector('.userInfo')
        const complexlist = document.querySelector('.complexlist')
        const cmlist = document.querySelector('.cmlist')
        const settings = document.querySelector('.settings')
        
        settings.classList.add('activeOwner')
        cmlist.classList.remove('activeOwner')


        complexlist.classList.add('hidden')
        userInfo.classList.remove('hidden')
        addComplex.classList.add('hidden')
        
    }

    const showComplexlist = () => {
        const addComplex = document.querySelector('.addComplex')
        const userInfo = document.querySelector('.userInfo')
        const complexlist = document.querySelector('.complexlist')
        const cmlist = document.querySelector('.cmlist')
        const settings = document.querySelector('.settings')

        settings.classList.remove('activeOwner')
        cmlist.classList.add('activeOwner')

        complexlist.classList.remove('hidden')
        userInfo.classList.add('hidden')
        addComplex.classList.add('hidden')
    }

  return (
    <div className='mx-7 my-8 space-y-5 lg:space-y-0 flex flex-col lg:flex-row justify-between'>
        <div className='bg-main bg-dashUser bg-cover space-y-2 font-roboto shadow-md lg:w-1/4 text-white h-[180px] rounded-tr-12 flex flex-col text-sm justify-center px-10'>
            <div className='flex items-center justify-between'>
                <div className='space-x-2 flex items-center'>
                    <i className='bx bxs-building text-Cblue'></i>
                    <a>Number Of Complex </a>
                </div>
                <span className='text-Cblue font-bold'>01</span>
            </div>
            <div className='flex items-center justify-between'>
                <div className='space-x-2 flex items-center'>
                    <i className='bx bxs-square-rounded text-Cblue' ></i>
                    <a>Number Of Fields </a>
                </div>
                <span className='text-Cblue font-bold'>05</span>
            </div>
            <div className='flex items-center justify-between'>
                <div className='space-x-2 flex items-center'>
                    <i className='bx bxs-check-square text-Cblue' ></i>
                    <a>Reserved Fields </a>
                </div>
                <span className='text-Cblue font-bold'>2</span>
            </div>

            <div className='flex items-center justify-between'>
                <div className='space-x-2 flex items-center'>
                    <i className='bx bxs-check-square text-Cblue' ></i>
                    <a>Reliable Clients</a>
                </div>
                <span className='text-Cblue font-bold'>20</span>
            </div>
            
        </div>
        <div className=' relative lg:w-2/3 '>
                <div className='bg-main bg-field1 flex items-start justify-end p-2 font-roboto bg-cover rounded-tl-12 h-[180px] shadow-md text-[10px] text-white'>
                    <div onClick={showComplex} className='shcmp flex items-center space-x-1 bg-main py-1 px-2 rounded-full cursor-pointer'>
                        <i class='bx bxs-plus-circle text-xs'></i>
                        <a>Add complex</a>
                    </div>
                </div>
                <div className='flex justify-between absolute -bottom-20 w-full'>
                        <div className='flex mx-5 md:mx-10 space-x-4 items-end'>
                            <img src='./images/default.jpg' className='shadow-md rounded-full w-[150px] h-[150px] object-cover'/>
                            <div className='flex flex-col pb-10 md:pb-6'>
                                <span>{userName}</span>
                                <span className='text-xs hidden md:flex text-gray-500'>Update your photo and personal details</span>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5 text-xs mt-20 md:mt-10'>
                            <a onClick={showComplexlist} className='px-2 py-1 cmlist'>Complexe List</a>
                            <a onClick={showUserInfo} className='activeOwner px-2 py-1 settings'>My Settings</a>
                        </div>
                </div>
        </div>
    </div>
  )
}
