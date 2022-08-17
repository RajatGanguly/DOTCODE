import React, { useEffect, useState } from 'react'
import Head from "next/head";
import { CgProfile } from "react-icons/cg"
import { useRouter } from 'next/router';

function EditProfile() {

  const router = useRouter();
  const {editProfile} = router.query;

  const [userName, setUserName] = useState("")
  const [userId, setUserId] = useState("")
  const [email, setEmail] = useState("")
  const [institution , setInstitution] = useState("")
  const [bio , setBio] = useState("")
  const [facebook , setFaacebook] = useState("")
  const [instagram , setInstagram] = useState("")
  const [github , setGithub] = useState("")
  const [leetcode , setLeetcode] = useState("")
  const [linkedin , setLinkedin] = useState("")
  
  const [form , setForm] = useState(1)

  useEffect(()=>{
    fetch(`http://${window.location.host}/api/getuser?u_id=${editProfile}`)
    .then(response => response.json())
    .then(data => {setUserName(data.result[0].name); setUserId(data.result[0].id); setEmail(data.result[0].email); setInstitution(data.result[0].college); setBio(data.result[0].bio); setFaacebook(data.result[0].facebook); setInstagram(data.result[0].instagram); setGithub(data.result[0].github); setLinkedin(data.result[0].linkedin); setLeetcode(data.result[0].leetcode)})
    .catch((e)=>(console.log(e)))
  }, [])
  console.log(editProfile)
  console.log(userId)

  return (
    <div>
        <Head>
          <title>Edit</title>
        </Head>
          <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Tiro+Gurmukhi:ital@1&family=Ubuntu:wght@600&display=swap');
            .edit-head{
              font-family: 'Tiro Gurmukhi', serif;
              font-family: 'Ubuntu', sans-serif;
            }
            .edit-options{
              border: 1px solid #000;
              border-radius: 12px;
              text-align: center;
            }
          `}</style>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-12 m-12">
          <div className="lg:col-span-2 md:col-span-4 border-2 rounded-2xl grid grid-cols-3 p-8">
            <div className="col-start-2 col-span-1 text-8xl"><CgProfile/></div>
            <div className="col-span-1"></div>
            <div className="lg:col-span-6 md:col-span-4"><p className="lg:pr-8 md:pr-0 mt-8 text-center">{userName}</p></div>
            <div className="col-start-1 lg:col-span-6 md:col-span-4 grid grid-cols-5 mx-6">
              <div className="edit-options cursor-pointer bg-slate-200 my-6 col-span-5 text-lg font-semibold" onClick={()=>{setForm(1)}}>
                <p>Edit Basic Info</p>
              </div>
              <div className="edit-options cursor-pointer bg-slate-200 col-span-5 text-lg font-semibold" onClick={()=>{setForm(2)}}>
                <p>Edit Links of other Accounts</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-4 border-2 rounded-2xl">
            <div className="edit-head text-center font-bold text-2xl my-10">EDIT YOUR PROFILE</div>
            <hr />
            {
              form==1 ?
              <div className="md:w-8/12 lg:w-10/12 lg:ml-20">
              <form onSubmit={"handleSubmit"}>
                <div className="mb-6 grid grid-cols-10">
                  <label class="block text-gray-400 col-span-3 lg:text-2xl md:text-xl my-6 font-bold mb-2" for="username">
                    Name: 
                  </label>      
                  <input type="text" className="form-control my-4 block w-full col-span-7 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Name"
                    value={userName}
                    onChange={(e)=>{setUserName(e.target.value)}}
                  />
                </div>
                <div className="mb-6 grid grid-cols-10">
                  <label class="block text-gray-400 col-span-3 lg:text-2xl md:text-xl my-6 font-bold mb-2" for="username">
                    Email Address: 
                  </label>      
                  <input type="text" className="form-control my-4 block w-full col-span-7 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Email Address"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>
                <div className="mb-6 grid grid-cols-10">
                  <label class="block text-gray-400 col-span-3 lg:text-2xl md:text-xl my-6 font-bold mb-2" for="username">
                    Institution: 
                  </label>      
                  <input type="text" className="form-control my-4 block w-full col-span-7 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Institution"
                    value={institution}
                    onChange={(e)=>{setInstitution(e.target.value)}}
                  />
                </div>
                <div className="mb-6 grid grid-cols-10">
                  <label class="block text-gray-400 col-span-3 lg:text-2xl md:text-xl my-6 font-bold mb-2" for="username">
                    Bio: 
                  </label>      
                  <input type="text" className="form-control my-4 block w-full col-span-7 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Institution"
                    value={bio}
                    onChange={(e)=>{setBio(e.target.value)}}
                  />
                </div>

                <div className="grid grid-cols-5">
                  <div className="lg:col-start-3">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Save
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                </div>

              </form>
            </div>


            :


            form==2?
            <div className="md:w-8/12 lg:w-10/12 lg:ml-20">
              <form onSubmit={"handleSubmit"}>
                <div className="mb-6 grid grid-cols-10">
                  <label class="block text-gray-400 col-span-3 lg:text-2xl md:text-xl my-6 font-bold mb-2" for="username">
                    Facebook: 
                  </label>      
                  <input type="text" className="form-control my-4 block w-full col-span-7 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Email Address"
                    value={facebook}
                    onChange={(e)=>{setFaacebook(e.target.value)}}
                  />
                </div>
                <div className="mb-6 grid grid-cols-10">
                  <label class="block text-gray-400 col-span-3 lg:text-2xl md:text-xl my-6 font-bold mb-2" for="username">
                    Instagram: 
                  </label>      
                  <input type="text" className="form-control my-4 block w-full col-span-7 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Institution"
                    value={instagram}
                    onChange={(e)=>{setInstagram(e.target.value)}}
                  />
                </div>
                <div className="mb-6 grid grid-cols-10">
                  <label class="block text-gray-400 col-span-3 lg:text-2xl md:text-xl my-6 font-bold mb-2" for="username">
                    Github: 
                  </label>      
                  <input type="text" className="form-control my-4 block w-full col-span-7 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Name"
                    value={github}
                    onChange={(e)=>{setGithub(e.target.value)}}
                  />
                </div>
                <div className="mb-6 grid grid-cols-10">
                  <label class="block text-gray-400 col-span-3 lg:text-2xl md:text-xl my-6 font-bold mb-2" for="username">
                    Leetcode: 
                  </label>      
                  <input type="text" className="form-control my-4 block w-full col-span-7 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Name"
                    value={leetcode}
                    onChange={(e)=>{setLeetcode(e.target.value)}}
                  />
                </div>
                <div className="mb-6 grid grid-cols-10">
                  <label class="block text-gray-400 col-span-3 lg:text-2xl md:text-xl my-6 font-bold mb-2" for="username">
                    Linkedin: 
                  </label>      
                  <input type="text" className="form-control my-4 block w-full col-span-7 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Name"
                    value={linkedin}
                    onChange={(e)=>{setLinkedin(e.target.value)}}
                  />
                </div>

                <div className="grid grid-cols-5">
                  <div className="lg:col-start-3">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Save
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                </div>

              </form>
            </div>
            :
            ""
            }
          </div>
        </div>
    </div>
  )
}

export default EditProfile