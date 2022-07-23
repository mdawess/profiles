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

export default function ProfileCard() {
  return (
    <div className='container'>
        <div className='left-container'>
            <div className='about-container'>
                <Avatar name='Michael Dawes' colour='#00bcd4' />
                <Name name='Michael Dawes' year='2023' />
            </div>
            <div className='left-experience-container'>
                <Header header='Work Experience' />
                <Experience experiences={['Software Engineer', 'Software Engineer', 'Software Engineer', 'Software Engineer', 'Software Engineer']} />
                <Spacer width={30} />
                <Header header='OCEAN' />
                <RadarChart inputData={[0.5, 0.5, 0.5, 0.5, 0.5]} colour='#00bcd4'/>
            </div>
        </div>
        <div className='right-container'>
            <Header header='Skills' />
            <div className='skills-container'>
                <PieChart skill='Analysis' value={5} colour='#00bcd4' />
                <PieChart skill='Analysis' value={5} colour='#00bcd4' />
                <PieChart skill='Analysis' value={5} colour='#00bcd4' />
                <PieChart skill='Analysis' value={5} colour='#00bcd4' />
            </div>
            <Spacer width={30} />
            <Header header='Working Style' />
            <div className='working-style-container'>
                <List listItens={['Agile', 'Scrum', 'Waterfall']} />
            </div>
            <Header header='Development Goals' />
            <div className='working-style-container'>
                <List listItens={['Agile', 'Scrum', 'Waterfall']} />
            </div>
            <Header header='Notable Competitions' />
            <Experience experiences={['Software Engineer', 'Software Engineer', 'Software Engineer']} />
            <Header header='Research Focus' />
            {'Artificial Intelligence'}
        </div>
    </div>
  )
}
