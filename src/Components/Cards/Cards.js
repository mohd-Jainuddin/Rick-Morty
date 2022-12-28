import React from "react";
import "./Cards.css";

const Cards = ({ results }) => {
  console.log(results);
  let dispaly;
  if (results) {
    dispaly = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div key={id} className="col-4 position-relative mb-4">
          <div className="cards">
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className="badge bg-danger position-absolute">
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className="badge bg-success position-absolute">
                  {status}
                </div>
              );
            } else {
              return (
                <div className="badge bg-secondary position-absolute">
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    dispaly = "No Character Found :/";
  }

  return <>{dispaly}</>;
};

export default Cards;
