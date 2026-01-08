import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  //BELOW syntax is for create-react-app projects only
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  
  return (
    <>
      <h1>Hello jeee</h1>
    </>
  )
}

export default App
