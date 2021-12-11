import React from "react";

export const ColorCard = ({ title, backgroundClassName, hexCode }) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className={`card ${backgroundClassName} text-white shadow`}>
        <div className="card-body">
          {title}
          <div className="text-white-50 small">{hexCode}</div>
        </div>
      </div>
    </div>
  );
};
