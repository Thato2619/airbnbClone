import React from "react";

export default function Card(props){
    let textBadge

    if(props.openSpots === 0){
        textBadge = "SOLD OUT"
    }else if(props.location === "Online"){
        textBadge = "ONLINE"
    }else{
        textBadge=" SPACE AVAILABLE"
    }
    return(
        <div className="card">
            {textBadge && <div className="card-badge">{textBadge}</div>}
            <img src={`../Images/${props.img}`} className="card-image"/>
            <div className="card-stats">
                <img src="../Images/star.png" className="card-star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price">
                <span className="bold">from {props.price}</span> / person
            </p>
        </div>
    )
}