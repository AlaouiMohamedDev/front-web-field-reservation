import React from 'react'

export default function Pagination({currentPage,elementPerPage,totalElement,paginate}) {

    const pageNumbers = []

    

    for (let i=1;i<=Math.ceil(totalElement/elementPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <div className="justify-end flex items-center py-5 text-sm font-bold  space-x-3">
        {
            totalElement !=0
            &&
            <span>Pages</span>
        }
        
            {
                totalElement !=0
                &&
                pageNumbers.map(num=>{
                    return currentPage != num ? (
                        <span onClick={()=> paginate(num)} key={num} className="bg-white border text-gray-600 px-3 py-2 cursor-pointer">{num}</span>
                ):(
                        <span  key={num} className="bg-main/10 border border-main text-main px-3 py-2 ">{num}</span>

                )}
                )
            }

    </div>
  )
}
