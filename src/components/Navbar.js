import React from "react"
import xSign from "../images/icon-close-menu.svg"
import NavbarItem from "./NavbarItem.js"
export default function Navbar(props) {

    const styles = {
        marginRight: "auto",
        display: "flex",
        alignItems: "center"
    }

    const navbarItemsStyles = {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)"
    }



    // the styles for each navbar-item will be in the style.css, since I can use the the ".navbar-item" selector  to select multiple navbar items at once there.
    // This will save me from repeating code

    
    
    return (
        <nav className={`navbar ${props.widthClass}`} style={styles}>
            <img className="x-sign-icon" src={xSign} onClick={(e) => props.onClick(e)}/>
            {/* first item */}
            <ul className="navbar--navbar-items" style={navbarItemsStyles}>
                <NavbarItem name= "Features" withDropdown = {true} />
            {/* second item */}
                <NavbarItem name="Company" withDropdown = {true} />
            {/* third item */}
                <NavbarItem name="Careers" withDropdown = {false} />
            {/* forth item */}
                <NavbarItem name="About" withDropdown = {false} />

            </ul>
        </nav>
    )
}