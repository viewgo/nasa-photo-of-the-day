import React from "react";

const Photo = props => {
  return (
    <>
    <div className="view view-first">
      <img src={props.photo.url} alt={props.photo.title} />
      <div className="mask">
        <h2>{props.photo.title}</h2>
        <h3>{props.photo.date}</h3>
        <p>{props.photo.explanation}</p>
      </div>
    </div>
    </>
  );
};

export default Photo;
