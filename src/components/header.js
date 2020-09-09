import React from 'react'
import { Link } from 'gatsby'

import LinkedinIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__icons">
          <a 
            href="https://www.linkedin.com/in/aidan-shimmon-738428168/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon/>
          </a>
          <a 
            href="https://github.com/AidanShimmon"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon/>
          </a>
        </div>

        <nav className="header__navigation">
          <Link className="header__navigation__link" to="#about" aria-label="about">About</Link>
          <Link className="header__navigation__link" to="#projects" aria-label="projects">Projects</Link>
          <Link className="header__navigation__link" to="#contact" aria-label="contact">Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header