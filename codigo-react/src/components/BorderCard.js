import React from "react";

const BorderCard = ({
  titulo,
  texto,
  porcentaje,
  borderColor,
  icon,
  progress,
}) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card ${borderColor} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                {titulo}
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    {texto}
                  </div>
                </div>
                {progress && (
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={porcentaje}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-auto">{icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorderCard;
