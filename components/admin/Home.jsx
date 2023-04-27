import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { setCookie,getCookie,deleteCookie } from 'cookies-next';



export default function Home() {

  return (
    <div className="fixed right-0 top-[80px] md:w-4/5 py-5 px-5 w-full text-gray-300 space-y-5 page">
        <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashGreen py-2 px-3">
            <h1 className="uppercase font-bold">Dashboard</h1>
            <div className="flex items-center space-x-1 text-xs">
                <span className="text-white">Dashboard</span>
                <i className='bx bx-chevron-right'></i>
                <span>Dashboard</span>
            </div>
        </div>
        <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between text-black">
            <div className="flex flex-col text-center lg:text-left">
                <h3 className="text-md">Bonne journée, admin</h3>
                <span className="text-gray-600 text-xs">Voici ce qui se passe avec votre application aujourd'hui.</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center space-x-3">
                <div className="flex  items-center text-xs bg-gray-100 rounded">
                    <span className='px-3'>2023-04-27</span>
                    <i className='bx bx-calendar text-[13px] text-white bg-main py-3 px-3'></i>
                </div>
                <div  className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                    <i className='bx bx-plus-circle'></i>
                    <span>Consulter Complex</span>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
            <div className="bg-dashGreen flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
                <div className="flex items-center justify-between w-full">
                    <span className="text-gray-400">Total vente</span>
                    <div className="flex items-center text-sm space-x-2 text-custGreen">
                        <i className='bx bx-up-arrow-alt rotate-45'></i>
                        <span>+16.24 %</span>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex flex-col space-y-6 w-full">
                        <span className="text-lg">2000 MAD</span>
                        <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                    </div>
                    <i className='flex items-center bx bx-dollar-circle text-3xl text-custGreen bg-custGreen/20 w-max h-max rounded py-2 px-3'></i>
                </div>
            </div>
            <div className="bg-dashGreen flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
                <div className="flex items-center justify-between w-full">
                    <span className="text-gray-400">Reservation</span>
                    <div className="flex items-center text-sm space-x-2 text-red-500">
                        <i className='bx bx-down-arrow-alt rotate-45'></i>
                        <span>-10.24 %</span>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex flex-col space-y-6 w-full">
                        <span className="text-lg">10 cmd</span>
                        <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                    </div>
                    <i className='flex items-center bx bx-shopping-bag text-3xl text-blue-500 bg-blue-500/20 w-max h-max rounded py-2 px-3'></i>
                </div>
            </div>
            <div className="bg-dashGreen flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
                <div className="flex items-center justify-between w-full">
                    <span className="text-gray-400">Clients</span>
                    <div className="flex items-center text-sm space-x-2 text-custGreen">
                        <i className='bx bx-up-arrow-alt rotate-45'></i>
                        <span>+22.24 %</span>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex flex-col space-y-6 w-full">
                        <span className="text-lg">30 client</span>
                        <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                    </div>
                    <i className='flex items-center bx bx-user text-3xl text-orange-500 bg-orange-500/20 w-max h-max rounded py-2 px-3'></i>
                </div>
            </div>
            <div className="bg-dashGreen flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
                <div className="flex items-center justify-between w-full">
                    <span className="text-gray-400">Complexe</span>
                    <div className="flex items-center text-sm space-x-2 text-custGreen">
                        <i className='bx bx-up-arrow-alt rotate-45'></i>
                        <span>+10.24 %</span>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex flex-col space-y-6 w-full">
                        <span className="text-lg">10 Comp</span>
                        <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                    </div>
                    <i className='flex items-center bx bxs-leaf text-3xl text-lime-500 bg-lime-500/20 w-max h-max rounded py-2 px-3'></i>
                </div>
            </div>
        </div>
        <div className="grid gri-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-dashGreen flex flex-col space-y-3 rounded-md overflow-x-auto relative w-full h-max">
                <div className="border-b border-gray-700 flex w-full">
                    <div className="py-4 px-3 flex items-center justify-between text-sm w-full">
                        <span>Terrain le plus reservais</span>
                        <span>Total : <span className="text-gray-500">5</span></span>
                    </div>
                </div>

                            <div  className="border-b border-gray-700 md:w-full w-max ">
                                <div className="pb-3 px-3 flex items-center justify-around space-x-2 text-xs">
                                    <img src='/images/complex/1.jpg' className="w-12 h-12 rounded" />
                                    <div className="flex flex-col space-y-2">
                                        <span>FA445</span>
                                        <span className="text-[10px] text-gray-500">prod.created</span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span>120 MAD</span>
                                        <span className="text-[10px] text-gray-500">Prix</span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span>20 cmds</span>
                                        <span className="text-[10px] text-gray-500">Commande</span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span>10</span>
                                        <span className="text-[10px] text-gray-500">Stock</span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span>200 MAD </span>
                                        <span className="text-[10px] text-gray-500">Total</span>
                                    </div>
                                </div>
                            </div>

                
            </div>
            <div className="bg-dashGreen flex flex-col space-y-3 rounded-md overflow-x-auto relative w-full h-max">
                <div className="border-b border-gray-700 ">
                    <div className="py-4 px-3 flex items-center justify-between text-sm">
                        <span>Meilleures Complexe</span>
                        <span>Total : <span className="text-gray-500">5</span></span>
                    </div>
                </div>

                                <div  className="border-b border-gray-700  md:w-full w-max">
                                    <div className="pb-3 px-3 flex items-center justify-around space-x-2 text-xs">
                                        <img src='/images/complex/download.png' className="w-12 h-12 rounded-full object-cover" />
                                        <div className="flex flex-col space-y-2">
                                            <span>KickOff</span>
                                            <span className="text-[10px] text-gray-500">200</span>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <span>485</span>
                                            <span className="text-[10px] text-gray-500">Produit</span>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <span>5</span>
                                            <span className="text-[10px] text-gray-500">Total produit</span>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex items-center">
                                                <span>20%</span>
                                                <i className='bx bx-bar-chart text-custGreen text-md '></i>
                                            </div>
                                            <span className="text-[10px] text-gray-500">vente</span>
                                        </div>
                                    </div>
                                </div>

            </div>
        </div>
    </div>
  )
}