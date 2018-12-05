import React from 'react'
import { Button, Container, Segment } from 'semantic-ui-react';

const Welcome = ({ handlePlayClick }) => {

const text = 'You completed this snippet quicker than of players! \n You completed \n this snippet quicker than of players! You completed this snippet quicker than of players! You completed this snippet quicker than of players! You completed this snippet quicker than of players!'


    return (
        <>
            <Container>
                    <div className="typewriter">
                        <h1 style={{ fontSize: "15px", textAlign: "center", fontFamily: "monospace", color: "rgb(102, 102, 102)" }}>{text}</h1>
                    </div>
                    <div className="typewriter">
                        <h1 style={{ fontSize: "15px", textAlign: "center", fontFamily: "monospace", color: "rgb(102, 102, 102)" }}>{text}</h1>
                    </div>
                    
            </Container>
            <Button onClick={handlePlayClick}>Play!</Button>
        </>
    )

}

export default Welcome