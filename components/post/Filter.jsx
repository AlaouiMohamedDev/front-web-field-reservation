import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function Filter() {
  const cities = [
    { value: 1, label: "Marrakech" },
    { value: 2, label: "Casablanca" },
    { value: 3, label: "Rabat" },
  ];
  const needs = () => {
    const needs = document.querySelector(".needs");
    needs.classList.toggle("grid");
    needs.classList.toggle("hidden");
    document.querySelector(".updownNeeds").classList.toggle("bx-chevron-up");
    document.querySelector(".updownNeeds").classList.toggle("bx-chevron-down");
  };

  const times = () => {
    const time = document.querySelector(".time");
    time.classList.toggle("flex");
    time.classList.toggle("hidden");
    document.querySelector(".updownTimes").classList.toggle("bx-chevron-up");
    document.querySelector(".updownTimes").classList.toggle("bx-chevron-down");
  };

  const customStyles = {
    control: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      display: "flex",
      outline: "none",
      border: "solid 1px #E5E7EB",
      borderRadius: "4px",
      backgroundColor: "#ffffff",
      color: "#ffffff",
      fontSize: "12px",
      padding: "0px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#03C988", // replace with your desired color
    }),
    container: (provided) => ({
      ...provided,
      width: "100%", // replace with your desired width
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "12px", // replace with your desired font size
      backgroundColor: state.isSelected ? "#03C988" : "white", // replace with your desired color
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return {
        ...provided,
        opacity,
        transition,
        color: "black",
        fontSize: "12px",
      };
      
    },
  };



  const[datepicker,setDatePicker] =useState('')

  const handlerdate = (e) => {
    
    console.log("🚀 ~ file: Filter.jsx:66 ~ Filter ~ datepicker:", )
    e.persist();
    setDatePicker(e.target.value)
    console.log("🚀 ~ file: Filter.jsx:66 ~ Filter ~ datepicker:", datepicker)

  }
  return (
    <div className="m-5 w-1/3 font-poppins text-sm">
      <div className="bg-white shadow flex py-3 space-y-3 flex-col  px-3 rounded-tr-xl">
        <h3 className="">Filter</h3>
        <input
          type="text"
          className="outline-none border py-2 text-xs rounded px-3 placeholder:text-gray-400"
          placeholder="Search for fields"
        />
        <h3 className="text-xs">Category</h3>
        <div className="grid grid-cols-3 w-full gap-x-5">
          <span className="text-xs flex py-1 items-center justify-center border rounded">
            5 vs 5
          </span>
          <span className="text-xs flex py-1 items-center justify-center border rounded">
            7 vs 7
          </span>
          <span className="text-xs flex py-1 items-center justify-center border rounded">
            6 vs 6
          </span>
        </div>
        <h3 className="text-xs">Ville</h3>
        <Select
          options={cities}
          styles={customStyles}
          placeholder="Choose a city"
        />
        <h3 className="text-xs">Zone</h3>
        <Select
          options={cities}
          styles={customStyles}
          placeholder="Choose a zone"
        />
        <h3 className="text-xs">Date</h3>
        <div class="relative mb-3" data-te-datepicker-init
  >
          <input
          name='datepicker'
          value={datepicker}
          onChange={handlerdate}
            type="text"
            className="w-full border py-2 px-3 rounded outline-none"
            placeholder="Select a date"
          />
          
        
         <i className="bx bx-calendar text-lg text-main absolute right-2 top-1" data-te-datepicker-toggle-ref
    data-te-datepicker-toggle-button-ref></i>
        </div>

        

          {/* <button onClick={()=>{console.log(document.querySelector('.datepi').value)}}>sUbmit</button> */}
        
      </div>
    </div>
    // <div className="m-5 w-1/4 ">
    //   <div className="rounded bg-white flex flex-col">
    //     <div className="flex items-center justify-between border-b py-5 px-3">
    //       <span className='text-md font-semibold'>Filters</span>
    //       <img src="filter.png"  className="w-[18px]"/>
    //     </div>
    //     <div className="flex flex-col space-y-3 border-b py-5 px-3">
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center space-x-1">
    //           <i className='bx bx-run text-lg'></i>
    //           <span className='text-md '>Needs</span>
    //         </div>
    //         <i onClick={needs} className='cursor-pointer bx bx-chevron-up text-lg updownNeeds' ></i>
    //       </div>
    //       <div className='needs grid grid-cols-3 gap-3'>
    //           <span className='hover:bg-main hover:text-white duration-100 cursor-pointer text-sm flex items-center justify-center text-gray-600 py-1 px-1 border rounded'>More</span>
    //           <span className='hover:bg-main hover:text-white duration-100 cursor-pointer text-sm flex items-center justify-center text-gray-600 py-1 px-1 border rounded'>5 players</span>
    //           <span className='hover:bg-main hover:text-white duration-100 cursor-pointer text-sm flex items-center justify-center text-gray-600 py-1 px-1 border rounded'>4 players</span>
    //           <span className='hover:bg-main hover:text-white duration-100 cursor-pointer text-sm flex items-center justify-center text-gray-600 py-1 px-1 border rounded'>3 players</span>
    //           <span className='hover:bg-main hover:text-white duration-100 cursor-pointer text-sm flex items-center justify-center text-gray-600 py-1 px-1 border rounded'>2 players</span>
    //           <span className='hover:bg-main hover:text-white duration-100 cursor-pointer text-sm flex items-center justify-center text-gray-600 py-1 px-1 border rounded'>1 players</span>
    //       </div>
    //     </div>
    //     <div className="flex flex-col space-y-3 border-b py-5 px-3">
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center space-x-1">
    //           <i className='bx bx-time-five text-md' ></i>
    //           <span className='text-md '>Time</span>
    //         </div>
    //         <i onClick={times} className='cursor-pointer bx bx-chevron-up text-lg updownTimes' ></i>
    //       </div>
    //       <div className='time flex items-center space-x-5 w-full'>
    //         <input max='20' min='1' type='number' className='outline-none border rounded placeholder:text-gray-500 text-sm py-2 px-3 w-full' placeholder='from Hour' />
    //         <i className='bx bx-football text-md text-white bg-main rounded p-3' ></i>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
