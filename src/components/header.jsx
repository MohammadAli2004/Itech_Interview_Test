import React from 'react'
import logo from '.././assets/image3.jpeg'
import '../assets/style.css'
import { Link } from 'react-router-dom'
const Header = () => {
    const headerStyles = {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',

        width:'100%',
        height:'80px',
        padding:'20px'
      }
      const logoStyles = {
        width:'250px',
        height:'auto'
      }

      
  return (
    <header style={headerStyles} >
    <div>
      <img src={logo} style={logoStyles} />
    </div>
    <div className='header-links'  >
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div>
     </header>
  )
}

export default Header