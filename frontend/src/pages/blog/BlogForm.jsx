import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import FormInputField from '../../components/inputfield/FormInputField'
import axios from 'axios'
import Button from '../../components/button/Button'
import './blog-form.css'
// import { Editor } from 'draft-js'
// import './../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const BlogForm = () => {

 const history = useHistory()

 const handleRouteChange = () => {
  const path = '/blog'
  history.push(path)
 }

 const [blogData, setBlogData] = useState({
  topic: "",
  title: "",
  content: ""
 })

 const { topic, title, content } = blogData

 const handleChange = (event) => {
  const { name, value } = event.target
  setBlogData({ ...blogData, [name]: value })
 }

 const handleSubmit = async (event) => {
  event.preventDefault()

  const body = JSON.stringify({
   topic, title, content
  })

  const config = {
   headers: {
    "Content-Type": "application/json"
   }
  }

  try {
   const res = await axios.post("http://localhost:5000/api/posts", body, config)
   console.log(res);
  } catch (err) {
   console.error(err)
  }
  handleRouteChange()
 }

 return (
  <div>
   <h2>Blog Form</h2>
   <form onSubmit={handleSubmit} >
    <FormInputField
     value={topic}
     name="topic"
     handleChange={handleChange}
     label="Topic"
     required
    />
    <FormInputField
     value={title}
     name="title"
     handleChange={handleChange}
     label="Title"
     required
    />
    {/* <Editor /> */}
    <FormInputField
     value={content}
     name="content"
     handleChange={handleChange}
     label="Content"
     required
    />

    <div className="btn-wrapper">
     <Button type="submit" value="Submit">
      Submit
    </Button>
    </div>
   </form>
  </div>
 )
}

export default BlogForm