import React from 'react'
import '../styles/globals.scss'
import '../styles/header__pages.global.scss'
import dynamic from 'next/dynamic'
// import Nav from '../components/Nav/Nav'
const Nav = dynamic(()=>import("../components/Nav/Nav"),{ssr:false})
import Footer from '../components/Footer/Footer'
import NavComponent from '../components/Nav/NavComponent'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Nav/>
      <Component {...pageProps}/>
      <Footer/>
    </>
  )
}

export default MyApp