import { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import './App.css'

function App() {

  return (
    <div style={{}}>
      <ProfileCard/>
    </div>
  )
}

function ProfileCard(){

  return(
    <div style={{width : "500px", height : "500px", borderRadius : "5px", backgroundColor : "#30336b"}}>
      <img src="./src/assets/v.jpg" alt="" style={{width : "100px", height : "100px", borderRadius : "50px",
        marginTop : "30px",
      }}/>
      <div style={{color : "white", fontSize : "25px", fontFamily : "monospace"}}>Web Developer</div>
      <div style={{marginBottom : "60px", fontSize : "17px" , fontFamily : "monospace"}}>Ex-Ralson</div>
      <a href="./src/assets/VadishChhatwal.pdf">
      <button style={{marginBottom : "100px", padding : "10px 30px", borderRadius : "10px", backgroundColor : 'white', color : "#30336b", fontFamily : "monospace"}}>Resume</button>
      </a>
      <div style={{marginRight : "25px"}}>
        <a href="https://www.linkedin.com/in/vadish-chhatwal-31b868249/" target='_blank' style={{textDecoration : "none", color : "white"}}>
          <FaLinkedin style={{fontSize : "50px", marginLeft : "40px"}}/>
        </a>
        <a href="https://www.instagram.com/vadish_chhatwal_/" target='_blank' style={{textDecoration : "none", color : "white"}}>
          <FaInstagram style={{fontSize : "50px", marginLeft : "40px"}}/>
        </a>
        <a href="https://github.com/Duke-X" target='_blank' style={{textDecoration : "none", color : "white"}}>
          <FaGithub style={{fontSize : "50px", marginLeft : "40px"}}/>
        </a>
        <a href="https://open.spotify.com/user/31uip4gai3yxjocaraaymaltyxnm?trackId=52HEmNCNvewyByx7xofF0T" target='_blank' style={{textDecoration : "none", color : "white"}}>
          <FaSpotify style={{fontSize : "50px", marginLeft : "40px"}}/>
        </a>
      </div>

      </div>
  )
}

export default App
