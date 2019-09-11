import React from "react";

import Card from "../card/card.component";

// Styles
import "./card-list.styles.css";

const CardList = props => {
  return (
    <div className="card-list">
      {props.users.map(user => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CardList;
