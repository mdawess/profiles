import React from 'react';
import './App.css';
import Landing from './landing/Landing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProfileContainer from './profile/ProfileContainer';

function App() {
  const navigate = useNavigate();

  const navigateMain = () => {
    navigate('/secret/protected---446/profile-container');
  }

  return (
    <div className='app'>
      <Routes>
        {/* <Route path="/" element={<Landing mainNavigation={navigateMain}/>}/> */}
        {/* <Route path="/secret/protected---446/profile-container" element={<ProfileContainer />}/> */}
        <Route path="/" element={<ProfileContainer />}/>
      </Routes>

      {/* <button onClick={navigateMain}>Go to profile</button> */}
    </div>
  );
}

export default App;
