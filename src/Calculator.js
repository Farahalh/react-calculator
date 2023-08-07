import React from "react";
import "./Calculator.css";

export default function Calculator(){
    return (
      <div className="Calculator">
        <h1>
          easy<i>calc</i>
        </h1>
        <div className="Buttons">
          <ul className="top-row">
            <li>C</li>
            <li>(</li>
            <li>)</li>
            <li>÷</li>
          </ul>

          <ul className="second-row">
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>x</li>
          </ul>

          <ul className="third-row">
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>-</li>
          </ul>

          <ul className="fourth-row">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>+</li>
          </ul>

          <ul className="fifth-row">
            <li>.</li>
            <li>0</li>
            <li>⌫</li>
            <li>=</li>
          </ul>
        </div>
      </div>
    );
}