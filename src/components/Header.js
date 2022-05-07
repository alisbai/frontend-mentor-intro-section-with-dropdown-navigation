import React, {useState} from "react"
import Navbar from "./Navbar"
import LoginRegister from "./LoginRegister"
import logo from "../images/logo.svg"
import menuIcon from "../images/icon-menu.svg"
export default function Header(props) {

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

    // the burger menu icon fires a click event which calls openSidebar, which set the value of the widthClass to "open-sidebar"
    // Css take control from there

    const [widthClass, setWidthClass] = useState("collapse-sidebar")

    function handleBurgerClick(e) {
        openSidebar();
        // toggles overlay over the app except for the navbar
        props.onClick(e);
    }
    
    function openSidebar() {
        setWidthClass("open-sidebar")
    }

    function handleXSignClick(e) {
        collapseSidebar();
        // toggles overlay over the app except for the navbar
        props.onClick(e);
    }

    function collapseSidebar() {
        setWidthClass("collapse-sidebar")
    }

    return <header className="header" style={headerStyles}>
        <div className="logo-wrapper" style={logoStyles}>
            <img src={logo} / >
        </div>
        <Navbar className="navbar" widthClass = {widthClass} onClick={handleXSignClick}/>
        <LoginRegister />
        <img className="burger-menu-icon" src={menuIcon} onClick={(e) => handleBurgerClick(e)} />
    </header>
}