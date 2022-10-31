import React from "react";
import AirbnbLogo from "../images/airbnb-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={AirbnbLogo} />
        </nav>
    );
}