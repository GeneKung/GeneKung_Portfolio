import "./FooterStyle.css"
import React from "react"
import {FaHome, FaMailBulk, FaPhone, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4><FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>454 Lloyd Ave</h4>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>510-990-4392</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>gene.kung428@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>My Information</h4>
          <p>Gene Kung</p>
          <div className="social">
            <FaFacebook size={20} style={{color:"#fff",marginRight:"3rem"}}/>
            <FaTwitter size={20} style={{color:"#fff",marginRight:"3rem"}}/>
            <FaLinkedin size={20} style={{color:"#fff",marginRight:"3rem"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer