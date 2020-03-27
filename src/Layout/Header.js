import React from 'react'
import { Link } from 'react-router-dom';

function Header(){
  return(
      <>
        <div className="header">
            <h1>Contact Manager</h1>
            <ul>
              <li><Link to="/">Index</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact/addContact">Add Contact</Link></li>
            </ul>
        </div>
      </>
  )
}
export default Header