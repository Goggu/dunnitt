import React from 'react'
import './Menubar.css'

const Menubar = ({ isOpen, toggleMenu }) => {
  return (

      <div className={`menu-bar ${isOpen ? 'open' : ''}`}>
      <div className="menu-section">
        <h3>Opinion</h3>
        <ul>
          <li>Leaders</li>
          <li>Letters to the editor</li>
          <li>By Invitation</li>
        </ul>
        <h4>Current topics</h4>
        <ul>
          <li>British election 2024</li>
          <li>Israel and Hamas</li>
        </ul>
      </div>
      <div className="menu-section">
        <h3>World</h3>
        <ul>
          <li>The world this week</li>
          <li>China</li>
          <li>United States</li>
          <li>Europe</li>
          <li>Britain</li>
          <li>Middle East & Africa</li>
          <li>Asia</li>
        </ul>
      </div>
      <div className="menu-section">
        <h3>In depth</h3>
        <ul>
          <li>Science & technology</li>
          <li>Graphic detail</li>
          <li>Special reports</li>
          <li>Technology Quarterly</li>
          <li>Briefing</li>
          <li>Essay</li>
          <li>Schools brief</li>
        </ul>
      </div>
      <div className="menu-section">
        <h3>Business & economics</h3>
        <ul>
          <li>Finance & economics</li>
          <li>Business</li>
          <li>Big Mac index</li>
          <li>A-Z of economics</li>
          <li>Economic & financial indicators</li>
        </ul>
      </div>
      <button onClick={toggleMenu} className="close-button">Close</button>
    </div>
    
  )
}

export default Menubar
