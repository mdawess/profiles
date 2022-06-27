import React from 'react';
import './App.css';
import Card from './profile/Card';
import stock from './assets/stock.jpg'
import sampleData from './sampleData';

function App() {
  const scaleFactor = 1.5;

  return (
    <div className="App" style={{  
      display: 'flex', 
      alignItems: 'middle', 
      justifyContent: 'center', 
      }}>
      <Card scaleFactor={scaleFactor} data={sampleData} />
    </div>
  );
}

export default App;
