import React from 'react'

class Timer extends React.Component {

    state = {
        elapsed: 0
    }

    tick() {
        this.setState((prevState) => ({
            elapsed: prevState.elapsed + 0.005
        }))
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 50)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const seconds = this.state.elapsed.toFixed(1) * 10
        return (
            <div class="single-chart">
                <svg viewBox="0 0 36 36" class={this.state.elapsed > 60 ? "circular-chart orange" : "circular-chart blue"}>
                    <path class="circle-bg"
                        d="M18 8.4507
                        a 9.54929 9.54929 0 0 1 0 19.0986
                        a 9.54929 9.54929 0 0 1 0 -19.0986"
                    />
                    <path class="circle"
                        stroke-dasharray={`${seconds}, 60`}
                        d="M18 8.4507
                        a 9.54929 9.54929 0 0 1 0 19.0986
                        a 9.54929 9.54929 0 0 1 0 -19.0986"
                    />
                    <text x="18" y="20.35" class="percentage">{seconds}</text>
                </svg>
            </div>
        )
    }
}

export default Timer