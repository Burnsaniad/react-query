import React from 'react'
import { Outlet } from 'react-router-dom'
import {Footer, Header} from "../index"

export default function AppLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}