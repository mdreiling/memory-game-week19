import React from "react";

function FlagCard(props) {
    return (
        <div className="col s12 m4">
            <div className="card" key={props.id}>
                <div className="card-image">
                    <img className="responsive-img" alt={props.name} src={props.image} />
                </div>
            </div>
        </div>
    );
}

export default FlagCard;