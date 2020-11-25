import React, { useState, useEffect } from 'react'
import './single-blog-page.css'
import axios from 'axios'


const SingleBlogPage = ({ match }) => {

 const [blog, setBlog] = useState({})

 useEffect(() => {
  const fetchProduct = async () => {
   const { data } = await axios.get(`/api/posts/${match.params.id}`)
   setBlog(data)
  }
  fetchProduct()
 }, [match])

 const { topic, title, content, author } = blog

 return (
  <React.Fragment>
   <div className="">
    <div className="topic-title-wrapper">
     <h5>{topic}</h5>
    </div>
    <h2>{title}</h2>
    <p>{content}</p>
    <span>{author}</span>
   </div>
  </React.Fragment>
 )
}

export default SingleBlogPage
