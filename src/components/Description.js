import React from "react"
import clientAudiophile from "../images/client-audiophile.svg"
import clientDatabiz from "../images/client-databiz.svg"
import clientMaker from "../images/client-maker.svg"
import clientMeet from "../images/client-meet.svg"

export default function Description() {
    return (
        <div className="description-section">
            <h1 className="main-heading">Make remote work</h1>
            <p className="main-para">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className="btn call-to-action">Learn More</button>
            <div className="client-logos-wrapper">
                <img className="client-logo" src={clientAudiophile}></img>
                <img className="client-logo" src={clientDatabiz}></img>
                <img className="client-logo" src={clientMaker}></img>
                <img className="client-logo" src={clientMeet}></img>
            </div>
        </div>
    )
}