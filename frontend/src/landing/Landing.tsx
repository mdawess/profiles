import React, { useState, useEffect } from 'react'
import '../App.css';

type LandingProps = {
  mainNavigation: Function;
}

// Not currently working due to server issues
export default function Landing(props: LandingProps) {
  const { mainNavigation } = props;
  
  const [isVerified, setIsVerified] = useState(false);
  const [valid, setValid] = useState(true);
  const [password, setPassword ] = useState('');

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const verify = async (password: string) => {
    const baseURL = 'https://rcct-profiles.herokuapp.com/verify/';
    const response = await fetch(baseURL + password, {
      method: 'POST',
    });
    const data = await response.json();
    console.log(data);
    return data;
  }

  const handleSubmit  = () => {
    verify(password).then(data => {
      if (data.status === 'verified') {
        mainNavigation();
      } else {
        setValid(false);
      }
    })
  }

  return (
    <div className='landing-container'>
        <h1 className='landing-text'>Welcome to the RCCT competitor profiles!</h1>
        <h3 className='password-text'>Please enter the password:</h3>
        <input 
          className='password-input'
          type='text' 
          placeholder='Password' 
          value={password} 
          onChange={handlePassword}
        ></input>
        <div style={{ padding: 10 }}></div>
        <div>
          {valid ? <div></div> : <div className='error-text'>Invalid password</div>}
        </div>
        <button 
          className='landing-button'
          onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}

