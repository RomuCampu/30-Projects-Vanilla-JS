import React, { useRef } from 'react'

const Cursor = () => {

 const cursor = useRef('.cursor');

 document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
 })

 document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
   cursor.classList.remove("expand");
  }, 500)
 })

 return (
  <React.Fragment>
   <div className="cursor"></div>
  </React.Fragment>
 )
}

export default Cursor

