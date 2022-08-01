import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";

type LandingProps = {
  mainNavigation: Function;
}

export default function Landing(props: LandingProps) {
  const { mainNavigation } = props;
  
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword ] = useState('');
  const navigate = useNavigate();

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const verify = async (password: string) => {
    const baseURL = 'https://rcct-profiles.herokuapp.com/verify/';
    const response = await fetch(baseURL + password, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  }

  return (
    <div className='landing-container'>
        <h1 className='landing-text'>Welcome to the RCCT competitor profiles</h1>
        <h3>Please enter your password:</h3>
        <input type='text' placeholder='password' value={password} onChange={handlePassword}></input>
        <button onClick={() => {
          verify(password)
          .then((res) => {
            if (res.status === 'verified') {
              setIsVerified(true);
            } else {
              alert('Invalid password');
            }
          })
          mainNavigation();
        }
        }>Submit</button>
    </div>
  );
}

