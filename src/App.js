import React, { useState, useEffect } from "react";
import "./App.css";
import DateForm from "./components/DateForm";
import Photo from "./components/Photo";
import moment from "moment";
import axios from "axios";

// https://api.nasa.gov/planetary/apod?api_key=pnw9hMtN9K4TH7Ba1OGkrwGgEZfSoqWb3wyDbcZs

function App() {
  let today = moment().format("YYYY-MM-DD");
  const [date, setDate] = useState(today);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    console.log("INITIALIZING PHOTO TO " + date);
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=pnw9hMtN9K4TH7Ba1OGkrwGgEZfSoqWb3wyDbcZs`)
      .then(response => {
        setPhoto(response.data);
      })
      .catch(e => {
        console.log("ERROR" + e);
      });
  }, []);

  useEffect(() => {
    console.log("CHANGING PHOTO TO " + date);
    axios
      .get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=pnw9hMtN9K4TH7Ba1OGkrwGgEZfSoqWb3wyDbcZs`)
      .then(response => {
        setPhoto(response.data);
      })
      .catch(e => {
        console.log("ERROR" + e);
      });
  }, [date]);

  const changeDate = e => {
    e.preventDefault();
    let input = e.target[0].value;
    setDate(input);
  };

  return (
    <div className="container">
      <div className="App">
        <div className="card">
        <div className="header">
          <h1>NASA Photo of the Day</h1>
          <DateForm changeDate={changeDate} date={date} />
          <p>Date must be between 1995-06-15 and {today}</p>
        </div>
        
          <Photo photo={photo} />
        </div>
      </div>
    </div>
  );
}

export default App;
