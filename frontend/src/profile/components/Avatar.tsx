import React from 'react'
import '../../App.css'

type AvatarProps = {
    name: string;
    colour?: string;
    image?: string;
}

export default function Avatar(props: AvatarProps) {
    
    const { name, colour, image } = props;

    return (
        
        <div className='avatar' style={{ backgroundColor: colour }}>
            {typeof(image) === undefined || image === ''? 
                <h1 className='avatar-text'>{formatName(name)}</h1>
            :
                <div>
                    <img src={image} className='avatar-img' alt='headshot'/>
                </div>  
            }
        </div>
    );
};

// Need to fix the names to make sure they're full
const formatName = (name: string) => {
    const formattedName = name.trimEnd().split(' ');
    if (formattedName.length > 1) {
        return formattedName[0][0] + formattedName[1][0];
    } else {
        return formattedName[0][0]
    }
}
    
