import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

class ScoreComparison extends React.Component {

    render(){
        const { perc_better_time_than_snippet, perc_better_chars_per_min } = this.props
        return (
            <div className='comparison_wrapper'>
            <Container>
                <Segment>{"You were faster than " + Math.floor(perc_better_time_than_snippet) + "% of players!"}  </Segment>
                <Segment>{"Your characters per minute is faster than " + Math.floor(perc_better_chars_per_min) + "% of players!"} </Segment>

            </Container>
            </div>
        )
    }
}

export default ScoreComparison