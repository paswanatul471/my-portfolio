import Header,{HeaderPhone} from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import Timeline from './components/Timeline'
import Services from './components/Services'
// import Testimonial from './components/Testmonial'

import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import React, { useState } from 'react'
import Skills from './components/Skills'

const App = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <>
    <HeaderPhone menuOpen={menuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home/>
    <Skills/>
    <Work />
    <Timeline/>
    <Services/>
    {/* <Testimonial /> */}
    <Contact/>

    <Footer />
    <Toaster />
    </>
  )
}

export default App
