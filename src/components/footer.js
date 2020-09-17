import React from "react"

import LinkedinIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import MailIcon from "../assets/mail.svg";

const Footer = () => (
  <footer className="footer">
    <div className="footer__icons">
      <LinkedinIcon/>
      <GithubIcon/>
      <MailIcon/>
    </div>
  </footer>
)

export default Footer