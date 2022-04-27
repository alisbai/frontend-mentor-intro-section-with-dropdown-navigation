import React from "react"
import arrowUp from "../images/icon-arrow-up.svg"
import arrowDown from "../images/icon-arrow-down.svg"
import xSighn from "../images/icon-close-menu.svg"
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={xSighn} />
            {/* first item */}
            <ul className="navbar--navbar-items">
                <li className="navbar-item features">
                    <span className="navbar-item-name">Features</span>
                    <div className="arrows-wrapper">
                        <img className="arrow-up" src={arrowUp}/>
                        <img className="arrow-down" src={arrowDown}/>
                    </div>
                    <div className="navbar-item-card"></div>
                </li>
            {/* second item */}
                <li className="navbar-item company">
                    <span className="navbar-item-name">Company</span>
                    <div className="arrows-wrapper">
                        <img className="arrow-up" src={arrowUp}/>
                        <img className="arrow-down" src={arrowDown}/>
                    </div>
                    <div className="navbar-item-card"></div>
                </li>
            {/* third item */}
                <li className="navbar-item careers">
                    <span className="navbar-item-name">Careers</span>
                    <div className="arrows-wrapper">
                        <img className="arrow-up" src={arrowUp}/>
                        <img className="arrow-down" src={arrowDown}/>
                    </div>
                </li>
            {/* forth item */}
                <li className="navbar-item about">
                    <span className="navbar-item-name">About</span>
                    <div className="arrows-wrapper">
                        <img className="arrow-up" src={arrowUp}/>
                        <img className="arrow-down" src={arrowDown}/>
                    </div>
                </li>

            </ul>
        </nav>
    )
}