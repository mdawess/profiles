import React, { useEffect } from 'react';
import './App.css';
import ProfileCard from './profile/ProfileCard';
import sampleData from './sampleData';

// Allows for access to firestore database within the react app
// import { db } from './firebase';

const consolidateData = () => {
  // TODO: Implement this function
  // Should take all the data for a specific person and average the scores
  // and combine the text data into one string
  // then return it as a single object and write it to the store under the production
  // collection with their name as the ID
  return;
}

const createCards = () => {
  // TODO: Implement this function
  // Should take the data from the Production collection and create a card for each person
  return;
}

function App() {

  // Should requery data from the database every time the app loads
  // Might look into using redux
  // May also move this all to a container class to be rendered within "app.tsx"
  useEffect(() => {
    consolidateData();
  }, [])

  const scaleFactor = 2.5;

  return (
    <div className="App">
      <ProfileCard />
    </div>
  );
}

export default App;
