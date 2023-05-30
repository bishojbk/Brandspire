import React from 'react'
import Navbar from './Navbar/navbar'
import Main from "./Main/main"
import "./homepage.scss"

const homepage = () => {
  return (
    <div className='home'>
      <Navbar />
      <Main/>
    </div>
  )
}

export default homepage
