import React from 'react'
import { Link } from 'gatsby'

import LinkedinIcon from "../assets/linkedin.svg";
import MailIcon from "../assets/mail.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div id="header__icons" className="header__icons">
          {/* <a 
            href="https://www.linkedin.com/in/aidan-shimmon-738428168/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon/>
          </a> */}
          <a 
            href="mailto:aidan@startsmartdevelopment.com"
            rel="noreferrer"
          >
            <MailIcon/>
          </a>
        </div>

        <nav id="header__navigation" className="header__navigation">
          <Link className="header__navigation__link one" to="#about" aria-label="about">About</Link>
          <Link className="header__navigation__link two" to="#projects" aria-label="projects">Projects</Link>
          <Link className="header__navigation__link three" to="#contact" aria-label="contact">Contact</Link>
          <hr/>
        </nav>
      </div>
    </div>
  )
}

export default Header