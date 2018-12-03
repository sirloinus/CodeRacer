import React from 'react'

import { Container, Segment } from 'semantic-ui-react'

const PostGameCard = ({ accuracy }) => {

    return (
        <div className='game_card_wrapper'>
        <Container>
            <Segment.Group horizontal>
                <Segment textAlign='center'>
                    Accuracy
                    {/* <div class="flex-wrapper"> */}
                        <div class="single-chart">
                            <svg viewBox="0 0 36 36" class="circular-chart orange">
                            <path class="circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path class="circle"
                                stroke-dasharray={`${accuracy}, 100`}
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="18" y="20.35" class="percentage">{accuracy}%</text>
                            </svg>
                        {/* </div> */}
                    </div>
                </Segment>
                <Segment textAlign='center'>Time</Segment>
                <Segment textAlign='center'>Characters/min</Segment>
            </Segment.Group>
        </Container>
        </div>
    )

}

export default PostGameCard

