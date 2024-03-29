import React, { useState } from "react";
import Head from "next/head";
import { ToastContainer , toast } from "react-toastify";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submittedData = {
      email: email,
      message: message,
    };
    const bodyData = JSON.stringify(submittedData);
    const fetchData = await fetch(`${window.location.origin}/api/contact`, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: bodyData,
    });
    setEmail("")
    setMessage("")
    toast.success('We got your message! Stay with us😄', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      <Head>
        <title>CONTACT | .CODE</title>
      </Head>
      <section className="text-gray-600 body-font relative">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover
        />
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.9611924533933!2d88.0678928145525!3d22.05107995746853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f097d302562d%3A0xef6ffa57643e58db!2sP5%20Ground!5e0!3m2!1sen!2sin!4v1652855505879!5m2!1sen!2sin"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Reach Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We are always here to help you. Just let us know your thoughts.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  minLength={10}
                  maxLength={24}
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                  >
                  Message
                </label>
                <input
                  id="message"
                  name="message"
                  minLength={4}
                  maxLength={1024}
                  value={message}
                  onChange={(e)=>{setMessage(e.target.value)}}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Enquire
              </button>
              <p className="text-xs text-gray-500 mt-3">
                We will never reveal your email to other organizations. It's
                between you and us only.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
