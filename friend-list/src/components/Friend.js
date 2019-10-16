import React from "react";

const Friend = props => {
  return (
    <div className="friend-card">
      <h2>{props.name}</h2>
      <h3>Email: {props.email}</h3>
      <h3>Age: {props.age}</h3>
    </div>
  );
};

export default Friend;
