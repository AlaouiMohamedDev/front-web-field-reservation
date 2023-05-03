import React, { useEffect, useState } from 'react';

import Chart from './Chart';

import RadicalChart from './RadicalChart';
import DChart from './DChart';
import AChart from './AChart';
import LatestTransation from './LatestTransaction';



export default function Home() {


  return (
    <div className="flex flex-col w-full px-5 inside bg-gray-100">
      <div className="flex items-center justify-between py-5 ">
        <h1 className="font-bold custBlue text-lg">Dashboard</h1>
        <div className='flex items-center space-x-2 text-sm'>
            <span className='text-main'>Kritirank</span>
            <i className='bx bx-chevron-right text-lg'></i>
            <span className='text-gray-500'>Dashboard</span>
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 grid1'>
        <div className='rounded-lg bg-white shadow flex items-center space-x-3 py-7 px-5'>
          <Chart color="#03C988" val={72} className=""/>
          <div className='flex flex-col justify-between space-y-1'>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-400'>Reservations</span>
              <p className='font-semibold'>2.2K</p>
            </div>
            <div className='flex items-center space-x-2'>
              <span className="text-main">0.02%</span>
              <i className='bx bx-up-arrow-alt text-main -rotate-45' ></i>
              <span className='text-gray-400 font-thin text-sm'>From previous</span>
            </div>

          </div>
        </div>

        <div className='rounded-lg bg-white shadow flex items-center space-x-3 py-7 px-5'>
        <DChart />
          <div className='flex flex-col justify-between space-y-1'>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-400'>Citys</span>
              <p className='font-semibold'>100</p>
            </div>
            <div className='flex items-center space-x-2'>
              <span className="text-main">0.02%</span>
              <i className='bx bx-up-arrow-alt text-main' ></i>
              <span className='text-gray-400 font-thin text-sm'>From previous</span>
            </div>

          </div>
        </div>

        <div className='rounded-lg bg-white shadow flex items-center space-x-3 py-7 px-5'>
          <Chart color="#E3242B" val={15} className=""/>
          <div className='flex flex-col justify-between space-y-1'>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-400'>Complexs</span>
              <p className='font-semibold'>1.2K</p>
            </div>
            <div className='flex items-center space-x-2'>
              <span className="text-red-500">-0.05%</span>
              <i className='bx bx-down-arrow-alt text-red-500 origin-center -rotate-45' ></i>
              <span className='text-gray-400 font-thin text-sm'>From previous</span>
            </div>

          </div>
        </div>

        <div className='rounded-lg bg-white shadow flex items-center space-x-3 py-7 px-5'>
          <div className='bg-gray-50 rounded-full w-[70px] h-[70px] flex items-center justify-center'>
            <img src="rating.png" className='w-[50px]'/>
          </div>
          <div className='flex flex-col justify-between space-y-1'>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-400'>New Visitor</span>
              <p className='font-semibold'>5 P</p>
            </div>
            <div className='flex items-center space-x-2'>
              <span className="text-main">1.00%</span>
              <i className='bx bx-up-arrow-alt text-main -rotate-45' ></i>
              <span className='text-gray-400 font-thin text-sm'>From previous</span>
            </div>

          </div>
        </div>
       
      </div>

     <div className='grid lg:grid-cols-3 py-4 gap-5 grid2'>
        <div className='lg:col-span-2 bg-white rounded-lg shadow flex flex-col items-center justify-between  '>
          <div className='flex items-center justify-between w-full pt-7 px-5'>
              <span className=' text-lg text-gray-500'>OverView</span>
              <span className='text-xs text-gray-500 border rounded py-1 px-2'>Change</span>
          </div>
            <AChart />
        <div className="flex items-center justify-center w-full   border-t py-5">
            <div className=' flex items-center justify-evenly w-full'>
                  <div className='flex flex-col space-y-2 items-center'>
                    <div className='flex items-center space-x-1 text-sm'>
                        <span className='w-2 h-2 rounded-full bg-blue-600'></span>
                        <span className='text-gray-400'>Expenses</span>
                    </div>
                    <div  className='flex items-center space-x-2 text-sm'>
                        <span className="text-custBlue font-semibold">MAD 8,524</span>
                        <i class='bx bxs-up-arrow text-main text-[11px]'></i>
                        <span className="text-[13px] text-main">1.2%</span>

                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 items-center'>
                    <div className='flex items-center space-x-1 text-sm'>
                        <span className='w-2 h-2 rounded-full bg-indigo-500'></span>
                        <span className='text-gray-400'>Maintenance</span>
                    </div>
                    <div  className='flex items-center space-x-2 text-sm'>
                        <span className="text-custBlue font-semibold">MAD 8,524</span>
                        <i class='bx bxs-up-arrow text-main text-[11px]'></i>
                        <span className="text-[13px] text-main">2.0%</span>

                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 items-center'>
                    <div className='flex items-center space-x-1 text-sm'>
                        <span className='w-2 h-2 rounded-full bg-pink-600'></span>
                        <span className='text-gray-400'>Profit</span>
                    </div>
                    <div  className='flex items-center space-x-2 text-sm'>
                        <span className="text-custBlue font-semibold">MAD 8,524</span>
                        <i class='bx bxs-up-arrow text-main text-[11px]'></i>
                        <span className="text-[13px] text-main">0.4%</span>

                    </div>
                  </div>
              </div>
        </div>
        </div>

        <div className="bg-white rounded-lg shadow flex flex-col space-y-2 items-center py-7 px-5 w-full grid22">
            <div className='flex items-center justify-between w-full'>
                <span className=' text-lg text-gray-500'>Social Source</span>
                <span className='text-xs text-gray-500 border rounded py-1 px-2'>Change</span>
            </div>
            <RadicalChart />
            <div className='flex items-center justify-evenly w-full'>
                <div className='flex flex-col items-center space-y-2 text-custBlue'>
                  <div className='flex items-center justify-center text-white rounded-full bg-[#099680] w-8 h-8'>
                    <i className='bx bxl-facebook text-lg' ></i>
                  </div>
                  <span>Facebook</span>
                  <span className='text-sm text-gray-400'>125 user</span>
                </div>

                <div className='flex flex-col items-center space-y-2 text-custBlue'>
                  <div className='flex items-center justify-center text-white rounded-full bg-[#4aa3ff] w-8 h-8'>
                    <i className='bx bxl-twitter text-lg' ></i>
                  </div>
                  <span>Twitter</span>
                  <span className='text-sm text-gray-400'>3 user</span>
                </div>

                
                <div className='flex flex-col items-center space-y-2'>
                  <div className='flex items-center justify-center text-white rounded-full bg-[#FF3D60] w-8 h-8'>
                  <i className='bx bxl-instagram text-lg' ></i>
                  </div>
                  <span>Instagram</span>
                  <span className='text-sm text-gray-400'>10 user</span>
                </div>


            </div>
        </div>

     </div>
     
    <LatestTransation />
    </div>
  );
}


