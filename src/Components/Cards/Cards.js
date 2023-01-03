import React from "react";
import { Link } from "react-router-dom";
import  styles from "../Cards/Cards.css";

const Cards = ({ results, page }) => {
  console.log(results);
  let dispaly;
  if (results) {
    dispaly = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link
          style={{textDecoration: "none"}}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark"
        >
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt="img" className="img-fluid" />
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
        </Link>
      );
    });
  } else {
    dispaly = "No Character Found :/";
  }

  return <>{dispaly}</>;
};

export default Cards;
