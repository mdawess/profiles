import React from 'react'

type LandingProps = {
    isVerified: boolean;
    setIsVerified: Function;
}

export default function Landing(props: LandingProps) {
  return (
    <div className='landing-container'>
        <h1 className='landing-text'>Welcome to the RCCT competitor profiles</h1>
        <h3>Please enter your password:</h3>
        <input type='text' placeholder='password'></input>
    </div>
  )
}
