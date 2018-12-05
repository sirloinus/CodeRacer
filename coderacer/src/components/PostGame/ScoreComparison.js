import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import './ScoreComparison.css'

class ScoreComparison extends React.Component {


    componentDidMount(){
        console.log(this.props.perc_better_time_than_snippet)
    }

    render(){
        const { perc_better_time_than_snippet, perc_better_chars_per_min } = this.props
        return (
            <div className='comparison_wrapper'>
            <Container>
                { 
                <Segment> 
                    <div className="typewriter">
                        <h1 style={{ fontSize: "15px", textAlign: "center", fontFamily: "monospace", color: "rgb(102, 102, 102)"}}>You completed this snippet quicker than <strong>{Math.floor(perc_better_time_than_snippet)}%</strong> of players!</h1> 
                    </div>
                </Segment>
                }
                { 
                <Segment> 
                    <div className="typewriter">
                        <h1 style={{ fontSize: "15px", textAlign: "center", fontFamily: "monospace", color: "rgb(102, 102, 102)"}}>You have a higher chars/min than <strong>{Math.floor(perc_better_chars_per_min)}%</strong> of players!</h1>
                    </div>
                </Segment>
                }
            </Container>
            </div>
        )
    }
}

export default ScoreComparison