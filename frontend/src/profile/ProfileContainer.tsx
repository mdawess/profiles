import React, { useEffect, useState } from 'react';
// import { db } from '../api/FirebaseData';

// import { ProfileData } from './ProfileCard';
import sampleData from '../sampleData';
import Search from './Search';
import DataList from './components/DataList';
import getResponses from '../api/googleForms';



export default function ProfileContainer() {

  useEffect(() => {
    getResponses().then(data => {
      console.log(data);
    });
  }, []);
  
  return (
    <div className='main'>
      <div className='search-container'>
        <Search />
      </div>
      <div className='profile-container'>
        {/* <ProfileCard profileData={sampleData}/>
        <ProfileCard profileData={sampleData}/>
        <ProfileCard profileData={sampleData}/>
        <ProfileCard profileData={sampleData}/> */}
        {/* {profileData && Array.isArray(profileData) ? profileData.map((profile, index) => {
          return <ProfileCard 
            key={index} 
            name={profile.name} 
            headshot={profile.headshot}
            year={profile.year}
            workExperience={profile.workExperience}
            ocean={profile.ocean}
            skills={profile.skills}
            workingStyle={profile.workingStyle}
            developmentGoals={profile.developmentGoals}
            notableCompetitions={profile.notableCompetitions}
            researchSubject={profile.researchSubject} 
          />
        }) : <div>Loading...</div>} */}
      
      </div>
    </div>
    
  )
}

