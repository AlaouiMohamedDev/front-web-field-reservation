import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'
import {useSession,signIn,signOut, getSession} from 'next-auth/react'



export default function Header({ notificationsUser,notificationsOwner,joinedList }) {
console.log("🚀 ~ file: Header.jsx:9 ~ Header ~ joinedList:", joinedList)


    const [displayedReservation, setDisplayedReservation] = useState(notificationsOwner)
    useEffect(() => {
        setDisplayedReservation(notificationsOwner.data.filter(reservation => {
            if (reservation.owner == getCookie('id')) {
                return reservation
            }
        }))

    }, [notificationsOwner])

    const [image, setImage] = useState("./images/default.jpg" );

    useEffect(() => {
            if(getCookie('image') != null)
            {
                setImage(getCookie('image'))
            }
            else{
                setImage("./images/default.jpg" )
            }
    },[getCookie('image')])


    const [displayedJoined, setDisplayedJoined] = useState(joinedList)
    const [displayedStatusJoined, setDisplayedStatusJoined] = useState(joinedList)

    useEffect(() => {
        setDisplayedJoined(joinedList.data.filter(data => {
            if (data.owner == getCookie('id') && data.request == "Requested") {
                return data
            }
        }))

        setDisplayedStatusJoined(joinedList.data.filter(data => {
            if (data.user == getCookie('id') && data.request != "Requested") {
                return data
            }
        }))


    }, [joinedList,getCookie('id')])
   

    

    const [displayedReservationUser, setDisplayedReservationUser] = useState(notificationsUser.data)
    useEffect(() => {
        setDisplayedReservationUser(notificationsUser.data.filter(reservation => {
            if (reservation.userId == getCookie('id')) {
                return reservation
            }
        }))


    }, [notificationsUser])


    const router = useRouter();



    const ModalAuth = () => {
        const modal = document.querySelector('.authmodal')
        modal.classList.remove('hidden')
        modal.classList.add('flex')
    }

    const logout = () => {
        deleteCookie('first_name')
        deleteCookie('last_name')
        deleteCookie('jwt')
        deleteCookie('id')
        deleteCookie('email')
        deleteCookie('role')
        deleteCookie('login')
        signOut()
        const currentUrl = router.asPath;
        router.push(currentUrl)
    }

    useEffect(() => {

        const header = document.querySelector('.header')

        window.addEventListener('scroll', () => {
            if ((window.scrollY || window.pageYOffset) > 10) {
                header.classList.add('fixed')
                header.classList.add('z-100')
                header.classList.add('shadow');
                header.classList.add('top-0');
                header.classList.add('w-screen');
                header.classList.remove('py-5');
                header.classList.add('py-3');
            } else {
                header.classList.remove('fixed')
                header.classList.remove('w-screen');
                header.classList.remove('z-100')
                header.classList.remove('shadow');
                header.classList.remove('py-3');
                header.classList.remove('top-0');
                header.classList.add('py-5');
            }
        })
    }, []);

    const [userName, setUserName] = useState(null)

    useEffect(() => {
        if (getCookie('first_name') == null)
            setUserName(null)
        else
            setUserName(getCookie('first_name'))
    }, [getCookie('first_name')])


    const [role, setRole] = useState(null)
    useEffect(() => {
        if (getCookie('role') == null)
            setRole(null)
        else
            setRole(getCookie('role'))
    }, [getCookie('role')])



    const sidebar = () => {

        const sidebar1 = document.querySelector('.sidebar1')
        const sidebar2 = document.querySelector('.sidebar2')
        sidebar1.classList.remove('hidden')
        sidebar2.classList.remove('-left-full')
        sidebar2.classList.add('left-0');
    }

    const reservationbar = () => {

        const reservationbar1 = document.querySelector('.reservationbar1')
        const reservationbar2 = document.querySelector('.reservationbar2')
        reservationbar1.classList.remove('hidden')
        reservationbar2.classList.remove('-right-full')
        reservationbar2.classList.add('right-0');
    }

    const dropDown = () => {
        const dropDown = document.querySelector('.dropDown')
        dropDown.classList.toggle('hidden')
    }

    const dropDown1 = () => {
        const dropDown = document.querySelector('.dropDown1')
        dropDown.classList.toggle('hidden')
    }

    const dropDown2 = () => {
        const dropDown = document.querySelector('.dropDown2')
        dropDown.classList.toggle('hidden')
    }


    return (
        <div className=''>
            <div className="bg-main text-white font-poppins text-sm  py-2 flex items-center justify-center space-x-7">
                <h1>FOLLOW US</h1>
                <i className='bx bxl-pinterest' ></i>
                <i className='bx bxl-github' ></i>
                <i className='bx bxl-facebook' ></i>
                <i className='bx bxl-instagram' ></i>
            </div>
            <div className="flex  bg-white font-poppins text-sm justify-evenly px-5 shadow-sm  py-4 text-gray-600 header select-none">
                <div className="flex items-center space-x-10">
                    <img src="./images/logo-name.png" className="w-[170px] " />
                    <div className="md:flex items-center space-x-7 hidden">
                        <a onClick={() => { router.push('/') }} className=" text-main cursor-pointer">Welcome</a>
                        <a onClick={() => router.push("/fields")} className=" cursor-pointer">Fields</a>
                        <a onClick={() => router.push("/posts")} className=" cursor-pointer">Posts</a>
                        <a href="" className=" cursor-pointer">About Us</a>
                        <a href="" className=" cursor-pointer">Contact Us</a>
                    </div>
                </div>

              <div className="flex items-center space-x-5 text-xl ">
                    {
                        userName != null
                        &&
                        role == 'host'
                        &&
                        <div className='relative'>
                            <button onClick={dropDown1} id="dropdownNavbarLink1" data-dropdown-toggle="dropdownNavbar1" className="relative text-sm flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                <i className='bx bx-bell text-lg '></i>
                                {
                                    displayedReservation.length != 0
                                    &&
                                    <div className='text-[9px] text-white bg-red-500 w-3 h-3 absolute left-3 top-0 rounded-full flex items-center justify-center'>{displayedReservation.length}</div>
                                }
                            </button>
                            <div id="dropdownNavbar1" className="dropDown1 hidden z-10 absolute top-10 right-1 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-max dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton1">
                                    {
                                        displayedReservation.length != 0
                                        &&
                                        displayedReservation.slice(0, 3).map(rese => {

                                            return (

                                                <li key={rese.id} onClick={() => router.push('/owner?reservation=true')} className='flex space-x-2 items-center hover:bg-main/40 cursor-pointer rounded py-2 px-3'>
                                                    <img src='/user-2.jpg' className='w-8 h-8 rounded-full object-cover' />
                                                    <div className='flex flex-col text-[10px]'>
                                                        <p><b>{rese.name} -</b> <span className='text-main'>Field {rese.nameField}</span></p>
                                                        <p><span className='text-gray-400 border-b'>more details</span></p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                    {
                                        displayedReservation.length != 0
                                        &&
                                        <li onClick={() => router.push('/owner?reservation=true')} className='flex justify-center border-t space-x-2 items-center cursor-pointer rounded py-1 bg-main text-white px-3'>
                                            See All
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>

                    }
                    {
                        userName != null
                        &&
                        role == 'client'
                        &&
                        <div className='relative'>
                            <button onClick={dropDown2} id="dropdownNavbarLink2" data-dropdown-toggle="dropdownNavbar2" className="relative text-sm flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                <i className='bx bx-bell text-lg '></i>
                                {
                                    displayedReservationUser.length + displayedJoined.length + displayedStatusJoined.length !=0
                                    &&
                                    <div className='text-[9px] text-white bg-red-500 w-3 h-3 absolute left-3 top-0 rounded-full flex items-center justify-center'>{displayedReservationUser.length + displayedJoined.length + displayedStatusJoined.length }</div>
                                }
                            </button>
                            <div id="dropdownNavbar2" className="dropDown2 hidden z-10 absolute top-10 right-1 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-max dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton2">
                                    {
                                        displayedReservationUser.length != 0
                                        &&
                                        <li className="bg-main text-white text-[10px]  text-center">Reservations</li>
                                    }
                                    {
                                        displayedReservationUser.length != 0
                                        &&
                                        displayedReservationUser.slice(0, 3).map(rese => {

                                            return (
                                                rese.status == "waiting"
                                                ?
                                                <li onClick={() => router.push('/owner?reservationuser=true')} key={rese.id} className='flex space-x-2 items-center hover:bg-main/40 bg-yellow-500/30 cursor-pointer rounded py-2 px-3'>
                                                    <img src={image} className='w-8 h-8 rounded-full object-cover' />
                                                    <div className='flex flex-col text-[10px]'>
                                                        <p><b>{rese.name} -</b> <span className='text-main'>Field {rese.nameField}</span>- <span className='text-yellow-500 font-bold'>{rese.status}</span></p>
                                                        <p><span className='text-gray-800'>Reservation completed all places are full</span></p>
                                                    </div>
                                                </li>
                                                : 
                                                rese.status == "approved"
                                                ?
                                               <li onClick={() => router.push('/owner?reservationuser=true')} key={rese.id} className='flex space-x-2 items-center hover:bg-main/40 bg-main/40 cursor-pointer rounded py-2 px-3'>
                                                   <img src='/user-2.jpg' className='w-8 h-8 rounded-full object-cover' />
                                                   <div className='flex flex-col text-[10px]'>
                                                       <p><b>{rese.name} -</b> <span className='text-main'>Field {rese.nameField}</span>- <span className='text-main font-bold'>{rese.status}</span></p>
                                                       <p><span className='text-gray-800'>Reservation completed all places are full</span></p>
                                                   </div>
                                               </li>
                                               :
                                               <li onClick={() => router.push('/owner?reservationuser=true')} key={rese.id} className='flex space-x-2 items-center hover:bg-main/40 bg-red-500/40 cursor-pointer rounded py-2 px-3'>
                                                   <img src='/user-2.jpg' className='w-8 h-8 rounded-full object-cover' />
                                                   <div className='flex flex-col text-[10px]'>
                                                       <p><b>{rese.name} -</b> <span className='text-main'>Field {rese.nameField}</span>- <span className='text-red-500 font-bold'>{rese.status}</span></p>
                                                       <p><span className='text-gray-800'>Reservation completed all places are full</span></p>
                                                   </div>
                                               </li>
                                            )
                                            
                                        })
                                    }
                                    {
                                        displayedJoined.length != 0
                                        &&
                                        <li className="bg-main text-white text-[10px]  text-center">Requests</li>
                                    }
                                     {
                                        displayedJoined.length != 0
                                        &&
                                        displayedJoined.slice(0, 3).map(data => {

                                            return (
                                                <li onClick={() => router.push('/owner?requestuser=true')} key={data.id} className='flex space-x-2 items-center hover:bg-main/40 bg-pink-500/30 cursor-pointer rounded py-2 px-3'>
                                                    <img src={data.userImage !=null ? data.userImage : './images/default.jpg'} className='w-8 h-8 rounded-full object-cover' />
                                                    <div className='flex flex-col text-[10px]'>
                                                        <p><b>{data.userFirstName} {data.userLastName} -</b> <span className='text-main'>Field {data.field}</span>- <span className='text-yellow-500 font-bold'>{data.request}</span></p>
                                                        <p><span className='text-gray-800'>{data.reservation}</span></p>
                                                    </div>
                                                </li>
                                            )
                                            
                                        })
                                    }
                                    {
                                        displayedStatusJoined.length != 0
                                        &&
                                        <li className="bg-main text-white text-[10px]  text-center">Others</li>
                                    }
                                     {
                                        displayedStatusJoined.length != 0
                                        &&
                                        displayedStatusJoined.slice(0, 3).map(data => {

                                            return (
                                                <li onClick={() => router.push('/owner')} key={data.id} className={'flex space-x-2 items-center hover:bg-main/40  cursor-pointer rounded py-2 px-3 '+ (data.request == "Rejected" ? "bg-pink-500/30" :"bg-main/50")}>
                                                    <img src={data.ownerImage !=null ? data.ownerImage : './images/default.jpg'} className='w-8 h-8 rounded-full object-cover' />
                                                    <div className='flex flex-col text-[10px]'>
                                                        <p><b>{data.ownerFirstName} {data.ownerLastName} -</b> <span className='text-main'>Field {data.field}</span>- {data.request =="Rejected" ? <span className='text-red-500 font-bold'>{data.request}</span> : <span className='text-main font-bold'>{data.request}</span>}</p>
                                                        <p><span className='text-gray-800'>{data.reservation}</span></p>
                                                    </div>
                                                </li>
                                            )
                                            
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                    }
                    {userName == null ?
                        <i onClick={ModalAuth} className='bx bx-user cursor-pointer' ></i>
                        :

                        <div className='relative'>
                            <button onClick={dropDown} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-sm flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{userName}<svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                            <div id="dropdownNavbar" className="dropDown hidden z-10 absolute top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    {
                                        role == 'host'
                                            ?

                                            <li>
                                                <a onClick={() => router.push("/owner")} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            :
                                            
                                            role == 'client'
                                            ?
                                            <li>
                                                <a onClick={() => router.push("/owner")} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                                            </li>
                                            :
                                            <li>
                                            <a onClick={() => router.push("/dashboard")} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin Dash</a>
                                        </li>
                                    }
                                    <li>
                                        <a className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                </div>
                            </div>
                        </div>

                    }
                    {userName != null && <i onClick={reservationbar} className='bx bx-book-bookmark cursor-pointer'></i>}
                    <i onClick={sidebar} className='bx bx-menu-alt-right cursor-pointer '></i>
                </div>


              

            </div>


        </div>
    )
}
