import React from 'react'
import CodeSnippet from '../../components/Game/CodeSnippet'
import PostGameCard from '../../components/PostGame/PostGameCard';
import ScoreComparison from '../../components/PostGame/ScoreComparison';


class PostGameContainer extends React.Component {


    render() {
        const { code, accuracy, charsPerMin, time } = this.props
        return (
            <div>
                <CodeSnippet code={code} />
                <PostGameCard accuracy={accuracy} charsPerMin={charsPerMin} time={time}/>
                <ScoreComparison/>
            </div>
        )
    }

}

export default PostGameContainer;