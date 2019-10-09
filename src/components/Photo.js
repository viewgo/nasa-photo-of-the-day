import React from "react";

const Photo = props => {
  if (!props.photo) return <h3>Loading...</h3>;
  else {
    return (
      <>
        <div className="view view-first">
          <img src={props.photo.hdurl} alt={props.photo.title} />
          <div className="mask">
            <h2>{props.photo.title}</h2>
            <h3>{props.photo.date}</h3>
            <div className="maskPDiv">
              <p>{props.photo.explanation}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Photo;
