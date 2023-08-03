import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"

function Header() {
  return (
              <div className='Header'>
          <h2>
            <ul className='Ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li><Link to="/Resume">Resume</Link></li>


            </ul>
        </h2>

        </div>

  )
}

export default Header