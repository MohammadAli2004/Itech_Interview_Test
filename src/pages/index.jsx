import React from 'react'
import Header from '../components/header'
import '../assets/style.css'
import Blog from './blog'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='home-wrapper'>
    <Header  />
    <div className='home-inner' >
       <div className='content-wrapper' >
         <p>YOU NAME IT. WE HAVE IT</p>
         <button>Learn More</button>
       </div>
    </div>
    <Blog type={'home'} />
    <Footer/>
    </div>
  )
}

export default Home