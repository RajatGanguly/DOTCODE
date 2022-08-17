import Head from 'next/head'
import React from 'react'

function Recruitment() {
  return (
    <div>
      <Head>
        <title>DOTCODE | RECRUITMENT</title>
      </Head>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
        .recHead{
          width: 48vw;
          display: block;
          margin: auto;
          padding: 2vh;
          color: #fff;
          text-align: center;
          font-size: 24px;
          margin-top: 6vh;
          margin-bottom: 6vh;
          font-family: 'Ubuntu', sans-serif;
          border: 4px;
          border-radius: 28px;
          background-image: linear-gradient(90deg, #e00e0e, #1010b5);
        }
      `}</style>
        <h1 className="recHead">JOIN US</h1>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf96PQI-6V_YPmxomwRfDH_vNQ2l315D8tfRl6W8nXnn2Pn6g/viewform?embedded=true" width="100%" height="750" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  )
}

export default Recruitment