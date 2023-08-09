import React from "react";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div className="Calculator">
      <div className="container">
        <header className="header-section">
          <div className="name">
            <h1>
              easy<span>calc</span>
            </h1>
          </div>

          <div className="dark-light-mode-icon"></div>
        </header>

        <div className="display">
          <span>0</span>
          {0}
        </div>

        <div className="buttons-container">
          <div className="top-row">
            <div className="group-a">C</div>
            <div className="group-a">(</div>
            <div className="group-a">)</div>
            <div className="group-a">÷</div>
          </div>

          <div className="second-row">
            <div className="group-b">7</div>
            <div className="group-b">8</div>
            <div className="group-b">9</div>
            <div className="group-a">x</div>
          </div>

          <div className="third-row">
            <div className="group-b">4</div>
            <div className="group-b">5</div>
            <div className="group-b">6</div>
            <div className="group-a">-</div>
          </div>

          <div className="fourth-row">
            <div className="group-b">1</div>
            <div className="group-b">2</div>
            <div className="group-b">3</div>
            <div className="group-a">+</div>
          </div>

          <div className="fifth-row">
            <div className="group-b">.</div>
            <div className="group-b">0</div>
            <div className="group-b">⌫</div>
            <div className="group-c">=</div>
          </div>
        </div>
      </div>

      <footer>
        <div>Code by Farah Alhaddad</div>
        <div>Design by Jeremie Roberrini</div>
      </footer>
    </div>
  );
}
