import { getCookie } from 'cookies-next';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

export default function HeaderDash() {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const [userName,setUserName] = useState(false);
  useEffect(() => {
    if (getCookie('first_name') == null)
        setUserName(null)
    else
        setUserName(getCookie('first_name'))
}, [getCookie('first_name')])

  

  


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
    <div className='fixed right-0 top-0 md:w-4/5 py-4 px-5  page bg-dashGreen flex items-center justify-between'>
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

      <div className='flex space-x-2 items-center  text-white'>
        {
          getCookie('image') != null
          ?
          <img src={getCookie('image')} className="w-9 h-9 object-cover rounded-full img-user" />
          :
          <img src='/default.jpg' className="w-9 h-9 object-cover rounded-full img-user" />

        }

          <span className='text-[13px] font-bold'>{userName}</span>

      </div>
      </div>
    </div>
  )
}
