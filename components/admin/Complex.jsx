import React from 'react'
import LatestTransation from './LatestTransaction2'

export default function Complex({complexs}) {
  return (

    <div className="flex flex-col w-full px-5 inside bg-gray-100">
        <div className="flex items-center justify-between py-5 ">
            <h1 className="font-bold custBlue text-lg">Complex</h1>
            <div className='flex items-center space-x-2 text-sm'>
                <span className='text-main'>Kritirank</span>
                <i className='bx bx-chevron-right text-lg'></i>
                <span className='text-gray-500'>Complex</span>
            </div>
        </div>


        <LatestTransation complexs={complexs}/>
    </div>

  )
}
