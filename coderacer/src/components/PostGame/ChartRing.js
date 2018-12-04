import React from 'react'

const ChartRing = ({ value1, value2, colour, sign='' }) => {

    return (
        <div class="single-chart" id='accuracy-chart'>
            <svg viewBox="0 0 36 36" class={`circular-chart ${colour}`}>
                <path class="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circle"
                    stroke-dasharray={`${value1}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{value2}{sign}</text>
            </svg>
        </div>
    )
}

export default ChartRing