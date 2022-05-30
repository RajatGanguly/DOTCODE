import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { r } = router.query;
  r==1?window.location.replace("/"):null;
  return (
    <div>
      <Head>
        <title>eCOM | DOTCODE</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <style jsx>
        {`
          .p-4{
            cursor: pointer;
          }
        `}
      </style>
        <img src="/home.jpg" style={{width: "100vw", height: "64vh"}} />
        <>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">WHAT YOU'LL GET</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <Link href={"/courses/html"}>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">            
          <svg style={{color: "rgb(9, 182, 225)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64,32,98.94,435.21,255.77,480,413,435.15,448,32ZM372,164H188l4,51H368L354.49,366.39,256,394.48l-98.68-28L150.54,289H198.8l3.42,39.29L256,343.07l53.42-14.92L315,264H148L135.41,114.41l240.79,0Z" fill="#018eb2"></path></svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">HTML</h2>
          <p className="leading-relaxed text-base">A must before you join the GANG of developers, cause it's the backbone of everything</p>
        </div>
      </div>
      </Link>
      <Link href={"/courses/css"}>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <svg style={{color: "rgb(9, 182, 225)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" fill="#018eb2"></path></svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">CSS</h2>
          <p className="leading-relaxed text-base">Know the grammer of styles to make a presentable WEBSITE cause you need to make your site cool</p>
        </div>
      </div>
      </Link>
      <Link href={"/courses/js"}>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0ZM18.3467 20.1196C17.2343 20.1196 16.6053 19.5394 16.1219 18.7501L14.2891 19.8149C14.9512 21.123 16.3044 22.1211 18.3989 22.1211C20.5409 22.1211 22.136 21.0088 22.136 18.9783C22.136 17.0949 21.0541 16.2571 19.1379 15.4354L18.5741 15.1939C17.6065 14.7749 17.1874 14.501 17.1874 13.8244C17.1874 13.277 17.6061 12.8579 18.2667 12.8579C18.9143 12.8579 19.3314 13.131 19.7181 13.8244L21.4743 12.6968C20.7314 11.3901 19.7006 10.891 18.2667 10.891C16.2526 10.891 14.9638 12.1787 14.9638 13.8701C14.9638 15.7063 16.0449 16.5749 17.6724 17.2682L18.2362 17.5101C19.2648 17.96 19.8781 18.2339 19.8781 19.0072C19.8781 19.6526 19.2811 20.1196 18.3467 20.1196ZM9.60647 20.1055C8.83161 20.1055 8.50933 19.5741 8.15504 18.9455L6.31923 20.057C6.85104 21.1825 7.89676 22.117 9.70247 22.117C11.7009 22.117 13.0701 21.0541 13.0701 18.7189V11.0198H10.8149V18.6884C10.8149 19.8156 10.3474 20.1055 9.60647 20.1055Z" fill="#018eb2"/> </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">JAVA SCRIPT</h2>
          <p className="leading-relaxed text-base">The mostly used one in all LANGUAGE to gain mastery in the DEV community</p>
        </div>
      </div>
      </Link>
      <Link href={"/courses/node"}>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M429.76,130.07,274.33,36.85a37,37,0,0,0-36.65,0L82.24,130.06A38.2,38.2,0,0,0,64,162.83V349a38.26,38.26,0,0,0,18.24,32.8L123,406.14l.23.13c20.58,10.53,28.46,10.53,37.59,10.53,32.14,0,52.11-20.8,52.11-54.29V182a8.51,8.51,0,0,0-8.42-8.58H182.13a8.51,8.51,0,0,0-8.42,8.58V362.51a15,15,0,0,1-6.85,13.07c-5.9,3.6-14.47,2.84-24.14-2.15l-39.06-23.51a1.1,1.1,0,0,1-.48-.92V165.46a1.32,1.32,0,0,1,.59-1.06l151.84-93a.82.82,0,0,1,.73,0l151.93,93a1.34,1.34,0,0,1,.55,1.1V349a1.28,1.28,0,0,1-.45,1L256.31,440.65a1.22,1.22,0,0,1-.8,0l-38.83-23.06a7.8,7.8,0,0,0-7.83-.41l-.34.2c-10.72,6.35-13.6,8-23.54,11.62-1.62.59-5.43,2-5.76,5.77s3.29,6.45,6.51,8.32l51.9,31.87a35.67,35.67,0,0,0,18.3,5.07l.58,0h0a35.87,35.87,0,0,0,17.83-5.07l155.43-93.13A38.37,38.37,0,0,0,448,349V162.83A38.21,38.21,0,0,0,429.76,130.07Z" fill="#018eb2"/><path d="M307.88,318.05c-37.29,0-45.24-10.42-47.6-27.24a8.43,8.43,0,0,0-8.22-7.32h-19.8a8.44,8.44,0,0,0-8.26,8.58c0,14.58,5.12,62.17,83.92,62.17h0c24.38,0,44.66-5.7,58.63-16.49S388,311.26,388,292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89,0-5.47,0-18.28,35.46-18.28,25.23,0,38.74,3.19,43.06,20a8.35,8.35,0,0,0,8.06,6.67h19.87a8.24,8.24,0,0,0,6.16-2.86,8.91,8.91,0,0,0,2.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06,0-73.55,20.75-73.55,55.5,0,38.1,28.49,48.87,71.29,53.33,50,5.17,50,12.71,50,19.37C349.46,304.2,345.15,318.05,307.88,318.05Z" fill="#018eb2"/></svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">NODE</h2>
          <p className="leading-relaxed text-base">Run time env to make you the king of SERVER and use JS wherever you want</p>
        </div>
      </div>
      </Link>
      <Link href={"/courses/mysql"}>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> <path d="M21.875 7.568c-0.156 0-0.26 0.021-0.365 0.047v0.016h0.016c0.073 0.135 0.193 0.24 0.286 0.365 0.073 0.141 0.135 0.286 0.203 0.427l0.021-0.021c0.125-0.089 0.188-0.229 0.188-0.443-0.052-0.063-0.063-0.13-0.109-0.188-0.052-0.089-0.167-0.135-0.24-0.203zM7.693 25.161h-1.234c-0.042-2.083-0.167-4.042-0.359-5.88h-0.010l-1.88 5.88h-0.943l-1.865-5.88h-0.016c-0.135 1.76-0.224 3.724-0.26 5.88h-1.125c0.073-2.625 0.255-5.083 0.547-7.375h1.531l1.781 5.417h0.010l1.797-5.417h1.458c0.323 2.688 0.516 5.146 0.573 7.375zM13.047 19.719c-0.5 2.729-1.167 4.714-1.984 5.948-0.646 0.953-1.349 1.432-2.115 1.432-0.203 0-0.453-0.063-0.755-0.188v-0.656c0.151 0.021 0.323 0.036 0.516 0.036 0.359 0 0.646-0.104 0.865-0.297 0.26-0.24 0.391-0.51 0.391-0.807 0-0.208-0.099-0.625-0.307-1.26l-1.349-4.208h1.214l0.969 3.146c0.219 0.719 0.313 1.214 0.271 1.5 0.536-1.417 0.906-2.969 1.115-4.646zM29.484 25.161h-3.51v-7.375h1.182v6.469h2.328zM25.057 25.339l-1.354-0.667c0.12-0.099 0.234-0.208 0.339-0.333 0.578-0.672 0.865-1.677 0.865-3 0-2.443-0.958-3.661-2.875-3.661-0.938 0-1.672 0.307-2.198 0.927-0.573 0.677-0.865 1.677-0.865 2.995 0 1.297 0.255 2.245 0.766 2.854 0.469 0.542 1.172 0.818 2.115 0.818 0.349 0 0.672-0.042 0.964-0.13l1.766 1.031 0.484-0.833zM20.667 23.682c-0.302-0.479-0.448-1.25-0.448-2.313 0-1.859 0.563-2.786 1.693-2.786 0.589 0 1.026 0.224 1.302 0.667 0.297 0.484 0.448 1.245 0.448 2.297 0 1.87-0.568 2.813-1.693 2.813-0.594 0-1.026-0.224-1.307-0.667zM18.458 23.12c0 0.625-0.229 1.141-0.693 1.536-0.458 0.401-1.068 0.604-1.844 0.604-0.724 0-1.417-0.229-2.099-0.688l0.318-0.635c0.583 0.292 1.109 0.438 1.589 0.438 0.443 0 0.792-0.099 1.042-0.292 0.25-0.198 0.401-0.474 0.401-0.823 0-0.438-0.307-0.813-0.865-1.125-0.516-0.286-1.552-0.875-1.552-0.875-0.563-0.411-0.839-0.849-0.839-1.573 0-0.599 0.208-1.078 0.625-1.443 0.422-0.375 0.958-0.557 1.625-0.557 0.682 0 1.307 0.182 1.87 0.547l-0.286 0.635c-0.479-0.203-0.953-0.307-1.417-0.307-0.38 0-0.672 0.094-0.875 0.276s-0.328 0.411-0.328 0.698c0 0.438 0.313 0.813 0.885 1.135 0.526 0.286 1.583 0.891 1.583 0.891 0.578 0.406 0.865 0.844 0.865 1.557zM30.964 15.313c-0.714-0.016-1.266 0.057-1.729 0.255-0.13 0.052-0.344 0.052-0.365 0.219 0.073 0.073 0.083 0.188 0.146 0.286 0.109 0.177 0.292 0.417 0.464 0.542 0.188 0.146 0.375 0.292 0.568 0.417 0.349 0.214 0.74 0.339 1.083 0.552 0.193 0.125 0.391 0.286 0.583 0.417 0.099 0.068 0.161 0.188 0.286 0.229v-0.026c-0.063-0.078-0.078-0.193-0.141-0.286-0.089-0.089-0.177-0.167-0.266-0.255-0.26-0.349-0.578-0.651-0.927-0.901-0.286-0.193-0.911-0.464-1.026-0.792l-0.016-0.021c0.193-0.016 0.422-0.089 0.609-0.141 0.302-0.078 0.583-0.063 0.896-0.141 0.141-0.036 0.281-0.078 0.427-0.125v-0.078c-0.161-0.161-0.281-0.38-0.448-0.531-0.453-0.391-0.953-0.776-1.469-1.094-0.281-0.182-0.635-0.297-0.932-0.448-0.104-0.052-0.286-0.078-0.344-0.167-0.161-0.198-0.255-0.453-0.37-0.688-0.255-0.49-0.505-1.031-0.729-1.552-0.161-0.349-0.255-0.693-0.453-1.016-0.917-1.516-1.917-2.432-3.448-3.333-0.328-0.188-0.724-0.266-1.141-0.365-0.224-0.010-0.443-0.026-0.667-0.036-0.146-0.063-0.286-0.229-0.411-0.313-0.51-0.323-1.823-1.016-2.193-0.099-0.24 0.583 0.354 1.151 0.563 1.443 0.151 0.208 0.344 0.438 0.453 0.667 0.063 0.156 0.078 0.318 0.141 0.479 0.141 0.391 0.276 0.828 0.464 1.193 0.099 0.188 0.203 0.385 0.328 0.552 0.073 0.099 0.198 0.141 0.224 0.302-0.125 0.182-0.135 0.448-0.203 0.667-0.323 1.010-0.198 2.255 0.255 3 0.146 0.224 0.484 0.714 0.938 0.526 0.401-0.161 0.313-0.667 0.427-1.115 0.026-0.109 0.010-0.177 0.063-0.25v0.021c0.13 0.25 0.255 0.49 0.37 0.74 0.271 0.438 0.755 0.891 1.156 1.193 0.214 0.161 0.38 0.438 0.646 0.536v-0.026h-0.021c-0.057-0.078-0.13-0.115-0.203-0.177-0.161-0.161-0.339-0.359-0.469-0.536-0.37-0.5-0.703-1.052-0.995-1.62-0.146-0.281-0.271-0.583-0.385-0.859-0.052-0.104-0.052-0.266-0.141-0.318-0.135 0.193-0.333 0.359-0.427 0.604-0.172 0.38-0.188 0.854-0.255 1.344-0.031 0.010-0.016 0-0.031 0.021-0.286-0.073-0.385-0.365-0.49-0.615-0.271-0.635-0.313-1.651-0.083-2.38 0.063-0.188 0.328-0.776 0.224-0.953-0.057-0.172-0.234-0.271-0.328-0.406-0.12-0.167-0.24-0.38-0.323-0.568-0.214-0.5-0.318-1.052-0.552-1.552-0.104-0.229-0.292-0.469-0.443-0.682-0.172-0.24-0.359-0.411-0.49-0.693-0.047-0.099-0.109-0.26-0.036-0.365 0.016-0.073 0.052-0.099 0.125-0.12 0.115-0.099 0.448 0.026 0.563 0.083 0.328 0.13 0.604 0.255 0.88 0.443 0.125 0.089 0.26 0.255 0.422 0.302h0.188c0.286 0.063 0.604 0.016 0.87 0.099 0.474 0.151 0.901 0.37 1.286 0.609 1.167 0.745 2.125 1.797 2.776 3.052 0.109 0.203 0.156 0.391 0.255 0.604 0.182 0.443 0.417 0.885 0.604 1.307s0.365 0.849 0.635 1.198c0.135 0.188 0.667 0.286 0.911 0.38 0.177 0.083 0.453 0.156 0.609 0.25 0.307 0.188 0.609 0.401 0.896 0.609 0.146 0.099 0.589 0.323 0.615 0.5z" fill="#018eb2"/> </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">MYSQL</h2>
          <p className="leading-relaxed text-base">Most simple yet popular RDBMS to handle DATABASE like a PRO</p>
        </div>
      </div>
      </Link>
      <Link href={"/courses/react"}>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M14.448 16.24a21.877 21.877 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 0 1-2.276 0c.377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.499-2.419.261-4.09 1.884.591.643 1.179 1.374 1.746 2.175.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 0 1-1.746-2.175 21.877 21.877 0 0 1-2.757-.425zm4.067-8.142a27.512 27.512 0 0 1 2.276 0A20.523 20.523 0 0 0 12 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0 1 11.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0 0 15.787 12a25.368 25.368 0 0 0-1.893-3.28 25.368 25.368 0 0 0-3.788 0A25.368 25.368 0 0 0 8.213 12a25.368 25.368 0 0 0 1.893 3.28 25.368 25.368 0 0 0 3.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 0 0-.612-1.667 27.512 27.512 0 0 1-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304.17.536.374 1.094.612 1.667a27.512 27.512 0 0 1 1.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 0 1-1.138-1.97c-.238.572-.442 1.13-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6-.41-.892-.749-1.766-1.01-2.6-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445c-.55-.121-1.135-.223-1.75-.304a27.511 27.511 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76z" fill="#018eb2"/> </g> </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">REACT</h2>
          <p className="leading-relaxed text-base">JS Library by FACEBOOK to build web application in industry standards</p>
        </div>
      </div>
      </Link>
    </div>
    <Link href={"/courses"}><button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">View All</button></Link>
  </div>
</section>
        </>

    </div>
  )
}
