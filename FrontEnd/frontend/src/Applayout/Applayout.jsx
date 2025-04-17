import React from 'react'

import { Outlet, useNavigation } from 'react-router-dom'

import { Heder } from '../components/Heder'
import { Footer } from '../components/Footer'
import {Loading} from "../pages/Loading"

  

export const Applayout = () => {

  const navigation=useNavigation()
  console.log(" this si sloading navigation",navigation)
  if(navigation.state === "loading")
  {
    return <Loading/>
  }
  return (
    <>
      <Heder/>
      <Outlet/>
     <Footer/>
    </>
  )
}
