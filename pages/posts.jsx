import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import Sidebar from "../components/SideBar";
import Filter from "../components/post/Filter";
import Posts from "../components/post/Posts";
import Banner from "../components/post/Banner";
import BASE_URL from "../components/global";





export async function getServerSideProps(context) {

  

  const response = await fetch(`${BASE_URL}/entity/post-list`)
  const posts = await response.json();

  const responseRes = await fetch(`${BASE_URL}/entity/completed_reservations_post/`)
  const notificationsOwner = await responseRes.json();

  const responseRes1 = await fetch(`${BASE_URL}/entity/reservations-status/`)
  const notificationsUser = await responseRes1.json();
  return {
    props: {
      posts:posts,
      notificationsOwner:notificationsOwner,
      notificationsUser:notificationsUser
    },
  }
}
export default function ({posts,notificationsOwner,notificationsUser}) {
  return (
    <div className="">
      <Head>
        <title>Posts</title>
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
      <Header notificationsOwner={notificationsOwner} notificationsUser={notificationsUser} />
      <AuthModal />
      <Sidebar />
      <Banner />
      <div className="flex items-start gap-10 bg-gray-100">
        <Filter />
        <Posts posts={posts} />
      </div>
      <Footer />
    </div>
  );
}
