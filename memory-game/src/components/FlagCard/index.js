import React from "react";

function FlagCard(props) {
    return (
        <div className="card" key = {props.id}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default FlagCard;