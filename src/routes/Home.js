import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Work from '../components/Work'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
import Form from '../components/Form'
import './HomeStyles.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home