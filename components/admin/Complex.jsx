import React from 'react'
import Complexes from './Complexes'

import ApprovedComplexes from './ApprovedComplexes'

export default function Complex({complexs}) {
  return (

    <div className="flex flex-col w-full px-5 inside bg-gray-100 relative">
        <div className="flex items-center justify-between py-5 ">
            <h1 className="font-bold custBlue text-lg">Onhold complexs</h1>
            <div className='flex items-center space-x-2 text-sm'>
                <span className='text-main'>Kritirank</span>
                <i className='bx bx-chevron-right text-lg'></i>
                <span className='text-gray-500'>Complex</span>
            </div>
        </div>


        <Complexes complexs={complexs}/>
        <div className="flex items-center justify-between py-5 ">
            <h1 className="font-bold custBlue text-lg">Approved complexs</h1>
            <div className='flex items-center space-x-2 text-sm'>
                <span className='text-main'>Kritirank</span>
                <i className='bx bx-chevron-right text-lg'></i>
                <span className='text-gray-500'>Complex</span>
            </div>
        </div>
        <ApprovedComplexes complexs={complexs}/>
    </div>

  )
}
