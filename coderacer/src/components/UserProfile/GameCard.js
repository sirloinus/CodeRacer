import React from 'react'
import { Container, Segment, SegmentGroup } from 'semantic-ui-react'
import ChartRing from '../PostGame/ChartRing';
import CodeSnippet from '../Game/CodeSnippet';


class GameCard extends React.Component {

    state = {
        content: ''
    }

    componentDidMount() {
        this.fetchUserCodeSnippet(this.props.game.snippet_id)
    }

    fetchUserCodeSnippet = snippetId => {
        fetch(`http://localhost:3000/api/v1/snippets/${snippetId}`)
            .then(resp => resp.json())
            .then(snippet => this.setState({content: snippet.content}))
    }

    render() {
        const { game } = this.props
        const { content } = this.state
        return (
            <div className='user_game_card_wrapper'>
                <Container>
                    <SegmentGroup>
                        <Segment.Group horizontal>
                            <Segment textAlign='center' id='monospace'>
                                Accuracy
                            <ChartRing value1={game.accuracy_percentage} value2={game.accuracy_percentage} colour='green' sign='%' />
                            </Segment>
                            <Segment textAlign='center' id='monospace'>
                                Seconds
                            <ChartRing value1={game.time_taken} value2={game.time_taken} colour='orange' />
                            </Segment>
                            <Segment textAlign='center' id='monospace'>
                                Chars/min
                            <ChartRing value1={game.characters_per_min / 5} value2={game.characters_per_min} colour='blue' />
                            </Segment>
                        </Segment.Group>
                        <Segment>
                            <CodeSnippet code={content} />
                        </Segment>
                    </SegmentGroup>
                </Container>
            </div>
    )}

}

export default GameCard