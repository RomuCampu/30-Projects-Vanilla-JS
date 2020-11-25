import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import './cv.scss'

const Cv = () => {
 return (
  <React.Fragment>
   <h2>Portfolio</h2>
   <Container>
    <Row>
     <Col sm={12} md={6}>
      <div className="cv-sm__12">Sm 12 Div</div>
     </Col>
     <Col sm={12} md={6}>
      <div className="cv-sm__12">Sm 12 Div</div>
     </Col>
    </Row>
    <Row>
     <Col sm={12} md={4}>
      <div className="cv-sm__12">Md 4 Div</div>
     </Col>
     <Col sm={12} md={4}>
      <div className="cv-sm__12">Md 4 Div</div>
     </Col>
     <Col sm={12} md={4}>
      <div className="cv-sm__12">Md 4 Div</div>
     </Col>
    </Row>
    <div className="footer-wrapper">
     <Footer />
    </div>
   </Container>
  </React.Fragment>
 )
}

export default Cv