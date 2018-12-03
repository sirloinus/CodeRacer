import React from 'react'
import CodeSnippet from '../../components/Game/CodeSnippet'
import PostGameCard from '../../components/PostGame/PostGameCard';
import ScoreComparison from '../../components/PostGame/ScoreComparison';


class PostGameContainer extends React.Component {

    state = {
        
    }


    render() {
        const { code } = this.props
        return (
            <div>
                <CodeSnippet code={code} />
                <PostGameCard/>
                <ScoreComparison/>
            </div>
        )
    }

}

export default PostGameContainer;