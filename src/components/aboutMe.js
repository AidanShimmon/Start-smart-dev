import React, { Component } from 'react'
import AboutMe from "../assets/aboutUs.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class aboutMe extends Component {
  componentDidMount() {  
    
    const about = document.getElementById("about__content");
    const about__text = document.getElementById("about__content__text");
    const about__image = document.getElementById("about__content__image");
    
    var tl = gsap.timeline({
      scrollTrigger: about,
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    });

    tl.from(about, {
      scaleX: 0, 
      opacity: 0.3,
      transformOrigin:"left",
      duration: 0.6,
    })
    .from(about__text, {
      opacity: 0
    })
    .from(about__image, {
      opacity: 0
    })

    // gsap.from(about__text, {
    //   scrollTrigger: about,
    //   delay: 0.6,
    //   opacity: 0,
    // })

    // .from(about__image, {
    //   scrollTrigger: about,
    //   delay: 0.6,
    //   opacity: 0,
    // })
  } 

  render() {
    return (
      <section className="about" id="about">
        <div className="about__content" id="about__content">
          <div className="about__content__text" id="about__content__text">
            <span className="about__watermark">About</span>
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