import React from "react";

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./images/${props.coverImg}`} alt="experience image" className="card--image" />
            <div className="card--stats">
                <img src="./images/star.png" alt="star-img" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
                <p className="card--title">{props.title}</p>
                <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    );
}
