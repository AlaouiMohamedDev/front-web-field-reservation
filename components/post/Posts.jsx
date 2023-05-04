import axios from 'axios'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { differenceInMinutes,differenceInHours,differenceInDays } from 'date-fns'
import BASE_URL from '../global'



export default function Posts({posts}) {

    var [displayedPosts,setDisplayedPosts]= useState(posts)


    useEffect(()=>{
        setDisplayedPosts(posts)
    },[posts])

    const [userId,setUserId] = useState(null)
    useEffect(()=>{
        if(getCookie('id') != null)
            setUserId(getCookie('id'))
    },[getCookie('id')])


    const router = useRouter()

    const ModalAuth = () => {
        const modal = document.querySelector('.authmodal')
        modal.classList.remove('hidden')
        modal.classList.add('flex')
    }

    const join = (id,max,need,reservation) => {
            if(userId ==  null )
            {
                ModalAuth()
            }
            else{

                Swal.fire({
                   title: `Do you want to Join`,
                   text: "Make sure of your descion",
                   icon: 'warning',
                   showCancelButton: true,
                   confirmButtonColor: '#3085d6',
                   cancelButtonColor: '#d33',
                   confirmButtonText: 'Yes,Join now!'
               }).then((result) => {
                   if (result.isConfirmed) {
                   // Approve Player
                   //     axios.post(`${BASE_URL}/entity/decrementPlayersNeeded/${id}/`,{jwt:getCookie('jwt')}).then(res => {
                   //     if(res.data.status === 200){
                   //         router.push('')
                   //         toast.success("You have joined the team", {
                   //             position: "bottom-right",
                   //           });
   
                             
                   //     }
                   //     else
                   //     {
                   //         toast.error("Full", {
                   //             position: "bottom-right",
                   //           });
                   //     }
                   // })
                       const data={
                           jwt:getCookie('jwt'),
                           user:getCookie('id'),
                           post:id
                       }
                       console.log("🚀 ~ file: Posts.jsx:75 ~ join ~ data:", data)
                       axios.post(`${BASE_URL}/entity/join-match/`,data).then(res => {
                       if(res.data.status === 200){
                           router.push('')
                           toast.success("Request has been placed", {
                               position: "bottom-right",
                             });
   
                             
                       }
                       else
                       {
                           toast.error(res.data.message, {
                               position: "bottom-right",
                             });
                       }
                   })
   
                       
               }
                  
           })
            }
    }
  return (
    <div className=' m-5 flex items-center justify-end w-full font-poppins'>
        <div className=' w-full flex  justify-end'>
            <div className='flex flex-col space-y-3 w-2/3 mx-10 '>
                {
                    displayedPosts.data.length == 0 
                    ?
                    <div className='flex item-center text-white justify-center bg-orange-400'>
                        <span>Nothing to show for the moment</span>
                    </div>
                    :

                        displayedPosts.data.map(post => {
                            const currentDate = new Date()
                            const pastDate = new Date(post.date)
                            const minutesAgo = differenceInMinutes(currentDate,pastDate)
                            const hoursAgo = differenceInHours(currentDate,pastDate)
                            const daysAgo = differenceInDays(currentDate,pastDate)
                            var ago = minutesAgo +" min ago"

                            var hasUser =false;
                            for ( var i=0;i<post.joined.length;i++)
                            {
                                if(post.joined[i] == userId)
                                {
                                    hasUser = true;
                                }
                            }

                            if(minutesAgo < 0)
                                ago = "Just now"
                            
                            if(minutesAgo > 59)
                                ago = hoursAgo +" hour ago"
                            if(hoursAgo > 23)
                                 ago = daysAgo +" day ago"
                            return (
                            <div key={post.id} className=' bg-white space-y-3 flex flex-col px-3 h-max w-full py-4 rounded shadow-sm '>
                                
                                <div className='flex items-center justify-between'>
                                    <div className='flex space-x-2'>
                                        {
                                            post.userImage != null
                                            ?
                                            <img src={post.userImage} className='w-9 h-9 rounded-full object-cover' />
                                            :
                                            <img src='/default.jpg' className='w-9 h-9 rounded-full object-cover' />
                                        }
                                        
                                        <div className='flex flex-col justify-between'>
                                            <span className='text-xs font-semibold'>{post.user_name}</span>
                                            <span className='text-xs text-gray-600'>
                                               {ago}
                                            </span>
                                        </div>
                                    </div>
                                    <i className='text-2xl text-main bx bx-dots-horizontal-rounded' ></i>
                                </div>
                                <div className='w-full text-xs px-2 py-3 text-justify'>
                                    <p>
                                        {post.description}
                                    </p>
                                </div>
                                <div className=" flex flex-col w-full relative">
                                    <img src={post.complexe_image} className="w-10 h-10 absolute bottom-3 left-3 rounded-full  shadow-lg object-cover" />
                                    <div className="text-[12px] text bg-main p-1 text-white rounded-t-xl space-x-1 flex items-center justify-center">
                                        <i className='bx bxs-calendar-check text-md'></i>
                                        <span>{post.reservation.date}</span>
                                        <i className='bx bx-time-five text-md'></i>
                                        <span>From {post.reservation.startTime} To {post.reservation.endTime}</span>
                                    </div>
                                    <img src={post.terrain_photo} className="w-full h-[200px] object-cover rounded-b-lg" />
                                    <div className="flex text-xs items-center text-white absolute bottom-3 right-3 space-x-1">
                                    {
                                        post.neededPlayers != 0 && post.userId != userId && !hasUser
                                        && 
                                    <button
                                        onClick={() => join(post.id, post.maxPlayers, post.neededPlayers,post.reservation)}
                                        className="bg-main rounded p-2"
                                    >
                                        Join
                                    </button>
                                    }
                                    <p className="bg-Cblue p-2 rounded">
                                        <span >{post.maxPlayers - post.neededPlayers}</span>
                                        <span className="text-main">/{post.maxPlayers}</span>
                                    </p>
                                    </div>
                                </div> 
                                <div className="text-[12px]  bg-white   text-black rounded space-x-1 flex items-center justify-end">
                                        <i className='bx bx-football text-main text-lg'></i>
                                        <span>{post.terrain_name}</span>
                                        <i className='bx bx-run text-main text-lg'></i>
                                        <span>Max players 10</span>
                            
                                </div>
                            </div>
                       ) })
                }
            </div>
            
            <div className='flex flex-col space-y-3 w-1/4'>
                <h1 className='text-black font-bold text-sm'>Suggested Posts</h1>
                    <div className='flex items-center justify-between '>
                        <div className='flex space-x-2'>
                            <img src='/user-1.jpg' className='w-10 h-10 rounded-full object-cover' />
                            <div className='flex flex-col justify-between'>
                                <span className='text-sm'>Maroune Imad</span>
                                <span className='text-xs text-gray-600'>Lorem ipsum dolor </span>
                            </div>
                        </div>
                        <span className='text-main text-sm font-semibold'>Visit</span>
                    </div>
            </div>
        </div>
    </div>
  )
}
