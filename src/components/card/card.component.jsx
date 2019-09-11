import React from "react";

// Styles
import "./card.styles.css";

const Card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.user.id}?set=set5&size=180x180`}
        alt="user"
      />
      <h2>{props.user.name}</h2>
      <p>{props.user.email.toLowerCase()}</p>
      <small>
        <em>Username:</em> {props.user.username}
      </small>
      <small>
        <em>from</em>: {props.user.address.city}
      </small>
    </div>
  );
};

export default Card;
