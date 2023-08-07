import React from "react";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div className="Calculator">
      <div className="container">
        <div className="name">
          <h1>
            easy<i>calc</i>
          </h1>
        </div>

        <div className="display">
          <span>0</span>
          {0}
        </div>

        <div className="buttons">
          <div className="top-row">
            <button>C</button>
            <button>(</button>
            <button>)</button>
            <button>÷</button>
          </div>

          <div className="second-row">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>x</button>
          </div>

          <div className="third-row">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
          </div>

          <div className="fourth-row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </div>

          <div className="fifth-row">
            <button>.</button>
            <button>0</button>
            <button>⌫</button>
            <button>=</button>
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
