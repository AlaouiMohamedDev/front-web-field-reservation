import Head from "next/head";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Banner from "../components/calendar/Banner";
import AuthModal from "../components/AuthModal";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import ReservationsBar from "../components/ReservationsBar";
import CreatePost from "../components/calendar/CreatePost";
import BASE_URL from "../components/global";
import Select from "react-select";

export async function getServerSideProps(context) {
  const response = await fetch(`${BASE_URL}/entity/reservation-list`);
  const reservations = await response.json();

  const response1 = await fetch(`${BASE_URL}/entity/list_fields`);
  const fields = await response1.json();

  const responseRes = await fetch(
    `${BASE_URL}/entity/completed_reservations_post/`
  );
  const notificationsOwner = await responseRes.json();

  const responseRes1 = await fetch(`${BASE_URL}/entity/reservations-status/`);
  const notificationsUser = await responseRes1.json();

  return {
    props: {
      reservations: reservations,
      fields: fields,
      notificationsOwner: notificationsOwner,
      notificationsUser: notificationsUser,
    },
  };
}
export default function ({
  reservations,
  fields,
  notificationsUser,
  notificationsOwner,
}) {
  const router = useRouter();
  const { field } = router.query;

  const hours = [
    {
      id: "1",
      from: "12:00 AM",
      to: "1:00 AM",
    },
    {
      id: "2",
      from: "1:00 AM",
      to: "2:00 AM",
    },
    {
      id: "3",
      from: "2:00 AM",
      to: "3:00 AM",
    },
    {
      id: "4",
      from: "3:00 AM",
      to: "4:00 AM",
    },
    {
      id: "5",
      from: "4:00 AM",
      to: "5:00 AM",
    },
    {
      id: "6",
      from: "5:00 AM",
      to: "6:00 AM",
    },
    {
      id: "7",
      from: "6:00 AM",
      to: "7:00 AM",
    },
    {
      id: "8",
      from: "7:00 AM",
      to: "8:00 AM",
    },
    {
      id: "9",
      from: "8:00 AM",
      to: "9:00 AM",
    },
    {
      id: "10",
      from: "9:00 AM",
      to: "10:00 AM",
    },
    {
      id: "11",
      from: "10:00 AM",
      to: "11:00 AM",
    },
    {
      id: "12",
      from: "11:00 AM",
      to: "12:00 PM",
    },
    {
      id: "13",
      from: "12:00 PM",
      to: "1:00 PM",
    },
    {
      id: "14",
      from: "1:00 PM",
      to: "2:00 PM",
    },
    {
      id: "15",
      from: "2:00 PM",
      to: "3:00 PM",
    },
    {
      id: "16",
      from: "3:00 PM",
      to: "4:00 PM",
    },
    {
      id: "17",
      from: "4:00 PM",
      to: "5:00 PM",
    },
    {
      id: "18",
      from: "5:00 PM",
      to: "6:00 PM",
    },
    {
      id: "19",
      from: "6:00 PM",
      to: "7:00 PM",
    },
    {
      id: "20",
      from: "7:00 PM",
      to: "8:00 PM",
    },
    {
      id: "21",
      from: "8:00 PM",
      to: "9:00 PM",
    },
    {
      id: "22",
      from: "9:00 PM",
      to: "10:00 PM",
    },
    {
      id: "23",
      from: "10:00 PM",
      to: "11:00 PM",
    },
    {
      id: "24",
      from: "11:00 PM",
      to: "12:00 AM",
    },
  ];
  const hoursArray = Object.entries(hours).map(([id, time]) => ({
    id,
    ...time,
  }));

  const now = new Date(); // Get the current date and time
  const nowYear = now.getFullYear(); // Get the current year (e.g., 2023)
  const nowMonth = now.getMonth(); // Get the current month (0-11, where 0 is January and 11 is December)
  const nowWeek = Math.floor((now.getDate() - 1) / 7) + 1; // Get the current week of the month (1-5)
  const [reservationList, setReservationList] = useState([]);
  const [oneField, setField] = useState({});
  useEffect(() => {
    setReservationList(
      reservations.filter((reservation) => {
        // Extract the year, month, and week of the reservation date
        const reservationDate = new Date(reservation.date);
        const reservationYear = reservationDate.getFullYear();
        const reservationMonth = reservationDate.getMonth();
        const reservationWeek =
          Math.floor((reservationDate.getDate() - 1) / 7) + 1;

        // Check if the reservation matches the current year, month, and week
        if (
          reservation.idField == field &&
          reservationYear == nowYear &&
          reservationMonth == nowMonth &&
          reservationWeek == nowWeek
        ) {
          return reservation;
        }
      })
    );
  }, [reservations]);

  useEffect(() => {
    setField(
      fields.filter((f) => {
        if (f.id == field) return f;
      })
    );
  }, [fields]);

  //   const reservations = [
  //     {
  //       day: "Monday",
  //       from: "10:00 AM",
  //       to: "11:00 AM",
  //       name: "John Smith",
  //     },
  //     {
  //       day: "Tuesday",
  //       from: "2:00 PM",
  //       to: "3:00 PM",
  //       name: "Jane Doe",
  //     },
  //     {
  //       day: "Wednesday",
  //       from: "9:00 AM",
  //       to: "10:00 AM",
  //       name: "Bob Johnson",
  //     },
  //     {
  //       day: "Thursday",
  //       from: "1:00 PM",
  //       to: "2:00 PM",
  //       name: "Alice Jones",
  //     },
  //     {
  //       day: "Friday",
  //       from: "3:00 PM",
  //       to: "4:00 PM",
  //       name: "Tom Davis",
  //     }
  // ]
  // const mondayReservations = reservations.filter(reservation => reservation.day === "Monday");
  // const reservantionList = reservations.filter(reservation => reservation.id === field)
  // console.log("🚀 ~ file: calendar.jsx:189 ~ reservantionList:", reservantionList)

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    if (getCookie("id") == null) setUserId(null);
    else setUserId(getCookie("id"));
  }, [getCookie("id")]);

  const [currentPage, setCurrentPage] = useState(1);
  const [elementPerPage, seEelementPerPage] = useState(6);

  const indexOfLastElement = currentPage * elementPerPage;
  const indexOfFirstElement = indexOfLastElement - elementPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const currentHours = hours.slice(indexOfFirstElement, indexOfLastElement);

  const ModalAuth = () => {
    const modal = document.querySelector(".authmodal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  };
  const [from1, setFrom1] = useState("");
  const [to1, setTo1] = useState("");
  const [day1, setDay1] = useState("");

  const book = (f, t, d) => {
    if (userId == null) {
      ModalAuth();
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton:
            "bg-main text-white outline-none py-2 px-3 rounded ml-5",
          cancelButton:
            "bg-yellow-500 text-white outline-none py-2 px-3 rounded ",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Full reseravation",
          cancelButtonText: "Create a Post",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: `Do you want to Reserve `,
              text: "Make sure of your descion",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes,Book it!",
            }).then((result) => {
              if (result.isConfirmed) {
                const currentDate = new Date();
                const formattedDate = currentDate.toISOString().slice(0, 10);

                const date = new Date(formattedDate);
                if (date.getDay() != d) {
                  date.setDate(date.getDate() + d - date.getDay());
                }
                const data = {
                  startTime: f,
                  endTime: t,
                  date: date.toISOString().slice(0, 10),
                  terrain: field,
                  approved_rejected: "waiting",
                  jwt: getCookie("jwt"),
                };

                axios
                  .post(`${BASE_URL}/entity/reservation-create/`, data)
                  .then((res) => {
                    if (res.data.status === 200) {
                      toast.success("Field Booked", {
                        position: "bottom-right",
                      });
                      router.push(`/calendar?field=${field}`);
                    } else {
                      Swal.fire("Echec !!", res.data.message, "warning");
                    }
                  });
              }
            });
          } else {
            setFrom1(f);
            setDay1(d);
            setTo1(t);
            const postmodal = document.querySelector(".postmodal");
            postmodal.classList.remove("hidden");
            postmodal.classList.add("flex");
          }
        });
    }
  };
  const getWeekNumber = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    // Set the day to Thursday of the current week to get the correct week number
    d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return weekNo;
  };

  const currentMonth = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  
  const months = [];
  
  for (let i = currentMonth; i <= 12; i++) {
    const monthValue = i;
    const monthLabel = getNextMonthName(monthValue) + ' ' + year;
    months.push({ value: monthValue, label: monthLabel });
  }
  
  function getNextMonthName(monthValue) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    return monthNames[monthValue - 1];
  }



  const [selectedOption, setSelectedOption] = useState({ value: currentMonth, label: getNextMonthName(currentMonth) + ' ' + year });
 

  function getWeeksInMonth(monthNumber) {
    // Create a new Date object for the given month and year
    const date = new Date(Date.UTC(new Date().getFullYear(), monthNumber - 1, 1));
    console.log("🚀 ~ file: calendar.jsx:391 ~ getWeeksInMonth ~ date:", date)
  
    // Get the last day of the month
    const lastDayOfMonth = new Date(Date.UTC(new Date().getFullYear(), monthNumber, 0));
    console.log("🚀 ~ file: calendar.jsx:395 ~ getWeeksInMonth ~ lastDayOfMonth:", lastDayOfMonth)
  
    // Calculate the number of days in the month
    const daysInMonth = lastDayOfMonth.getDate();

    // Calculate the number of weeks in the month
    const weeksInMonth = Math.floor(daysInMonth / 7);
  
    return weeksInMonth;
  }
  
  const [weekCount,setWeekCount] = useState(1)

  function handleNextMonthClick() {
    const currentIndex = months.findIndex(month => month.value === selectedOption.value);

    const nbrWeeks =getWeeksInMonth(months[currentIndex].value)
    if(nbrWeeks > weekCount)
    {
        setWeekCount(weekCount+1)
    }
    else{
        setWeekCount(1)
        if (currentIndex < months.length - 1) {
          setSelectedOption(months[currentIndex + 1]);
        }
    }
  }

  function handlePreviousMonthClick() {
    const currentIndex = months.findIndex(month => month.value === selectedOption.value);
    const nbrWeeks =getWeeksInMonth(months[currentIndex].value)

    if(weekCount>1)
    {
        setWeekCount(weekCount-1)
    }
    else
    {
        setWeekCount(1)
        if (currentIndex > 0) {
          setSelectedOption(months[currentIndex - 1]);
          setWeekCount(nbrWeeks)
        }
    }
  }


  

  const customStyles = {
    control: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      display: "flex",
      outline: "none",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#ffffff",
      color: "#ffffff",
      fontSize: "12px",
      padding: "0px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#03C988",
      // replace with your desired color
    }),
    container: (provided) => ({
      ...provided,
      width: "130px", // replace with your desired width
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "14px", // replace with your desired font size
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
        zIndex: "100",
      };
    },
  };

  return (
    <div className="">
      <Head>
        <title>Calendar</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header
        notificationsUser={notificationsUser}
        notificationsOwner={notificationsOwner}
      />
      <SideBar />
      <AuthModal />
      <ReservationsBar reservations={reservations} />
      <Banner />
      <div className="font-roboto bg-gray-50">
        <div className="container mx-auto py-10 text-Cblue">
          <div className="py-5 flex items-center justify-center space-x-2">
            <h1 className="text-xl font-semibold font-poppins">
              Field <c className="text-main">Calendar</c>
            </h1>
            <i className="bx bx-calendar-check text-2xl text-main"></i>
          </div>

          <div className="wrapper  space-y-3 w-full  my-10">
            <div className="flex items-center  justify-between relative">
              <Select
                value={selectedOption} options={months} onChange={setSelectedOption}
                styles={customStyles}
                placeholder="April 2023"
                className="z-100 shadow rounded"
              />
              <h1 className="font-poppins text-lg  absolute z-90  text-center w-full">Week {weekCount}</h1>
              <div className="z-100 flex items-center text-lg shadow text-gray-700 justify-evenly py-3 px-2 space-x-1 bg-white rounded">
                <i onClick={handlePreviousMonthClick} className="bx bxs-chevron-left cursor-pointer"></i>
                <span className="h-3 w-[2px] bg-main"></span>
                <i onClick={handleNextMonthClick} className="bx bxs-chevron-right cursor-pointer"></i>
              </div>
            </div>
            <table className="w-full bg-white rounded  shadow">
              <thead className="bg-main text-white sticky top-0 z-90">
                <tr>
                  <th className="p-2 border-r h-10 xl:w-14 lg:w-14 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Time
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Tm
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Sunday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Sun
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Monday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Mon
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Tuesday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Tue
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Wednesday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Wed
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Thursday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Thu
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Friday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Fri
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Saturday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Sat
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentHours.map(({ id, from, to }) => (
                  <tr key={id} className="text-center h-20 relative">
                    <td className="border p-1 h-20 xl:w-14 lg:w-30 md:w-14 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-main/30 ">
                      <div className="uppercase font-semibold flex text-xs items-center justify-center flex-col h-24 xl:w-14 lg:w-14 md:w-30 sm:w-full w-10  overflow-hidden">
                        <span>{from}</span>
                        <span>{to}</span>
                      </div>
                    </td>

                    {Array.from({ length: 7 }, (_, i) => {
                      const day = [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                      ][i];
                      const date = new Date();
                      const reservation = reservationList.find(
                        (reservation) => {

                          return (
                            reservation.day === day &&
                            reservation.from === from &&
                            reservation.to === to
                          );
                        }
                      );

                      const hasReservation = Boolean(reservation);

                      const currentDate = new Date();
                      const daysToAdd = i - currentDate.getDay();
                      const [hour1, minute, ampm] = from.split(/:| /);
                      const hour24 =
                        ampm === "PM"
                          ? parseInt(hour1, 10) + 12
                          : parseInt(hour1, 10);
                      const newDate = new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        currentDate.getDate() + daysToAdd,
                        hour24
                      );

                      const dateCurrent = new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        currentDate.getDate(),
                        currentDate.getHours(),
                        currentDate.getMinutes()
                      );

                      return (
                        <td
                          key={`dat${i}`}
                          className="group border  h-24 xl:w-40 lg:w-40 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-main/30"
                        >
                          <div className="w-full h-full">
                            {
                              hasReservation ? (
                                <div className="rounded relative flex items-center justify-center w-full h-full overflow-hidden">
                                  <span className="text-[10px] text-white bg-red-700 rounded px-2  absolute z-10 top-1 right-1">
                                    Reserved
                                  </span>
                                  <img
                                    src={reservation.terrain}
                                    className="object-cover rounded absolute -z-5"
                                  />
                                  <img
                                    src={reservation.complexe}
                                    className="object-cover top-1 left-1 w-5 h-5 absolute -z-5 rounded-full border border-main"
                                  />
                                  <span className=" text-white font-semibold text-xs z-10">
                                    {reservation.name}
                                  </span>
                                  <div className="flex space-x-1 items-center text-xs bottom-1 text-yellow-400 absolute z-10">
                                    <span>4,5</span>
                                    <i className="bx bxs-star text-xs"></i>
                                  </div>
                                </div>
                              ) : (
                                <div className="h-full">
                                  <div className="group-hover:hidden h-full flex items-center justify-center text-sm text-gray-200">
                                    <span>Empty</span>
                                  </div>
                                  <div
                                    onClick={() => book(from, to, i)}
                                    className="transition duration-100 ease-in-out hidden space-y-1 group-hover:flex flex-col items-center h-full justify-center text-main text-sm"
                                  >
                                    <i className="bx bxs-plus-circle text-lg"></i>
                                    <span>Add a Reservation</span>
                                  </div>
                                </div>
                              )

                              // currentDate.getDay()<=i && newDate > dateCurrent ?
                              //         <div className='h-full'>
                              //             <div className='group-hover:hidden h-full flex items-center justify-center text-sm text-gray-200'>
                              //                 <span>Empty</span>
                              //             </div>
                              //             <div onClick={()=>book(from,to,i)} className='transition duration-100 ease-in-out hidden space-y-1 group-hover:flex flex-col items-center h-full justify-center text-main text-sm'>
                              //                 <i className='bx bxs-plus-circle text-lg' ></i>
                              //                 <span>Add a Reservation</span>
                              //             </div>
                              //         </div>
                              //     :
                              //     <div className='h-full w-full cursor-none'>
                              //             <div className='space-y-1 flex flex-col items-center h-full justify-center text-gray-50 bg-gray-300 text-sm'>
                              //                 <i className='bx bx-block text-lg' ></i>
                              //                 <span>Locked</span>
                              //             </div>
                              //     </div>
                            }
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            paginate={paginate}
            currentPage={currentPage}
            elementPerPage={elementPerPage}
            totalElement={hours.length}
          />
        </div>
      </div>
      <CreatePost oneField={oneField} from={from1} to={to1} />
      <Footer />
    </div>
  );
}
