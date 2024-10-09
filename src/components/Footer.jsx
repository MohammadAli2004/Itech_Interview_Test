import React from 'react'

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
  return (
    <div style={{padding:'15px',backgroundColor:'black' }} >
<p style={{color:'#fff',textAlign:'center'}} >{`This is the Footer with the Function of current year ${getCurrentYear()}`}</p>
    </div>
  )
}

export default Footer