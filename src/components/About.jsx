import React from 'react'
import accessories from './Images/Phone-Accessories-PNG-HD-Image-removebg-preview.png'
import ladyusetab from './Images/istockphoto-1143494215-612x612.jpg'
import review1 from './Images/download.jpg'
import review2 from './Images/person4.jpg'
import review3 from './Images/images.jpg'
import airpodreview from './Images/istockphoto-1480347688-612x612.jpg'
import access from './Images/maxresdefault.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const About = () => {
  return (
    <div>
        {/* Navbar */}
      <div className='flex flex-row justify-between px-20 py-4 absolute top-0 left-0 w-full z-10'>
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
        {/* the top*/}
        <div>
            <p className='bg-lightblue text-center text-xl my-20 py-4'>Are you university or school for an online partnership?</p>
        </div>

        {/* About the main content*/}
        <div className='flex flex-row justify-between'>
            <div className='px-20 py-40'>
            <h1 className='text-5xl font-semibold'>Open a Mobile <br /> Accessories Store <br /> Online</h1>
            <p className='text-4xl mt-10'>Best Tips to Start an <br /> Online Business</p>
            <button className='bg-lightred w-auto h-auto rounded-md text-center p-3 text-white mt-10'>
            Shop Now <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
            </button>
            </div>
            <img src={accessories} alt="" className="w-[130vh] h-[100vh]" />
        </div>

        {/* After the about main section*/}
        <div className='bg-lightblue p-4 text-4xl font-semibold text-start'>
            <ul className='flex flex-row justify-evenly  '>
                <li>870 <br /> <span className='text-base font-semibold'>Shops</span> </li>
                <li>20,000+ <br /> <span className='text-base font-semibold'>User</span></li>
                <li>260 <br /> <span className='text-base font-semibold'>Subscribe</span></li>
                <li>73,990 <br /> <span className='text-base font-semibold'>Active</span></li>   
            </ul>
        </div>

        {/*another div section  Benifits of online buyingservice with us*/}

        <div className='bg-main pb-10'>
        <h1 className='text-center text-xl text-orange-600 pt-20 pb-5'>Why choose us</h1>
        <h1 className='text-center text-4xl font-semibold'>Benifits of online buying <br /> service with us</h1>
        <div className='flex flex-row justify-evenly py-5 px-8 pt-20'>
        <div className='bg-box p-5 rounded-xl shadow-md py-10'>
            <h1 className='text-2xl font-semibold pb-3'>Choose teaching</h1>
            <p>simply dummy text of the <br /> printing and typesetting <br /> industry. Lorem Ipsum has been <br />the industry's</p>
        </div>
        <div className='bg-box p-5 rounded-xl shadow-md py-10'>
            <h1 className='text-2xl font-semibold pb-3'>24/7 available </h1>
            <p>simply dummy text of the <br /> printing and typesetting <br /> industry. Lorem Ipsum has been <br />the industry's</p>
        </div>
        <div className='bg-box p-5 rounded-xl shadow-md py-10'>
            <h1 className='text-2xl font-semibold pb-3'>Whiteboard</h1>
            <p>simply dummy text of the <br /> printing and typesetting <br /> industry. Lorem Ipsum has been <br />the industry's</p>
        </div>
        <div className='bg-box p-5 rounded-xl shadow-md py-10'>
            <h1 className='text-2xl font-semibold pb-3'>Afterable price</h1>
            <p>simply dummy text of the <br /> printing and typesetting <br /> industry. Lorem Ipsum has been <br />the industry's</p>
        </div>
        </div>

        <div className='flex flex-row justify-start'>
            <img src={ladyusetab} alt="" className='w-[80vh] h-[70vh] p-20' />
        <div className='py-20 px-10'>
            <p className='text-orange-600'>Customer your product us</p>
            <h1 className='text-2xl font-extrabold mb-3'>Personilized profeissional <br /> online buying on your schedule</h1>
            <p className='text-sm'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum <br /> has been the industry's standard dummy text ever since the 1500s, when <br />
            an unknown printer took a galley of type and scrambled it to make a type <br /> specimen book</p>
            <button className='bg-lightred w-auto h-auto rounded-md text-center p-3 px-6 text-white mt-10'>
            Get Started
            </button>
        </div>
        </div>

        {/*another last div*/}
        <div className='flex flex-row justify-between'>
        <div className='py-20 px-10'>
            <p className='text-orange-600'>Customer your product us</p>
            <h1 className='text-2xl font-extrabold mb-3'>Personilized profeissional <br /> online buying on your schedule</h1>
            <p className='text-sm'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum <br /> has been the industry's standard dummy text ever since the 1500s, when <br />
            an unknown printer took a galley of type and scrambled it to make a type <br /> specimen book</p>
            <button className='bg-lightred w-auto h-auto rounded-md text-center p-3 px-6 text-white mt-10'>
            Get Started
            </button>
        </div>
            <div className='relative'>
            <img src={access} alt="" className='w-[80vh] h-[70vh] p-20 mr-[20vh]' />
            </div>
            <div className='absolute'>
            <img src={airpodreview} alt="" className='w-[80vh] h-[70vh] p-20 ml-[150vh] mt-[13vh]' />
            </div>
        </div>

        </div>

        {/*testomional section*/}

        <div className='my-20 text-center' >
            <p className='text-lg font-bold text-orange-600'>Our testomional</p>
            <h1 className='text-2xl font-bold'>What our users say about us</h1>
            <div className='flex flex-row justify-center items-center  space-x-8 mt-7 mb-3'> 
                <img src={review1} alt="" className='w-12 h-12 rounded-full' />
                <img src={review2} alt="" className='w-14 h-14 rounded-full mt-3 border-2 border-blue-800 border-solid' />
                <img src={review3} alt="" className='w-12 h-12 rounded-full' />
            </div>
            <p className='font-semibold text-lg'>About Monica</p>
            <p className='text-sm'>Student at finance</p>
            <p className='text-sm my-6' >s simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the <br /> 1500s,.</p>
        </div>
    </div>
  )
}

export default About