import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(0)
  const [key, setKey] = useState({value: null})
  const logout = () =>{
    localStorage.removeItem("token")
    setUser({value: null})
    setKey(Math.random())
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      setUser({value: token})
      setKey(Math.random())
    }
    
  }, [])
  
  
  return (
    <>
      <Navbar key={key} user={user} logout={logout} />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
