import React from 'react'

import AboutMe from "../assets/aboutMe.svg";

const aboutMe = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__content__text">
          <span className="about__watermark">About</span>
          <h3>About me.</h3>
          <h4>Web developer</h4>
          <p>Specialized in delivering <strong>modern</strong>, <strong>clean</strong>, <strong>fast</strong> and <strong>effective</strong> websites. My skillset consists of HTML, SCSS, JavaScript, Wordpress and Vue. </p>
          <p>Outside of web development I am passionate about music, excersice and sustainability.</p>
        </div>

        <div className="about__content__image">
          <AboutMe/>
        </div>
      </div>
    </section>
  )
}

export default aboutMe;