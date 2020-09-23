import React from "react"

import LinkedinIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import MailIcon from "../assets/mail.svg";

const Footer = () => (
  <footer className="footer">
    <div className="footer__icons">
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
      <a 
        href="mailto:aidanshimmon@hotmail.co.uk"
        rel="noreferrer"
      >
        <MailIcon/>
      </a>
    </div>
  </footer>
)

export default Footer