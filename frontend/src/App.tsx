import React, {useState} from 'react';
import './App.css';
import Landing from './landing/Landing';
import ProfileContainer from './profile/ProfileContainer';

function App() {
  const [isVerified, setIsVerified] = useState(false)

  return (
    <div className="App">
      {/* add a password screen */}
      {isVerified ? 
        <ProfileContainer /> 
        : 
        <Landing 
          isVerified={isVerified} 
          setIsVerified={setIsVerified} 
        />
      }
    </div>
  );
}

export default App;
