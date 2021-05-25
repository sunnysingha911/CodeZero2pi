import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className='navbar'>
      <span className='brnadName'>Landkit.</span>
      <ul className='navigation'>
        <li>
          <Link className='nav' to='/'>
            Landing
          </Link>
        </li>
        <li>
          <Link className='nav' to='/data'>
            Api
          </Link>
        </li>
        <li>
          <Link className='nav' to='/form'>
            Contact
          </Link>
        </li>
      </ul>
      <button>Buy Now</button>
    </nav>
  )
}

export default Header
