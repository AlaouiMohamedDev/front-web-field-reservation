import React, { useEffect, useState } from 'react'
import Select from 'react-select'

export default function Banner() {
    const options = [
        { value: 1, label: 'Sidi Youssef' },
        { value: 2, label: 'Lmhamid' },
        { value: 3, label: 'Massira' }
    ]

    const [width, setWidth] = useState('200px');
    useEffect(() => {
      function handleResize() {
        if (window.innerWidth > 768) {
          setWidth('200px');
        } else {
          setWidth('300px');
        }
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const customStyles = {
        control: (provided, state) => ({
            // none of react-select's styles are passed to <Control />
            display: 'flex',
            outline:'none',
            border:'none',
            borderRadius:'4px',
            backgroundColor:'#ffffff',
            color:'#ffffff',
            fontSize: '14px',
            padding: '0px',
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            color: '#03C988', // replace with your desired color
          }),
        container: (provided) => ({
            ...provided,
            width: width, // replace with your desired width
          }),
          option: (provided,state) => ({
            ...provided,
            fontSize: '14px', // replace with your desired font size
            backgroundColor: state.isSelected ? '#03C988' : 'white', // replace with your desired color

          }),
          singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
              
            return { ...provided, opacity, transition,color:"black",fontSize: '14px' };
          }
      };
  return (
    <div className="bg-home flex flex-col items-center justify-center font-poppins h-screen 3xl:h-[700px] bg-center space-y-4">
        <div className="flex flex-col items-center text-white space-y-4">
            <h1 className='text-2xl md:text-4xl'>Discover A Place You’ll Love To Play In</h1>
            <h3 className='text-lg md:text-xl'>Take a step to become a real striker. #TimeToMove</h3>
        </div>
        <div className='bg-white w-[80%] md:w-auto py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='text-gray-600 flex flex-col space-y-2 px-5 py-3'>
                <span className='text-sm text-gray-500'>Field Type</span>
                <Select options={options}
                        styles={customStyles}
                        placeholder="Choose a type"
                />
            </div>
            <div className='text-gray-600 border-x border-gray-150 flex flex-col space-y-2 px-5 py-3'>
                <span className='text-sm text-gray-500'>Starting Time</span>
                <input name="time" placeholder = "the Hour to start : 8-9..." type="text" className = "focus:border-main w-[300px] md:w-[200px] placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            </div>
            <div className='text-gray-600 border-r border-gray-150 flex flex-col space-y-2 px-5 py-3'>
                <span className='text-sm text-gray-500'>Loaaction</span>
                <Select options={options}
                        styles={customStyles}
                        placeholder="Choose a city"
                />
            </div>
            <div className='text-gray-600 flex items-center justify-center'>
                
                <a className='bg-main flex items-center space-x-2 text-sm px-10 md:px-5 py-3 text-white rounded cursor-pointer'>
                    <i class='bx bx-search text-md' ></i>
                    <span>Search</span>
                </a>
            </div>
        </div>
    </div>
  )
}
