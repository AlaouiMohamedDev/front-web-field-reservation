import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Banner from "../components/calendar/Banner";
import AuthModal from "../components/AuthModal";
import { useRouter } from "next/router";
import ReservationsBar from "../components/ReservationsBar";
import BASE_URL from "../components/global";
import Calendar from "../components/calendar/Calendar";
import { getSession } from "next-auth/react";

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

  const resp1 = await fetch(`${BASE_URL}/entity/list-joined/`)
  const joinedList = await resp1.json();

  const session =await getSession(context)

  return {
    props: {
      reservations: reservations,
      fields: fields,
      notificationsOwner: notificationsOwner,
      notificationsUser: notificationsUser,
      joinedList:joinedList,
      session:session
    },
  };
}
export default function ({
  reservations,
  fields,
  notificationsUser,
  notificationsOwner,
  joinedList,
  session
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





  



  const ModalAuth = () => {
    const modal = document.querySelector(".authmodal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  };



  return (
    <div className="">
      <Head>
        <title>Calendar 01</title>
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
         <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"></script>
      </Head>
      <Header
        notificationsUser={notificationsUser}
        notificationsOwner={notificationsOwner}
        joinedList={joinedList}
      />
      <SideBar />
      <AuthModal session={session}/>
      <ReservationsBar reservations={reservations} />
      <Banner />
      <Calendar reservations={reservations} field={field} fields={fields}/>
      
      <Footer />
    </div>
  );
}
