import React from 'react'
import { Radar } from "react-chartjs-2";

export default function Chart(props: any) {

    const { chartData } = props;
    return (
        <div>
            <canvas>
                <Radar
                    data={chartData}
                    options={{
                        elements: {
                            line: {
                                borderWidth: 3
                            }
                        },
                        plugins: {
                            title: {
                            display: true,
                            text: "Hello"
                            },
                            legend: {
                            display: true,
                            position: "bottom"
                            }
                        }
                    }}
                />
            </canvas>
        </div>
    )
}
