import React from "react";

export default function Card(props){
    let textBadge

    if(props.item.openSpots === 0){
        textBadge = "SOLD OUT"
    }else if(props.item.location === "Online"){
        textBadge = "ONLINE"
    }else{
        textBadge=" SPACE AVAILABLE"
    }
    return(
        <div className="card">
            {textBadge && <div className="card-badge">{textBadge}</div>}
            <img src={`../Images/${props.item.coverImg}`} className="card-image"/>
            <div className="card-stats">
                <img src="../Images/star.png" className="card-star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price">
                <span className="bold">from {props.price}</span> / person
            </p>
        </div>
    )
}