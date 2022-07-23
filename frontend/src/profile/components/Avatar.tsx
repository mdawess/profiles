import React from 'react'

type AvatarProps = {
    name: string;
    colour?: string;
    image?: string;
}

export default function Avatar(props: AvatarProps) {
    
    const { name, colour, image } = props;

    const styles = {
        container: {
            display: 'flex',
            width: 60,
            height: 60,
            borderRadius: 999,
            backgroundColor: colour,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontSize: 60 / 2.5,
            color: 'white',
            fontWeight: 'bold',
        },
        img: {
            width: 60,
            height: 60,
            borderRadius: 999,
        }
    };

    return (
        <div style={styles.container} className='avatar-container'>
            {image != null ? 
                <div>
                <img src={image} style={styles.img} />
                </div>
            : 
                <h1 style={styles.text}>{formatName(name)}</h1>
            }
        </div>
    );
};

const formatName = (name: string) => {
    const nameArray = name.split(' ');
    return nameArray[0][0] + nameArray[1][0];
}
