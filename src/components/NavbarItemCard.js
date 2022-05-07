import React, { useState } from  "react"

export default function NavbarItemCard(props) {
    [cardItems, setCardItems] = useState(Array(props.numOfItems))

    return (
        <ul className="navbar-item-card">

        </ul>
    )
}