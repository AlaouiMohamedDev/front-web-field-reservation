import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination';
import CreatePost from './CreatePost';
import { getCookie } from 'cookies-next';
import Swal from 'sweetalert2';
import axios from 'axios';
import BASE_URL from '../global';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function Calendar({reservations,field,fields}) {

    const router = useRouter()

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const [datepicker,setDatePicker] = useState(formattedDate)


    const handlerdate = (e) => {
        e.persist();
        setDatePicker(e.target.value)
    
      }

  

    // useEffect(()=>{
    //     const date = new Date()
    //     date.setDate(date.getDate() + 60); // add the number of days to the current date
    //     try{

    //         const datepickerWithLimits = document.getElementById('datepicker-with-limits');
    //             new te.Datepicker(datepickerWithLimits, {
    //             min: new Date(),
    //             max: date
    //             });
    //     }
    //     catch(e){

    //     }
    // })
    
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
  const [currentPage, setCurrentPage] = useState(1);
  const [elementPerPage, seEelementPerPage] = useState(4);

  const indexOfLastElement = currentPage * elementPerPage;
  const indexOfFirstElement = indexOfLastElement - elementPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const currentHours = hours.slice(indexOfFirstElement, indexOfLastElement);



  const [reservationList, setReservationList] = useState([]);
  
  useEffect(() => {
      console.log("🚀 ~ file: Calendar.jsx:174 ~ useEffect ~ datepicker:", datepicker)
        const [day, month, year] = datepicker.split('/');
        const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        const selectedDate = new Date(isoDate);

    setReservationList(
      reservations.filter((reservation) => {
        const reservationDate = new Date(reservation.date)
        // Extract the year, month, and week of the reservation date
        if (reservation.idField == field && selectedDate.getTime() == reservationDate.getTime() ) {
            console.log("🚀 ~ file: Calendar.jsx:177 ~ reservations.filter ~ reservation:", reservation)
            return reservation;
          }
        })
        );
  }, [reservations,datepicker]);

  const filterDate = () => {

    const dateP = document.querySelector('.datepi').value;
    const nowDate = new Date()
    const [day, month, year] = dateP.split('/');
    const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    const selectedDate = new Date(isoDate);

    const nDate = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate())

    if(selectedDate.getTime() < nDate.getTime())
    {
        toast.error('Date is Lower',{
            position: "bottom-right",
          })
          setDatePicker(formattedDate)
    }
    else{
        setDatePicker(dateP)

        setReservationList(
        reservations.filter((reservation) => {
            const reservationDate = new Date(reservation.date)
            // Extract the year, month, and week of the reservation date
            if (reservation.idField == field && selectedDate.getTime() == reservationDate.getTime() ) {
                console.log("🚀 ~ file: Calendar.jsx:177 ~ reservations.filter ~ reservation:", reservation)
                return reservation;
            }
            })
            );
    }



    

  }

  const [oneField, setField] = useState({});

  useEffect(() => {
    setField(
      fields.filter((f) => {
        if (f.id == field) return f;
      })
    );
  }, [fields]);

  const ModalAuth = () => {
    const modal = document.querySelector(".authmodal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  };

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (getCookie("id") == null) setUserId(null);
    else setUserId(getCookie("id"));
  }, [getCookie("id")]);

  const [from1, setFrom1] = useState("");
  const [to1, setTo1] = useState("");


  const book = (f, t) => {
    if (userId == null) {
      ModalAuth();
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton:
            "bg-main text-white outline-none py-2 px-3 rounded ml-5",
          cancelButton:
            "bg-red-500 text-white outline-none py-2 px-3 rounded ",
            denyButton:
            "bg-yellow-500 text-white ml-5 outline-none py-2 px-3 rounded ",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          showDenyButton: true,
          confirmButtonText: "Full reseravation",
          cancelButtonText: "Cancel",
          denyButtonText: `Create Post`,
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


                const [day, month, year] = datepicker.split("/");
                const dateObj = new Date(`${year}-${month}-${day}`);
                const convertedDate = dateObj.toISOString().slice(0, 10);


                const date = new Date(convertedDate);

                const data = {
                  startTime: f,
                  endTime: t,
                  date: date.toISOString().slice(0, 10),
                  terrain: field,
                  approved_rejected: "waiting",
                  jwt: getCookie("jwt"),
                };
                console.log("🚀 ~ file: calendar.jsx:358 ~ .then ~ data:", data)

                axios
                  .post(`${BASE_URL}/entity/reservation-create/`, data)
                  .then((res) => {
                    if (res.data.status === 200) {
                      toast.success("Field Booked", {
                        position: "bottom-right",
                      });
                      router.push(`/calendar1?field=${field}`);
                    } else {
                      Swal.fire("Echec !!", res.data.message, "warning");
                    }
                  });
              }
            });
          } else if (result.isDenied) {
            setFrom1(f);
            setTo1(t);
            const postmodal = document.querySelector(".postmodal");
            postmodal.classList.remove("hidden");
            postmodal.classList.add("flex");
          }
        });
    }
  };



  return (
    <div className="bg-gray-50 py-10 px-10 flex flex-col">
        <div className="flex items-center justify-between">
            <h1 className='font-semibold text-sm'>Choose a time to play in</h1>
            <div className='flex items-center space-x-3'>
                
                <div class="relative mb-3 flex space-x-3 items-center"   id="datepicker-with-limits" data-te-datepicker-init 
                        >
                            <i onClick={filterDate} className='bx bxs-share py-[10px] px-2 rounded bg-main text-white cursor-pointer'></i>
                                <input
                                name='datepicker'
                                value={datepicker}
                                onChange={handlerdate}
                                    type="text"
                                    className="w-full border py-2 px-3 text-sm rounded outline-none datepi"
                                    placeholder="Select a date"
                                />
                                
                                
                        <i className="bx bx-calendar text-md text-main absolute right-2 " data-te-datepicker-toggle-ref
                    data-te-datepicker-toggle-button-ref></i>
                </div>
            </div>

        </div>
        <div className="grid grid-cols-2 py-10 gap-y-10 gap-x-16">
            {
                currentHours.map(({ id, from, to })=>{
                    const reservation = reservationList.find(reservation =>  reservation.from === from && reservation.to === to);
                    const hasReservation = Boolean(reservation);
                    return(
                        <div key={id} className="flex items-center rounded-l-3xl shadow fade">
                        <div className=' px-5 w-1/3 h-full items-center space-y-2 font-semibold flex flex-col justify-center bg-dashUser bg-cover rounded-l-3xl text-white bg-main'>
                            <h1>{from}</h1>
                            <h1>{to}</h1>
                        </div>
                        {
                            hasReservation ?
                            (
                                <div className="h-[250px] flex items-center justify-center w-full bg-white group relative overflow-hidden">
                                         <span className="text-sm text-white bg-red-700 rounded px-2  absolute z-10 top-4 right-4">
                                             Reserved
                                        </span>
                                        <img
                                            src={reservation.terrain}
                                            className="object-cover rounded absolute -z-5"
                                        />
                                        <img
                                            src={reservation.complexe}
                                            className="object-cover top-3 left-4 w-10 h-10 absolute -z-5 rounded-full border border-main"
                                        />
                                        <span className=" text-white font-semibold text-md z-10">
                                            {reservation.name}
                                        </span>
                                        <div className="flex space-x-1 items-center text-xs bottom-1 text-yellow-400 absolute z-10">
                                            <span>4,5</span>
                                            <i className="bx bxs-star text-xs"></i>
                                        </div>
                                </div>
                            )
                            :
                            (

                                <div className="h-[250px] w-full bg-white group">
                                        <div className='group-hover:hidden h-full flex items-center justify-center text-lg text-gray-200'>
                                            <span>Empty</span>
                                        </div>
                                        <div onClick={()=>book(from,to)} className='transition duration-100 group-hover:bg-main/50 ease-in-out hidden font-bold space-y-1 group-hover:flex flex-col items-center h-full justify-center text-main text-sm cursor-pointer'>
                                            <i className='bx bxs-plus-circle text-lg' ></i>
                                            <span>Add a Reservation</span>
                                        </div>
                                </div>
                            )
                        }
                    </div>
                    )
                }
                    
                )
            }
        </div>
        <Pagination
            paginate={paginate}
            currentPage={currentPage}
            elementPerPage={elementPerPage}
            totalElement={hours.length}
          />
          <CreatePost oneField={oneField} from={from1} to={to1} />
    </div>
  )
}
