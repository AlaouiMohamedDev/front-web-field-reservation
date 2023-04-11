import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'

export default function UserInfo() {
  const [userName,setUserName] = useState(null)

    useEffect(()=>{
        if(getCookie('name') == null)
            setUserName(null)
        else
            setUserName(getCookie('name'))
    },[getCookie('name')])

  return (
    <div className='mt-10 userInfo'>
         <div className="p-7 flex flex-col  space-y-2">
            <h1 className="text-2xl text-Cblue font-bold">User <c className="text-main">Information</c></h1>
            <div className='flex items-center space-x-2 '>
              <span className='bg-main h-1 w-[200px] rounded'></span>
            </div>
          </div>

          <div className="bg-white m-7 grid grid-cols-1 md:grid-cols-2 py-5 px-5 gap-5 complex">
                  <h1 className="col-span-2 font-semibold text-gray-500 border-b-2 border-main w-max">{userName} Personal Informations</h1>
                  <input name="first_name" placeholder = "First Name" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="last_name" placeholder = "Last Name" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="adress" placeholder = "Adress" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="password" placeholder = "Password" type="password" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="confrim_password" placeholder = "Confirm Password" type="password" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <button  className="bg-main py-2 col-span-2 w-1/2  text-white text-xs rounded">Save</button>
              </div>
    </div>
  )
}
