import React from 'react'
import Navbar from './components/Navbar'
import HomeProfile from './components/HomeProfile'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-neutral-900 overflow-hidden text-neutral-300 antialiased selection: bg-cyan-200 selection:text-cyan-500">
      <div className='flixed top-0 -z-10 h-full w-full'></div>
      {/* Background glow */}
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]" />
      
      {/* Content */}
      <div className='container mx-auto px-8'>
        <Navbar />
        <HomeProfile />
        <About />
        <Technologies />
        <Projects />
        <Contacts />
      </div>
      
    </div>
  )
}

export default App
