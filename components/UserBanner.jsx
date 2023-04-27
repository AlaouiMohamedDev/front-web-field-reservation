import { getCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import BASE_URL from '../pages/global';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function UserBanner() {


    const [userName,setUserName] = useState(null)

    const router = useRouter();
    const { reservation } = router.query;

    useEffect(()=>{
           if(reservation != null)
                showReservationlist()
    })

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

    const showComplex = () => {
        const addComplex = document.querySelector('.addComplex')
        const userInfo = document.querySelector('.userInfo')
        const complexlist = document.querySelector('.complexlist')
        const reservationlist = document.querySelector('.reservationlist')

       
        userInfo.classList.add('hidden')
        complexlist.classList.add('hidden')
        addComplex.classList.remove('hidden')
        reservationlist.classList.add('hidden')
    }

    const showUserInfo = () => {
        const addComplex = document.querySelector('.addComplex')
        const userInfo = document.querySelector('.userInfo')
        const complexlist = document.querySelector('.complexlist')
        const cmlist = document.querySelector('.cmlist')
        const settings = document.querySelector('.settings')
        const reservationlist = document.querySelector('.reservationlist')
        const reslist = document.querySelector('.reslist')

        
        settings.classList.add('activeOwner')
        cmlist.classList.remove('activeOwner')
        reslist.classList.remove('activeOwner')

        complexlist.classList.add('hidden')
        userInfo.classList.remove('hidden')
        addComplex.classList.add('hidden')
        reservationlist.classList.add('hidden')

        
    }

    const showComplexlist = () => {
        const addComplex = document.querySelector('.addComplex')
        const userInfo = document.querySelector('.userInfo')
        const complexlist = document.querySelector('.complexlist')
        const cmlist = document.querySelector('.cmlist')
        const settings = document.querySelector('.settings')
        const reservationlist = document.querySelector('.reservationlist')
        const reslist = document.querySelector('.reslist')


        settings.classList.remove('activeOwner')
        cmlist.classList.add('activeOwner')
        reslist.classList.remove('activeOwner')


        complexlist.classList.remove('hidden')
        userInfo.classList.add('hidden')
        addComplex.classList.add('hidden')
        reservationlist.classList.add('hidden')

    }

    const showReservationlist = () => {
        const addComplex = document.querySelector('.addComplex')
        const userInfo = document.querySelector('.userInfo')
        const complexlist = document.querySelector('.complexlist')
        const cmlist = document.querySelector('.cmlist')
        const reslist = document.querySelector('.reslist')
        const settings = document.querySelector('.settings')
        const reservationlist = document.querySelector('.reservationlist')


        settings.classList.remove('activeOwner')
        cmlist.classList.remove('activeOwner')
        reslist.classList.add('activeOwner')

        complexlist.classList.add('hidden')
        userInfo.classList.add('hidden')
        addComplex.classList.add('hidden')
        reservationlist.classList.remove('hidden')
    }

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState("./images/default.jpg" );

    useEffect(() => {
            if(getCookie('image') !='')
            {
                setCreateObjectURL(getCookie('image'))
            }
            else{
                setCreateObjectURL("./images/default.jpg" )
            }
    },[getCookie('image')])


    const uploadToClient = async (event) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0]; 
          setImage(i);
          setCreateObjectURL(URL.createObjectURL(i));
  
          const body = new FormData();
          body.append("file", i);  
          body.append("upload_preset","my-uploads")
          const response = await fetch('https://api.cloudinary.com/v1_1/kritirank/image/upload', {
            method: "POST",
            body:body
          }).then(r=>r.json());
          const data ={
            profile_pic:response.secure_url,
            jwt:getCookie('jwt')
          }
          console.log("🚀 ~ file: UserBanner.jsx:144 ~ uploadToClient ~ data:", data)
          axios.post(`${BASE_URL}/api/profile_pic/`,data).then(async res => {
                            
              if(res.data.status === 200){
                  toast.success(res.data.message,{ position: "bottom-left" })
                  setCookie('image',response.secure_url)
                  router.push('')
              }
              else
              {
                  toast.error(res.data.message,{ position: "bottom-left" })
              }
          })
  
        }
      };

  return (
    <div className='mx-7 my-8 space-y-5 lg:space-y-0 flex flex-col lg:flex-row justify-between'>
        <div className='bg-main bg-dashUser bg-cover space-y-2 font-roboto shadow-md lg:w-1/4 text-white h-[180px] rounded-tr-12 flex flex-col text-sm justify-center px-10'>
            
            {
                userName !=null
                &&
                role == 'host'
                &&
                <>
                <div className='flex items-center justify-between'>
                    <div className='space-x-2 flex items-center'>
                        <i className='bx bxs-building text-Cblue'></i>
                        <a>Number Of Complex </a>
                    </div>
                    <span className='text-Cblue font-bold'>01</span>
                </div>
                
                <div className='flex items-center justify-between'>
                    <div className='space-x-2 flex items-center'>
                        <i className='bx bx-square-rounded text-Cblue' ></i>
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
                </>
            }

             
                {
                userName !=null
                &&
                role == 'client'
                &&
                <h1  className='text-center text-3xl font-black text-black'>Welcome to your Own Space</h1>
                }
            
        </div>
        <div className=' relative lg:w-2/3 '>
                <div className='bg-main bg-field1 flex items-start justify-end p-2 font-roboto bg-cover rounded-tl-12 h-[180px] shadow-md text-[10px] text-white'>
                    {
                        userName !=null
                        &&
                        role == 'host'
                        &&
                    <div onClick={showComplex} className='shcmp flex items-center space-x-1 bg-main py-1 px-2 rounded-full cursor-pointer'>
                        <i class='bx bxs-plus-circle text-xs'></i>
                        <a>Add complex</a>
                    </div>
                    }
                </div>
                <div className='flex justify-between absolute -bottom-20 w-full'>
                        <div className='flex mx-5 md:mx-10 space-x-4 items-end'>
                            <div className='relative bg-main group rounded-full w-[150px] h-[150px] flex items-center justify-center'>
                                    <img src={createObjectURL}  className=' rounded-full w-[150px] h-[150px] object-cover shadow-md'/>
                                    <input type='file' name="myImage" onChange={uploadToClient}  className="opacity-0 cursor-pointer absolute w-full h-full top-0 left-0 z-100" />
                                    <i class='bx bxs-camera text-2xl text-main hidden group-hover:flex absolute z-90'></i>
                            </div>
                            <div className='flex flex-col pb-10 md:pb-6'>
                                <span>{userName}</span>
                                <span className='text-xs hidden md:flex text-gray-500'>Update your photo and personal details</span>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5 text-xs mt-20 md:mt-10'>
                            {
                                userName !=null
                                &&
                                role == 'host'
                                &&
                                <>
                            <a onClick={showReservationlist} className='px-2 py-1 reslist'>Reservation List</a>
                            <a onClick={showComplexlist} className='px-2 py-1 cmlist'>Complexe List</a>
                                </>
                            }
                            <a onClick={showUserInfo} className='activeOwner px-2 py-1 settings'>My Settings</a>
                        </div>
                </div>
        </div>
    </div>
  )
}
