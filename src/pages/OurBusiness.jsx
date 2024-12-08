import React from 'react'

export default function OurBusiness() {
  return (
    <li 
        className="menu-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      <span className="menu-title">About Us</span>
      {showSubmenu && (
        <div className="submenu">
          <div className="submenu-column">
            <h4>INNOVATION</h4>
            <ul>
              <li><a href="/our-journey">Product Design & Development</a></li>
              <li><a href="/our-reach">Digital Platforms</a></li>
              <li><a href="/our-reach">Our Reach</a></li>
            </ul>
          </div>
          <div className="submenu-column">
            <h4>PRODUCTS</h4>
            <ul>
              <li><a href="/our-journey">Our Journey</a></li>
              <li><a href="/our-reach">Our Reach</a></li>
            </ul>
          </div>
          <div className="submenu-column">
            <h4>SERVICES</h4>
            <ul>
              <li><a href="/our-journey">Our Journey</a></li>
              <li><a href="/our-reach">Our Reach</a></li>
              <li><a href="/our-reach">Our Reach</a></li>
            </ul>
          </div>
          <div className="submenu-column">
            <h4>OPERATIONS</h4>
          </div>
        </div>
      )}
    </li>
  )
}
