import React from "react";

const UserCards = (props) => {
  return (
    <div class="user-card">
    <img class="user-img" src="" alt="" />
    <h3>{props.data.name.first}</h3>
    <p>{props.data.phone}</p>
    <p>{props.data.location.city}, {props.data.location.state}</p>
    </div>
  );
};

export default UserCards;