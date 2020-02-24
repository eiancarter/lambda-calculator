import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick={()=> props.addNumber(props.text)}>
      {props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.text}
    </button>
  );
};
export default NumberButton;
