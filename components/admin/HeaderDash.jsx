import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

export default function HeaderDash() {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
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





  return (
    <div className=' fixed right-0 top-0 md:w-4/5 py-4 px-5  page bg-main flex items-center justify-between'>
      <div className='flex items-center relative justify-center bg-white rounded'>
         <i className='bx bx-search right-0 absolute bg-white dark:bg-auto px-2 text-gray-400 text-xs'></i>
         <input type="text" className="outline-none bg-white rounded text-xs  py-2 px-4" placeholder="search"/>
      </div>
      <div className='flex items-center space-x-5  text-lg  text-white '>

      {isFullscreen ? <i onClick={handleButtonClick} className='bx bx-exit-fullscreen cursor-pointer' ></i> : <i onClick={handleButtonClick} className='bx bx-fullscreen cursor-pointer'></i>}
      
      <i className='bx bxs-bell'></i>
        {
          currentTheme === 'dark' ? (
          
            <i onClick={() => setTheme('light')}  className='transition ease-in delay-75 bx bxs-sun cursor-pointer justify-center flex items-center  rounded-full'></i>
          )
          :
          (
            <i onClick={() => setTheme('dark')}  className='transition ease-in delay-75 bx bxs-moon cursor-pointer rounded-full '></i>
          )
        }

      <div className='flex space-x-1 items-center justify-center text-black'>
        <img src="user-2.jpg" className="w-9 h-9 object-cover rounded-full img-user" />
        <div className='flex flex-col justify-between'>
          <span className='text-[10px] font-bold'>Alaoui Mohamed</span>
          <span className='text-[10px] text-gray-300'>Founder</span>
        </div>
      </div>
      </div>
    </div>
  )
}
