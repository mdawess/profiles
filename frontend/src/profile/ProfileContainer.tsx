import React, { useMemo, useState } from 'react';
import ProfileCard, { ProfileProps, ProfileData } from './ProfileCard';
import staticRealData from '../staticRealData';
import staticShortData from '../staticShortData';
import loading from '../assets/loading/loading.svg';
import Navbar from './components/Navbar';
import usableData from '../setupTests';

export type ProfileContainerProps = {
  data: {
    profile: ProfileProps;
  }
}

export default function ProfileContainer() {

  // add the static real data for offline work/testing
  // const [profileData, setProfileData] = useState(staticShortData as unknown as ProfileProps);
  // For the current live version
  // const [profileData, setProfileData] = useState({} as ProfileProps);

  // Offline testing of new model
  // const [profileData, setProfileData] = useState(usableData as ProfileData[]);
  // For the new live version
  const [profileData, setProfileData] = useState([] as ProfileData[]);
  const [query, setQuery] = useState('');

  const convertToArray = (object: any) => {
    const newArray = [];
    let data: keyof typeof object;
    for (data in object) {
      if (object[data].ocean) {
      newArray.push({...object[data], 'name': data})
      }
    }
    return newArray
  }

  const getProfileData = async () => {
    const baseURL = 'https://rcct-profiles.herokuapp.com/';
    const response = await fetch(baseURL + 'api/rcct/prod/getdata', {
      method: 'GET',
    });
    const data = await response.json();
    const arrayData = convertToArray(data)
    setProfileData(arrayData as unknown as ProfileData[]);
  } 

  useMemo(() => {
    // getProfileData();
    console.log(profileData)
  }, []);
  
  return (
    <div className='main'>
      {Object.keys(profileData).length === 0 ? 
      <div className='loading'>
        <img src={loading} alt='loading' width={100} height={100}/>
        <h1>Loading... this may take a few seconds</h1>
      </div> :
      <div>
          <Navbar setQuery={setQuery} />
        <div className='profile-container'>
          {/* {mapProfileData()} */}
          {
            profileData.filter(profile => {
              if (profile.name && query === '') {
                return profile
              } else if (profile.name.toLowerCase().startsWith(query.toLowerCase()) 
                          || profile.name.split(' ')[1].toLowerCase().startsWith(query.toLowerCase())) 
              {
                return profile
              }
            }).map(profile => (
              <ProfileCard
                key={profile.name}
                profileData={profile}
              />
            ))
          }
        </div>
      </div> 
    }
    </div> 
  )
}

