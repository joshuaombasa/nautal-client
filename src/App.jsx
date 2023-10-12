import Rect, { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Boats, { loader as boatsLoader } from './pages/boats/Boats'
import Login, { action as loginAction, loader as loginLoader } from './pages/Login'
import HostLayout, { loader as hostLayoutLoader } from './components/HostLayout'
import NotFound from './pages/NotFound'
import Singleboat, { loader as singleBoatLoader } from './pages/boats/SingleBoat'
import Dashboard, { loader as dashboardLoader } from './pages/host/Dashboard'
import HostBoats, { loader as hostBoatsLoader } from './pages/host/HostBoats'
import HostBoatDetails, { loader as hostBoatDetailsLoader } from './pages/host/HostBoatDetails'
import Income, { loader as incomeLoader } from './pages/host/Income'
import Reviews, { loader as reviewsLoader } from './pages/host/Reviews'
import SelectedHostBoatDetails, { loader as selectedHostBoatDetailsLoader } from './components/SelectedHostBoatDetails'
import SelectedHostBoatPrice, { loader as selectedHostBoatPriceLoader } from './components/SelectedHostBoatPrice'
import SelectedHostBoatPhotos, { loader as selectedHostBoatPhotosLoader } from './components/SelectedHostBoatPhotos'
import Error from './pages/Error'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='boats' element={<Boats />} loader={boatsLoader} errorElement={<Error />} />
      <Route path='boats/:id' element={<Singleboat />} loader={singleBoatLoader} errorElement={<Error />} />
      <Route path='host' element={<HostLayout />} loader={hostLayoutLoader}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} loader={incomeLoader} />
        <Route path='boats' element={<HostBoats />} loader={hostBoatsLoader} errorElement={<Error />} />
        <Route path='boats/:id' element={<HostBoatDetails />} loader={hostBoatDetailsLoader} errorElement={<Error />}>
          <Route index element={<SelectedHostBoatDetails />} loader={selectedHostBoatDetailsLoader} />
          <Route path='pricing' element={<SelectedHostBoatPrice />} loader={selectedHostBoatPriceLoader} />
          <Route path='photos' element={<SelectedHostBoatPhotos />} loader={selectedHostBoatPhotosLoader} />
        </Route>
        <Route path='reviews' element={<Reviews />} loader={reviewsLoader} />
      </Route>
      <Route path='login' element={<Login />} action={loginAction} loader={loginLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
