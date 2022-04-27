import React from "react"
import Navbar from "./Navbar"
import LoginRegister from "./LoginRegister"
import logo from "../images/logo.svg"
export default function Header() {


    return <header className="header" style={headerStyles}>
        <div className="logo-wrapper">
            <img src={logo} / >
        </div>
        <Navbar className="navbar"/>
        <LoginRegister />
    </header>
}