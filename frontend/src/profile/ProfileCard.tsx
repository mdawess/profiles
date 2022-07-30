import React from 'react';
import '../App.css';
import Avatar from './components/Avatar';
import Header from './components/Header';
import List from './components/List';
import Name from './components/Name';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
import Spacer from './components/Spacer';
import Experience from './components/Experience';

// All data is currently hardcoded for development purposes.

// May be deleted depending on incoming data structure
type Skills = {
    analysis: number,
    strategy: number,
    implementation: number,
    financials: number
}

export type ProfileData = {
    name: string;
    year: string;
    workExperience: string[];
    ocean: number[];
    skills: number[];
    workingStyle: string[];
    developmentGoals: string[];
    notableCompetitions: string[];
    researchSubject: string;
    headshot: string;
}

type ProfileProps = {
    profileData: ProfileData;
}

export default function ProfileCard(props: any) {
  return (
    <div className='card-container'>
        <div className='left-container'>
            <div className='about-container'>
                <Avatar name={props.name} image={props.headshot} colour='#00bcd4' />
                <Name name={props.name} year={props.year} />
            </div>
            <div className='left-experience-container'>
                <Header header='Work Experience' />
                <Experience experiences={props.workExperience} />
                <Spacer width={30} />
                <Header header='OCEAN' />
                <RadarChart inputData={props.ocean} colour='#00bcd4'/>
            </div>
        </div>
        <div className='right-container'>
            <Header header='Skills' />
            <div className='skills-container'>
                <PieChart skill='Analysis' value={props.skills[0]} colour='#00bcd4' />
                <PieChart skill='Strategy' value={props.skills[1]} colour='#00bcd4' />
                <PieChart skill='Implementation' value={props.skills[2]} colour='#00bcd4' />
                <PieChart skill='Financials' value={props.skills[3]} colour='#00bcd4' />
            </div>
            <Spacer width={30} />
            <Header header='Working Style' />
            <div className='working-style-container'>
                <List listItens={props.workingStyle} />
            </div>
            <Header header='Development Goals' />
            <div className='working-style-container'>
                <List listItens={props.developmentGoals} />
            </div>
            <Header header='Notable Competitions' />
            <Experience experiences={props.notableCompetitions} />
            <Header header='Research Focus' />
            {props.researchSubject}
        </div>
    </div>
  )
}

// export default function ProfileCard(props: any) {
//   return (
//     <div className='card-container'>
//         <div className='left-container'>
//             <div className='about-container'>
//                 <Avatar name={props.profileData.name} image={props.profileData.headshot} colour='#00bcd4' />
//                 <Name name={props.profileData.name} year={props.profileData.year} />
//             </div>
//             <div className='left-experience-container'>
//                 <Header header='Work Experience' />
//                 <Experience experiences={props.profileData.workExperience} />
//                 <Spacer width={30} />
//                 <Header header='OCEAN' />
//                 <RadarChart inputData={props.profileData.ocean} colour='#00bcd4'/>
//             </div>
//         </div>
//         <div className='right-container'>
//             <Header header='Skills' />
//             <div className='skills-container'>
//                 <PieChart skill='Analysis' value={props.profileData.skills[0]} colour='#00bcd4' />
//                 <PieChart skill='Strategy' value={props.profileData.skills[1]} colour='#00bcd4' />
//                 <PieChart skill='Implementation' value={props.profileData.skills[2]} colour='#00bcd4' />
//                 <PieChart skill='Financials' value={props.profileData.skills[3]} colour='#00bcd4' />
//             </div>
//             <Spacer width={30} />
//             <Header header='Working Style' />
//             <div className='working-style-container'>
//                 <List listItens={props.profileData.workingStyle} />
//             </div>
//             <Header header='Development Goals' />
//             <div className='working-style-container'>
//                 <List listItens={props.profileData.developmentGoals} />
//             </div>
//             <Header header='Notable Competitions' />
//             <Experience experiences={props.profileData.notableCompetitions} />
//             <Header header='Research Focus' />
//             {props.profileData.researchSubject}
//         </div>
//     </div>
//   )
// }
