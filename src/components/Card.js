import React from "react";

function Card(props) {
  return (
    <div className="cardContainer">
      <img src={props.url} alt="" />

      <div className="cardInfo">
        <div className="cardLocation">
          <p>📍 {props.location}</p>
          <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>

        <h2>{props.title}</h2>

        <h4>
          {props.startDate} - {props.endDate}
        </h4>
        <p id="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
