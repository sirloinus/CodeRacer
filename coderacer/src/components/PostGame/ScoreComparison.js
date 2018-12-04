import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

class ScoreComparison extends React.Component {


    componentDidMount(){
        console.log(this.props.perc_better_time_than_snippet)
    }

    render(){
        const { perc_better_time_than_snippet, perc_better_chars_per_min } = this.props
        return (
            <div className='comparison_wrapper'>
            <Container>
                { perc_better_time_than_snippet 
                ? <Segment>  You completed this snippet quicker than {Math.floor(perc_better_time_than_snippet)}% of players! </Segment>
                : null 
                }
                { perc_better_chars_per_min 
                ? <Segment> Your characters per minute is faster than {Math.floor(perc_better_chars_per_min)}% of players! </Segment>
                : null
                }
            </Container>
            </div>
        )
    }
}

export default ScoreComparison