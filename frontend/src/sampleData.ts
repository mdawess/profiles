import { ProfileData } from "./profile/ProfileCard";

// Note the actual one would be a list of objects, but this is a sample
const sampleData: ProfileData = {
    'name': 'Michael Dawes',
    'year': '2023',
    // 'headshot': 'https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg',
    'headshot': '',
    'workExperience': ['McKinsey', 'BMO', 'Motiv'],
    'ocean': [1 , 0.5, 0.7, 1, 0.1],
    // 'skills': {
    //     'strategy': 7.8,
    //     'analysis': 5.0,
    //     'implementation': 8.0,
    //     'financials': 4.0
    // },
    'skills': [7.8, 5.0, 8.0, 4.0],
    'workingStyle': ['Analytical', 'Strategic', 'Implementation', 'Financials'],
    'developmentGoals': ['Analytical', 'Strategic', 'Implementation', 'Financials'],
    'notableCompetitions': ['JMUCC', 'TUBC', 'ICBC Ethics', 'CBS'],
    'researchSubject': 'Artificial Intelligence',
}

export default sampleData;