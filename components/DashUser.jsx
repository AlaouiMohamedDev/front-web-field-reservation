import React from 'react'

export default function DashUser() {
  return (
    <div className='col-span-2 xl:col-span-1 flex flex-col space-y-10 mx-5 2xl:mx-10  '>
        <div className='flex drop-shadow-md flex-col items-center space-y-3 bg-dashUser bg-cover justify-center rounded-lg bg-main py-10'>
            <img src='./images/complex/l-1.jpg' className='h-[150px] w-[150px] rounded-full border-2 border-white  object-cover'/>
            <span className=' rounded-full font-black font-poppins text-CBlue text-md'>URBAIN 5</span>
        </div>
        <div className=' flex flex-col space-y-3 items-center text-sm'>
            <div className='hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer py-5 w-full justify-center flex drop-shadow-md bg-white rounded-lg'>
                Complexes List
            </div>
            <div className='hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer py-5 w-full justify-center flex drop-shadow-md bg-white rounded-lg'>
                Fields List
            </div>
            <div className='hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer py-5 w-full justify-center flex drop-shadow-md bg-white rounded-lg'>
                Planning
            </div>
            <div className='hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer py-5 w-full justify-center flex drop-shadow-md bg-main text-white rounded-lg'>
                Configurations
            </div>
        </div>
    </div>
  )
}
