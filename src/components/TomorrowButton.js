import React from "react";

import { Button } from 'reactstrap';

const TomorrowButton = (props) => {
  if (!props.disabled) {
    return (
      <>
        <Button color="primary" size="lg" block onClick={props.tomorrow}>
          Next
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button color="primary" size="lg" block disabled>
          Next
        </Button>
      </>
    );
  }
};

export default TomorrowButton;
