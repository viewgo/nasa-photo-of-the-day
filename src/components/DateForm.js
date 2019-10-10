import React from "react";

const DateForm = (props) => {
  return (
    <>
    <form onSubmit={props.changeDate}>
      {/* <h4>({props.today})</h4>       */}
      <input type="text" name="date" placeholder="(YYYY-MM-DD)"/>
      <input type="submit" />
      <br/>
      <small>Date must be between 1995-06-16 and {props.today}</small>
    </form>
    </>
  );
};

export default DateForm;