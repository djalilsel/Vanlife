import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import Nav from './components/Nav'
import Main from './components/Main'
import Vans from './components/Vans'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
