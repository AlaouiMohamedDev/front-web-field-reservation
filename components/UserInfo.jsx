import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Router, useRouter } from 'next/router'
import BASE_URL from './global'

export default function UserInfo() {
  const [userName,setUserName] = useState(null)

    useEffect(()=>{
        if(getCookie('first_name') == null)
            setUserName(null)
        else
            setUserName(getCookie('first_name'))
    },[getCookie('first_name')])

    const [userInput,setUser] = useState({
      first_name:'',
      last_name:'',
      adresse:'',
      password:'',
      confirm:'',
      error_list:[],
  });

  const handleUserInput =(e) =>{
    e.persist();
    setUser({...userInput,[e.target.name]:e.target.value});
   
}

const router = useRouter();

  useEffect(()=>{
    setUser({...userInput,first_name:getCookie('first_name'),last_name:getCookie('last_name')});
  },[getCookie('first_name')])

  const updateUser = () =>{

    //|| userInput.adresse==''
    if (userInput.first_name== '' || userInput.last_name == ''  || userInput.password == '')
    {
      setUser({...userInput,error_list:{'messageErr':"Un champs est vide",'error':true}})
    }
    // else if(userInput.password != userInput.confirm)
    // {
    //   setUser({...userInput,error_list:{'messageErr':"Password must mach",'error':true}})
    // }
      else{

        setUser({...userInput,error_list:{'messageErr':"nothing",'error':false}})

        const data ={
          first_name:userInput.first_name,
          last_name:userInput.last_name,
          password:userInput.password,
          id:getCookie('id'),
          jwt:getCookie('jwt')
        }


        axios.put(`${BASE_URL}/api/user/${getCookie('id')}/`,data).then(res => {
                      
          if(res.data.status === 200){
            toast.success(res.data.message,{ position: "bottom-right" })
            setCookie('name',userInput.first_name)
            router.push('')
          }
          else
          {
              toast.error(res.data.message,{ position: "bottom-left" })
          }
          })
      }

    
  }

  return (
    <div className='mt-10 userInfo'>
         <div className="p-7 flex flex-col  space-y-2">
            <h1 className="text-2xl text-Cblue font-bold">User <c className="text-main">Information</c></h1>
            <div className='flex items-center space-x-2 '>
              <span className='bg-main h-1 w-[200px] rounded'></span>
            </div>
          </div>

          <div className="bg-white m-7 grid grid-cols-1 md:grid-cols-2 py-5 px-5 gap-5 complex relative">
                  <h1 className="col-span-2 font-semibold text-gray-500 border-b-2 border-main w-max">{userName} Personal Informations</h1>
                  <input name="first_name" value={userInput.first_name} onChange={handleUserInput} placeholder = "First Name" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="last_name" value={userInput.last_name} onChange={handleUserInput} placeholder = "Last Name" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  {/* <input name="adresse" value={userInput.adresse} onChange={handleUserInput} placeholder = "Adress" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" /> */}
                  <input name="password" value={userInput.password} onChange={handleUserInput} placeholder = "Password" type="password" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  {/* <input name="confirm" value={userInput.confirm} onChange={handleUserInput} placeholder = "Confirm Password" type="password" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" /> */}
                  <button onClick={updateUser} className="bg-main py-2 col-span-2 w-1/2  text-white text-xs rounded">Save</button>
                  {
                              (userInput.error_list.error)
                              &&
                              <div className="flex items-center space-x-1 text-[10px] md:text-xs text-red-500 absolute  bottom-7 md:bottom-auto md:top-5 right-5">
                                <i className='bx bx-x-circle text-md' ></i>
                                <span>
                                    {
                                          userInput.error_list.messageErr
                                    }
                                </span>
                                 
                              </div>
                  }
              </div>
    </div>
  )
}
