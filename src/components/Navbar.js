import React from "react"
import arrowUp from "../images/icon-arrow-up.svg"
import arrowDown from "../images/icon-arrow-down.svg"
import xSighn from "../images/icon-close-menu.svg"
export default function Navbar() {

    const styles = {
        marginRight: "auto",
        display: "flex",
        alignItems: "center"
    }

    const navbarItemsStyles = {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)"
    }


    // the styles for each navbar-item will be in the styl.css, since I can use the the ".navbar-item" selecor there.
    // This will save me from repeating code
    
    return (
        <nav className="navbar" style={styles}>
            <img className="x-sign-icon hide" src={xSighn} />
            {/* first item */}
            <ul className="navbar--navbar-items" style={navbarItemsStyles}>
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
                </li>
            {/* forth item */}
                <li className="navbar-item about">
                    <span className="navbar-item-name">About</span>
                </li>

            </ul>
        </nav>
    )
}