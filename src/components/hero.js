import React, { Component } from 'react'
import { Link } from 'gatsby'
import {TimelineLite} from 'gsap';
import HeroSvg from "../assets/hero.svg";

export default class Hero extends Component {
    componentDidMount() {
        var tl = new TimelineLite({});
        
        const heroSection = document.getElementById("hero");
        const headerNavigation = document.getElementById("header__navigation");
        const headerIcons = document.getElementById("header__icons");
        const heroName = document.getElementById("heroName");
        const heroProfession = document.getElementById("heroProfession");
        const heroButton = document.getElementById("heroButton");
        const heroSvg = document.getElementById("heroSvg");
        const phone = document.getElementById("phone");
        const screenBottomBar = document.getElementById("screenBottomBar");
        const screenBars1 = document.getElementById("screenBars1");
        const screenBars2 = document.getElementById("screenBars2");
        const screenBars3 = document.getElementById("screenBars3");
        const screenBars4 = document.getElementById("screenBars4");
        const screenBars5 = document.getElementById("screenBars5");
        const topLine = document.getElementById("topLine");
        const middleLine = document.getElementById("middleLine");
        const topBoxes = document.getElementById("topBoxes");
        const bottomBoxes = document.getElementById("bottomBoxes");
        const rightBoxes = document.getElementById("rightBoxes");
        const bottomCircle = document.getElementById("bottomCircle");
        const leftCircle = document.getElementById("leftCircle");

        tl.from(heroSection, {cssRule: {scaleY: 0, opacity: 0}, duration: 0.6 })
          .from(headerNavigation, {cssRule: {opacity: 0}, duration: 0.3})
          .from(headerIcons, {cssRule: {opacity: 0}, duration: 0.3}, "-=0.3")
          .from(heroName, {cssRule: {y:-25, opacity: 0 }, duration: 0.4}, "-=0.3")
          .from(heroProfession, {cssRule: {y:-25, opacity: 0},duration: 0.4}) 
          .from(heroButton, {cssRule: {opacity: 0}, duration: 0.6}, "-=0.4")
          .from(heroSvg, {cssRule: {opacity:0}, duration: 0.7})
          .from(phone, {cssRule: {opacity: 0, x:-100}, duration: 0.5}, "-=0.4")
          .from(screenBars1, {cssRule: {scaleX:0, transformOrigin:"left"},duration: 0.3})
          .from(screenBars2, {cssRule: {scaleX:0, transformOrigin:"left"},duration: 0.3}, "-=0.1")
          .from(screenBars3, {cssRule: {scaleX:0, transformOrigin:"left"},duration: 0.3}, "-=0.1")
          .from(screenBars4, {cssRule: {scaleX:0, transformOrigin:"left"},duration: 0.3}, "-=0.1")
          .from(screenBars5, {cssRule: {scaleX:0, transformOrigin:"left"},duration: 0.3}, "-=0.1")
          .from(screenBottomBar, {cssRule: {scaleY:0, transformOrigin:"top"}, duration: 0.2}, "-=0.9")
          .from(topLine, {cssRule: {scaleX: 0, transformOrigin:"left"}, duration: 0.4}, "-=0.9")
          .from(middleLine, {cssRule: {scaleX: 0, transformOrigin:"right"}, duration: 0.4}, "-=0.9")
          .from(topBoxes, {cssRule: {opacity: 0}, duration: 0.4})
          .from(bottomBoxes, {cssRule: {opacity: 0}, duration: 0.4}, "-=0.4")
          .from(rightBoxes, {cssRule: {opacity: 0}, duration: 0.4}, "-=1")
          .from(bottomCircle, {cssRule: {opacity: 0}, duration: 0.4}, "-=0.1")
          .from(leftCircle, {cssRule: {opacity: 0, x: 50}, duration: 0.4}, "-=0.3")    
    }
    
    render() {
        return ( 
            <section id="hero" className="hero">
                <div className="hero__content">

                    <div className="hero__content__text">
                        <h1 id="heroName">Aidan Shimmon</h1>
                        <h2 id="heroProfession">Web developer</h2>
                        <Link 
                            className="hero__button button" 
                            to="#about" 
                            aria-label="about"
                            id="heroButton"
                        >
                        About me
                        </Link>
                    </div>

                    <HeroSvg id="heroSvg"/>

                </div>
            </section>
        )
    }
}