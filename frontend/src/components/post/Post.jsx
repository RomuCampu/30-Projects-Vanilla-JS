import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './post.scss'

export const Post = ({ blog }) => {


 const history = useHistory()

 const handleRouteChange = () => {
  const path = '/'
  history.push(path)
 }

 const [isLoggedIn] = useState(true)

 const handlePostDelete = async () => {
  try {
   await axios.delete(`http://localhost:5000/api/posts/${blog._id}`)
  } catch (err) {
   console.error(err)
  }
  handleRouteChange()
 }
 return (
  <React.Fragment>
   <div className="card-wrapper clearfix">

    <Card className="blog-sm__12 clearfix">
     <Card.Body>
      <Link to={`/blog/${blog._id}`}>
       <Card.Title as='div'><strong>{blog.title}</strong></Card.Title>
      </Link>

      <Card.Text as='div'>
       <div className="my-3">
        {blog.content}
       </div>
      </Card.Text>
     </Card.Body>

     <Link to={`/blog/${blog._id}`}>Read more...</Link>

     <Card.Footer className={isLoggedIn ? 'visible' : 'notVisible'}>
      <Button onClick={handlePostDelete}>
       Delete
     </Button>
      {/* <Link to={`/blog/${blog._id}`}>Read more...</Link> */}
     </Card.Footer>

     <Card.Footer className={!isLoggedIn ? 'visible' : 'notVisible'}>
      {/* TEMP */}
     </Card.Footer>
    </Card>
   </div>
  </React.Fragment>
 )
}

