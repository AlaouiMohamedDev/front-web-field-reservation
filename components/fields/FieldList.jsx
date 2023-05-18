import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useRouter } from 'next/router'
import {selectAllFields} from '../../app/fields/fieldsSlice'
import Image from 'next/image';
import MapModal from '../MapModal';
import Map from '../Map';
import Destinations from '../Map/destination';
import Filter from './Filter';
import cities from '../cities';

export default function FieldList({fields,cats}) {

    const router = useRouter();

    var [displayedFields,setDisplayedFields]= useState(fields)

    useEffect(()=>{
        setDisplayedFields(fields.filter((field) => field.user_is_active))
    },[fields])


    var [displayedCats,setDisplayedCats]= useState(cats)

    useEffect(()=>{
        setDisplayedCats(cats)
    },[cats])

  

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

    
      const needs = () => {
        const needs = document.querySelector(".needs");
        needs.classList.toggle("grid");
        needs.classList.toggle("hidden");
        document.querySelector(".updownNeeds").classList.toggle("bx-chevron-up");
        document.querySelector(".updownNeeds").classList.toggle("bx-chevron-down");
      };
    
      const times = () => {
        const time = document.querySelector(".time");
        time.classList.toggle("flex");
        time.classList.toggle("hidden");
        document.querySelector(".updownTimes").classList.toggle("bx-chevron-up");
        document.querySelector(".updownTimes").classList.toggle("bx-chevron-down");
      };
    
      const customStyles = {
        control: (provided, state) => ({
          // none of react-select's styles are passed to <Control />
          display: "flex",
          outline: "none",
          border: "solid 1px #E5E7EB",
          borderRadius: "4px",
          backgroundColor: "#ffffff",
          color: "#ffffff",
          fontSize: "12px",
          padding: "0px",
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: "#03C988", // replace with your desired color
        }),
        container: (provided) => ({
          ...provided,
          width: "100%", // replace with your desired width
        }),
        option: (provided, state) => ({
          ...provided,
          fontSize: "12px", // replace with your desired font size
          backgroundColor: state.isSelected ? "#03C988" : "white", // replace with your desired color
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = "opacity 300ms";
    
          return {
            ...provided,
            opacity,
            transition,
            color: "black",
            fontSize: "12px",
          };
          
        },
      };

      const [search,setSearch] = useState([])

      const handler =(e)=>{
        e.persist()
        setSearch(e.target.value)
      }

      const [activeCategory, setActiveCategory] = useState("-");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };


  const [city,setCity] = useState(cities[0])
      
      const handlerCity = (e) =>{
        setCity(e)
      }



  return (
    <div className='bg-gray-50 flex flex-bol lg:flex-row lg:space-x-6  items-start justify-between px-[50px] py-10'>
        <div className="w-1/3 font-poppins text-sm">
      <div className="bg-white shadow flex py-3 space-y-3 flex-col  px-3 rounded-tr-xl">
        <h3 className="">Filter</h3>
        <input
          type="text"
          name="search" value={search} onChange={handler}
          className="outline-none border py-2 text-xs rounded px-3 placeholder:text-gray-400"
          placeholder="Search for fields"
        />
        <h3 className="text-xs">Category</h3>
        <div className="grid grid-cols-3 w-full gap-5">
            {
                displayedCats.length == 0
                ?
                <div className="col-span-3 bg-main text-white flex items-center">
                    No categories
                </div>
                :
                <span
                        className={`text-xs flex py-1 items-center justify-center border rounded ${
                        activeCategory === `-` ? 'activeCat' : ''
                        }`}
                        onClick={() => handleCategoryClick(`-`)}
                    >
                        All
                    </span>
            }
            {
                displayedCats.map(cat => (
                    <span
                        className={`text-xs flex py-1 items-center justify-center border rounded ${
                        activeCategory === `${cat.typeTerrain} vs ${cat.typeTerrain}` ? 'activeCat' : ''
                        }`}
                        onClick={() => handleCategoryClick(`${cat.typeTerrain} vs ${cat.typeTerrain}`)}
                    >
                        {cat.typeTerrain} vs {cat.typeTerrain}
                    </span>

                ))
            }
            </div>
        <h3 className="text-xs">Ville</h3>
        <Select
          options={cities}
          styles={customStyles}
          placeholder="Choose a city"
          value={city}
          onChange={handlerCity}
        />
    
        

          {/* <button onClick={()=>{console.log(document.querySelector('.datepi').value)}}>sUbmit</button> */}
        
      </div>
    </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
            {displayedFields.length == 0 && 
            <div className="py-2 col-span-2 bg-orange-400 rounded-md w-full text-white flex items-center justify-center">
                <span>No fields to show in this moments</span>
            </div>
            }
            {
                displayedFields.filter((val)=>{
                    console.log('----> : ',val.Fieldname.toLowerCase() ," -- Search : ",search !="" && search.toLowerCase(),"---",activeCategory[0] , "==",val.category,'--->',activeCategory[0] == val.category)
                    
                    if(activeCategory[0] == "-")
                    {
                        if(search == "" && city.label == "All")
                        {
                            return val;
                        }
                        else if(search == "" && city.label == val.city){
                            return val;
                        }
                        else if(search != "" && val.Fieldname.toLowerCase().includes(search.toLowerCase())&& city.label == val.city)
                        {
                            return val;
                        }
                        else if(search != "" && val.Fieldname.toLowerCase().includes(search.toLowerCase()) && city.label == "All")
                        {
                            return val;
                        }
                    }
                    else
                    {
                        if(activeCategory[0] == val.category && search == "" && city.label == "All")
                        {
                            return val;
                        }
                        else if(search != "" && val.Fieldname.toLowerCase().includes(search.toLowerCase()) && activeCategory[0] == val.category && city.label == val.city){
                            return val;
                        }
                        else if(search != "" && val.Fieldname.toLowerCase().includes(search.toLowerCase()) && activeCategory[0] == val.category && city.label == "All"){
                            return val;
                        }
                        else if(search =="" && activeCategory[0] == val.category && city.label == val.city){
                            return val;
                        }
                    }
                })
                .map(field => {
                   
                    return  field ?(
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
                    :
                    (
                        <div className="py-2 col-span-2 bg-orange-400 rounded-md w-full text-white flex items-center justify-center">
                            <span>No fields to show for the moments</span>
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
