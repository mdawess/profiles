import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import '../App.css';

type LandingProps = {
  mainNavigation: Function;
}

export default function Landing(props: LandingProps) {
  const { mainNavigation } = props;
  
  const [isVerified, setIsVerified] = useState(false);
  const [valid, setValid] = useState(true);
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
        <h1 className='landing-text'>Welcome to the RCCT competitor profiles!</h1>
        <h3 className='password-text'>Please enter the password:</h3>
        <input 
          className='password-input'
          type='text' 
          placeholder='password' 
          value={password} 
          onChange={handlePassword}
        ></input>
        <div style={{ padding: 10 }}></div>
        <div>
          {valid ? <div></div> : <div className='error-text'>Invalid password</div>}
        </div>
        <button 
          className='landing-button'
          onClick={() => {
          verify(password)
          .then((res) => {
            console.log(res);
            if (res.status === 'verified') {
              setIsVerified(true);
            } else {
              setIsVerified(false);
            }
          })
          isVerified ? mainNavigation() : setValid(false);
        }
        }>Submit</button>
    </div>
  );
}

