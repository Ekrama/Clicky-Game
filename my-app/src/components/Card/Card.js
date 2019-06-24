import React from "react";

const Card = props => (
    <div 
    key ={props.id}
    onClick= {() =>props.handleClick(props.id, props.clicked)}>
    <img
        height = "250"
        width= "250"
        id={props.id}
        src={props.image}
        alt={props.name}

    />
    </div>
);

export default Card;