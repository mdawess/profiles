import React from 'react'

type SpacerProps = {
    width: number;
}

export default function Spacer(props: SpacerProps) {
    const { width } = props;
    return (
        <div style={{
            width: width,
            height: 10,
            color: 'black',
        }}>
        </div>
    )
    }
