import React from 'react'
import { Progress } from 'semantic-ui-react'

class ProgressBar extends React.Component {

    render() {
        const { progressWidth } = this.props
        return (
            <div className="progress_bar">
                <Progress percent={progressWidth} indicating />
            </div>
        )
    }

}

export default ProgressBar
