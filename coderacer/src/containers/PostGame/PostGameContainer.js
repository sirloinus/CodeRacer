import React from 'react'
import CodeSnippet from '../../components/Game/CodeSnippet'
import PostGameCard from '../../components/PostGame/PostGameCard';
import ScoreComparison from '../../components/PostGame/ScoreComparison';

class PostGameContainer extends React.Component {


    render() {
        const { code, accuracy, charsPerMin, time, postGame, perc_better_time_than_snippet, perc_better_chars_per_min } = this.props

        return (
            <div>
                <CodeSnippet code={code}/>
                <PostGameCard accuracy={accuracy} charsPerMin={charsPerMin} time={time} postGame={postGame}/>
                {/* <ScoreComparison/> */}
                <ScoreComparison perc_better_time_than_snippet ={perc_better_time_than_snippet} perc_better_chars_per_min={perc_better_chars_per_min}/>
            </div>
        )
    }

}

export default PostGameContainer;