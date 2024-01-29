import React from 'react'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import Projects from './Components/Projects'
import About from './Components/About'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
   
   <Navbar/> 
  <Routes>
    
  <Route path='/' element={<Welcome/>}/>
   <Route path='proj' element={<Projects/>}/>
   <Route path='about' element={<About/>}/>
   <Route path='cont' element={ <Contacts/>}/>

  </Routes>
  <Footer/>
  {/**/} 
    </>
  )
}

export default App
