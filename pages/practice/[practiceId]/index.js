import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {useRouter} from "next/router";

function Course() {
  const [user, setUser] = useState(0)
  const [key, setKey] = useState({value: null})
  const router = useRouter();
  const {practiceId} = router.query;
  console.log(practiceId)
  return (
    <div>
      <style jsx>
        {`
          .w-full {
            cursor: pointer;

          }
        `}
      </style>
      <Head>
          <title className="uppercase">{practiceId} | .CODE</title>
      </Head>
      <section className="text-gray-600 body-font mx-0">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          <Link href={`/`}>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg mx-12 my-4">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {/* {content.category} */}cat
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {/* {content.title} */}title
                  </h2>                  
                </div>
              </div>
            </Link>
            {/* {contents["result"].map((content)=>{
              return (
              <Link href={`/courses/${courseId}/${content.id}`} key={content.id}>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg mx-12 my-4">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {content.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {content.title}
                  </h2>                  
                </div>
              </div>
            </Link>
            )})} */}
            
          </div>
        </div>
      </section>
    </div>
  );
}

// export async function getServerSideProps(context){
//   const c_name = context.params.practiceId;
//   console.log(context.req.headers.host)
//   // for (let i of context) {
//   //   console.log(i);
//   // }
//   const course_promise = await fetch(`http://${context.req.headers.host}/api/getlessons?c_name=${c_name}`)
//   const props_contents = await course_promise.json()


//   return {
//     props: {props_contents: JSON.stringify(props_contents)}
//   }
// }

export default Course;