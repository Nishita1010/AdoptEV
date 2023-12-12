import React, { Component } from "react";
import Card from "./Comparison";
import img2 from "../Asserts/img2.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3">
            <Card
              imgsrc={img2}
              title={"Mahindra Treo Zor"}
              text={"Rs. 2.50 -3.50 Lakhs*"}
            />
          </div>
          <div className="col-md-3">
            <Card
              imgsrc={img2}
              title={"Mahindra Treo Zor"}
              text={"Rs. 2.50 -3.50 Lakhs*"}
            />
          </div>
          <div className="col-md-3">
            <Card
              imgsrc={img2}
              title={"Mahindra Treo Zor"}
              text={"Rs. 2.50 -3.50 Lakhs*"}
            />
          </div>
          <div className="col-md-3">
            <Card
              imgsrc={img2}
              title={"Mahindra Treo Zor"}
              text={"Rs. 2.50 -3.50 Lakhs*"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
