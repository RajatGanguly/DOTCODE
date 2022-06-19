import Link from "next/link";
import React from "react";
import Head from "next/head"
import { MdAccountCircle } from "react-icons/md";

function Navbar(props) {
  if(props.user.value){
    // console.log(JSON.parse(props.user.value).authToken)
  }
  else{
    // console.log("Not found")
  }
  
  return (
    <div className="navCon">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <style jsx>
        {`
          .navCon {
            box-shadow: 0px 15px 10px -15px #111;
            position: sticky;
            top: 0px;
            right: 0px;
            left: 0px;
            z-index: 9999;
            background-color: #fff;
          }
        `}
      </style>
      <header className="text-gray-600 header body-font">
        <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src="/logo.png" width={100} />
              <span className="ml-3 text-xl">dot Code</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"}>
              <a className="mr-5 hover:text-gray-900 md:font-bold">Home</a>
            </Link>
            <Link href={"/about"}>
              <a className="mr-5 hover:text-gray-900 md:font-bold">About</a>
            </Link>
            <Link href={"/courses"}>
              <a className="mr-5 hover:text-gray-900 md:font-bold">Courses</a>
            </Link>
            <Link href={"/contact"}>
              <a className="mr-5 hover:text-gray-900 md:font-bold">Contact</a>
            </Link>
          </nav>
          {
            props.user.value ? 
            <button
            className="mx-2 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={props.logout}
          >
            <MdAccountCircle className="mx-2" />
            Logout
          </button> : 
          <Link href={"/login"}><button
          className="mx-2 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          <MdAccountCircle className="mx-2" />
          Login
        </button></Link>
          }      
        </div>
      </header>      
    </div>
  );
}

export default Navbar;
