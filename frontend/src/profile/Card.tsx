// import React from 'react'
// // import RadarChart from '../charts/RadarChart';
// import PieChart from './components/PieChart';
// import '../App.css'

import React from 'react'

export default function Card() {
  return (
    <div>Card</div>
  )
}

// type CardProps = {
//     scaleFactor: number;
//     data: any;
// }

// export default function Card(props: CardProps) {

//     const { scaleFactor, data  } = props;
    
//     const formatExperience = (experience: any) => {
//         let workExp = '';
        
//         for (let i = 0; i < experience.length; i++) {
//             if (i === 0) {
//                 workExp += experience[i];
//             } else {
//                 workExp += ', ' + experience[i];
//             }
//         }

//         return workExp;
//     }
    

//     return (
//         <div 
//             className='container' 
//             style={{ 
//                 display: 'flex',
//                 width: 500 * scaleFactor, 
//                 height: 350 * scaleFactor, 
//                 backgroundColor: 'white',
//                 marginTop: 200,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderRadius: 10,
//                 boxShadow: '0 5px 10px #D9D9D9',
//         }}>
//             {/* add the border at this layer, maybe using map over the lines & updating orientation */}
//             <div 
//                 style={{ 
//                     display: 'flex',
//                     width: 440 * scaleFactor, 
//                     height: 290 * scaleFactor, 
//                     padding: 10,
//                     border: '3px solid #3840FF',
//                     borderRadius: 10,
//                     alignSelf: 'center',
//             }}>
//                 {/* First column  */}
//                 <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginLeft: 20, paddingRight: 30* scaleFactor}}>
//                     <img 
//                         alt='profile' 
//                         src={data.headshot} 
//                         style={{ 
//                             width: 150, 
//                             height: 150, 
//                             borderRadius: 1000,
//                             // Not sure on this
//                             // alignSelf: 'center',
//                     }}/>
//                     <h2 
//                         style={{ 
//                             fontSize: 15 * scaleFactor, 
//                             fontFamily: 'Poppins', 
//                             fontWeight: '700',
//                             marginTop: 5,
//                             alignSelf: 'left',
//                             marginLeft: -13,
//                             marginBottom: 0
//                     }}>
//                         {data.name}
//                     </h2>
//                     <Header header='Work Experience' scaleFactor={scaleFactor} />
//                     <div style={{ marginLeft: -100, marginTop: 0 }}>
//                         <h4 style={{ fontSize: 20, fontWeight: 'normal', alignSelf: 'left' }}>{formatExperience(data.workExperience)}</h4>
//                     </div>
//                     <div>
//                         <RadarChart inputData={data.ocean} />
//                     </div>
//                 </div>

//                 {/* Second column */}
//                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left'}} >
//                     <Header header='Skill Ratings' scaleFactor={scaleFactor} />
//                     <div style={{ display: 'flex', justifyContent: 'center', }}>
//                         <PieChart value={data.skills.Analysis} skill='Analysis' scaleFactor={scaleFactor}/>
//                         <PieChart value={data.skills.Strategy} skill='Strategy'scaleFactor={scaleFactor}/>
//                         <PieChart value={data.skills.Implementation} skill='Implementation' scaleFactor={scaleFactor}/>
//                         <PieChart value={data.skills.Financials} skill='Financials' scaleFactor={scaleFactor}/>
//                     </div>
//                     <Header header='Working Style' scaleFactor={scaleFactor} />
//                     <div style={{ marginTop: -30, paddingRight: 0 }}>
//                         <ul>
//                             {data.workingStyle.map((style: string, index: number) => {
//                                 return (
//                                     <li key={index}>
//                                         {style}
//                                     </li>
//                                 )
//                             })}
//                         </ul>
//                     </div>
//                     <Header header='Development Goals' scaleFactor={scaleFactor} />
//                     <div>
//                         <ul>
//                             {data.developmentGoals.map((style: string, index: number) => {
//                                 return (
//                                     <li key={index}>
//                                         {style}
//                                     </li>
//                                 )
//                             })}
//                         </ul>
//                     </div>
//                     <Header header='Notable Competitions' scaleFactor={scaleFactor} />
//                     <div>
//                         {formatExperience(data.notableCompetitions)}
//                     </div>
//                     <Header header='Research Subject' scaleFactor={scaleFactor} />
//                     <div>
//                         {data.researchSubject}
//                     </div>
//                 </div>
//             </div>    
//         </div>
//   )
// }

// const Header = (props: any) => {
//     const { header, scaleFactor } = props;

//     return (
//         <h4 
//             style={{ 
//                 fontSize: 10 * scaleFactor, 
//                 fontFamily: 'Poppins', 
//                 fontWeight: '700',
//                 alignItems: 'left',
//                 textAlign: 'left',
//                 marginTop: 0,
//         }}>
//             {header}
//         </h4>
//     )
// }