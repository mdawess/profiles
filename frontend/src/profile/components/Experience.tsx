import React from 'react'
import '../../App.css'

type ExperienceProps = {
    experiences: string[];
}

export default function Experience(props: ExperienceProps) {

    const { experiences } = props;
    return (
        <div className='experiences'>
            {/* {formatExperience(experiences)} */}
            {formatExperience(experiences)}
        </div>
    )
}

const formatExperience = (experience: string[]) => {
    let workExp = '';
    try {
        for (let i = 0; i < experience.length; i++) {
            if (i === 0) {
                workExp += experience[i];
            } else {
                workExp += ', ' + experience[i];
            }
        }
    } catch (error) {
        // console.log(error);
        return '';
    }

    return workExp;
}
