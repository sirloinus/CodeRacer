import React from 'react'
import { Progress } from 'semantic-ui-react'

class ProgressBar extends React.Component {

    state = { 
        percent: 75 
    }

    increment = () =>
        this.setState({
            percent: this.state.percent >= 100 ? 0 : this.state.percent + 1,
        })

    render() {
        return (
            <div className="progress_bar">
                <Progress percent={this.state.percent} indicating />
            </div>
        )
    }

}

export default ProgressBar
