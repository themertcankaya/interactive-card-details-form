import bgDesktop from "./images/bg-main-desktop.png";
import bgMobile from "./images/bg-main-mobile.png";
import cardBack from "./images/bg-card-back.png";
import cardFront from "./images/bg-card-front.png";
import cardLogo from "./images/card-logo.svg";
import iconComplete from "./images/icon-complete.svg";

import Thanks from "./Thanks";

import { useState } from "react";
import FormHandle from "./FormHandle";

function App() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("FELICIA LEIRE");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("000");

  return (
    <>
      <div className="container">
        <div className="left">
          <img src={bgDesktop} className="desktop" />
        </div>
        <div className="right">
          {!show ? (
            <FormHandle
              setShow={setShow}
              setName={setName}
              setNumber={setNumber}
              setMonth={setMonth}
              setYear={setYear}
              setCvc={setCvc}
            />
          ) : (
            <Thanks
              setShow={setShow}
              setName={setName}
              setNumber={setNumber}
              setMonth={setMonth}
              setYear={setYear}
              setCvc={setCvc}
            />
          )}
        </div>
      </div>

      <div className="credit">
        <div className="card-front">
          <div className="info-front">
            <img src={cardLogo} alt="" />
            <h3 className="card-number">{number}</h3>
            <div className="name-date">
              <p>{name}</p>
              <p>
                {month}/{year}
              </p>
            </div>
          </div>
        </div>
        <div className="card-back">
          <p className="cvc">{cvc}</p>
        </div>
      </div>
    </>
  );
}

export default App;
