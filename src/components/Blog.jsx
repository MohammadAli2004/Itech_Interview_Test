import React from 'react'
import '../assets/style.css'
const BlogSingle = ({onClick,name,desc,img}) => {
  return (
    <div onClick={onClick} className='blog-post' style={{cursor:'pointer'}}  >
    <img src={img} alt="Blog Image" style={{width:'100%',height:'auto'}} />
    <h4>{name}</h4>
    <p>{desc}</p>
</div>
  )
}

export default BlogSingle