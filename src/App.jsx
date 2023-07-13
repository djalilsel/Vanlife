import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import './server'
import Nav from './pages/Nav'
import Main from './pages/Main'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import Footer from './pages/Footer'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
