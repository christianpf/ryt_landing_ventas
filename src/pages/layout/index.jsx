import React from 'react'
import Footer from '../../components/Footer'
import logo from '../../assets/logo.webp'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <header>
      <img src={logo} alt="Logo RYT" className='logo' />
    </header>
    <Outlet/>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Layout