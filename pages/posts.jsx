import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import Sidebar from "../components/SideBar";
import Filter from "../components/post/Filter";
import Posts from "../components/post/Posts";
import Banner from "../components/post/Banner";


export async function getServerSideProps(context) {



  const response = await fetch('https://kritirankk.pythonanywhere.com/entity/post-list')
  const posts = await response.json();

  const responseRes = await fetch('https://kritirankk.pythonanywhere.com/entity/completed_reservations_post/')
  const notifications = await responseRes.json();

  return {
    props: {
      posts:posts,
      notifications:notifications,
    },
  }
}
export default function ({posts,notifications}) {
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
      <Header notifications={notifications} />
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
