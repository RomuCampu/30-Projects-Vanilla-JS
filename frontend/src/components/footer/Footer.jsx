import React from 'react'
import './footer.scss'
import TickingHeart from './heart/TickingHeart'

const Footer = () => {
 return (
  <React.Fragment>
   <footer id="footer">
    {/* <h3>Footer</h3> */}
    <TickingHeart />
   </footer>
  </React.Fragment>
 )
}

export default Footer