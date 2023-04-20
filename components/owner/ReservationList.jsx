import axios from 'axios'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

function ReservationList({reservations}) {

    const [search,setSearch] = useState([])

    const handler =(e)=>{
        e.persist()
        setSearch(e.target.value)
    }

    const [reservationList,setReservationList] = useState([])
    useEffect(()=>{
        setReservationList(
            reservations.filter(reservation => {
                if(reservation.owner == getCookie('id'))
                {
                    return reservation
                }
        
        })
        )
    },[reservations])
    const router = useRouter()

    const approve = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Approve it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const data = {
                    reservation_id:id,
                    status:'approved'
                }
                axios.post('https://kritirankk.pythonanywhere.com/entity/approve-reservation/',data).then(res => {
                    if(res.data.status === 200){
                        Swal.fire(
                            'Approved!',
                            'Reservation has been accepted.',
                            'success'
                          )
                          router.push('')
                          
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

    const reject = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Reject it!'
          }).then((result) => {
            if (result.isConfirmed) {

                const data = {
                    reservation_id:id,
                    status:'rejected'
                }
                axios.post('https://kritirankk.pythonanywhere.com/entity/approve-reservation/',data).then(res => {
                    if(res.data.status === 200){
                        Swal.fire(
                            'Rejected!',
                            'Reservation has been Rjected.',
                            'success'
                          )
                          router.push('')
                          
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
    <div className='reservationlist hidden'>
        <div className="p-7 flex flex-col  space-y-2">
            <h1 className="text-2xl text-Cblue font-bold">Reservation <c className="text-main">List</c></h1>
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
                               User Name
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
                                            {reser.name}
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
                                            reser.approved == 'waiting'
                                            &&
                                            <td className="px-6 py-4 flex items-center space-x-1">
                                                <div onClick={()=>approve(reser.id)}  className="cursor-pointer hover:bg-white hover:text-main shadow transition-all ease-in-out duration-150 flex items-center w-max py-1 px-2 rounded bg-yellow-500 space-x-1 text-white text-xs">
                                                    <span>Approve</span>
                                                <i className='bx bxs-check-circle'></i>
                                                </div>

                                                <div onClick={()=>reject(reser.id)}  className="cursor-pointer hover:bg-white hover:text-red-500 shadow transition-all ease-in-out duration-150 flex items-center w-max py-1 px-2 rounded bg-red-500 space-x-1 text-white text-xs">
                                                    <span>Reject</span>
                                                    <i className='bx bx-x'></i>
                                                </div>
                                            </td>
                                        }
                                        {
                                            reser.approved == 'approved'
                                            &&
                                            <td className="px-6 py-4">
                                                <div  className=" text-main  flex items-center w-max space-x-1 text-xs">
                                                    <span>Approved</span>
                                                <i className='bx bxs-check-circle'></i>
                                                </div>
                                            </td>
                                        }
                                        {
                                            reser.approved == 'rejected'
                                            &&
                                            <td className="px-6 py-4">
                                                <div  className=" text-red-500 flex items-center w-max space-x-1 text-xs">
                                                    <span>Regected</span>
                                                    <i className='bx bx-x'></i>
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

export default ReservationList