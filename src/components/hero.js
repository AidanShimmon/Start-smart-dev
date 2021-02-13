import React, { Component } from 'react'
import {gsap} from 'gsap';
import Button from "./button";
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

            tl.from(heroSection, {duration: 0.6, scaleY: 0, transformOrigin:"top", opacity: 0}, "+=0.2")
            .from(headerNavigation, {duration: 0.3, opacity: 0})
            .from(headerIcons, {duration: 0.3, opacity: 0}, "-=0.3")
            .from(heroName, {duration: 0.4, y:-25, opacity: 0}, "-=0.3")
            .from(heroProfession, {duration: 0.4, y:-25, opacity: 0}, "-=0.3") 
            .from(heroButton, {duration: 0.4, y:-25, opacity: 0}, "-=0.3")
            .from(heroSvg, {duration: 0.7, opacity:0})
    }
    
    render() {
        return ( 
            <section id="hero" className="hero">
                <div className="hero__content">

                    <div className="hero__content__text">
                        <h1 id="heroName">Start Smart<br/>Development</h1>
                        <h2 id="heroProfession">Looking to <strong>start a new bussiness</strong> and require a <strong>website</strong>?</h2>
                        <Button
                            text="Learn more"
                            link="#about"
                            id="heroButton"
                            className="hero__button button"
                        />
                    </div>

                    <HeroSvg id="heroSvg"/>

                </div>
            </section>
        )
    }
}