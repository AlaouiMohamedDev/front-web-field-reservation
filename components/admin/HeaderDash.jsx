import { getCookie } from 'cookies-next';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

export default function HeaderDash() {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  

  
  const [userName,setUserName] = useState(false);
  useEffect(() => {
    if (getCookie('first_name') == null)
        setUserName(null)
    else
        setUserName(getCookie('first_name'))
}, [getCookie('first_name')])

useEffect(() => {
    
  setMounted(true);
}, []);


  

  


  const handleButtonClick = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  if (!mounted) 
  {
    return null;
  }
  const currentTheme = theme === 'system' ? systemTheme : theme;


  const toggleSide = () =>{
    const side = document.querySelector('.side')
    const itemPs = document.querySelectorAll('.itemP')
    
    const elements = document.querySelectorAll('.span');

    

    itemPs.forEach(itemP => {
      itemP.classList.toggle('pl-3')
    });
    side.classList.toggle('w-[250px]')
    // Loop through each element and add the "hidden" class
    elements.forEach(element => {
      element.classList.toggle('hidden');
    });
  }
  const toggleSideSmall = () => {
    const side = document.querySelector('.side')
    side.classList.toggle('hidden');
  }

 

  return (
    <div className='headerdash py-4 px-5 top-0  bg-white shadow text-custBlue flex items-center  md:justify-between h-max w-full'>

      <div className='hidden md:flex items-center  space-x-2 justify-center hi '>
          <i onClick={toggleSide} className='bx bx-menu-alt-left text-2xl md:text-4xl text-custBlue cursor-pointer flex' ></i>
          <div className="bg-[#F1F5F7] rounded px-2 lg:flex items-center hidden">
              <i className='bx bx-search  text-lg text-gray-500'></i>
              <input type="text" className="outline-none bg-[#F1F5F7] text-gray-800 placeholder:text-gray-800 rounded text-sm py-2 px-2" placeholder="Search..."/>
          </div>
      </div>
      <div className='flex items-center space-x-5 justify-between w-full md:w-max  text-xl text-gray-500 '>
      <i onClick={toggleSideSmall} className='bx bx-menu-alt-left text-2xl md:text-4xl text-custBlue cursor-pointer md:hidden flex' ></i>

      {isFullscreen ? <i onClick={handleButtonClick} className='bx bx-exit-fullscreen cursor-pointer' ></i> : <i onClick={handleButtonClick} className='bx bx-fullscreen cursor-pointer'></i>}
      
      <i className='bx bx-bell'></i>
        {
          currentTheme === 'dark' ? (
          
            <i onClick={() => setTheme('light')}  className='transition ease-in delay-75 bx bxs-sun cursor-pointer justify-center flex items-center  rounded-full'></i>
          )
          :
          (
            <i onClick={() => setTheme('dark')}  className='transition ease-in delay-75 bx bxs-moon cursor-pointer rounded-full '></i>
          )
        }

      <div className='flex space-x-3 items-center justify-center  text-'>
        {
          getCookie('image') != null
          ?
          <img src={getCookie('image')} className="w-9 h-9 object-cover rounded-full img-user" />
          :
          <img src='/default.jpg' className="w-9 h-9 object-cover rounded-full img-user" />

        }

          <span className='text-[13px]  hidden md:flex'>admin</span>
          <i className='bx bx-chevron-down hidden md:flex' ></i>
      </div>
      <i className='bx bxs-cog' ></i>
      </div>
    </div>
  )
}
