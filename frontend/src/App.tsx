import React from 'react';
import './App.css';
import Card from './profile/Card';
import stock from './assets/stock.jpg'

function App() {
  const scaleFactor = 1.5;

  return (
    <div className="App" style={{  
      display: 'flex', 
      alignItems: 'middle', 
      justifyContent: 'center', 
      }}>
      <Card scaleFactor={scaleFactor} image={stock} name='Jane Doe' work={['McKinsey', 'BMO', 'Motiv']} />
    </div>
  );
}

export default App;
