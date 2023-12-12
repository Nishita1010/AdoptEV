import React from "react";
import "./ItemList-style.css";
import Image1 from "../Asserts/Image1.png";
import Image2 from "../Asserts/Image2.png";
import Image3 from "../Asserts/Image3.png";
import Image4 from "../Asserts/Image4.png";
import Image5 from "../Asserts/Image5.png";
import Image6 from "../Asserts/Image6.png";
import Image7 from "../Asserts/Image7.png";
import Image8 from "../Asserts/Image8.png";

const ItemList = () => {
  return (
    <div className=" flex w-full justify-around mt-5 px-3">
      <div className=" Image d-flex justify-content-center flex-column">
        <div>
          <img src={Image1} alt="All" />
          <div className="device">All</div>
        </div>
      </div>

      <div className=" Image d-flex justify-content-center flex-column">
        <div>
          <img src={Image3} alt="3-Wheelers" />
          <div className="device">3-Wheelers</div>
        </div>
      </div>

      <div className=" Image d-flex justify-content-center flex-column">
        <div>
          <img src={Image2} alt="Bikes" />
          <div className="device">2-Wheelers</div>
        </div>
      </div>

      <div className=" Image d-flex justify-content-center flex-column">
        <div>
          <img src={Image4} alt="Cars" />
          <div className="device">Cars</div>
        </div>
      </div>

      <div className=" Image d-flex justify-content-center flex-column">
        <div>
          <img src={Image5} alt="Bicycles" />
          <div className="device">Bicycles</div>
        </div>
      </div>

      <div className=" Image d-flex justify-content-center flex-column">
        <div>
          <img src={Image6} alt="Battery" />
          <div className="device">Battery</div>
        </div>
      </div>

      <div className=" Image d-flex justify-content-center flex-column">
        <div>
          <img src={Image7} alt="Chargers" />
          <div className="device">Chargers</div>
        </div>
      </div>

      <div className=" Image d-flex justify-content-center flex-column">
        <div>
          <img src={Image8} alt="GPS" />
          <div className="device">GPS</div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
