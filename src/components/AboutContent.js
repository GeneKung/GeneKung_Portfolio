import './AboutContentStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>Hi, I'm Gene Kung, a developer and student</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/UCLA_Bruins_script.svg/1200px-UCLA_Bruins_script.svg.png" 
                    className='img' alt="true"/>
                </div>
                <div className='img-stack bottom'>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg" 
                    className='img' alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent