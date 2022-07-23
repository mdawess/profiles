import React from 'react'
import '../../App.css'

type NameProps = {
    name: string;
    year: string;
}

export default function Name(props: NameProps) {

    const { name, year } = props;
    return (
        <div className='name-container'>
            <h1>{name}</h1>
            <h2>{year}</h2>
        </div>
    )
}
