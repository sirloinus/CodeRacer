import React from 'react'

import { Container, Header, Segment } from 'semantic-ui-react'

const PostGameCard = () => {

    return (
        <div className='game_card_wrapper'>
        <Container>
            <Segment>
                Accuracy
                <div class="flex-wrapper">
                    <div class="single-chart">
                        <svg viewBox="0 0 36 36" class="circular-chart orange">
                        <path class="circle-bg"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path class="circle"
                            stroke-dasharray="88, 100"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" class="percentage">88%</text>
                        </svg>
                    </div>
                </div>
            </Segment>
            <Segment>
                Time
            </Segment>
            <Segment>
                Characters/min
            </Segment>
        </Container>
        </div>
    )

}

export default PostGameCard

