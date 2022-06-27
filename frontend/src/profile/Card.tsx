import React from 'react'
import RadarChart from '../charts/RadarChart';
import PieChart from '../charts/PieChart';


type CardProps = {
    scaleFactor: number;
    data: any;
}

export default function Card(props: CardProps) {

    const { scaleFactor, data  } = props;
    // const [chartData, setChartData] = useState(radarData);

    
    const workExperience = () => {
        let workExp = '';
        
        for (let i = 0; i < data.workExperience.length; i++) {
            if (i === 0) {
                workExp += data.workExperience[i];
            } else {
                workExp += ', ' + data.workExperience[i];
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
                    borderRadius: 10,
                    alignSelf: 'center',
            }}>
                {/* First column  */}
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginLeft: 20}}>
                    <img 
                        alt='profile' 
                        src={data.headshot} 
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
                        {data.name}
                    </h2>
                    <Header header='Work Experience' scaleFactor={scaleFactor} />
                    <div>
                        {workExperience()}
                    </div>
                    <Header header='OCEAN' scaleFactor={scaleFactor} />
                    <div>
                        <RadarChart inputData={data.ocean} />
                    </div>
                </div>

                {/* Second column */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <PieChart value={7.8} skill='Analysis'/>
                    <PieChart value={7.8} skill='Analysis'/>
                    <PieChart value={7.8} skill='Analysis'/>
                    <PieChart value={7.8} skill='Analysis'/>
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