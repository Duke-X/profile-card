import { useState } from 'react'
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
    </div>
  )
}

export default App
