import React from 'react'

function Header() {
  return (
    <nav>
      <div className="nav-wrapper container">
        {/* eslint-disable-next-line  */}
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {/* eslint-disable-next-line */}
          <li>Movie</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header