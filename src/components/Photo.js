import React from "react";
import { Jumbotron } from 'reactstrap';



const Photo = props => {
  if (!props.photo) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  } else {
    return (
      <>
<div>
      <Jumbotron>
        <h2>{props.photo.title}</h2>
        <p>{props.date}</p>
        
        <img className="fitted-image" src={props.photo.hdurl} alt={props.photo.title} />
        <br/>
        <br/>
        <p className="lead">{props.photo.explanation}</p>
        
      </Jumbotron>
    </div>
        
      </>
    );
  }
};

export default Photo;
