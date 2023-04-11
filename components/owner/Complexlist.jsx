import React, { useState } from 'react'

export default function Complexlist() {
    const closeModal = () => {
        const modal = document.querySelector('.modal')
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }
    const openModal = () => {
        const modal = document.querySelector('.modal')
        modal.classList.remove('hidden')
        modal.classList.add('flex')
    }
    const [search,setSearch] = useState([])

    const handler =(e)=>{
        e.persist()
        setSearch(e.target.value)
    }
  return (
    <div className='complexlist hidden mt-10'>
         <div className="p-7 flex flex-col  space-y-2">
            <h1 className="text-2xl text-Cblue font-bold">Complex <c className="text-main">List</c></h1>
            <div className='flex items-center space-x-2 '>
              <span className='bg-main h-1 w-[140px] rounded'></span>
            </div>
          </div>

          <div className='bg-white p-4   m-7 space-y-5 rounded shadow flex flex-col'>
          <div className='flex items-center justify-between w-full'>
            <h1 className=" font-semibold text-gray-500 w-max">Complexe <c className="text-main">Informations</c></h1>
            <div className="relative ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <i className='w-5 y-5 bx bx-search'></i>
                    </div>
                    <input name="search" value={search} onChange={handler} type="text" id="table-search-users" className="block focus:border-main p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-gray-50 border  placeholder-gray-500 " placeholder="Search for complex" />
                </div>
          </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Complex name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fields
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                <img src='./images/complex/l-1.jpg' className="w-14 rounded-full h-14 object-cover"/>
                            </td>
                            <td className="px-6 py-4">
                                Marrakech
                            </td>
                            <td className="px-6 py-4">
                                <div onClick={openModal} className="cursor-pointer hover:bg-white hover:text-main shadow transition-all ease-in-out duration-150 flex items-center w-max py-1 px-2 rounded bg-Cblue space-x-1 text-white text-xs">
                                     <i className='bx bx-show'></i>
                                     <span>Show fields</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                <img src='./images/complex/l-1.jpg' className="w-14 rounded-full h-14 object-cover"/>
                            </td>
                            <td className="px-6 py-4">
                                Marrakech
                            </td>
                            <td className="px-6 py-4">
                                <div onClick={openModal} className="cursor-pointer hover:bg-white hover:text-main shadow transition-all ease-in-out duration-150 flex items-center w-max py-1 px-2 rounded bg-Cblue space-x-1 text-white text-xs">
                                     <i className='bx bx-show'></i>
                                     <span>Show fields</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                <img src='./images/complex/l-1.jpg' className="w-14 rounded-full h-14 object-cover"/>
                            </td>
                            <td className="px-6 py-4">
                                Marrakech
                            </td>
                            <td className="px-6 py-4">
                                <div onClick={openModal} className="cursor-pointer hover:bg-white hover:text-main shadow transition-all ease-in-out duration-150 flex items-center w-max py-1 px-2 rounded bg-Cblue space-x-1 text-white text-xs">
                                     <i className='bx bx-show'></i>
                                     <span>Show fields</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

          </div>
          <div  className="modal fixed z-100 w-full h-screen top-0 hidden items-center justify-center bg-gray-900/70 fade">
            <div className="relative w-full h-full md:w-[1050px] md:h-[510px] bg-white rounded-md  zoom-in">
                <div className = "absolute -right-2 p-4 -top-2" >
                      <i className = "bx bx-x cursor-pointer text-2xl font-semibold hover:text-main" onClick={closeModal}/>
                </div>
                <div className="flex px-7 py-5 flex-col space-y-5">
                <div className="flex items-center justify-between py-6">
                    <h1 className="text-2xl text-Cblue font-bold">Field List Of the Complex <c className="text-main">Urbain</c></h1>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <i className='w-5 y-5 bx bx-search'></i>
                        </div>
                        <input name="search" value={search} onChange={handler} type="text" id="table-search-users" className="block focus:border-main p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-gray-50 border  placeholder-gray-500 " placeholder="Search for field" />
                    </div>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Field Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    <img src='./images/complex/l-2.jpeg' className="w-20 rounded- h-14 object-cover"/>
                                </td>
                                <td className="px-6 py-4">
                                    Marrakech
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <i className='bx bxs-trash-alt py-1 px-2 hover:bg-white border cursor-pointer border-red-600 rounded text-sm bg-red-600 text-white hover:text-red-600 shadow transition-all ease-in-out duration-150 flex items-center' ></i>
                                        <i className='bx bxs-edit py-1 px-2 hover:bg-white border cursor-pointer border-blue-700 rounded text-sm bg-blue-700 hover:text-blue-700  text-white shadow transition-all ease-in-out duration-150 flex items-center'></i>
                                    </div>
                                </td>
                            </tr>
                        
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
