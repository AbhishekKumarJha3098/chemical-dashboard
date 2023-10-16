import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SVGComponent from './Header';
import "./index.css";

function App() {
  const [color, setColor] = useState('blue');

  const changeColor = async (newColor) => {
    try {
      await axios.post('http://localhost:1880/change-color', { color: newColor });
      setColor(newColor);
    } catch (error) {
      console.error('Error changing color:', error);
    }
  };

  useEffect(() => {
    // Fetch and set the initial color when the component mounts
    axios.get('http://localhost:1880/get-color').then((response) => {
      setColor(response.data.color);
    });
  }, []);

  return (
    <div>
      <SVGComponent color={color} />
      <div className='size'>
      <button onClick={() => changeColor('red')}>Change to Red</button>
      <button onClick={() => changeColor('green')}>Change to Green</button>
      </div>
    </div>
  );
}

export default App;
