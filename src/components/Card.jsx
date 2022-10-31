import React, { Children } from "react";
import Katie from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
    return (
        <div className="card">
            <img src={Katie} alt="image of Katie Zaferes" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="star-img" className="card--star" />
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </div>
    );
}
