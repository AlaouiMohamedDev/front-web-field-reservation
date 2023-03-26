import React from 'react'

export default function PopularFields() {
  return (
    <div className="font-roboto py-[150px]">
        <div className="flex flex-col space-y-3 items-center justify-center">
            <h1 className='text-3xl text-dashBlack font-black'>Popular Sport Complexs</h1>
            <span className="text-sm text-gray-400">Find your fit field from our popular sport complexs</span>
        </div>
        <div className="flex items-center justify-center py-10">
            <div className="grid  grid-cols-3 gap-10 justify-items-center ">
                <div className="flex flex-col border border-gray-200 w-[400px] relative">
                    <img src="./images/complex/l-2.jpeg" className="object-cover h-[250px]" />
                    <span className="bg-yellow-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Open</span>
                    <img src="./images/complex/l-1.jpg" className='h-12 w-12 rounded-full border-2 border-white absolute top-[190px] left-4' />
                    <div className="flex flex-col p-5 font-poppins">
                        <h1 className="text-md font-bold text-Cblue">Urabin Five - Field A1</h1>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm py-1">
                            <i class='bx bxs-map'></i>
                            <span className="">Adress property here</span>
                            <span className="text-green-500">- Open to book</span>
                        </div>
                        <span className="text-main text-lg py-3  font-black">150.00 MAD</span>
                        <div className="flex items-center space-x-10 ">
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-run text-3xl'></i>
                                <span className="text-[13px]">Player 10</span>
                            </div>
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-area text-3xl'></i>
                                <span className="text-[13px]">Area 145m²</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center h-[55px] w-full">
                        <div className="bg-gray-100 hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer h-full flex items-center justify-center w-[80%]">
                            <span>See Details</span>
                        </div>
                        <div className="group cursor-pointer flex items-center border-t border-gray-200 h-full justify-center w-[20%]">
                            <i class='group-hover:text-main bx bx-heart text-gray-600 text-lg' ></i>
                        </div>
                     </div>
                </div>
                <div className="flex flex-col border border-gray-200 w-[400px] relative">
                    <img src="./images/complex/1.jpg" className="object-cover h-[250px]" />
                    <span className="bg-red-400 text-white text-[10px] rounded px-3 py-2 font-semibold absolute top-2 right-2">Close</span>
                    <img src="./images/complex/l-2.png" className='h-12 w-12 object-contain bg-black rounded-full border-2 border-white absolute top-[190px] left-4' />
                    <div className="flex flex-col p-5 font-poppins">
                        <h1 className="text-md font-bold text-Cblue">Kick Off - Field IA47</h1>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm py-1">
                            <i class='bx bxs-map'></i>
                            <span className="">Adress property here</span>
                            <span className="text-red-700">- Reserverd</span>
                        </div>
                        <span className="text-main text-lg py-3  font-black">100.00 MAD</span>
                        <div className="flex items-center space-x-10 ">
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-run text-3xl'></i>
                                <span className="text-[13px]">Player 10</span>
                            </div>
                            <div className="flex flex-col text-gray-600 items-center">
                                <i class='bx bx-area text-3xl'></i>
                                <span className="text-[13px]">Area 145m²</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center h-[55px] w-full">
                        <div className="bg-gray-100 hover:bg-main hover:text-white duration-100 ease-in-out cursor-pointer h-full flex items-center justify-center w-[80%]">
                            <span>See Details</span>
                        </div>
                        <div className="group cursor-pointer flex items-center border-t border-gray-200 h-full justify-center w-[20%]">
                            <i class='group-hover:text-main bx bx-heart text-gray-600 text-lg' ></i>
                        </div>
                     </div>
                </div>
            </div>

        </div>
    </div>
  )
}
