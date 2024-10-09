import React from 'react'
import bgimg from './Images/WhatsApp Image 2024-10-08 at 11.18.20 PM.jpeg'
import access from './Images/Phone-Accessories-PNG-HD-Image-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Login = () => {
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
        {/*Login section*/}
        <div className='flex flex-row justify-between absolute top-10 left-20 right-20 bottom-0 h-[100vh] p-5 items-center bg-white rounded-3xl'>
            <div className='w-1/2 px-16'>
            <div className='flex flex-row justify-between text-4xl font-semibold py-3'>
                <h1 className='text-orange-600'>Sign in</h1>
                <h1 className='text-gray-400'>Sign up</h1>
            </div>
            <input type="text" name="name" id="name" placeholder='Username' className='w-full py-2 my-3 border-2 border-orange-600 solid rounded-xl px-3 text-2xl shadow-md' />
            <br />
            <input type="password" name='password' id="pasword" placeholder='Password' className='w-full py-2 my-3 border-2 border-orange-600 solid rounded-xl px-3 text-2xl shadow-md' />

            <div className='flex flex-row justify-between'>
                <p className='mt-2'>Forgot password</p>
                <button className='bg-lightred w-fit h-fit rounded-md text-center py-2 shadow-lg px-8 text-2xl text-white'>
            Login</button>
            </div>
            </div>
            <div className='w-1/2'>
                <img src={access} alt="" className='w-[100vh] h-[70vh]' />
            </div>
        </div>
    </div>
  )
}

export default Login