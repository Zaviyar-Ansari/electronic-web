import React from 'react'
import bgimg from './Images/WhatsApp Image 2024-10-08 at 11.18.20 PM.jpeg'
import access from './Images/Phone-Accessories-PNG-HD-Image-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div>
        
    {/*Login bg img section*/}
    <div className='relative'>
        <img src={bgimg} alt=""/>
    </div>
    {/* Navbar */}
  <div className='flex flex-row justify-between px-20 py-4 absolute top-10 left-12 w-full z-10 '>
    <h1 className='font-bold text-2xl'>
      Your Logo
    </h1>
    <div>
      <ul className='flex flex-row gap-8 py-3 pr-32'>
        <Link to='/'><li className='cursor-pointer hover:font-bold'>Home <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li></Link>
        <Link to=''><li className='cursor-pointer hover:font-bold'>Electronic <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li></Link>
        <Link to='/contact'><li className='cursor-pointer hover:font-bold'>Contact <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li></Link>
        <Link to='/about'><li className='cursor-pointer hover:font-bold'>About <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li></Link>
        <Link to='/login'><li className='cursor-pointer hover:font-bold'>Login</li></Link>
      </ul>
    </div>
  </div>
    {/*Contact section*/}
    
</div>
  )
}

export default Contact