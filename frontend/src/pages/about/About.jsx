import React from 'react'
import './about.scss'
import { Container } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'

const About = () => {
 return (
  <React.Fragment>
   <Container>
    <h2>The Stack</h2>
    <h3>Yes, I know...</h3>
    <div className="about_container">
     <p>The stuff I put in here is more to show that I'm confortable picking up new software and/or programming languages quickly.</p>
     <p>The stack that I'm sticking with (for the time being) is the MERN stack.</p>
    </div>
   </Container>
   <Footer />
  </React.Fragment>

 )
}

export default About