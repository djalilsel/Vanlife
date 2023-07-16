import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom' 
import './server'
import Layout from './components/Layout'
import Main from './pages/Main'
import About from './pages/About'
import Vans, { loader as vansLoader} from './pages/Vans'
import VanDetails from './pages/VanDetails'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import ListedVans from './pages/Host/ListedVans'
import ListedVanDetailsLayout from './components/ListedVanDetailsLayout'
import HostDetails from './pages/Host/HostDetails'
import HostPricing from './pages/Host/HostPricing'
import HostPhotos from './pages/Host/HostPhotos'
import ErrorPage from './pages/ErrorPage'
import Error from './pages/Error'
import './App.css'

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Main />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} loader={vansLoader}  errorElement={<Error />}/>
      <Route path='vans/:id' element={<VanDetails />} />
      <Route path='host' element={<HostLayout />} >
        <Route index element={<Dashboard />}/>
        <Route path='income' element={<Income />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='vans' element={<ListedVans />}/>
        <Route path='vans/:id' element={<ListedVanDetailsLayout />}>
          <Route index element={<HostDetails />} />
          <Route path='pricing' element={<HostPricing />} />
          <Route path='photos' element={<HostPhotos />} />
        </Route>
      </Route>
      <Route path='*' element={<ErrorPage />}/>
    </Route>
  ))

function App() {
  
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
