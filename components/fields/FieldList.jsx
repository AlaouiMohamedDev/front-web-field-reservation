import React from 'react'
import Select from 'react-select'

export default function FieldList() {

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
                <div className="flex flex-col border border-gray-200 w-[400px] relative">
                    <img src="./images/complex/l-2.jpeg" className="object-cover h-[250px]" />
                    <span className="bg-yellow-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Open</span>
                    <img src="./images/complex/l-1.jpg" className='h-12 w-12 rounded-full border-2 border-white absolute top-[190px] left-4' />
                    <div className="flex flex-col p-5 font-poppins">
                        <h1 className="text-md font-bold text-Cblue">Urabin Five - Field A1</h1>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm py-1">
                            <i class='bx bxs-map'></i>
                            <span className="">Adress property here</span>
                            <span className="text-green-500">- Open to book</span>
                        </div>
                        <span className="text-main text-lg py-3  font-black">150.00 MAD</span>
                        <div className="flex items-center space-x-10 ">
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-run text-3xl'></i>
                                <span className="text-[13px]">Player 10</span>
                            </div>
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-area text-3xl'></i>
                                <span className="text-[13px]">Area 145m²</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center h-[55px] w-full">
                        <div className="bg-gray-100 hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer h-full flex items-center justify-center w-[80%]">
                            <span>See Details</span>
                        </div>
                        <div className="group cursor-pointer flex items-center border-t border-gray-200 h-full justify-center w-[20%]">
                            <i class='group-hover:text-main bx bx-heart text-gray-600 text-lg' ></i>
                        </div>
                     </div>
                </div>
                <div className="flex flex-col border border-gray-200 w-[400px] relative">
                    <img src="./images/complex/1.jpg" className="object-cover h-[250px]" />
                    <span className="bg-red-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Close</span>
                    <img src="./images/complex/l-2.png" className='h-12 w-12 object-contain bg-black rounded-full border-2 border-white absolute top-[190px] left-4' />
                    <div className="flex flex-col p-5 font-poppins">
                        <h1 className="text-md font-bold text-Cblue">Kick Off - Field IA47</h1>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm py-1">
                            <i class='bx bxs-map'></i>
                            <span className="">Adress property here</span>
                            <span className="text-red-700">- Reserverd</span>
                        </div>
                        <span className="text-main text-lg py-3  font-black">100.00 MAD</span>
                        <div className="flex items-center space-x-10 ">
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-run text-3xl'></i>
                                <span className="text-[13px]">Player 10</span>
                            </div>
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-area text-3xl'></i>
                                <span className="text-[13px]">Area 145m²</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center h-[55px] w-full">
                        <div className="bg-gray-100 hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer h-full flex items-center justify-center w-[80%]">
                            <span>See Details</span>
                        </div>
                        <div className="group cursor-pointer flex items-center border-t border-gray-200 h-full justify-center w-[20%]">
                            <i class='group-hover:text-main bx bx-heart text-gray-600 text-lg' ></i>
                        </div>
                     </div>
                </div>
                <div className="flex flex-col border border-gray-200 w-[400px] relative">
                    <img src="./images/complex/l-2.jpeg" className="object-cover h-[250px]" />
                    <span className="bg-yellow-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Open</span>
                    <img src="./images/complex/l-1.jpg" className='h-12 w-12 rounded-full border-2 border-white absolute top-[190px] left-4' />
                    <div className="flex flex-col p-5 font-poppins">
                        <h1 className="text-md font-bold text-Cblue">Urabin Five - Field A1</h1>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm py-1">
                            <i class='bx bxs-map'></i>
                            <span className="">Adress property here</span>
                            <span className="text-green-500">- Open to book</span>
                        </div>
                        <span className="text-main text-lg py-3  font-black">150.00 MAD</span>
                        <div className="flex items-center space-x-10 ">
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-run text-3xl'></i>
                                <span className="text-[13px]">Player 10</span>
                            </div>
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-area text-3xl'></i>
                                <span className="text-[13px]">Area 145m²</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center h-[55px] w-full">
                        <div className="bg-gray-100 hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer h-full flex items-center justify-center w-[80%]">
                            <span>See Details</span>
                        </div>
                        <div className="group cursor-pointer flex items-center border-t border-gray-200 h-full justify-center w-[20%]">
                            <i class='group-hover:text-main bx bx-heart text-gray-600 text-lg' ></i>
                        </div>
                     </div>
                </div>
                <div className="flex flex-col border border-gray-200 w-[400px] relative">
                    <img src="./images/complex/1.jpg" className="object-cover h-[250px]" />
                    <span className="bg-red-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Close</span>
                    <img src="./images/complex/l-2.png" className='h-12 w-12 object-contain bg-black rounded-full border-2 border-white absolute top-[190px] left-4' />
                    <div className="flex flex-col p-5 font-poppins">
                        <h1 className="text-md font-bold text-Cblue">Kick Off - Field IA47</h1>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm py-1">
                            <i class='bx bxs-map'></i>
                            <span className="">Adress property here</span>
                            <span className="text-red-700">- Reserverd</span>
                        </div>
                        <span className="text-main text-lg py-3  font-black">100.00 MAD</span>
                        <div className="flex items-center space-x-10 ">
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-run text-3xl'></i>
                                <span className="text-[13px]">Player 10</span>
                            </div>
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-area text-3xl'></i>
                                <span className="text-[13px]">Area 145m²</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center h-[55px] w-full">
                        <div className="bg-gray-100 hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer h-full flex items-center justify-center w-[80%]">
                            <span>See Details</span>
                        </div>
                        <div className="group cursor-pointer flex items-center border-t border-gray-200 h-full justify-center w-[20%]">
                            <i class='group-hover:text-main bx bx-heart text-gray-600 text-lg' ></i>
                        </div>
                     </div>
                </div>
                <div className="flex flex-col border border-gray-200 w-[400px] relative">
                    <img src="./images/complex/l-2.jpeg" className="object-cover h-[250px]" />
                    <span className="bg-yellow-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Open</span>
                    <img src="./images/complex/l-1.jpg" className='h-12 w-12 rounded-full border-2 border-white absolute top-[190px] left-4' />
                    <div className="flex flex-col p-5 font-poppins">
                        <h1 className="text-md font-bold text-Cblue">Urabin Five - Field A1</h1>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm py-1">
                            <i class='bx bxs-map'></i>
                            <span className="">Adress property here</span>
                            <span className="text-green-500">- Open to book</span>
                        </div>
                        <span className="text-main text-lg py-3  font-black">150.00 MAD</span>
                        <div className="flex items-center space-x-10 ">
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-run text-3xl'></i>
                                <span className="text-[13px]">Player 10</span>
                            </div>
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-area text-3xl'></i>
                                <span className="text-[13px]">Area 145m²</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center h-[55px] w-full">
                        <div className="bg-gray-100 hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer h-full flex items-center justify-center w-[80%]">
                            <span>See Details</span>
                        </div>
                        <div className="group cursor-pointer flex items-center border-t border-gray-200 h-full justify-center w-[20%]">
                            <i class='group-hover:text-main bx bx-heart text-gray-600 text-lg' ></i>
                        </div>
                     </div>
                </div>
                <div className="flex flex-col border border-gray-200 w-[400px] relative">
                    <img src="./images/complex/1.jpg" className="object-cover h-[250px]" />
                    <span className="bg-red-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Close</span>
                    <img src="./images/complex/l-2.png" className='h-12 w-12 object-contain bg-black rounded-full border-2 border-white absolute top-[190px] left-4' />
                    <div className="flex flex-col p-5 font-poppins">
                        <h1 className="text-md font-bold text-Cblue">Kick Off - Field IA47</h1>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm py-1">
                            <i class='bx bxs-map'></i>
                            <span className="">Adress property here</span>
                            <span className="text-red-700">- Reserverd</span>
                        </div>
                        <span className="text-main text-lg py-3  font-black">100.00 MAD</span>
                        <div className="flex items-center space-x-10 ">
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-run text-3xl'></i>
                                <span className="text-[13px]">Player 10</span>
                            </div>
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-area text-3xl'></i>
                                <span className="text-[13px]">Area 145m²</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center h-[55px] w-full">
                        <div className="bg-gray-100 hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer h-full flex items-center justify-center w-[80%]">
                            <span>See Details</span>
                        </div>
                        <div className="group cursor-pointer flex items-center border-t border-gray-200 h-full justify-center w-[20%]">
                            <i class='group-hover:text-main bx bx-heart text-gray-600 text-lg' ></i>
                        </div>
                     </div>
                </div>
        </div>
    </div>
  )
}
