import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

function About() {
  const [visible, setVisible] = useState(0)
  const makeVisible = () =>{
    visible==0?setVisible(1):setVisible(0)
  }
  return (
    <div>
      <Head>
        <title>ABOUT | .CODE</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/images/about.jpeg"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                  <img src="logo.png" alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Dot Code
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Hi, we are dotcode. We provide learning with doubt clearing and real life projects. Join us today to be a industry level developer.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  DOTCODE is a platform to learn development and programming from scratch. In a single website you will get best resources from starting your journey to gain mastery. Our interactive session provides you a very comfortable yet effiecent way to achieve expertise.
                </p>
                {visible==1 ? <p className="leading-relaxed text-lg mb-4">
                  You can start your journey with us to become an effiecient and industry level software developer just by <span className="text-blue-500"><Link href={"/signup"}><a>creating an account</a></Link></span>.
                </p> : ""}
                <a className="text-indigo-500 inline-flex items-center cursor-pointer" onClick={makeVisible}>
                  Learn {visible==0 ? "More": "Less"}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default About;
