import React from 'react'
import bgimg from './Images/WhatsApp Image 2024-10-08 at 11.18.20 PM.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div>
    {/*Login bg img section*/}
    <div className="relative">
      <img src={bgimg} alt="background" className="object-cover w-full h-screen" />
        {/* Contact us section */}
      <div className="absolute inset-0 flex flex-row items-center justify-center mx-36 rounded-3xl bg-lightblue">
        <div className="px-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4 pl-5">
            It is simply dummy text of the printing<br />
            and typesetting industry.Lorem Ipsum has <br />
            been the industry's standard dummy text <br />
            ever since the 1500s,when an unknown printer <br />
            took a galley of type and scrambled it to make <br />
            a type specimen book. <br />
          </p>
          <p className="mb-4 pl-5">
        <FontAwesomeIcon icon={faEnvelope} className='text-2xl' />   kashifhurmat893@gmail.com
      </p>
      <p className="mb-4 pl-5">
        <FontAwesomeIcon icon={faPhone} className='text-2xl' />   +92 302 5058 413
      </p>
        </div>
        <div  className='bg-white p-3 rounded-2xl'>
          <h1 className='text-4xl font-semibold'>We’d love to hear from you! <br /> Lets get in touch</h1>
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor="name" className='flex flex-col'>Name<input type="text" id="name"  className='p-2 border-2 border-orange-600 solid rounded-lg' /></label>
          <label htmlFor="name" className='flex flex-col'>User<input type="text" id="user"  className='p-2 border-2 border-orange-600 solid rounded-lg' /></label>
          <label htmlFor="name" className='flex flex-col'>Email<input type="email" id="email"  className='p-2 border-2 border-orange-600 solid rounded-lg' /></label>
          <label htmlFor="name" className='flex flex-col'>Phone<input type="number" id="phone" className='p-2 border-2 border-orange-600 solid rounded-lg'  /></label>
          <label htmlFor="name" className='flex flex-col'>Password<input type="password" id="password" className='p-2 border-2 border-orange-600 solid rounded-lg'  /></label>
          <label htmlFor="name" className='flex flex-col col-span-2'>Message <textarea name="message" id="message" className='p-2 border-2 border-orange-600 solid rounded-lg'></textarea></label>
          <button className='bg-lightred w-auto h-auto rounded-md text-center py-2 text-white mt-6'>
          Send Message </button>
        </div>
        </div>
      </div>
    </div>
    {/* Navbar */}
    <div className='flex flex-row justify-between px-48 py-3 absolute top-0 left-0 w-full z-10'>
        <h1 className='font-bold text-2xl'>
          Your Logo
        </h1>
        <div>
          <ul className='flex flex-row gap-8 py-3 pr-40'>
            <Link to='/'><li className='cursor-pointer hover:font-bold'>Home <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li></Link>
            <Link to=''><li className='cursor-pointer hover:font-bold'>Electronic <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li></Link>
            <Link to='/contact'><li className='cursor-pointer hover:font-bold'>Contact <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li></Link>
            <Link to='/about'><li className='cursor-pointer hover:font-bold'>About <FontAwesomeIcon icon={faChevronDown} className='ml-2' /></li></Link>
            <Link to='/login'><li className='cursor-pointer hover:font-bold'>Login</li></Link>
          </ul>
        </div>
      </div>

  </div>
  
  )
}

export default Contact