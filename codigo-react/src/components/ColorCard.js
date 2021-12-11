import React from "react";

const ColorCard = ({ titulo, hexcode, classColor }) => {
  return (
    <div className="col-lg-6 mb-4">
      <div
        className={`card ${classColor} ${
          classColor !== "bg-light" && "text-white"
        } shadow`}
      >
        <div className="card-body">
          {titulo}
          <div
            className={`${classColor !== "bg-light" && "text-white-50"} small`}
          >
            {hexcode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
