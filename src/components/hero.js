import React, { Component } from 'react'
import { Link } from 'gatsby'
import {gsap} from 'gsap';
import HeroSvg from "../assets/hero.svg";

export default class Hero extends Component {
    componentDidMount() {
            var tl = gsap.timeline({});
            
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

            tl.from(heroSection, {duration: 0.6, scaleY: 0, opacity: 0})
            .from(headerNavigation, {duration: 0.3, opacity: 0})
            .from(headerIcons, {duration: 0.3, opacity: 0}, "-=0.3")
            .from(heroName, {duration: 0.4, y:-25, opacity: 0}, "-=0.3")
            .from(heroProfession, {duration: 0.4, y:-25, opacity: 0}) 
            .from(heroButton, {duration: 0.6, opacity: 0}, "-=0.4")
            .from(heroSvg, {duration: 0.7, opacity:0})
            .from(phone, {duration: 0.5, opacity: 0, x:-100}, "-=0.4")
            .from(screenBars1, {duration: 0.3, scaleX:0, transformOrigin:"left"})
            .from(screenBars2, {duration: 0.3, scaleX:0, transformOrigin:"left"}, "-=0.1")
            .from(screenBars3, {duration: 0.3, scaleX:0, transformOrigin:"left"}, "-=0.1")
            .from(screenBars4, {duration: 0.3, scaleX:0, transformOrigin:"left"}, "-=0.1")
            .from(screenBars5, {duration: 0.3, scaleX:0, transformOrigin:"left"}, "-=0.1")
            .from(screenBottomBar, {duration: 0.2, scaleY:0, transformOrigin:"top"}, "-=0.9")
            .from(topLine, {duration: 0.4, scaleX: 0, transformOrigin:"left"}, "-=0.9")
            .from(middleLine, {duration: 0.4, scaleX: 0, transformOrigin:"right"}, "-=0.9")
            .from(topBoxes, {duration: 0.4, opacity: 0})
            .from(bottomBoxes, {duration: 0.4, opacity: 0}, "-=0.4")
            .from(rightBoxes, {duration: 0.4, opacity: 0}, "-=1")
            .from(bottomCircle, {duration: 0.4, opacity: 0}, "-=0.1")
            .from(leftCircle, {duration: 0.4, opacity: 0, x: 50}, "-=0.3")    
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