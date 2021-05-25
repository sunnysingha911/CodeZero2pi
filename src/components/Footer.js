import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='grid-container'>
        <div className='grid-item'>
          <img alt='logo' src='./images/logo.png' />
        </div>
        <div className='grid-item'>
          <ul>
            <li>Products</li>
            <li>Page Builder</li>
            <li>UI Kit</li>
            <li>Styleguide</li>
            <li>Docuemntation</li>
            <li>Changelog</li>
          </ul>
        </div>
        <div className='grid-item'>
          <ul>
            <li>Docuemntation</li>
            <li>Changelog</li>
            <li>Page Builder</li>
            <li>UI Kit</li>
            <li>Styleguide</li>
          </ul>
        </div>
        <div className='grid-item'>
          <ul>
            <li>Products</li>
            <li>Page Builder</li>
            <li>UI Kit</li>
            <li>Products</li>
            <li>Page Builder</li>
            <li>UI Kit</li>
            <li>Styleguide</li>
            <li>Docuemntation</li>
            <li>Changelog</li>
          </ul>
        </div>
        <div className='grid-item'>
          <ul>
            <li>Products</li>
            <li>Page Builder</li>
            <li>UI Kit</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
