import React from "react";

import { Button } from "reactstrap";

const YesterdayButton = props => {
  if (!props.disabled) {
    return (
      <>
        <Button color="primary" size="lg" block onClick={props.yesterday}>
          Previous
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button color="primary" size="lg" block disabled>
          Previous
        </Button>
      </>
    );
  }
};

export default YesterdayButton;
