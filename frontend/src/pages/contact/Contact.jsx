import React, { useState } from 'react'
import axios from 'axios'
import './contact.css'
import Button from '../../components/button/Button'
import FormInputField from '../../components/inputfield/FormInputField'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'

const Contact = () => {

 const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
 })

 const { name, email, message } = formData

 const handleChange = (event) => {
  setFormData()
 }

 const handleSubmit = async (event) => {
  event.preverntDefault()
  const body = JSON.stringify({ name, email, message })
  const config = { headers: { "Content-Type": "application/json" } }

  try {
   const res = await axios.post('http://localhost:5000/api/someroute', body, config)
   console.log(res);
  } catch (err) {
   console.error(err)
  }
 }


 return (
  <React.Fragment>
   <Container>
    <Row>
     <Col sm={12} md={6}>
      <h2>Contact</h2>
      <div className="">
       <form onSubmit={handleSubmit}>
        <div className="">
         <FormInputField
          value={name}
          name="name"
          handleChange={handleChange}
          label="Name"
          required
         />
         <FormInputField
          value={email}
          name="email"
          handleChange={handleChange}
          label="Email"
          required
         />
        </div>
        <FormInputField
         value={message}
         name="message"
         handleChange={handleChange}
         label="Message"
         required
        />

        <div className="btn-wrapper">
         <Button type="submit" value="submit">
          Submit
         </Button>
        </div>

       </form>
      </div>
     </Col>
     {/*  */}
     <Col sm={12} md={6}>
      Maps
     </Col>
    </Row>
   </Container>
   <Footer />
  </React.Fragment>
 )
}

export default Contact