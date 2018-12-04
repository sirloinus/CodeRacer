import React from 'react'
import CodeSnippet from '../../components/Game/CodeSnippet'
import PostGameCard from '../../components/PostGame/PostGameCard';
import ScoreComparison from '../../components/PostGame/ScoreComparison';

class PostGameContainer extends React.Component {

    render() {
        const { code, accuracy, charsPerMin, time, postGame } = this.props

        return (
            <div>
                <CodeSnippet code={code}/>
                <PostGameCard accuracy={accuracy} charsPerMin={charsPerMin} time={time} postGame={postGame}/>
                <ScoreComparison/>
            </div>
        )
    }

}

export default PostGameContainer;