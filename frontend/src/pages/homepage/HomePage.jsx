import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import Footer from '../../components/footer/Footer'
// import Button from '../../button/Button'
import './homepage.scss'

const HomePage = () => {
 return (
  <React.Fragment>
   <Container>
    <Row>
     <Col sm={12} md={6}>
      <div className="grid-container">
       <div className="grid-item left">
        <h1>Hi.<br />I'm <span className="profile-name"><span className="first-letter">R</span>omualdo<span className="first-letter">.</span></span></h1>
        <Typewriter
         options={{
          strings: ['Entrepreneur', 'Fullstack Web Developer', 'Design Apprentice', 'and Java... :('],
          autoStart: true,
          loop: true,
         }}
        />
       </div>
      </div>
     </Col>
     {/*  */}
     <Col sm={12} md={6}>
      <div className="grid-item right">
       {/* HERE COMES THE LOGO */}
      </div>
     </Col>
    </Row>
   </Container>
   <Footer />
  </React.Fragment>
 )
}

export default HomePage