import React, { useEffect, useState } from 'react'
import { json, useLocation } from 'react-router-dom'
import Header from '../components/header'

const BlogPost = () => {
    const location = useLocation()
    const {item,id} = location.state || JSON.parse(localStorage.getItem('activeItem'))
    const [comments,setComments] = useState(JSON.parse(localStorage.getItem('comments')) || [])
    const [data,setData] = useState({
        name:'',
        comment:'',
    })

  
    const filteredComments = () => {
        const safeComments = Array.isArray(comments) ? comments : [];
    console.log(safeComments);
    
        let filterItem = safeComments.filter(item => item.id === id);
    console.log(filterItem);
    
        return filterItem;
    };

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({
            ...data,
            [name]:value
        })
    }
    const addItem = (e) => {
        e.preventDefault();
        
        let newComment = {
            name: data.name,
            comment: data.comment,
            id: id
        };
    
        let customComment = [...comments, newComment];
        
        setComments(customComment);
        
        console.log(customComment);

        setData({
            name:'',
            comment:''
        })

        
        localStorage.setItem('comments', JSON.stringify(customComment));
    };
    useEffect(() => {
        console.log(item);
    },[])
    
  return (
    <div>
        <Header/>
        <div
        className='single-blog-post'
        >
<div style={{display:'flex',alignItems:'center',flexDirection:'column'}} >
            <img src={item.img} alt="Single Post Image" srcset="" style={{
                width:'50%',
                height:'auto'
            }} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
        </div>
        {filteredComments().length !== 0 ?
        <div style={{padding:'25px'}} >
            <h1>Comments</h1>
            <div style={{display:'flex',flexDirection:'column',gap:'15px',marginTop:'25px'}} >
                {
        
        filteredComments().map((item,i) => (
                        <div style={{padding:'15px'}} >
                            <h5>{item.name}</h5>
                            <p style={{marginTop:'10px'}} >{item.comment}</p>
                        </div>
                    ))
                }
            </div>
        </div> : null} 
        <div style={{
    width:'100%',
    padding:'25px',

        }} >
<form action="" style={{display:'flex',flexDirection:'column',gap:'15px',marginTop:'25px',alignItems:'center'}} >

<h1>Add Your Comment</h1>

    <input style={{
        padding:'25px',
        width:'100%'
    }} type="text" name='name' placeholder='Enter Your Name' value={data.name} onChange={(e) => {
        handleOnChange(e)
    }} />
    <textarea style={{padding:'25px',width:'100%'}} name="comment" placeholder='Enter Yor Comment' id="" value={data.comment} onChange={(e) => {
        handleOnChange(e)
    }}></textarea>

     <button style={{padding:'15px'}} onClick={(e) => {
        addItem(e)
     }} > Add Comment</button>

</form>
        </div>
        </div>
    </div>
  )
}

export default BlogPost