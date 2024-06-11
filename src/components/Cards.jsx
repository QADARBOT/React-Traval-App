import React from "react";

function Cards({ image, name, text }) {
  return (
    <div className="card-item ">
      <img src={image} alt={name} className="card-image" />
      <div>
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Cards;
