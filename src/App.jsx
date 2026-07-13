import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import {ScrollTrigger,SplitText} from "gsap/all"
import gsap from 'gsap'
import Performance from './components/Performance'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Footer from './components/Footer'
import Highlight from './components/Highlight'


gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
      <Performance/>
      <Features/>
      <Highlight/>
      <Footer/>
    </main>
  )
}

export default App