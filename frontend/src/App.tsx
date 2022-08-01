import React from 'react';
import './App.css';
import Landing from './landing/Landing';
import { Route, Routes } from 'react-router-dom';
import ProfileContainer from './profile/ProfileContainer';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/profile-container" element={<ProfileContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
