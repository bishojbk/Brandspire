import React from 'react'
import './main.scss'
import image from './main.jpg'

const main = () => {
  return (
    <div className="main">
      <div className="left">
        <div className="poly1"></div>
        <div className="quote">
          Inspired <br />
          to be <span>better</span>
        </div>
        <div className="description">
          A transformative force in the digital realm, igniting <br />
          growth and propelling businesses to new heights <br />
          with unrivaled expertise.
        </div>
        <button className="button1">Let's Talk</button>
        <button className="button">Our Services</button>
        <div className="poly2"></div>
      </div>
      <div className="right">
        <img src={image} alt=""></img>
      </div>
    </div>
  )
}

export default main
