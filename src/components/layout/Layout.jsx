import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../navbar/NavbarComponent'

export default function Layout() {
  return (
    <>
    <header>
    <NavbarComponent/>
    </header>
    <main className='max-w-screen-xl mx-auto'>
        <Outlet/>
    </main>
    </>
  )
}
