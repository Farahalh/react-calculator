import React from "react";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div className="Calculator">
      <div className="container">
        <header className="header-section">
          <div className="calculator-name">
            <h1>
              easy<span>calc</span>
            </h1>
          </div>

          <div className="dark-light-mode-icon">
            <div className="icon-polution"></div>
          </div>
        </header>

        <div className="calculator-display">
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
            <div className="group-b value">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <path
                  d="M7.22588 4.76923L10.5607 8.26923M10.5607 8.26923L13.8956 11.7692M10.5607 8.26923L7.22588 11.7692M10.5607 8.26923L13.8956 4.76923M6.24893 1H15.9478C17.0812 1 18 1.96431 18 3.15385V12.8462C18 14.0357 17.0812 15 15.9478 15H6.24893C5.57551 15 4.94494 14.6532 4.56162 14.0721L1.3649 9.22599C0.878367 8.48842 0.878367 7.51158 1.3649 6.77401L4.56162 1.92785C4.94494 1.34675 5.57551 1 6.24893 1Z"
                  stroke="#2F2D51"
                  stroke-opacity="0.6"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div className="group-c equal-sign">=</div>
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
