import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
 <div >
    <ul style={{display:"flex", justifyContent:"space-around", listStyle:"none", }}>
        
        <li style={{ }}><Link to="/">Home</Link></li>
        <li><Link to="login">login</Link></li>
        <li><Link to="about">About</Link></li>
    </ul>
    
    </div> 
  
  </>
  )
}

export default Navbar