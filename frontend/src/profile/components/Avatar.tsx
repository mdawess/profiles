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
        <div className='avatar'>
            {image !== '' ? 
                <div>
                <img src={image} className='avatar-img' alt='headshot'/>
                </div>
            : 
                <h1 className='avatar-text'>{formatName(name)}</h1>
            }
        </div>
    );
};

const formatName = (name: string) => {
    const nameArray = name.split(' ');
    return nameArray[0][0] + nameArray[1][0];
}
