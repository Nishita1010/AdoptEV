import React from "react";
import "./Card-style.css";

const Card = (props) => {
  return (
    <div className="Card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="image1" className="Card-img-top" />
      </div>
      <div className="Card-body text-dark">
        <h4 className="Card-title">{props.title}</h4>
        <p className="Card-text text-secondary"> {props.text}</p>
        <a href="#" className=" btn btn-outline-dark ">
          View Offers
        </a>
      </div>
    </div>
  );
};

export default Card;
