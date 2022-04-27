import React from "react"

export default function LoginRegister() {
    const styles = {
        display: "flex",
        justifContent: "center",
        alignItems: "center"
    }

    const buttonStyles = {
        padding: "0.4rem 1rem",
        border: 'none',
        marginLeft: "1rem"
    }
    return (
        <ul className="header--login-register-wrapper" style={styles}>
            <li><button className="login-button" style={buttonStyles}>Login</button></li>
            <li><button className="register-button" style={buttonStyles}>Register</button></li>
        </ul>
    )
}