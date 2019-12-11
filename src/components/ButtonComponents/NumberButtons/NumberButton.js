import React from "react";
import {numbers} from "/../../../data";
import Numbers from "./Numbers";

const NumberButton = (props) => {
  return (
    <button>
      {props.numbers}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
export default NumberButton;
