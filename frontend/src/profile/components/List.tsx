import React from 'react'
import '../../App.css'

type ListProps = {
    listItens: string[];
}

export default function List(props: ListProps) {
    const { listItens } = props;


    return (
        <ul className='list'>
            {listItens.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}
