import React from 'react'
import { Link } from "react-router-dom"

const NavigationBar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="navigation-bar">
      <div className="navbar-child">
        <Link to="/">
          <i className="fa fa-house-damage icon-3d"></i>
        </Link>
        <Link to="projects">
          <i className="fa fa-lightbulb icon-3d"></i>
        </Link>
        <Link to="services">
          <i className="fas fa-hand-holding icon-3d"></i>
        </Link>
        <a href="https://github.com/Maryam-bit" target="_blank">
          <i className="fab fa-github icon-3d"></i>
        </a>
        <a href="https://www.linkedin.com/in/maryam-noor-/" target="_blank">
          <i className="fab fa-linkedin icon-3d"></i>
        </a>
        {
          darkTheme == false ?
            <i className="fas fa-sun icon-3d" onClick={() => { setDarkTheme(true) }}></i>
            :
            <i className="fad fa-moon-stars icon-3d" onClick={() => { setDarkTheme(false) }}></i>
        }
        <i className="fas fa-volume-mute icon-3d"></i>
        {/* <i className="fad fa-volume icon-3d"></i> */}
        {/* <i className="fad fa-box-full icon-3d"></i> */}
        {/* <i className="fad fa-brackets-curly icon-3d"></i> */}
        {/* <i className="fas fa-chess-queen icon-3d"></i> */}
      </div>
    </div>
  )
}

export default NavigationBar