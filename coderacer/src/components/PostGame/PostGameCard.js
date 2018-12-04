import React from 'react'

import { Container, Segment } from 'semantic-ui-react'
import ChartRing from './ChartRing';

const PostGameCard = ({ accuracy, time, charsPerMin }) => {

    const seconds = time.toFixed(0)

    return (
        <div className='game_card_wrapper'>
        <Container>
            <Segment.Group horizontal>
                <Segment textAlign='center'>
                    Accuracy
                    <ChartRing value1={accuracy} value2={accuracy} colour='green' sign='%'/>
                </Segment>
                <Segment textAlign='center'>
                    Seconds
                    <ChartRing value1={seconds} value2={seconds} colour='orange'/>
                </Segment>
                <Segment textAlign='center'>
                    Chars/min
                    <ChartRing value1={charsPerMin / 10} value2={charsPerMin} colour='blue'/>           
                </Segment>
            </Segment.Group>
        </Container>
        </div>
    )

}

export default PostGameCard

