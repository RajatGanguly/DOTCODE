import React from "react";
import Link from "next/link";
import Head from "next/head";

function Courses() {
  return (
    <div>
      <Head>
        <title>PRACTICES | .CODE</title>
      </Head>
      <style jsx>{`
        .p-4 {
          cursor: pointer;
        }
      `}</style>
      <div className="flex flex-wrap my-10 w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          PRACTICE SET
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Practice from our selected problem set, created by our experts. No need to mugup 10000 problems. Here you'll get specific base problem of every topic from <b>DSA</b> and you'll be able to crack your dream company.
          Remember, if nobody is perfect then you'll be nobody because practice makes a person perfect.
        </p>
      </div>
      <div className="flex flex-wrap -m-4 mx-10">
        <Link href={"/practice/array"}>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                ARRAY
              </h2>
              <p className="leading-relaxed text-base">
                First step i your DSA journey. This linear data sctructure is often asked in most of the interviews.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/practice/linkedlist"}>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                LINKED LIST
              </h2>
              <p className="leading-relaxed text-base">
                A very simple and interesting data structure. You need a clear understanding of a language to tackle its problems.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/practice/stack"}>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                STACK
              </h2>
              <p className="leading-relaxed text-base">
                Another liner data structure. It is also used to solve other DSA problems.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/practice/queue"}>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                QUEUE
              </h2>
              <p className="leading-relaxed text-base">
                As the name suggests, here data is stored in the form of queue and follows FIFO.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/practice/recursion"}>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                RECURSION
              </h2>
              <p className="leading-relaxed text-base">
                Base topic to learn before advanced topic such as Dynamic Programing, Tree etc.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/practice/binarysearch"}>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">                
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                BINARY SEARCH
              </h2>
              <p className="leading-relaxed text-base">
                Huge optimization in searching (From O(N) to O(logN)).
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Courses;
