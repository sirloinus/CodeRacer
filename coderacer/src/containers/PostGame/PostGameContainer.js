import React from 'react'
import CodeSnippet from '../../components/Game/CodeSnippet'
import PostGameCard from '../../components/PostGame/PostGameCard';
import ScoreComparison from '../../components/PostGame/ScoreComparison';


class PostGameContainer extends React.Component {

    postGame = () => {
        const { user_id, codeObj, time, accuracy, charsPerMin } = this.props
        return fetch('http://localhost:3000/api/v1/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                game: {
                    user_id: user_id,
                    snippet_id: codeObj.id,
                    time_taken: time,
                    accuracy_percentage: accuracy,
                    characters_per_min: charsPerMin
                }
            })
        })
        // .then(resp => resp.json())
        // .then(resp => console.log(resp))
    }

    componentDidMount(){
        this.postGame()
    }

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