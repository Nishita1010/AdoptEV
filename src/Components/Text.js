import React from "react";
import "./Text.css";

export default function Text() {
  return (
    <div className="Text">
      <div className="Com">
        <h4> Let's Compare EV</h4>
      </div>

      <div className="Com2">
        <p> Don’t worry we got you covered by comparing the EV.</p>
      </div>

      <ul className="Com3 flex">
        <li className="Veh">
          <a href="#"> 3-Wheeler</a>
        </li>
        <li className="Veh">
          <a href="#"> 2-Wheeler</a>
        </li>
        <li className="Veh">
          <a href="#"> Bicycles</a>
        </li>
        <li className="Veh">
          <a href="#"> Cars</a>
        </li>
      </ul>
    </div>
  );
}
