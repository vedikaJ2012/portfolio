import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGit } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='ml-10 text-2xl'>VJ</div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGit />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar