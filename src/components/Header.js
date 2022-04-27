import React from "react"
import Navbar from "./Navbar"
import LoginRegister from "./LoginRegister"
import logo from "../images/logo.svg"
import menuIcon from "../images/icon-menu.svg"
export default function Header() {

    const headerStyles = {
        display: "flex",
        alignItems: "center"
        ,
        padding: "1rem 1.5rem"
    }

    const logoStyles = {
        marginRight: "1.8rem",
        display: "flex",
        alignItems: "center"
    }

    

    return <header className="header" style={headerStyles}>
        <div className="logo-wrapper" style={logoStyles}>
            <img src={logo} / >
        </div>
        <Navbar className="navbar"/>
        <LoginRegister />
        <img className="burger-menu-icon hide" src={menuIcon} />
    </header>
}