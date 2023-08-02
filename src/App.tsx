import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Home from './components/Home/Home'
import TourDetails from './components/TourDetails/TourDetails'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

//store
import { Provider } from 'react-redux'
import { store } from './store/store'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Faqs from './components/Faqs/Faqs'

function App() {

  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/tours/:id' element={<TourDetails />} />
          <Route path='/guides/:id' element={<Profile />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
