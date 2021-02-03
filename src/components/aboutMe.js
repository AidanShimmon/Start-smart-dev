import React, { Component } from 'react'
import AboutMe from "../assets/aboutUs.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class aboutMe extends Component {
  componentDidMount() {  
    
    const about = document.getElementById("about");
    const about__watermark__text = document.getElementById("about__watermark__text");
    const about__text = document.getElementById("about__content__text");
    const about__image = document.getElementById("about__content__image");
    
    var tl = gsap.timeline({
      scrollTrigger: about__text,
      start: "top center", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
    });

    tl.from(about__text, {duration: 0.4, opacity: 0, y: 200 })
    .from(about__image, {duration: 0.5,opacity: 0}, "-=0.3")
    .from(about__watermark__text, {duration: 0.5, opacity: 0, y: 200 }, "-=0.3")
    
  } 

  render() {
    return (
      <section className="about" id="about">
        <div className="about__content" id="about__content">
          <div className="about__content__text" id="about__content__text">
            <span className="about__watermark"><h4 id="about__watermark__text">About</h4></span>
            <h3>About</h3>
            <p>Specialized in delivering <strong>modern</strong>, <strong>fast</strong>, <strong>secure</strong> and <strong>effective</strong> websites.</p>
            <p>Each project is approached as a unique problem to solve. During our discovery phase we will gather information about your business so we can best develop a solution to specifically match your values, requirements and style.</p>
          </div>

          <div className="about__content__image" id="about__content__image">
            <AboutMe/>
          </div>
        </div>
      </section>
    )
  }
}