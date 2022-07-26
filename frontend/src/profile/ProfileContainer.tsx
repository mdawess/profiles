import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard';
import sampleData from '../sampleData';
import Search from './Search';

export default function ProfileContainer() {
  return (
    <div className='main'>
      <div className='search-container'>
        <Search />
      </div>
      <div className='profile-container'>
        <ProfileCard profileData={sampleData}/>
        <ProfileCard profileData={sampleData}/>
        <ProfileCard profileData={sampleData}/>
        <ProfileCard profileData={sampleData}/>
      </div>
    </div>
    
  )
}

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
