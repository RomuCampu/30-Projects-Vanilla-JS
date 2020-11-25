import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'


/**@todo
 * Add nested routes for blog page
 */
const Header = () => {

 // const [iconText, setIconText] = useState("")

 return (
  <React.Fragment>
   <div className="header">
    <div className="logo-container">
     <Link className="option" to='/'>RC</Link>
    </div>
    <div>
     {/* <i className="light-bulb far fa-lightbulb"></i> */}
    </div>
    <div className="options">
     <Link className="option" to='/'>Home</Link>
     <Link className="option" to='/skills'>Skills</Link>
     <Link className="option" to='/portfolio'>Portfolio</Link>
     <Link className="option" to='/blog'>Blog</Link>
     <Link className="option" to='/contact'>Contact</Link>
    </div>
   </div>
  </React.Fragment >
 )
}

export default Header