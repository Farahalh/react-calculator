import React from "react";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div className="Calculator">
      <div className="container">
        <div className="name">
          <h1>
            easy<span>calc</span>
          </h1>
        </div>

        <div className="display">
          <span>0</span>
          {0}
        </div>

        <div className="buttons-container">
          <div className="top-row">
            <button className="group-a">C</button>
            <button className="group-a">(</button>
            <button className="group-a">)</button>
            <button className="group-a">÷</button>
          </div>

          <div className="second-row">
            <button className="group-b">7</button>
            <button className="group-b">8</button>
            <button className="group-b">9</button>
            <button className="group-a">x</button>
          </div>

          <div className="third-row">
            <button className="group-b">4</button>
            <button className="group-b">5</button>
            <button className="group-b">6</button>
            <button className="group-a">-</button>
          </div>

          <div className="fourth-row">
            <button className="group-b">1</button>
            <button className="group-b">2</button>
            <button className="group-b">3</button>
            <button className="group-a">+</button>
          </div>

          <div className="fifth-row">
            <button className="group-b">.</button>
            <button className="group-b">0</button>
            <button className="group-b">⌫</button>
            <button className="group-c">=</button>
          </div>
        </div>
      </div>

      <footer>
        <div>Coded by Farah Alhaddad</div>
        <div>Design by Jeremie Roberrini</div>
      </footer>
    </div>
  );
}
