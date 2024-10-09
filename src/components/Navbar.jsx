import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
  return (
    <div>
        {/* This is the starting point to the home page */}
      {/* Navbar */}
      <div className='flex flex-row justify-between px-20 py-4 absolute top-0 left-0 w-full z-10'>
        <h1 className='font-bold text-2xl'>
          Your Logo
        </h1>
        <div>
          <ul className='flex flex-row gap-8 py-3 pr-40'>
            <li className='cursor-pointer hover:font-bold'>Home <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li>
            <li className='cursor-pointer hover:font-bold'>Electronic <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li>
            <li className='cursor-pointer hover:font-bold'>Contact <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li>
            <li className='cursor-pointer hover:font-bold'>About <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li>
            <li className='cursor-pointer hover:font-bold'>Login</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar