import "./HeroImg.css"

import React from 'react'
import {Link} from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""/>
        </div>
        <div className="content">
            <p>Hi, I'm a Developer</p>
            <h1>Gene Kung</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className=" btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg