import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'



export default function ReservationsBar({reservations}) {

    const now = new Date(); // Get the current date and time
    const nowYear = now.getFullYear(); // Get the current year (e.g., 2023)
    const nowMonth = now.getMonth(); // Get the current month (0-11, where 0 is January and 11 is December)
    const nowWeek = Math.floor((now.getDate() - 1) / 7) + 1; // Get the current week of the month (1-5)
    
    const [reservationList,setReservationList] = useState([])
    useEffect(()=>{
        setReservationList(
            reservations.filter(reservation => {
                // Extract the year, month, and week of the reservation date
                const reservationDate = new Date(reservation.date);
                const reservationYear = reservationDate.getFullYear();
                const reservationMonth = reservationDate.getMonth();
                const reservationWeek = Math.floor((reservationDate.getDate() - 1) / 7) + 1;
    
                // Check if the reservation matches the current year, month, and week
                if(reservation.userId == getCookie('id') &&
                    reservationYear == nowYear &&
                    reservationMonth == nowMonth &&
                    reservationWeek == nowWeek)
                    {
                        return reservation
                    }
        
        })
        )
    },[reservations])
     

    const router = useRouter();

    const closeSidebar = () =>{
        const reservationbar1 = document.querySelector('.reservationbar1')
        const reservationbar2 = document.querySelector('.reservationbar2')
        reservationbar1.classList.add('hidden')
        reservationbar2.classList.add('-right-full')
        reservationbar2.classList.remove('right-0')
    }
  return (
    <aside className="select-none font-roboto">
            <div onClick={closeSidebar} className="reservationbar1 w-full hidden h-screen fixed top-0 z-100 bg-gray-500 opacity-60  transform duration-100">

            </div>
           <div className="reservationbar2 text-sm h-full flex flex-col w-2/3 lg:w-1/5 first-line:h-screen top-0 fixed bg-white z-100  -right-full transform duration-500 ">
                <div className='flex flex-col h-full w-full '>
                    <div className='flex items-center space-x-2 justify-center py-3  border-b'>
                        <i className='bx bxs-book-bookmark text-main text-xl' ></i>
                        <h1 className='text-Cblue text-xl font-semibold text-center'>Reservation</h1>
                    </div>
                    {
                        reservationList.length == 0 ?
                        <div className='flex items-center justify-center h-full w-full'>
                            <div className=' text-white py-3 bg-orange-500 h-full w-full flex items-center justify-center'>
                                <p>No Reservation yet ! <c onClick={()=>router.push('/fields')} className='border-b cursor-pointer text-orange-700 border-orange-700'>Book Now</c></p>
                            </div>
                        </div>
                        :
                            reservationList.map(reservation =>(
                                <div key={reservation.id} className='flex space-x-2 px-2 py-3'>
                                    <div className='h-44 w-36 relative'>
                                        <div className='h-44 w-36 relative rounded-tl-3xl'>
                                            <Image src={reservation.terrain} fill className='rounded-tl-3xl' />
                                        </div>
                                        <div className='w-8 h-8 rounded-full left-2 bottom-2  absolute  border border-white'>
                                            <Image src={reservation.complexe} fill className=' object-cover rounded-full' />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <h1 className="text-Cblue font-semibold text-md">{reservation.nameField}</h1>
                                        <span className="text-gray-400 font-normal text-sm">{reservation.address}</span>
                                        <div className="text-Cblue space-x-2 text-sm flex items-center">
                                            <i className='bx bx-calendar-check text-main' ></i>
                                            <span>{reservation.date}</span>
                                        </div>
                                        <div className="text-Cblue space-x-2 text-sm flex items-center">
                                            <i className='bx bx-time-five text-main' ></i>
                                            <span><c className="text-gray-500 font-semibold">From</c> {reservation.from} </span>
                                            <span><c className="text-gray-500 font-semibold">To</c> {reservation.to} </span>
                                        </div>
                                        <div className="text-Cblue space-x-2 text-sm flex items-center">
                                            <i className='bx bx-brightness-half text-main' ></i>
                                            <span><c className="text-gray-500 font-semibold">Day</c> {reservation.day} </span>
                                        </div>
                                        <div className="text-Cblue space-x-2 text-sm flex items-center">
                                            <i className='bx bx-money text-main' ></i>
                                            <span><c className="text-gray-500 font-semibold">Price</c> {reservation.price} MAD </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        
                    }
                </div>
            </div>
    </aside>
  )
}
