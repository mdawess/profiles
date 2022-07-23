import React from 'react'
import '../../App.css'

type HeaderProps = {
    header: string;
}

export default function Header(props: HeaderProps) {

    const { header } = props;
    return (
        <h2 className='header'>{header}</h2>
    )
}
