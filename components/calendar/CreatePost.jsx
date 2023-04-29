import axios from 'axios'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import Swal from 'sweetalert2'
import BASE_URL from '../global'


export default function CreatePost({oneField,from,to}) {
    const ModalAuth =()=>{
        const postmodal= document.querySelector('.postmodal')
        postmodal.classList.add('hidden')
        postmodal.classList.remove('flex')
    }
    const [createPost,setCreatePost] = useState({
        nbr:'',
        description:'',
    });

    const posthandler = (e) => {
        e.persist();
        setCreatePost({...createPost,[e.target.name]:e.target.value});
    }
    const [url,setUrl] = useState('')
    const [fieldName,setFieldName] = useState('')

    useEffect(()=>{
        if(oneField[0] != null)
        {
            setUrl(oneField[0].terrain_photo)
            setFieldName(oneField[0].Fieldname)
        }

    },[oneField])

    const router = useRouter()

    const resetPost = () => {
        setCreatePost({
            nbr:'',
            description:'',
        });
        ModalAuth()
      }

    const submitPost = () =>{
        if(createPost.nbr == '' || createPost.description == 'null'){            
                toast.error("All fields are required", {
                   position: "top-right",
                });
        }
        else
        {
            const currentDate = new Date()
            const formattedDate = currentDate.toISOString().slice(0, 10)
                 Swal.fire({
                title: `Do you want to Reserve `,
                text: "Make sure of your descion",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes,Book it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    const currentDate = new Date()
                    const formattedDate = currentDate.toISOString().slice(0, 10)

                    const date = new Date(formattedDate)
                    // if(date.getDay() != d)
                    // {
                    //     date.setDate(date.getDate() + d-date.getDay())
                    // }
                    const data={
                        startTime:from,
                        endTime:to,
                        date:date.toISOString().slice(0, 10),
                        terrain:oneField[0].id,
                        approved_rejected:"waiting",
                        jwt:getCookie('jwt')
                    }

                    axios.post(`${BASE_URL}/entity/reservation-create/`,data).then(res => {
                    if(res.data.status === 200){
                            const data1 ={
                                number_of_players_needed:createPost.nbr,
                                description:createPost.description,
                                terrain : oneField[0].id,
                                post_reservation:res.data.reservation_id,
                                jwt:getCookie('jwt')
                            }
                            axios.post(`${BASE_URL}/entity/post-create/`,data1).then(res => {
                                    if(res.data.status === 200){
                                            resetPost()
                                            router.push(`/posts`)
                                    }
                                    else
                                    {
                                        Swal.fire("Echec !!",res.data.message,"warning");
                                    }
                                })
                    
                    }
                    else
                    {
                        Swal.fire("Echec !!",res.data.message,"warning");
                    }
                })

                    
            }
               
        })
           
        }
    }
  return (
    <div className="fixed z-100 w-full h-screen top-0 hidden left-0 items-center justify-center bg-gray-900/70 postmodal fade">
        <div className="relative flex items-center justify-center w-full h-full md:w-[700px] md:h-[280px] bg-white  zoom-in">
            <div className="flex w-full h-full flex-col items-center ">
                <div className = "absolute z-30 left-0 p-2 top-0" >
                      <i className = "bx bx-x cursor-pointer text-2xl text-Cblue font-semibold hover:text-main" onClick={ModalAuth} />
                </div>
                <div className='bg-white grid grid-cols-2 z-10  flex-col rounded w-full h-full relative'>
                    <img src='/pattern-1.png' className='absolute object-cover w-full h-full -z-5 opacity-20' />
                  <div className='flex flex-col space-y-5 py-10 font-roboto px-6 z-10'>
                        <h1 className='text-center text-lg font-bold'>Create Post</h1>
                      <div className='flex flex-col space-y-3 '>
                         <input name="nbr" value={createPost.nbr} onChange={posthandler}  placeholder = "Missing Places" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-300 outline-none text-gray-600 rounded" />
                         <textarea name="description" value={createPost.description} onChange={posthandler} placeholder = "Content Post"  className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-300 outline-none text-gray-600 rounded" />
                      </div>
                  
                      <button onClick={submitPost} className="text-white w-full py-2 bg-main rounded text-sm">Create a post</button>
                  </div>
                  <div className='relative flex items-center justify-center text-white text-xs'>
                     <div className="z-100 flex flex-col space-y-5">
                        <p><c className='bg-main rounded p-1'>Field Name :</c> <c className="text-main font-semibold bg-white rounded p-1">{fieldName}</c></p>
                        <p><c className='bg-main rounded p-1'>Date :</c> <c className="text-main font-semibold bg-white rounded p-1">16-04-2023</c></p>
                        <p><c className='bg-main rounded p-1'>From :</c> <c className="text-main font-semibold bg-white rounded p-1">02:00 AM</c></p>
                        <p><c className='bg-main rounded p-1'>To :</c> <c className="text-main font-semibold  bg-white rounded p-1">04:00 AM</c></p>
                      </div>
                     <img src={url} className='absolute -z-5 top-0  rounded-l-12 w-full md:h-[280px] h-full shadow-lg brightness-75' />
                  </div>
                </div>
            

            </div>
            
        </div>
    </div>
  )
}
