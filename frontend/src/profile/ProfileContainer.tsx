import React, { useMemo, useState, useEffect } from 'react';
import Search from './Search';
import ProfileCard, { ProfileProps } from './ProfileCard';
import staticRealData from '../staticRealData';
import loading from '../assets/loading/loading.svg';

type ProfileContainerProps = {
  data: {
    profile: ProfileProps;
  }
}

export default function ProfileContainer() {

  // add the static real data to help with cold starts
  // const [profileData, setProfileData] = useState(staticRealData as unknown as ProfileProps);
  const [profileData, setProfileData] = useState({} as ProfileProps);

  const getProfileData = async () => {
    const baseURL = 'https://rcct-profiles.herokuapp.com/';
    const response = await fetch(baseURL + 'api/rcct/prod/getdata', {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data);
    setProfileData(data);
  }

  // Create the mapable data object
  const mapProfileData = () => {
    const mappedData = [];
    let data: keyof typeof profileData;
    let i: number = 0;
    for (data in profileData) {
      if ('ocean' in profileData[data] && typeof(data) === 'string') {
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

  useEffect(() => {
    getProfileData();
  }, []);
  
  return (
    <div className='main'>
      {Object.keys(profileData).length === 0 ? <div className='loading'><img src={loading} alt='loading'/></div> :
      <div>
        <div className='search-container'>
          <Search />
        </div>
        <div className='profile-container'>
          {mapProfileData()}
        </div>
      </div> 
    }
    </div>
    
  )
}

