import React from "react";

const DateForm = (props) => {
  return (
    <form onSubmit={props.changeDate}>
      Select a date (YYYY-MM-DD): 
      <input />
      <input type="submit" />
    </form>
  );
};

export default DateForm;
