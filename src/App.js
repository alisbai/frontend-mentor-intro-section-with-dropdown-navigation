import React, {useState} from "react"
import Header from "./components/Header"
import Main from "./components/Main.js"
export default function App() {

    const [overlayClass, setOverlayClass] = useState("")
    // this function toggles the 
    function toggleOverlayClass(e) {
        if(e.target.className === "x-sign-icon") {
            setOverlayClass("")
        } else if(e.target.className === "burger-menu-icon") {
            setOverlayClass("overlay-visible")
        }
    }
    return (
        <>
        <div className={`overlay ${overlayClass}`}></div>
        <Header onClick={toggleOverlayClass} />
        <Main />
        </>
    )
}