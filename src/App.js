import React, { useState, useEffect } from "react";

import "./App.css";
import DateForm from "./components/DateForm";
import YesterdayButton from "./components/YesterdayButton";
import TomorrowButton from "./components/TomorrowButton";
import Photo from "./components/Photo";
import moment from "moment";
import axios from "axios";

// https://api.nasa.gov/planetary/apod?api_key=pnw9hMtN9K4TH7Ba1OGkrwGgEZfSoqWb3wyDbcZs

function App() {
  // let todayMoment = moment();
  // let todayMomentFormatted = todayMoment.format("YYYY-MM-DD");
  // console.log(todayMoment);
  // console.log(todayMomentFormatted);
  //
  // console.log(moment.isMoment(today));

  let today = moment().format("YYYY-MM-DD");
  const [date, setDate] = useState(today);
  const [photo, setPhoto] = useState("");
  const [yesDisabled, setYesDisabled] = useState(false);
  const [tomDisabled, setTomDisabled] = useState(true);

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

       if(date === today){
    console.log("It's today")
    setTomDisabled(true);
  }
  else{
    setTomDisabled(false);
  }
  if(date === "1995-06-15")
  {
    console.log("Can't go back")
    setYesDisabled(true);
  }
  else{
    setYesDisabled(false);
  }
      
  }, [date]);

  const changeDate = e => {
    e.preventDefault();
    let input = e.target[0].value;
    setDate(input);
  };

  const yesterday = e => {
    let currentDate = moment(date);
    let yesterday = moment(currentDate)
      .subtract(1, "days")
      .format("YYYY-MM-DD");

    console.log("yesterday is: " + yesterday);
    setDate(yesterday);
  };

  const tomorrow = e => {
    let currentDate = moment(date);
    let tomorrow = moment(currentDate)
      .add(1, "days")
      .format("YYYY-MM-DD");

    console.log("yesterday is: " + yesterday);
    setDate(tomorrow);
  };

 let formattedDate=moment(date).format("dddd, MMMM Do YYYY");

  return (
    <div className="container">
      <div className="App">
        <div className="header">
          
          <div className="date-selectors">
            <div className="button-height">
              <YesterdayButton yesterday={yesterday} disabled={yesDisabled}/>
            </div>
            <div>
            <h1>NASA Photo of the Day</h1>
            <DateForm changeDate={changeDate} today={date} />
            </div>
            <div className="button-height">
              <TomorrowButton tomorrow={tomorrow} disabled={tomDisabled}/>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="main">
          <Photo photo={photo} date={formattedDate}/>
        </div>
      </div>
    </div>
  );
}

export default App;
