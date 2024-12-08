import React from 'react'
import { useState } from 'react';

export default function AboutUs() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const handleMouseEnter = () => setShowSubmenu(true);
  const handleMouseLeave = () => setShowSubmenu(false);

  return (
    <li
      className="menuItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="menuTitle">About Us</span>
      {showSubmenu && (
        <div className="submenu">
          <div className="submenuColumn">
            <h4>OUR PURPOSE, VISION & VALUES</h4>
          </div>
          <div className="submenuColumn">
            <h4>INCLUSION FOR ALL</h4>
            <ul>
              <li><a href="/ourJourney">Our Journey</a></li>
              <li><a href="/ourReach">Our Reach</a></li>
            </ul>
          </div>
          <div className="submenuColumn">
            <h4>OUR STRATEGY</h4>
          </div>
          <div className="submenuColumn">
            <h4>LEADERSHIP TEAM</h4>
          </div>
          <div className="submenuColumn">
            <h4>GLOBAL PRESENCE</h4>
          </div>
          <div className="submenuColumn">
            <h4>OUR HISTORY</h4>
          </div>
        </div>
      )}
    </li>
    
  );
};


