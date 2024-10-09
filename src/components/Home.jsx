import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import mainimg2 from './Images/tiltimg.png'
import speaker from './Images/speaker-isolated-white-background_1263741-17209_prev_ui.png'
import iphone from './Images/images__2_-removebg-preview.png'
import tablet from './Images/images (1)_prev_ui.png'
import laptop from './Images/images_prev_ui.png'
import mainimg from './Images/levitating-music-headphones-display-removebg-preview.png'
import camera from './Images/Realistic-digital-camera-vector-PNG-removebg-preview.png'
import tab from './Images/png-transparent-smartphone-feature-phone-tablet-computer-telephone-mobile-phone-and-tablet-angle-gadget-electronics-thumbnail-removebg-preview.png'
import tv from './Images/png-clipart-dns-led-backlit-lcd-lg-uj630v-lg-full-hd-smart-led-tv-inch-led-tv-television-media-removebg-preview.png'
import airpod from './Images/download-removebg-preview.png'
import stand from './Images/images-removebg-preview.png'
import usb from './Images/images__1_-removebg-preview.png'
import iphone2 from './Images/1fbe8131b5-removebg-preview.png'
import iphone3 from './Images/5b95b05d61d9d6c2e055f33b31c1d16d-removebg-preview.png'
import iphone4 from './Images/images__3_-removebg-preview.png'
import iphone5 from './Images/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone-thumbnail-removebg-preview.png'
import singleairpod from './Images/G03-200x200-removebg-preview.png'
import watch from './Images/2057b76af9ed627-removebg-preview.png'
import lastpic from './Images/web homepage (8).pdf - Google Chrome 10_7_2024 7_45_11 AM.png'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
    {/* This is the starting point to the home page */}
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

      {/* Main Section */}
      <div className='flex w-full h-[100vh] relative'>
  {/* Image Section */}
  <div className='w-1/2 bg-lightblue rounded-tr-[20vh] rounded-br-[20vh] overflow-hidden'>
    <img src={mainimg} alt="Basket" className='w-full h-full object-cover transform rotate-[45deg]' />
  </div>

  {/* Text Section */}
  <div className='w-1/2 flex flex-col justify-center items-start bg-white pl-24'>
    <h1 className='text-2xl text-lightred py-10 text-left'>In the spotlight</h1>
    <p className='text-4xl font-bold text-left'>Your sound best for <br /> your life</p>
    <p className='text-xl text-left mt-4'>
      These have large ear cups that encompass <br /> the ears, providing good sound <br /> isolation
      and often better sound quality.
    </p>
    <button className='bg-lightred w-auto h-auto rounded-md text-center p-3 text-white mt-10'>
      Shop Now <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
    </button>
  </div>
</div>
{/* In this div we add the headphone image and some text and styling*/}
<div className="relative">
  <h1 className="text-center text-black font-bold text-3xl py-20">Feature’s</h1>

  {/* Container for background and image */}
  <div className="relative w-full h-screen bg-lightblue flex items-center justify-start">
  {/* Background text for HEADPHONES, tightly aligned */}
  <div className="absolute left-[5%] flex flex-row text-[5rem] font-bold z-0">
    <span className="text-gray-950 transform rotate-[90deg] -ml-[39vh]">HEADPHONES</span>
    <span className="text-gray-800 transform rotate-[90deg] -ml-[75vh]">HEADPHONES</span>
    <span className="text-gray-600 transform rotate-[90deg] -ml-[75vh]">HEADPHONES</span>
    <span className="text-gray-500 transform rotate-[90deg] -ml-[75vh]">HEADPHONES</span>
    <span className="text-gray-400 transform rotate-[90deg] -ml-[75vh]">HEADPHONES</span>
  </div>

  {/* Main Image */}
  <img src={mainimg2} alt="Headphones" className="relative z-10 h-[80vh] w-auto ml-10" />
</div>

  {/* Feature description text */}
  <div className="absolute top-[50%] right-[10%] transform -translate-y-1/2 w-1/2 text-left">
    <h1 className="text-3xl font-bold  pt-20">Amazing feature</h1>

    <div className="mt-4">
      <h5 className="text-xl font-bold pt-5">Touch Controls</h5>
      <p className="text-md">
        Some headphones have touch-sensitive <br /> surfaces for controlling playback.
      </p>
    </div>

    <div className="mt-4">
      <h5 className="text-xl font-bold  pt-5">Sound Quality</h5>
      <p className="text-md">
        This includes considerations like bass <br /> response, clarity, and overall audio fidelity.
      </p>
    </div>

    <div className="mt-4">
      <h5 className="text-xl font-bold  pt-5">Microphone</h5>
      <p className="text-md">
        Built-in microphones enable hands-free <br /> calling and voice commands.
      </p>
    </div>
  </div>
</div>

{/* This is the e-commerce product category section  */}
<div class="font-[sans-serif] bg-white">
      <div class="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h1 class="text-4xl font-bold text-center text-lightred mt-14 mb-12">Category</h1>
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Can we help you pick a headphone</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-xl:gap-5 gap-6">
          {/* 1 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={iphone} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800 text-center">Iphone</h3>
            </div>
          </div>
          {/* 2 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={speaker} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800 text-center">Speaker</h3>
            </div>
          </div>
          
          {/* 3 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={tablet} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800 text-center">Tablet</h3>
            </div>
          </div>
          {/* 4 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={laptop} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800 text-center">Laptop</h3>
            </div>
          </div>
          {/* 5 prodcut */}  
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={mainimg2} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800 text-center">HeadPhone</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
{/*In this section we gona add the code of product card camera and tablet */}
<section className='flex flex-row p-20 gap-10'>
  {/* camera section */}
  <div className='flex flex-row h-auto w-full rounded-xl shadow-lg py-20 px-10'>
    <img src={camera} alt="" className='w-[50vh] h-[45vh] transform rotate-[-55deg] mt-10'/>
    <div className='py-20 px-5'>
      <h1 className='text-4xl font-bold'>25% off</h1>
      <p className='text-2xl font-semibold text-gray-600'>Catch hotest <span className='text-black font-bold'>Deals</span> in Cameras category</p>
      <button className='bg-lightred w-auto h-auto rounded-md text-center p-3 text-white mt-10'>
      Shop Now <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
    </button>
    </div>
  </div >
  {/* tab section*/}
  <div className='flex flex-row h-auto w-full  rounded-xl shadow-lg p-10'>
    <img src={tab} alt="" className='w-64 h-74'/>
    <div className='py-32 px-5'>
      <h1 className='text-4xl font-bold'>25% off </h1>
      <p className='text-2xl font-semibold text-gray-600'>Tablets smartphone <span className='text-black font-bold'>and more</span></p>
      <button className='bg-white text-lightred text-3xl font-bold  w-auto h-auto rounded-md text-center py-1 border-solid border-2 border-lightred px-6 mt-10'>
      $799
    </button>
    </div>
  </div>
</section>

{/* This is the e-commerce product section */}
<div class="font-[sans-serif] bg-white">
      <div class="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 class="text-4xl font-extrabold text-center text-gray-800 mb-12">Top rated product </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {/* 1 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
              class="w-20 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 text-black left-4">
              <p className='drop-shadow-lg'>Top rated</p>
            </div>
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={tv} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800">LED 4k smart TV expo White/Gray/Black</h3>
              <h4 class="text-2xl text-lightred font-bold mt-4">$499</h4>
            </div>
          </div>
          {/* 2 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
              class="w-20 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 text-black left-4">
              <p className='drop-shadow-lg'>Top rated</p>
            </div>
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={airpod} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800">GM-2345 clossed back wireless Headphones</h3>
              <h4 class="text-2xl text-lightred font-bold mt-4">$99</h4>
            </div>
          </div>
          {/* 3 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
              class="w-20 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 text-black left-4">
              <p className='drop-shadow-lg'>Top rated</p>
            </div>
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={mainimg2} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800">GM-2345 clossed back wireless Headphones</h3>
              <h4 class="text-2xl text-lightred font-bold mt-4">$99</h4>
            </div>
          </div>
          {/* 4 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
              class="w-20 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 text-black left-4">
              <p className='drop-shadow-lg'>Top rated</p>
            </div>
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={laptop} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800">Laptop 4k smart TV expo White/Gray/Black</h3>
              <h4 class="text-2xl text-lightred font-bold mt-4">$599</h4>
            </div>
          </div>
          {/* 5 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
              class="w-20 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 text-black left-4">
              <p className='drop-shadow-lg'>Top rated</p>
            </div>
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={stand} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800">Mobile phone accessories</h3>
              <h4 class="text-2xl text-lightred font-bold mt-4">$199</h4>
            </div>
          </div>
          {/* 6 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
              class="w-20 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 text-black left-4">
              <p className='drop-shadow-lg'>Top rated</p>
            </div>
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={usb} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800">Accessories for mobile phone used USB</h3>
              <h4 class="text-2xl text-lightred font-bold mt-4">$149</h4>
            </div>
          </div>
          {/* 7 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
              class="w-20 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 text-black left-4">
              <p className='drop-shadow-lg'>Top rated</p>
            </div>
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={camera} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800">GM-2345 clossed back Camera</h3>
              <h4 class="text-2xl text-lightred font-bold mt-4">$299</h4>
            </div>
          </div>
          {/* 8 prodcut */}
          <div class="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
              class="w-20 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 text-black left-4">
              <p className='drop-shadow-lg'>Top rated</p>
            </div>
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-1 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={tab} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div className='px-5'>
              <h3 class="text-lg font-semibold text-gray-800">Mobile 4k smart TV expo White/Gray/Black</h3>
              <h4 class="text-2xl text-lightred font-bold mt-4">$399</h4>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    {/*shop product by section */}
    <h2 class="text-4xl m-12 font-bold text-gray-800">Shop product by</h2>
    <div className='flex flex-row justify-end bg-lightblue mx-20 my-9 rounded-[10vh] relative'>
    <img src={iphone2} alt="" className='h-54 absolute left-3'/>
    <div className='py-32 pr-44'>
        <h1 className='text-4xl font-extrabold'>Define yourself be different</h1>
        <p>These have lare ear cups that encompass the ears, providing good sound <br /> isolation and often better sound quality.</p>
        <button className='bg-lightred w-auto h-auto rounded-md text-center p-3 text-white mt-10'>
      Shop Now <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
    </button>
    </div>
    </div>

{/*New arrival section */}
    <div class="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 m-5">New arrival</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/*First new  arrival section */}
        <div
          class="bg-white shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={iphone} alt="Product 1"
              class="h-full w-full object-contain" />
          </div>

          <div class="px-6 pt-6 bg-white flex flex-row justify-between">
            <h3 class="text-2xl font-extrabold text-gray-800">James smith</h3>
            <div class="flex space-x-2">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p className='mt-1'>5.0</p>
            </div>
          </div>
          <div class="px-6 bg-white">
          <p class="text-gray-600 text-sm mt-2">Headphones come with a variety of features.</p>
          </div>
          <div class="px-6 bg-white flex flex-row justify-between">
          <h4 class="text-2xl text-lightred font-bold mt-2">49$</h4>
          <button className='bg-white w-auto h-auto rounded-md text-center text-black mt-2 border-2 border-lightred solid px-2'> Add to cart </button>
          </div>
        </div>
      {/*second new  arrival section */}
        <div
          class="bg-white shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={iphone3} alt="Product 1"
              class="h-full w-full object-contain" />
          </div>

          <div class="px-6 pt-6 bg-white ">
            <h3 class="text-2xl font-extrabold text-gray-800">Jhon lara</h3>
            
          </div>
          <div class="px-6 bg-white">
          <p class="text-gray-600 text-sm mt-2">Headphones come with
          a variety of features..</p>
          </div>
          <div class="px-6 bg-white flex flex-row justify-between">
          <h4 class="text-2xl text-lightred font-bold mt-2">55$</h4>
          <button className='bg-white w-auto h-auto rounded-md text-center text-black mt-2 border-2 border-lightred solid px-2'> Add to cart </button>
          </div>
        </div>
      {/*third new  arrival section */}
        <div
          class="bg-white shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={iphone5} alt="Product 1"
              class="h-full w-full object-contain" />
          </div>

          <div class="px-6 pt-6 bg-white flex flex-row justify-between">
            <h3 class="text-2xl font-extrabold text-gray-800">Miss zara </h3>
            <div class="flex space-x-2">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p className='mt-1'>4.3</p>
            </div>
          </div>
          <div class="px-6 bg-white">
          <p class="text-gray-600 text-sm mt-2">Headphones come with a variety of features.</p>
          </div>
          <div class="px-6 bg-white flex flex-row justify-between">
          <h4 class="text-2xl text-lightred font-bold mt-2">39$</h4>
          <button className='bg-white w-auto h-auto rounded-md text-center text-black mt-2 border-2 border-lightred solid px-2'> Add to cart </button>
          </div>
        </div>
      {/*forth new  arrival section */}
        <div
          class="bg-white shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={iphone4} alt="Product 1"
              class="h-full w-full object-contain" />
          </div>

          <div class="px-6 pt-6 bg-white">
            <h3 class="text-2xl font-extrabold text-gray-800">Lauren</h3>
            
          </div>
          <div class="px-6 bg-white">
          <p class="text-gray-600 text-sm mt-2">Headphones come with a variety of features.</p>
          </div>
          <div class="px-6 bg-white flex flex-row justify-between">
          <h4 class="text-2xl text-lightred font-bold mt-2">69$</h4>
          <button className='bg-white w-auto h-auto rounded-md text-center text-black mt-2 border-2 border-lightred solid px-2'> Add to cart </button>
          </div>
        </div>
    </div>
    </div>

    {/*Anohter flex section watch and airpod */}
    <div className='flex flex-row justify-evenly pt-10'>
      {/*First airpod section */}
      <div className='flex flex-row justify-evenly bg-lightblue items-center rounded-3xl px-2 w-1/3'>
        <img src={singleairpod} alt="" className='h-64 w-54'/>
        <div className='-ml-10'>
        <h1 className='font-extrabold text-4xl'>Awesome Airpods</h1>
        <p className='pt-4 text-md'>These have large ear cups that <br /> encompass the ears, providing <br /> good sound</p>
        <button className='bg-lightred w-auto h-auto rounded-md text-center p-3 text-white mt-10'>
      Shop Now <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
    </button>
        </div>
      </div>
      {/*second watch section */}
      <div className='flex flex-row justify-evenly bg-lightblue items-center rounded-3xl w-1/2'>
        <div>
        <h1 className='font-extrabold text-4xl'>Smart <br /> Watches</h1>
        <button className='bg-lightred w-44 h-auto rounded-md text-center p-3 text-white mt-10'>
      Shop Now <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
    </button>
        </div>
        <img src={watch} alt="" className='h-auto w-auto'/>
      </div>
    </div>

    {/*text section in the home page */}
    <div className='bg-lightblue w-full h-auto my-16 flex flex-row justify-between'>
      <h1 className='py-20 px-[60vh] text-4xl font-extrabold'>10% off when playing debit card</h1>
      <FontAwesomeIcon icon={faTag} className="text-black text-4xl py-20" />
    </div>

    {/*A new style in your
Ear*/}

      <div className='flex flex-row justify-between pl-10'>
        <div>
          <h1 className='text-lightred font-bold text-3xl px-3 py-3'>Comment level</h1>
          <h1 className='text-black font-bold text-5xl px-3'>A new style in your <br /> Ear</h1>
          <div class="grid grid-cols-1  lg:grid-cols-2 px-10 py-20 gap-5">
            <h1 className='bg-lightblue w-64 p-8 text-lightred text-6xl font-bold text-center rounded-3xl'>4M+ <br /> <span className='font-bold text-3xl text-black'>User</span></h1>
            <h1 className='bg-lightblue w-64 p-8 text-lightred text-6xl font-bold text-center rounded-3xl'>153k <span className='font-bold text-3xl text-black'>Purchaser</span></h1>
            <h1 className='bg-lightblue w-64 p-8 text-lightred text-6xl font-bold text-center rounded-3xl'>35k <span className='font-bold text-3xl text-black'>Gallery</span></h1>
            <h1 className='bg-lightblue w-64 p-8 text-lightred text-6xl font-bold text-center rounded-3xl'>2M+ <span className='font-bold text-3xl text-black'>Feedback</span></h1>
          </div>
        </div>
        <img src={lastpic} alt=""  className='w-[100vh] h-[100vh]' />
      </div>

      {/*upper footer bar*/}
      <div className='flex flex-row justify-between bg-lightblue w-full h-fit p-10  text-2xl font-semibold '>
        <h1>
        Your Gateway to Success Start
        </h1>
          <ul className='flex flex-row gap-28 mx-32'>
            <li>Pages</li>
            <li>Other</li>
            <li>Utility</li>
            <li>Help</li>
          </ul>
        </div>

        {/*middel footer bar*/}
        <div className='flex flex-row justify-between bg-lightblue w-full h-fit px-14 py-12 mt-1'>
          <div className='text-xl font-semibold  flex flex-col justify-between'>
            <div>
            <p>Here!</p>
            <div className='flex flex-row gap-4'>
            <FontAwesomeIcon icon={faArrowRight} className="text-white flex bg-orange-600 p-2 rounded-full text-xl" />
            <p>hello@helloflow.com</p>
            </div>
            </div>
            <div className="flex space-x-6 ">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="text-gray-900 text-3xl hover:text-blue-800" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="text-gray-900 text-3xl hover:text-red-800" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="text-gray-900 text-3xl hover:text-blue-600" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-gray-900 text-3xl hover:text-blue-900" />
      </a>
    </div>
          </div>
          <div className='flex flex-row gap-16 mx-14 text-xl'>
            {/*First list*/}
            <ul className='space-y-2'>
            <li className=' hover:text-orange-700'>Demo (Sales)</li>
            <li className=' hover:text-orange-700'>Home</li>
            <li className=' hover:text-orange-700'>Service</li>
            <li className=' hover:text-orange-700'>About</li>
            <li className=' hover:text-orange-700'>Blog</li>
            <li className=' hover:text-orange-700'>Work</li>
            <li className=' hover:text-orange-700'>Shop</li>
            </ul>
            {/*second list*/}
            <ul className='space-y-2'>
            <li className=' hover:text-orange-700'>404</li>
            <li className=' hover:text-orange-700'>Password</li>
            <li className=' hover:text-orange-700'>Checkout</li>
            <li className=' hover:text-orange-700'>Blog Details</li>
            <li className=' hover:text-orange-700'>Work Details</li>
            <li className=' hover:text-orange-700'>Shop Details</li>
            </ul>
            {/*third list*/}
            <ul className='space-y-2'>
            <li className=' hover:text-orange-700'>Style Guide</li>
            <li className=' hover:text-orange-700'>Licencing</li>
            <li className=' hover:text-orange-700'>Checkout</li>
            <li className=' hover:text-orange-700'>Change log</li>
            <li className=' hover:text-orange-700'>Instruction</li>
            </ul>
            {/*forth list*/}
            <ul>
            <li className=' hover:text-orange-700'>All Templates</li>
            <li className=' hover:text-orange-700'>Supports</li>
            </ul>
          </div>
        </div>


        {/*last footer bar*/}
      <div className='flex flex-row justify-between bg-lightblue w-full h-fit p-10 mt-1'>
        <h1 className='text-2xl font-bold '>
        Your Logo
        </h1>
        <p className='mx-32 mt-2'>C 2024 Powered by Webflow With by A Buy this template for $69 USD</p>
        </div>



    </>
  )
}

export default Home
