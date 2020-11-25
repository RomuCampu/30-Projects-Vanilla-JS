import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import './blog.css'
import { Post } from '../../components/post/Post'

const Blog = () => {

 const [blogs, setBlogs] = useState([])

 useEffect(() => {
  const fetchPosts = async () => {
   const res = await axios.get('/api/posts')
   setBlogs(res.data)
  }
  fetchPosts()
 }, [])


 return (
  <React.Fragment>
   <h2>Blogs</h2>
   <Container>
    <Row>
     <Col>
      <Row>
       <Col sm={12} md={6}>
        <div className="blog-sm__12">
         Intro
        </div>
       </Col>
       <Col sm={12} md={6}>
        <div className="blog-sm__12">Full Stack Web Development</div>
       </Col>
      </Row>

      <Row>
       {blogs.map(blog => (
        <Col key={blog.id} sm={12} md={4}>
         <div className="">
          <Post blog={blog} />
         </div>
        </Col>
       ))}
      </Row>

      <div className="btn_wrapper ">
       <Button>
        <Link to="/blogform" className="">Add new Blog</Link>
       </Button>
      </div>

     </Col>
    </Row>

    <div className="footer-wrapper">
     <Footer />
    </div>
   </Container>
  </React.Fragment >
 )
}

export default Blog



 // < Container >
 // <Row>
 //  <Col>
 //   <div className="col-lg-4 mb-4">
 //    <div className="entry2">
 //     <a href="single.html">
 //      {/* <img src="images/ximg_2.jpg.pagespeed.ic.uO5WyN_H9Y.webp" alt="Image" className="img-fluid rounded"> */}
 //     </a>
 //     <div className="excerpt">
 //      <span className="post-category text-white bg-success mb-3">Nature</span>
 //      <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
 //      <div className="post-meta align-items-center text-left clearfix">
 //       <figure className="author-figure mb-0 mr-3 float-left">
 //        {/* <img src="images/xperson_1.jpg.pagespeed.ic.ycc-Edwyd1.webp" alt="Image" className="img-fluid"> */}
 //       </figure>
 //       <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
 //       <span>&nbsp;-&nbsp; July 19, 2019</span>
 //      </div>
 //      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
 //      <p><a href="#">Read More</a></p>
 //     </div>
 //    </div>
 //   </div>
 //  </Col>
 // </Row>
 //   </ >