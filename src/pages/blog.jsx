import React from 'react'
import '../assets/style.css'
import blogImage from '../assets/blogImage.png'
import BlogSingle from '../components/Blog'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header'


export const blogData = [
    {
        img:blogImage,
        name:'Web development',
        desc:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vel libero veritatis quasi eum assumenda nesciunt ',
    },
    {
        img:blogImage,
        name:'Web development',
        desc:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vel libero veritatis quasi eum assumenda nesciunt ',
    },
    {
        img:blogImage,
        name:'Web development',
        desc:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vel libero veritatis quasi eum assumenda nesciunt ',
    },
    {
        img:blogImage,
        name:'Web development',
        desc:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vel libero veritatis quasi eum assumenda nesciunt ',
    },
]

const Blog = ({type}) => {
const navigate = useNavigate()
 const handleOnClick = (id,item) => {
  navigate(`/blog/${id}`,{
    state:{
        item,
        id:id
    }
  })
  localStorage.setItem('activeItem',{
    item,
    id:id
  })
 }

  return (
<div>
{
            type === 'home' ? null :

            <Header  />

        }
    <div  className='blog-container' >
        <h1>Our Blogs</h1>
        <div 
          className='blogs-post-container' style={{marginTop:'35px'}} >
            {blogData.map((item,i) => (
                <BlogSingle img={item.img} desc={item.desc} name={item.name} onClick={() => {
                    handleOnClick(i,item)
                }} />
            ))}
          </div>
    </div>
    </div>
  )
}

export default Blog