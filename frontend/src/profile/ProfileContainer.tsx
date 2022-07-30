import React, { useEffect, useState } from 'react';
import { db } from '../api/firebase';
import { collection, CollectionReference, DocumentData, getDocs, onSnapshot, query } from 'firebase/firestore';


// import { ProfileData } from './ProfileCard';
import ProfileCard, { ProfileData } from './ProfileCard';
import sampleData from '../sampleData';
import Search from './Search';



export default function ProfileContainer() {
  const [profileData, setProfileData] = useState<DocumentData[]>([]);
  const [values, setValues] = useState<any[]>([]);

  // const competitorRef = collection(db, 'Competitors');
  // const getProfiles = async () => {
  //   try {
  //     const data = await getDocs(competitorRef);
  //     setProfileData(data.docs.map(doc => ({...doc.data() as ProfileData})));
  //     return { success: true };
  //   } catch (error) {
  //     console.log(error);
  //     return { success: false };
  //   }
  // }
  // useEffect(() => {
  //   getProfiles().then(res => {
  //     res.success ? setLoading(false) : setLoading(true);
  //     console.log(typeof(profileData));
  //     console.log(profileData);
  //     profileData.forEach(profile => {
  //       console.log(profile);
  //     });
  //   })
  // }, []);

  // function getProfiles() {
  //   const competitorRef = collection(db, 'Competitors') as CollectionReference<ProfileData>;
  //   getDocs(competitorRef)
  //     .then(response => {
  //       const competitorList = response.docs.map(doc => doc.data())
  //       setProfileData(competitorList);
  //       // createCards(profileData);
  //       // console.log(competitorList)
  //       console.log(profileData);
  //     }).catch(error => console.log(error));
  // }

  // const getCollection = async () => {
  //   const querySnapshot = await getDocs(collection(db, "Competitors"));
  //   querySnapshot.forEach((doc) => {
  //   setProfileData(profileData => [...profileData, 
  //         <ProfileCard 
  //           key={doc.data().name} 
  //           name={doc.data().name} 
  //           headshot={doc.data().headshot}
  //           year={doc.data().year}
  //           workExperience={doc.data().workExperience}
  //           ocean={doc.data().ocean}
  //           skills={doc.data().skills}
  //           workingStyle={doc.data().workingStyle}
  //           developmentGoals={doc.data().developmentGoals}
  //           notableCompetitions={doc.data().notableCompetitions}
  //           researchSubject={doc.data().researchSubject} 
  //       />
  //     ]);
  //   });
  //   console.log(profileData);
  // }

  const getCollection = async () => {
    const querySnapshot = await getDocs(collection(db, "Competitors"));
    querySnapshot.forEach((doc) => {
    setProfileData(profileData => [...profileData, doc.data()]);
    });
    console.log(profileData);
  }

  useEffect(() => {
    // const competitorRef = query(collection(db, 'Competitors') as CollectionReference<ProfileData>)
    // onSnapshot(competitorRef, (snapshot) => {
    //   setProfileData(snapshot.docs.map(doc => ({...doc.data() as ProfileData})));
    //   console.log(profileData);
    //   // setValues(profileData.values());
    // })
    getCollection();
  }, []);

  // const createCards = (profileData: ProfileData[], key: keyof ProfileData, index: number) => {
  //   type ProfileKey = keyof ProfileData;
  //   const getKeyValue = (key: ProfileKey) => (profileData: ProfileData) => profileData[key];
  //   console.log(getKeyValue(key)(profileData[index]));
  // }

  // const createCards = (profileData: DocumentData[]) => {
  //   profileData.map(profile => {
  //     return <ProfileCard 
  //             key={profile.name} 
  //             name={profile.name} 
  //             headshot={profile.headshot}
  //             year={profile.year}
  //             workExperience={profile.workExperience}
  //             ocean={profile.ocean}
  //             skills={profile.skills}
  //             workingStyle={profile.workingStyle}
  //             developmentGoals={profile.developmentGoals}
  //             notableCompetitions={profile.notableCompetitions}
  //             researchSubject={profile.researchSubject} 
  //           />
  // })}
  


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
        {profileData && Array.isArray(profileData) ? profileData.map((profile, index) => {
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
        }) : <div>Loading...</div>}
      </div>
    </div>
    
  )
}

