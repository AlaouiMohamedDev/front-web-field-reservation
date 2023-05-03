import React from 'react';

import { Row, Col } from 'reactstrap';




const LatestTransation = () => {

    const LatestTransationData = [
        {
            id: "customCheck1",
            clientId: "#AP1234",
            clientName: "David Wiley",
            src:"user-1.jpg",
            date: "02 Nov, 2019",
            price: "1234",
            quantity: "1",
            color: "main",
            status: "Confirm"
        },
        {
            id: "customCheck2",
            clientId: "#AP1235",
            clientName: "Walter Jones",
            date: "04 Nov, 2019",
            price: "822",
            quantity: "2",
            color: "main",
            status: "Confirm"
        },
        {
            id: "customCheck3",
            clientId: "#AP1236",
            clientName: "Eric Ryder",
            src:"user-1.jpg",
            date: "	05 Nov, 2019",
            price: "1153",
            quantity: "1",
            color: "red-500",
            status: "Cancel"
        },
        {
            id: "customCheck4",
            clientId: "#AP1237",
            clientName: "Kenneth Jackson",
            date: "06 Nov, 2019",
            price: "1365",
            quantity: "1",
            color: "main",
            status: "Confirm"
        },
        {
            id: "customCheck5",
            clientId: "#AP1238",
            clientName: "Ronnie Spiller",
            src:"user-2.jpg",
            date: "08 Nov, 2019",
            price: "740",
            quantity: "2",
            color: "yellow-500",
            status: "Pending"
        },
    ];
    return (
        <div className="bg-white rounded-lg py-7 mb-7 px-5 shadow flex flex-col space-y-3">
            <h1 className="text-custBlue font-semibold">Latest Transation</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4"></th>
                                <th scope="col" className="px-6 py-4">ID & Name</th>
                                <th scope="col" className="px-6 py-4">Date</th>
                                <th scope="col" className="px-6 py-4">Price</th>
                                <th scope="col" className="px-6 py-4">Quantity</th>
                                <th scope="col" className="px-6 py-4">Amount</th>
                                <th scope="col" className="px-6 py-4">Status</th>
                                <th scope="col" className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                LatestTransationData.map((item, key) =>(
                                    <tr key={key} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center space-x-2">
                                            <input
                                                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                type="checkbox"
                                                value=""
                                                id={item.id} />
                                                {item.src ? <img src={item.src} alt="user" className="w-8 h-8 rounded-full object-cover" /> : 
                                                <div className="w-8 h-8 rounded-full bg-main/50 flex items-center justify-center">
                                                    <span className="text-xs text-main">
                                                        {item.clientName.charAt(0)}
                                                    </span>
                                                </div>}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 ">
                                            <span className="text-[9px] text-gray-600">{item.clientId}</span>
                                            <p className="text-sm font-semibold">{item.clientName}</p>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.date}</td>
                                        <td className="whitespace-nowrap px-6 py-4">$ {item.price}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.quantity}</td>
                                        <td className="whitespace-nowrap px-6 py-4">$ {item.quantity * item.price}</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <span className={"w-3 h-3 rounded-full bg-"+item.color}></span>
                                                <span>{item.status}</span>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4  space-x-1">
                                            <span className="text-main border border-main py-2 px-3 rounded text-xs">
                                                Edit
                                            </span>
                                            <span className="text-red-600 border border-red-600 py-2 px-3 rounded text-xs">
                                                Cancel
                                            </span>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestTransation;
