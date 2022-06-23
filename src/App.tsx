import React, { useState } from "react";
import "./App.scss";
import Header from "./Header";
import Meta from "./Meta";
import Control from "./Control";

function App() {
  const [step, setStep] = useState(1);
  const [darkmode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="left">
          <p className="description">
            Collection of lighting is inspired by the geometric works of the
            great Suprematist artists Kissitzky and Kazimir Malevich.
          </p>
          <p className="description2">
            Suprematism is a modernist movement in the art of the early
            twentieth century, focused on the basic geometric forms, such as
            circles, squares, lines and rectangles. The geometric structure of
            the lamps will always look like a small art objects in your house.
          </p>
          <div className="controls">
            <div className="metas">
              <Meta step={step} />
            </div>
            <div className="controls">
              <Control
                step={step}
                setStep={setStep}
                darkmode={darkmode}
                setDarkMode={setDarkMode}
              />
            </div>
          </div>
        </div>
        <div
          className="right"
          style={{ backgroundImage: "url(/img/mask-group.png)" }}
        >
          <div
            className={`dark-image ${darkmode && `active`}`}
            style={{ backgroundImage: "url(/img/mask-group-dark.png)" }}
          ></div>
          <img
            src={`img/lamp1.png`}
            alt="lampe 1"
            className={step === 1 ? "active" : ""}
          />
          <img
            src={`img/lamp2.png`}
            alt="lampe 2"
            className={step === 2 ? "active" : ""}
          />
          <img
            src={`img/lamp3.png`}
            alt="lampe 3"
            className={step === 3 ? "active" : ""}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
