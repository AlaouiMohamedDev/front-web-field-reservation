import React from 'react'

export default function Footer() {
  const goToTop =() =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="flex flex-col w-full font-roboto ">
      <div className="py-[50px]  bg-main px-[80px] md:px-[150px] lg:px-[200px] 2xl:px-[400px] ">
        <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:justify-between">
          <h1 className="text-xl md:text-3xl font-semibold text-white">Looking To Book or Consult a Field ?</h1>
          <button className="bg-white rounded py-3 px-5 font-bold  flex items-center space-x-2 text-gray-800">
            <span className='text-sm'>Explore our Offers</span>
            <i className='bx bx-football text-lg'></i>
          </button>
        </div>
      </div>
      <div className='bg-Cblue text-white py-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-[80px] md:px-[150px] lg:px-[200px] 2xl:px-[400px] '>
        <div className='flex flex-col w-full space-y-5'>
          <h3 className='text-main font-semibold text-md font-poppins'>About KRI TIRANK</h3>
          <p className='text-sm text-justify'><c className='text-main'>KRI TIRANK</c> helped thousands of clients to find the right property for their needs.</p>
          <div className='flex flex-col space-y-2 text-sm'>
            <div className='flex items-center space-x-2'>
              <i className='bx bxs-map-pin text-main text-lg'></i>
              <span>214 El DADA No. Marrakech, MA 10002</span>
            </div>
            <div className='flex items-center space-x-2'>
              <i className='bx bxs-phone text-main text-lg' ></i>
              <span>+212 701344384</span>
            </div>
            <div className='flex items-center space-x-2'>
              <i className='bx bx-support text-main text-lg' ></i>
              <span>kritirank@support.com</span>
            </div>
          </div>       
        </div>
        <div className='flex flex-col w-full space-y-5'>
          <h3 className='text-main font-semibold text-md font-poppins'>Usefull Links</h3>
          <div className='grid grid-cols-2 gap-2'>
          <span className='hover:text-main duration-100 ease-in cursor-pointer'>Welcome</span>
          <span className='hover:text-main duration-100 ease-in cursor-pointer'>Contact Us</span>
          <span className='hover:text-main duration-100 ease-in cursor-pointer'>About Us</span>
          <span className='hover:text-main duration-100 ease-in cursor-pointer'>New Offers</span>
          <span className='hover:text-main duration-100 ease-in cursor-pointer'>Latest Complexe</span>
          <span className='hover:text-main duration-100 ease-in cursor-pointer'>List Complexe</span>
          <span className='hover:text-main duration-100 ease-in cursor-pointer'>Marrekch</span>
          <span className='hover:text-main duration-100 ease-in cursor-pointer'>Casablanca</span>
          <span className='hover:text-main duration-100 ease-in cursor-pointer'>Newport</span>
          </div>
        </div>
        <div className='flex flex-col w-full space-y-5'>
          <h3 className='text-main font-semibold text-md font-poppins'>Recently Listed Fields</h3>
          <div className="flex space-x-4 w-max">
            <div className='w-[80px] h-[90px]'>
              <img src="./images/footer-1.jpg" className="brightness-50 object-cover w-full h-full blur-[0.6px]"/>
            </div>
            <div className="flex flex-col text-sm space-y-2">
              <span className="font-semibold">Urabin Five - Field A1</span>
              <span className='text-xs'>Marrkech - hay salam</span>
              <span className='text-[11px]'>300 MAD/Hour</span>
            </div>
          </div>
          <div className="flex space-x-4 w-max">
            <div className='w-[80px] h-[90px]'>
              <img src="./images/footer-2.jpg" className="brightness-50 object-cover w-full h-full blur-[0.6px]"/>
            </div>
            <div className="flex flex-col text-sm space-y-2">
              <span className="font-semibold">Urabin Five - Field A1</span>
              <span className='text-xs'>Marrkech - hay salam</span>
              <span className='text-[11px]'>300 MAD/Hour</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full space-y-5'>
          <h3 className='text-main font-semibold text-md font-poppins'>Subscribe Us</h3>
          <p className='text-sm'>Sign up to our newsletter to get the latest news and offers.</p>
          <input type="email" placeholder="Enter Email" className="text-sm font-semibold text-Cblue py-3 px-3 border focus:border-main bg-white rounded outline-none placeholder:text-gray-500" />
          <button className="bg-main py-3  text-xs font-semibold rounded w-2/4">Get Notified</button>
        </div>
      </div>
      <div className="px-[80px] md:px-[150px] lg:px-[200px] 2xl:px-[400px] py-10 bg-[#00152c] grid grid-cols-2 md:grid-cols-3 ">
        <div className='flex items-center'>
           <img src="./images/logo-white.png" className="w-[200px]" />
        </div>
        <div className="w-full items-center flex justify-center">
          <div onClick={goToTop} className="cursor-pointer rounded-full w-12 h-12 bg-main flex items-center justify-center text-white">
            <i className='bx bx-chevrons-up text-2xl'></i>
          </div>
        </div>
        <div className="md:items-center md:flex justify-end col-span-2 md:col-span-1 pt-5 md:pt-0">
           <span className="text-white text-sm">©Copyright 2023 <c className='text-main'>KRI TIRANK</c> All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}
