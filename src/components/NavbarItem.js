import React, {useState} from "react"
import arrowUp from "../images/icon-arrow-up.svg"
import arrowDown from "../images/icon-arrow-down.svg"
import iconTodo from "../images/icon-todo.svg"
import iconCalendar from "../images/icon-calendar.svg"
import iconReminders from "../images/icon-reminders.svg"
import iconPlanning from "../images/icon-planning.svg"

export default function NavbarItem(props) {
    // featuresVisibilityClass companyVisibilityClass have two possible values: "" and "hide" 
    // toggle each of these classes by firing the corresponding click event in order to show or hide the item cards
    const [features, setFeatures] = useState({isOpen: false, visibilityClass: "hide", arrowFlippingClass: ""})
    const [company, setCompany] = useState({isOpen: false, visibilityClass: "hide", arrowFlippingClass: ""})

    // toggles on and off the visibility class within the Features navbar card and the Company navbar card
    function toggleVisibilityClass() {
        if(props.name === "Features") {

            setFeatures(prevClass => prevClass.isOpen ? {isOpen: false, visibilityClass: "hide", arrowFlippingClass: ""} : {isOpen: true, visibilityClass: "", arrowFlippingClass: "flip-arrow"})
            
        } else if (props.name === "Company") {
            setCompany(prevClass => prevClass.isOpen ? {isOpen: false, visibilityClass: "hide", arrowFlippingClass: ""} : {isOpen: true, visibilityClass: "", arrowFlippingClass: "flip-arrow"})
        }
    }
    return (
        <li className={`navbar-item ${props.name}`} onClick= {toggleVisibilityClass}>
            <span className="navbar-item-name">{props.name}</span>
            {props.withDropdown && props.name === "Features" && 
            <>
            <div className="arrows-wrapper">
                <img className="arrow-up" src={arrowUp}/>
                <img className={`arrow-down ${features.arrowFlippingClass}`} src={arrowDown}/>
            </div>
            <ul className={`features-item-card item-card ${features.visibilityClass}`}>
                <li><img src={iconTodo}/>Todo list</li>
                <li><img src={iconCalendar}/>Calendar</li>
                <li><img src={iconReminders}/>Reminders</li>
                <li><img src={iconPlanning}/>Planning</li>
            </ul>
            </>}

            {props.withDropdown && props.name === "Company" && 
            <>
            <div className="arrows-wrapper">
                <img className="arrow-up" src={arrowUp}/>
                <img className= {`arrow-down ${company.arrowFlippingClass}`} src={arrowDown}/>
            </div>
            <ul className={`company-item-card item-card ${company.visibilityClass}`}>
                <li>History</li>
                <li>Owr Team</li>
                <li>Blog</li>
            </ul>
            </>}
        </li>
    )
}