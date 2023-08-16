import React from "react";
import iconComplete from "./images/icon-complete.svg";
const Thanks = ({ setShow, setName, setNumber, setMonth, setYear, setCvc }) => {
  return (
    <>
      <div className="thanks">
        <img src={iconComplete} alt="" />
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button
          onClick={() => {
            setShow(false);
            setName("FELICIA LEIRE");
            setNumber("0000 0000 0000 0000");
            setMonth("00");
            setYear("00");
            setCvc("000");
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Thanks;
