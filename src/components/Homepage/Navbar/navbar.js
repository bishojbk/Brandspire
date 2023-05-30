import React from 'react'
import './navbar.scss'
import image from './Group3.jpg'

const navbar = () => {
  return (
    <div className="home">
      <nav className="nav">
        <img src={image} className="logo" alt="logo"></img>
        <div className="items">
          <ul>
            <li className="lists">Services</li>
            <li className="lists">About</li>
            <li className="lists">Contact</li>
            <li className="lists">Blog</li>
            <li className="lists">Portfolio</li>
          </ul>
        </div>
        <div>
          <button className="button">Get a Quote</button>
        </div>
      </nav>
    </div>
  )
}

export default navbar
