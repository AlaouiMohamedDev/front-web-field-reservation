import axios from 'axios'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import BASE_URL from '../../pages/global'

function ReservationUserList({notificationsUser}) {

    const [search,setSearch] = useState([])

    const handler =(e)=>{
        e.persist()
        setSearch(e.target.value)
    }

    const [reservationList,setReservationList] = useState(notificationsUser.data)
    useEffect(()=>{
        setReservationList(
            notificationsUser.data.filter(reservation => {
                if(reservation.userId == getCookie('id'))
                {
                    return reservation
                }
        
        })
        )
    },[notificationsUser])
    const router = useRouter()

  return (
    <div className='reservationuserlist hidden'>
        <div className="p-7 flex flex-col  space-y-2">
            <h1 className="text-2xl text-Cblue font-bold">Your reservation<c className="text-main">List</c></h1>
            <div className='flex items-center space-x-2 '>
              <span className='bg-main h-1 w-[140px] rounded'></span>
            </div>
          </div>

          <div className='bg-white p-4   m-7 space-y-5 rounded shadow flex flex-col'>
          <div className='flex items-center justify-between w-full'>
            <h1 className=" font-semibold text-gray-500 w-max">Reservation <c className="text-main">Informations</c></h1>
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
                        <tr className='grid grid-cols-5'>
                            <th scope="col" className="px-6 py-3">
                              Complex Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Field
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                From - to
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservationList.length == 0
                            ?
                            <tr className="bg-orange-500 grid grid-cols-5 text-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 col-span-5">
                                    Nothing to show
                                </td>
                            </tr>
                            :
                            reservationList.filter((val)=>{
                                if(search == "")
                                {
                                    return val;
                                }
                                else if(val.nameField.toLowerCase().includes(search.toLowerCase()))
                                {
                                    if(val.lenght == 0)
                                        setTest(false)
                                    return val;
                                }
                            }).map(reser => {
                                return(
                                    <tr className="bg-white grid grid-cols-5 border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {reser.complexeName}
                                        </th>
                                        <td className="px-6 py-4">
                                            {reser.nameField}
                                        </td>
                                        <td className="px-6 py-4">
                                            {reser.date}
                                        </td>
                                        <td className="px-6 py-4">
                                            {reser.from} - {reser.to}
                                        </td>
                                        {
                                            reser.status == 'waiting'
                                            &&
                                            <td className="px-6 py-4">
                                            <div  className=" text-yellow-500 flex items-center w-max space-x-1 text-xs">
                                                 <i className='bx bxs-time text-md' ></i>
                                                <span>Waiting</span>
                                            </div>
                                        </td>
                                        }
                                        {
                                            reser.status == 'approved'
                                            &&
                                            <td className="px-6 py-4">
                                                <div  className=" text-main  flex items-center w-max space-x-1 text-xs">
                                                     <i className='bx bxs-check-circle text-md'></i>
                                                    <span>Approved</span>
                                                </div>
                                            </td>
                                        }
                                        {
                                            reser.status == 'rejected'
                                            &&
                                            <td className="px-6 py-4">
                                                <div  className=" text-red-500 flex items-center w-max space-x-1 text-xs">
                                                    <i className='bx bx-x text-md'></i>
                                                    <span>Regected</span>
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

export default ReservationUserList