import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import MailIcon from "../assets/mail.svg"

const Header = () => {
  return (
    <div className="header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Start smart development</title>
        <meta
          name="description"
          content="Start smart by letting us help you develop your businesses online presence"
        />
        <meta property="og:title" content="Start smart development" />
        <meta
          property="og:description"
          content="Start smart by letting us help you develop your businesses online presence"
        />
        <meta property="og:image" content="`./src/images/favicon.png`" />
        <meta property="og:url" content="https://startsmartdevelopment.com" />
        <link rel="canonical" href="https://startsmartdevelopment.com" />
      </Helmet>
      <div className="header__content">
        <div id="header__icons" className="header__icons">
          {/* <a 
            href="https://www.linkedin.com/in/aidan-shimmon-738428168/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon/>
          </a> */}
          <a href="mailto:aidan@startsmartdevelopment.com" rel="noreferrer">
            <MailIcon />
          </a>
        </div>

        <nav id="header__navigation" className="header__navigation">
          <Link
            className="header__navigation__link one"
            to="#about"
            aria-label="about"
          >
            About
          </Link>
          <Link
            className="header__navigation__link two"
            to="#projects"
            aria-label="projects"
          >
            Projects
          </Link>
          <Link
            className="header__navigation__link three"
            to="#contact"
            aria-label="contact"
          >
            Contact
          </Link>
          <hr />
        </nav>
      </div>
    </div>
  )
}

export default Header
