import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getCookieAPI, homeAPI } from './api/cookiesApi'

function App() {

  

  function handleGet(){
    homeAPI()
    .then((data)=>{
      if(data){
        window.location.reload()
        console.log("GET data ",data)
      }
    }).catch((Error)=>{
      console.log("error in get data ",Error)
    })
  }

  function handleCookie(){
    getCookieAPI()
    .then((data)=>{
      console.log("cookie ",data)
    }).catch((Err)=>{
      console.log("err in get cookie ",Err)
    })
  }
 

  return (
    <>
    <p>HEllo React</p>
    <button onClick={handleGet} >Get</button>
    <button onClick={handleCookie}    >Cookie</button>

     
    </>
  )
}

export default App
