import React from 'react'
import './button.css'

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
 return (
  <React.Fragment>
   <button className={`${inverted ? 'inverted' : ''} custom-button  `} {...otherProps}>
    {children}
   </button>
  </React.Fragment>
 )
}

export default Button