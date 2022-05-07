import React from "react"
import desktopHeroImage from "../images/image-hero-desktop.png"
import mobileHeroImage from "../images/image-hero-mobile.png"

export default function Hero() {
    return (
        <div className="hero-section">
            <picture>
                <source srcset={mobileHeroImage} media="(max-width: 43rem)"/>
                <img src={desktopHeroImage} alt="Hero image of a man holding a laptop" className="hero-image"/>
            </picture>
        </div>
    )
}