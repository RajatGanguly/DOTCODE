import React, { useEffect, useState } from "react";

function Message() {
  const [contents, setContents] = useState("");
  useEffect(() => {
    const fetchData = () => {
      console.log("contents");
      fetch("http://localhost:3000/api/getmessage")
        .then((response) => response.json())
        .then((data) => {setContents(data); console.log(contents)})
        .catch((err) => console.log(err));
      ;
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        {contents["result"] && contents["result"].map((content) => {
          return (
            <>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-white border-transparent rounded-lg shadow-xl">
                  <div className="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                    <h className="font-bold text-gray-600">{content.email}</h>
                  </div>
                  <div className="p-5">
                    {/* <canvas
                      id="chartjs-7"
                      className="chartjs"
                      width="undefined"
                      height="undefined"
                    ></canvas> */}
                    <p>{content.message}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}

      </div>
    </div>
  );
}

// export async function getServerSideProps(context){
//     // console.log(context.req.headers.host)
//     // for (let i of context) {
//     //   console.log(i);
//     // }
//     const messages_promise = await fetch(`http://${context.req.headers.host}/api/getmessage`)
//     const props_contents = await messages_promise.json()
//     console.log(JSON.stringify(props_contents))

//     return {
//       props: {props_contents: JSON.stringify(props_contents)}
//     }
//   }

export default Message;
