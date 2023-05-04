import axios from 'axios'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import BASE_URL from '../global'

export default function RequestList({joinedList}) {
    const [search,setSearch] = useState([])

    const handler =(e)=>{
        e.persist()
        setSearch(e.target.value)
    }

    const [requestList,setRequestList] = useState(joinedList.data)
    useEffect(()=>{
        setRequestList(
            joinedList.data.filter(data => {
                if(data.owner == getCookie('id'))
                {
                    return data
                }
        
        })
        )
    },[joinedList])
    const router = useRouter()

    const acceptRequest = (postid,joinid) => {
        Swal.fire({
            title: `Do you want to accept this player`,
            text: "Make sure of your descion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes now!'
        }).then((result) => {
            if (result.isConfirmed) {
            //Approve Player
                axios.post(`${BASE_URL}/entity/decrementPlayersNeeded/${postid}/`,{jwt:getCookie('jwt'),joinId:joinid}).then(res => {
                if(res.data.status === 200){
                    router.push('')
                    toast.success("You have joined the team", {
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

    const rejectRequest = (postid,joinid) => {
        Swal.fire({
            title: `Do you Really want to reject this player`,
            text: "Make sure of your descion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes,Reject now!'
        }).then((result) => {
            if (result.isConfirmed) {
            //Approve Player
                axios.post(`${BASE_URL}/entity/rejectPlayer/${postid}/`,{jwt:getCookie('jwt'),joinId:joinid}).then(res => {
                if(res.data.status === 200){
                    router.push('')
                    toast.success("You have joined the team", {
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

  return (
    <div className='requestlist hidden'>
        <div className="p-7 flex flex-col  space-y-2">
            <h1 className="text-2xl text-Cblue font-bold">Request <c className="text-main">List</c></h1>
            <div className='flex items-center space-x-2 '>
              <span className='bg-main h-1 w-[140px] rounded'></span>
            </div>
          </div>

          <div className='bg-white p-4   m-7 space-y-5 rounded shadow flex flex-col'>
          <div className='flex items-center justify-between w-full'>
            <h1 className=" font-semibold text-gray-500 w-max">Request <c className="text-main">Informations</c></h1>
            <div className="relative ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <i className='w-5 y-5 bx bx-search'></i>
                    </div>
                    {/* value={search} onChange={handler} */}
                    <input name="search" value={search} onChange={handler}  type="text" id="table-search-users" className="block focus:border-main p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-gray-50 border  placeholder-gray-500 " placeholder="Search for reservation" />
                </div>
          </div>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green dark:text-gray-400">
                        <tr className='grid grid-cols-3 md:grid-cols-4'>
                            <th scope="col" className="px-6 py-3 md:col-span-2">
                              Player Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestList.length == 0
                            ?
                            <tr className="bg-orange-500 grid md:grid-cols-4 text-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 md:col-span-4">
                                    Nothing to show
                                </td>
                            </tr>
                            :
                            requestList.filter((val)=>{
                                if(search == "")
                                {
                                    return val;
                                }
                                else if(val.userFirstName.toLowerCase().includes(search.toLowerCase()))
                                {
                                    if(val.lenght == 0)
                                        setTest(false)
                                    return val;
                                }
                            }).map(request => {
                                return(
                                    <tr key={request.id} className="bg-white grid md:grid-cols-4 border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="md:col-span-2 flex items-center space-x-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img src={request.userImage != null ? request.userImage :'./images/default.jpg'} class="w-[30px] h-[30px] rounded-full" />
                                            <span>{request.userFirstName} {request.userLastName}</span>
                                        </th>
                                        <td className="px-6 py-4">
                                            {request.reservation}
                                        </td>
                                        {
                                            request.request == 'Requested'
                                            &&
                                            <td className="px-6 py-4 flex items-center space-x-1">
                                                <div onClick={()=>acceptRequest(request.postid,request.id)} className=" text-green-400 border border-green-400 py-1 px-2 space-x-1 text-xs rounded">
                                                    <i className='bx bxs-time text-md' ></i>
                                                    <span>Accept</span>
                                                </div>
                                                <div onClick={()=>rejectRequest(request.postid,request.id)}  className=" text-red-400 border border-red-400 py-1 px-2 space-x-1 text-xs rounded">
                                                    <i className='bx bxs-time text-md' ></i>
                                                    <span>Reject</span>
                                                </div>
                                        </td>
                                        }
                                        {
                                             request.request == 'Accepted'
                                            &&
                                            <td className="px-6 py-4">
                                                <div  className=" text-main  flex items-center w-max space-x-1 text-xs">
                                                     <i className='bx bxs-check-circle text-md'></i>
                                                    <span>Accepted</span>
                                                </div>
                                            </td>
                                        }
                                        {
                                             request.request == 'Rejected'
                                            &&
                                            <td className="px-6 py-4">
                                                <div  className=" text-red-500 flex items-center w-max space-x-1 text-xs">
                                                    <i className='bx bx-x text-md'></i>
                                                    <span>Rejected</span>
                                                </div>
                                            </td>
                                        }
                                    </tr>
                                )
                            })
                        }
                        
                     
                        
                    </tbody>
                </table>
            </div>

          </div>
    </div>
  )
}
