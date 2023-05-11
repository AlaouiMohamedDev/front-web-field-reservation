import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useRouter } from 'next/router'
import {selectAllFields} from '../../app/fields/fieldsSlice'
import Image from 'next/image';
import MapModal from '../MapModal';
import Map from '../Map';
import Destinations from '../Map/destination';

export default function FieldList({fields}) {

    const router = useRouter();

    var [displayedFields,setDisplayedFields]= useState(fields)

    useEffect(()=>{
        setDisplayedFields(fields)
    },[fields])

    const customStyles = {

        menuList :()=>({
            backgroundColor:'#ffffff',
            display:'absolute',
          }),
        dropdownIndicator :()=>({
          color:'gray',
          padding:'0px 5px'
        }),
        option: (provided, state) => ({
          ...provided,
          width:'inherit',
          borderBottom: '1px ',
          color: 'black',
          backgroundColor:'#ffffff',
        }), placeholder: (provided) => ({
        ...provided,
        fontSize: '13px',
        color : '#9CA3C1' // add font size here
      }),
        control: (provided, state) => ({
          // none of react-select's styles are passed to <Control />
          display: 'flex',
          outline:'none',
          border:'1px solid #E9E9E9',
          borderRadius:'4px',
          backgroundColor:'#ffffff',
          color:'#ffffff',
          width:'200px',
          boxShadow: state.isFocused ? '0 0 0 1px #03C988' : 'none',

        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
            
          return { ...provided, opacity, transition,color:"black",fontSize: '14px' };
        }
    }

    const options = [
        { value: 1, label: 'New offers' },
        { value: 2, label: 'Best Fields' },
        { value: 3, label: 'Price low to hight' }
      ]
      

      const [latlng,setLatLng] = useState({
        lat:31.6258257,
        long:-7.9891608,
        id:1,
        name:''
      })

      const MapModal = (lat,long,id,name) => {
            setLatLng({lat:lat,long:long,id:id,name:name})
            const modal = document.querySelector('.mapmodal')
            modal.classList.remove('hidden')
            modal.classList.add('flex')
            

    }

    const closeModalMap =()=>{
        const modal= document.querySelector('.mapmodal')
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }
  return (
    <div className='bg-white px-[50px] 2xl:px-[300px] py-10'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-1 font-semibold hover:text-main cursor-pointer'>
                <i class='bx bx-filter-alt' ></i>
                <span>Filter</span>
            </div>
            <Select
                              name="zone"
                                  options={options}
                                  styles={customStyles}
                                  placeholder="New Offers"
                                  />

                                  
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center py-10">
            {displayedFields.length == 0 && 
            <div className="py-2 col-span-3 bg-orange-400 rounded-md w-full text-white flex items-center justify-center">
                <span>No fields to show in this moments</span>
            </div>
            }
            {
                displayedFields.map(field => {
                    return(
                        <div className="flex flex-col border border-gray-200 w-[400px] relative">
                            <div className="relative h-[250px]">
                                <Image src={field.terrain_photo} fill className="object-cover" />
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
        <div className="fixed overflow-auto md:overflow-hidden z-100 w-full left-0 h-screen top-0 hidden items-center justify-center bg-gray-900/70 mapmodal fade">
        
            <div className="relative w-full h-full md:w-[850px] md:h-[510px] bg-white  zoom-in">
                <div className="flex flex-col md:flex-row h-full px-5 md:px-0 py-5">
                    <div className = "absolute right-0 p-4 top-0" >
                        <i className = "bx bx-x cursor-pointer text-2xl font-semibold hover:text-main" onClick={closeModalMap}/>
                    </div>
                    <div className = " flex md:w-1/3  h-full">
                        <div className = "flex flex-col space-y-1 items-center justify-center border-b md:border-b-0 py-3 md:py-0 md:border-r  md:px-2 h-full">
                            <img src="map.png" className = "w-[80px]" />
                            <p className = "text-md font-bold text-gray-700">View Route</p>
                            <p className="text-xs text-gray-500 text-center">
                                Please change the address if you are not in your current address so the route to the complex change
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 items-start md:w-2/3  px-5">
                        <h1 className="font-bold text-lg text-gray-700">Destination to KICK OFF</h1>
                        <input type="text" className="outline-none rounded bg-gray-100 py-2 w-full px-3 text-sm text-gray-700 placeholder:text-gray-500" placeholder="Enter your address" />
                        <Destinations field={latlng}/>
                      
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}
