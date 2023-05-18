import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function PopularFields({fields}) {

    const router = useRouter();

    var [displayedFields,setDisplayedFields]= useState(fields)

    useEffect(()=>{
        setDisplayedFields(fields.filter((field) => field.user_is_active))
    },[fields])
  return (
    <div className="font-roboto py-[150px]">
        <div className="flex flex-col space-y-3 items-center justify-center">
            <h1 className='text-3xl text-dashBlack font-black'>Popular Sport Complexs</h1>
            <span className="text-sm text-gray-400">Find your fit field from our popular sport complexs</span>
        </div>
        <div className="flex items-center justify-center py-10">
            <div className="grid  grid-cols-3 gap-10 justify-items-center ">
            {displayedFields.length == 0 && 
            <div className="py-2 col-span-2 bg-orange-400 rounded-md w-full text-white flex items-center justify-center">
                <span>No fields to show in this moments</span>
            </div>
            }
            {
                displayedFields.map(field => {
                   
                    return (
                        <div className="flex flex-col border border-gray-200 w-[400px] relative shadow rounded-t-3">
                            <div className="relative h-[250px] rounded-t-3">
                                <Image src={field.terrain_photo} fill className="object-cover rounded-t-3" />
                            </div>
                            {!field.reserved ? 
                                <span className="bg-yellow-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Open</span>
                            :
                            <span className="bg-red-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Close</span>
                        }
                            <span className="bg-yellow-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Open</span>
                            <img src={field.complex_photo} className='h-12 w-12 rounded-full border-2 border-white absolute top-[190px] left-4' />
                            <div className="flex flex-col p-5 font-poppins">
                                <h1 className="text-md font-bold text-Cblue">{field.Complexename} - {field.Fieldname}</h1>
                                <div className="flex items-center space-x-2 text-gray-400 text-sm py-1">
                                    <i class='bx bxs-map'></i>
                                    <span className="">{field.address}</span>
                                    {!field.reserved ? 
                                    <span className="text-green-500">- Open to book</span>
                                    :
                                    <span className="text-red-700">- Reserverd</span>
                                    }
                                </div>
                                <span className="text-main text-lg py-3  font-black">{field.price} MAD</span>
                                <div className="flex items-center space-x-10 ">
                                    <div className="flex flex-col text-gray-600 items-center">
                                        <i class='bx bx-run text-3xl'></i>
                                        <span className="text-[13px]">Player {field.number_of_players}</span>
                                    </div>
                                    <div className="flex flex-col text-gray-600 items-center">
                                        <i class='bx bx-area text-3xl'></i>
                                        <span className="text-[13px]">Area {field.area}m²</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex items-center h-[55px] w-full">
                                <div onClick={()=>router.push(`/calendar1?field=${field.id}`)} className="bg-gray-100 hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer h-full flex items-center justify-center w-[80%]">
                                    <span>See Details</span>
                                </div>
                                {/* onClick={()=>MapModal(field.lat,field.long,field.id,field.Fieldname)} */}
                                <div  onClick={()=>router.push(`/destination?lat=${field.lat}&long=${field.long}&name=${field.Complexename}&img=${field.complex_photo}`)} className="hover:text-white hover:bg-main text-main cursor-pointer flex items-center border-t border-gray-200 h-full justify-center w-[20%]">
                                    <i class=' bx bx-map-alt  text-xl' ></i>
                                </div>
                            </div>
                       </div>
                    )
                  
                })
            }
            </div>

        </div>
    </div>
  )
}
