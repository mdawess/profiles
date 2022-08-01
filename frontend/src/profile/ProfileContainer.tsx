import React, { useMemo, useState } from 'react';

import sampleData from '../sampleData';
import Search from './Search';
import ProfileCard, { ProfileData, ProfileProps } from './ProfileCard';



export default function ProfileContainer() {

  const [profileData, setProfileData] = useState({} as ProfileProps);
  const [loading, setLoading] = useState(true);

  const getProfileData = async () => {
    const baseURL = 'https://rcct-profiles.herokuapp.com/';
    const response = await fetch(baseURL + 'api/rcct/prod/getdata', {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data);
    setProfileData(data);
    setLoading(false);
  }

  // Create the mapable data object
  const mapProfileData = () => {
    const mappedData = [];
    let data: keyof typeof profileData;
    let i: number = 0;
    for (data in profileData) {
      if ('ocean' in profileData[data]) {
        mappedData.push(
            <ProfileCard
              key={i}
              name={data}
              workExperience={profileData[data].workExperience}
              ocean={profileData[data].ocean}
              skills={profileData[data].skills}
              workingStyle={profileData[data].workingStyle}
              developmentGoals={profileData[data].developmentGoals}
              notableCompetitions={profileData[data].notableCompetitions}
              researchSubject={profileData[data].researchSubject}
              headshot=''
            />
        )} else {
          <div>Not enough info yet...</div>
        }
      i++;
    }
    return mappedData;
  }

  useMemo(() => {
    getProfileData();
  }, []);
  
  return (
    <div className='main'>
      <div className='search-container'>
        <Search />
      </div>
      <div className='profile-container'>
        {/* <ProfileCard profileData={sampleData} name='Michael Dawes'/>
        <ProfileCard profileData={sampleData} name='Michael Dawes'/>
        <ProfileCard profileData={sampleData} name='Michael Dawes'/>
        <ProfileCard profileData={sampleData} name='Michael Dawes'/> */}
        {mapProfileData()}
        
      </div>
    </div>
    
  )
}

