import React, { useState } from 'react'
import radarData from '../charts/radarData';
import {Radar} from 'react-chartjs-2';


type CardProps = {
    scaleFactor: number;
    image: any;
    name: string;
    work: any;
}

export default function Card(props: CardProps) {

    const { scaleFactor, image, name, work  } = props;
    const [chartData, setChartData] = useState(radarData);

    

    
    const workExperience = () => {
        let workExp = '';
        
        for (let i = 0; i < work.length; i++) {
            if (i === 0) {
                workExp += work[i];
            } else {
                workExp += ', ' + work[i];
            }
        }

        return workExp;
    }
    

    return (
        <div 
            className='container' 
            style={{ 
                display: 'flex',
                width: 500 * scaleFactor, 
                height: 350 * scaleFactor, 
                backgroundColor: '#F6F6F6',
                marginTop: 200,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
        }}>
            {/* add the border at this layer, maybe using map over the lines & updating orientation */}
            <div 
                style={{ 
                    display: 'flex',
                    width: 440 * scaleFactor, 
                    height: 290 * scaleFactor, 
                    padding: 10,
                    border: '3px solid #3840FF',
                    alignSelf: 'center',
            }}>
                {/* First column  */}
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginLeft: 20}}>
                    <img 
                        alt='profile' 
                        src={image} 
                        style={{ 
                            width: 80, 
                            height: 80, 
                            borderRadius: 70,
                    }}/>
                    <h2 
                        style={{ 
                            fontSize: 15 * scaleFactor, 
                            fontFamily: 'Poppins', 
                            fontWeight: '700',
                            marginTop: 5,
                    }}>
                        {name}
                    </h2>
                    <Header header='Work Experience' scaleFactor={scaleFactor} />
                    <div>
                        {workExperience()}
                    </div>
                    <Header header='OCEAN' scaleFactor={scaleFactor} />
                    <div>
                        <Radar 
                            data={chartData}
                            
                        />
                    </div>
                </div>

                {/* Second column */}
                <div>

                </div>
            </div>    
        </div>
  )
}

const Header = (props: any) => {
    const { header, scaleFactor } = props;

    return (
        <h4 
            style={{ 
                fontSize: 10 * scaleFactor, 
                fontFamily: 'Poppins', 
                fontWeight: '700',
                alignItems: 'left',
        }}>
            {header}
        </h4>
    )
}