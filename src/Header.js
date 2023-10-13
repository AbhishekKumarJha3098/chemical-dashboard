import React, { useState } from 'react';
import "./index.css";

function SVGComponent(props) {
  return (
    <div className = "size">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    fill="none"
    viewBox="0 0 200 200"
   
  >
    <path fill={props.color} d="M0 0H200V200H0z"></path>
  </svg>
  </div>
);
  
}

export default SVGComponent;
