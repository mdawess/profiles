import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs, } from 'firebase/firestore';
import Header from './Header';
import List from './List';
import Name from './Name';
import PieChart from './PieChart';
import RadarChart from './RadarChart';
import Spacer from './Spacer';
import Experience from './Experience';
import Avatar from "./Avatar";
import ProfileCard from "../ProfileCard";


const firebaseConfig = {
  apiKey: "AIzaSyCZ0o2M1dwDd-4rN7Mnobs0GpmfgmSCwTc",
  authDomain: "profiles-fbcbc.firebaseapp.com",
  databaseURL: "https://profiles-fbcbc-default-rtdb.firebaseio.com",
  projectId: "profiles-fbcbc",
  storageBucket: "profiles-fbcbc.appspot.com",
  messagingSenderId: "987132028773",
  appId: "1:987132028773:web:344b49807fdc4b828a238c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default function DataList() {

    const [data, setData] = React.useState([]);
    const [profileData, setProfileData] = React.useState([])

    function getData() {
        const collectionRef = collection(db, 'Competitors');
        getDocs(collectionRef).then(response => {
        const profiles = response.docs.map(doc => {
            return {
            id: doc.id,
            ...doc.data()
            }
        })
        setData(profiles);
        }).catch(error => {
        console.log(error);
        });
    }

    function consolidateData(data) {
        const profiles = data.map(profile => {
            return {
                name: profile.name,
                year: profile.year,
                workExperience: profile.workExperience,
                ocean: profile.ocean,
                skills: profile.skills,
                workingStyle: profile.workingStyle,
                developmentGoals: profile.developmentGoals,
                notableCompetitions: profile.notableCompetitions,
                researchSubject: profile.researchSubject,
                headshot: profile.headshot
            }
        })
        setProfileData(profiles);
        console.log(profiles);
    }

    React.useEffect(() => {
        getData();
        consolidateData(data);
    }, []);

    return (
        <div>
            {/* { profileData ?
            
            profileData.map(profile => {
                if (typeof profile.skills !== undefined) {
                    return (
                        <ProfileCard 
                            key={profile.id} 
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
                    )
                } else {
                    return <div key={profile.id}></div>;
                }
                
            }) : <div>Loading...</div>
        } */}
        {  data && typeof data !== undefined ? 
            data.map((profile, index) => {
                return (<div key={index}>
                    {/* <Avatar name={profile.name} image={profile.headshot} />  // doesnt work */}
                    {/* <Name name={profile.name} year='2023' /> // works */}
                    <Experience experiences={profile.workExperience} />
                            <h1>{profile.name}</h1>
                            <h1>{profile.headshot}</h1>
                            <h1>{profile.year}</h1>
                            <h1>{profile.workExperience}</h1>
                            <h1>{profile.ocean}</h1>
                            <h1>{profile.skills}</h1>
                            <h1>{profile.workingStyle}</h1>
                            <h1>{profile.developmentGoals}</h1>
                            <h1>{profile.notableCompetitions}</h1>
                            <h1>{profile.researchSubject}</h1>
                        </div>)
        }) : <div>Loading...</div>}
        </div>
    )
}

