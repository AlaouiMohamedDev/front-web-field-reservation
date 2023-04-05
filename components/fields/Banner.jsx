import React from 'react'
import { useRouter } from 'next/router'


export default function Banner() {
  const router = useRouter();
  return (
    <div className='flex flex-col space-y-3 items-center justify-center font-poppins h-[300px] bg-field1 bg-cover bg-bottom text-white'>
        <h3 className='text-4xl '>Field List</h3>
        <div className='flex items-center space-x-2 text-sm'>
            <span onClick = {() => router.push("/")}  className='cursor-pointer hover:text-main'>Home</span>
            <i className='bx bx-chevron-right text-lg text-gray-400'></i>
            <span className=' text-gray-400'>Field List</span>
        </div>
    </div>
  )
}
