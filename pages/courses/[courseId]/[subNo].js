import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function Slug({ contents }) {
// function Slug() {
  const router = useRouter();
  const { subNo } = router.query;
  const content = contents["result"][0];
  const [underline, setUnderline] = useState(1);
  const underLine = "activeSection";
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    const submittedData = {
      "doubt": msg,
      "lesson_id": subNo,
      "user_id": 24
    }
    const bodyData = JSON.stringify(submittedData)
    console.log(typeof(bodyData));
    e.preventDefault()
    setMsg('')
    const formData = await fetch("http://localhost:3000/api/adddoubt", {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: bodyData,
    })
    const data_json = await formData.json()
    console.log(data_json)
    console.log(bodyData)
  };

  return (
    <div>
      <Head>
        <title>CONTENT PAGE</title>
      </Head>
      <style jsx>{`
        .video-box {
          width: 1000px;
          height: 600px;
        }
        @media (max-width: 757px) {
          .video-box {
            width: 84vw;
            height: 240px;
          }
        }
        .activeSection {
          border-bottom: 4px solid #0332b0;
        }
        .ytp-impression-link{
          display: none;
        }
      `}</style>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-6 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <iframe
              className="video-box"
              src={content.v_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="w-full lg:pl-10 mt-6 lg:mt-0 my-6">
              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
                S.L. NO: {subNo}
              </h2> */}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 my-6">
                {content.title}
              </h1>

              <p className="leading-relaxed" dangerouslySetInnerHTML={{__html: content.description}} />

              <div className="my-6">
                <div className="flex">
                  <h2
                    className={`m-auto font-bold lg:text-2xl md:text-xs cursor-pointer lg:px-12 md:px-4 ${
                      underline == 1 ? underLine : ""
                    }`}
                    onClick={() => {
                      setUnderline(1);
                    }}
                  >
                    NOTES
                  </h2>
                  <h2
                    className={`m-auto font-bold lg:text-2xl md:text-xs cursor-pointer lg:px-12 md:px-4 ${
                      underline == 2 ? underLine : ""
                    }`}
                    onClick={() => {
                      setUnderline(2);
                    }}
                  >
                    ASSIGNMENT
                  </h2>
                  <h2
                    className={`m-auto font-bold lg:text-2xl md:text-xs cursor-pointer lg:px-12 md:px-4 ${
                      underline == 3 ? underLine : ""
                    }`}
                    onClick={() => {
                      setUnderline(3);
                    }}
                  >
                    ASK DOUBT
                  </h2>
                </div>
              </div>

              <div>
                {underline == 1 ? (
                  <div className="notes">
                    <h1 className="my-4">
                      <span className="text-2xl font-bold">Title:</span>{" "}
                      <span className="text-2xl font-semibold">
                        {content.title}
                      </span>
                    </h1>
                    <p>
                      <span className="text-2xl font-bold">Description: </span>
                      <span className="" dangerouslySetInnerHTML={{__html: content.notes}}></span>
                    </p>
                  </div>
                ) : underline == 2 ? (
                  <h2 dangerouslySetInnerHTML={{__html: content.assg}}></h2>
                ) : (
                  <section className="text-gray-600 body-font relative">
                    <form onSubmit={handleSubmit}>
                      <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            ASK YOUR QUESTION
                          </h1>
                          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            You can't grow without asking stupid questions,
                            cause stupid question strengthens your fundamental
                            knowledge.
                          </p>
                        </div>
                        <div className=" md:w-2/3 mx-auto">
                          <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                              <div className="relative">
                                <label
                                  for="message"
                                  className="leading-7 text-sm text-gray-600"
                                >
                                  Question
                                </label>
                                <textarea
                                  id="message"
                                  name="message"
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-64 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                  value={msg}
                                  onChange={(e) => {
                                    setMsg(e.target.value);
                                  }}
                                  required
                                >
                                  {msg}
                                </textarea>
                              </div>
                            </div>
                            <div className="p-2 w-full">
                              <button
                                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                type="submit"
                              >
                                Ask Us
                              </button>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </form>
                  </section>
                )}
              </div>

              {/* <div className="flex">
                
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const l_id = context.query.subNo;
  // console.log(l_id)
  const data = await fetch(`http://${context.req.headers.host}/api/getcontent?l_id=${l_id}`);
  const contents = await data.json();
  // console.log(context)
  return {
    props: { contents }, // will be passed to the page component as props
  };
}

export default Slug;
