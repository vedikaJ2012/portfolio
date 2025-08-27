import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 z-50 relative'>
      <div className='ml-10 text-2xl'>VJ</div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a 
          href='https://www.linkedin.com/in/vedika-jadhav-57681428b' 
          target='_blank' 
          rel='noopener noreferrer'
          className="hover:text-gray-300 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a 
          href='https://github.com/vedikaJ2012' 
          target='_blank' 
          rel='noopener noreferrer'
          className="hover:text-gray-300 transition-colors"
        >
          <FaGithub />
        </a>
        <a 
          href='https://www.instagram.com/vedika__jadhav__20' 
          target='_blank' 
          rel='noopener noreferrer'
          className="hover:text-gray-300 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar