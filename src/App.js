import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import bear from './bear.jpg';
import lion from './lion.jpg';
import penguin from './penguin.jpg';



const App = () => {
  const [animal, setAnimal] = useState(null);

  // Function to handle button click
  const showAnimal = (animalName) => {
    setAnimal(animalName);
  };

  return (
    <div className="App">
      <h1>Click an Animal</h1>
      <div>
        <button onClick={() => showAnimal('lion')}>lion</button>
        <button onClick={() => showAnimal('bear')}>bear</button>
        <button onClick={() => showAnimal('penguin')}>penguin</button>
      </div>
      {animal && (
        <div>
          <h2>{animal.charAt(0).toLowerCase() + animal.slice(1)}</h2>
          <img 
              src={animal === 'bear' ? bear : animal === 'lion' ? lion : penguin} 
              alt={animal} 
              style={{width: '200px', height: 'auto'}} 
          />
        </div>
      )}
    </div>
  );
};

export default App;