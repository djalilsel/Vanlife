import {  Route, Link, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom' 
import './server'
import Layout from './components/Layout'
import Main from './pages/Main'
import About from './pages/About'
import Vans, { loader as vansLoader} from './pages/Vans'
import VanDetails, { loader as vanDetailsloader} from './pages/VanDetails'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews' 
import ListedVans, { loader as hostvansloader } from './pages/Host/ListedVans'
import ListedVanDetailsLayout, { loader as hostvansdetailsloader } from './components/ListedVanDetailsLayout'
import HostDetails from './pages/Host/HostDetails'
import HostPricing from './pages/Host/HostPricing'
import HostPhotos from './pages/Host/HostPhotos'
import ErrorPage from './pages/ErrorPage'
import Error from './pages/Error'
import Login from './pages/Login'
import './App.css'

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Main />} />
      <Route path='login' element={<Login />}/>
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} loader={vansLoader}  errorElement={<Error />}/>
      <Route path='vans/:id' element={<VanDetails />} loader={vanDetailsloader} />
      <Route 
      path='host' 
      element={<HostLayout />}
      loader={async () =>{
        return null
      }} >
        <Route 
        index 
        element={<Dashboard />}
        loader={async () =>{
          return null
        }} />
        <Route 
        path='income' 
        element={<Income />}
        loader={async () =>{
          return null
        }} />
        <Route 
        path='reviews' 
        element={<Reviews />}
        loader={async () =>{
          return null
        }} />
        <Route 
        path='vans' 
        element={<ListedVans />}
        loader={hostvansloader}/>
        <Route 
        path='vans/:id' 
        element={<ListedVanDetailsLayout />}
        loader={hostvansdetailsloader}>
          <Route 
          index 
          element={<HostDetails />}
          loader={async () =>{
            return null
          }} />
          <Route 
          path='pricing' 
          element={<HostPricing />}
          loader={async () =>{
            return null
          }} />
          <Route 
          path='photos' 
          element={<HostPhotos />}
          loader={async () =>{
            return null
          }} />
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
