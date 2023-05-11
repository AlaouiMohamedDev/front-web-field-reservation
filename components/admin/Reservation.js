import React, { useEffect, useState } from 'react';

import { Row, Col } from 'reactstrap';




const Reservation = ({reservations}) => {

    const [search,setSearch] = useState([])

    const handler =(e)=>{
        e.persist()
        setSearch(e.target.value)
    }


    const [displayedReservation, setDisplayedReservation] = useState(reservations)
    useEffect(() => {
        setDisplayedReservation(reservations)
    }, [reservations])
    return (

        <div className="flex flex-col w-full px-5 inside bg-gray-100 relative">
        <div className="flex items-center justify-between py-5 ">
            <h1 className="font-bold custBlue text-lg">Reservations</h1>
            <div className='flex items-center space-x-2 text-sm'>
                <span className='text-main'>Kritirank</span>
                <i className='bx bx-chevron-right text-lg'></i>
                <span className='text-gray-500'>Reservations</span>
            </div>
        </div>

        <div className="bg-white rounded-lg py-7 mb-7 px-5 shadow flex flex-col ">
            <div className="flex items-center justify-between">
                <h1 className="text-custBlue font-semibold">List Complexe</h1>
                <div className="flex items-center space-x-2 bg-gray-50 rounded px-4 shadow">
                    <input name="search" value={search} onChange={handler} type="text" placeholder="Search" className="bg-transparent text-sm outline-none py-2 " />
                    <i className='bx bx-search text-lg text-gray-500' ></i>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4"></th>
                                <th scope="col" className="px-6 py-4">ID & Name Player</th>
                                <th scope="col" className="px-6 py-4">Description</th>
                       
                                <th scope="col" className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayedReservation.filter((val)=>{
                                    if(search == "")
                                    {
                                        return val;
                                    }
                                    else if(val.name.toLowerCase().includes(search.toLowerCase()))
                                    {
                                        return val;
                                    }
                                }).map((item, key) =>(
                                    <tr key={key} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center space-x-2">
                                            <input
                                                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                type="checkbox"
                                                value=""
                                                id={item.id} />
                                                <img src={item.terrain} alt="user" className="w-8 h-8 rounded-full object-cover" />
                                               
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 ">
                                            <span className="text-[9px] text-gray-600">#CMP{item.id}</span>
                                            <p className="text-sm font-semibold">{item.name}</p>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.complexeName}</td>  
                                        
                                        <td className="whitespace-nowrap px-6 py-4  space-x-1">
                                            <span className="text-main border border-main py-2 px-3 rounded text-xs">
                                                Approve
                                            </span>
                                            <span className="text-red-600 border border-red-600 py-2 px-3 rounded text-xs">
                                                Remove
                                            </span>
                                        </td>

                                    </tr>
                                ))
                            } 
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>

            

          
        </div>
    </div>
        
    )
}

export default Reservation;
