import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const RootLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <footer>Footer</footer>
    </>
  )
}

export default RootLayout