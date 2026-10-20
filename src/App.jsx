import React from 'react'
import Logo from './Components/Logo';
import Filter from './Components/Filter';
import './App.css'
import { Route,Routes } from 'react-router-dom';
import Propertydetailed from './Pages/Propertydetailed'
import About from './Pages/About';
import  Contact from './Pages/Contact';
import Addtocart from './Pages/Addtocart';
import Footer from './Components/Footer';


const App = () => {
  
  return (
    <>
      
      <Logo />
      
      <Routes>
        <Route path='/property/:id' element={ <Propertydetailed/>} />
        <Route path='/' element={<Filter />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/addtocart' element={<Addtocart />} />
      </Routes>
      <div className="footer"><Footer/></div>
    </>
  )
}

export default App
