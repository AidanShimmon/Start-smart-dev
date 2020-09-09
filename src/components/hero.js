import React from 'react'
import { Link } from 'gatsby'

import HeroSvg from "../assets/hero.svg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">

                <div className="hero__content__text">
                    <h1>Aidan Shimmon</h1>
                    <h2>Web developer</h2>
                    <Link className="hero__button button" to="#about" aria-label="about">About me</Link>
                </div>

                <HeroSvg/>

            </div>
        </section>
    )
}

export default Hero