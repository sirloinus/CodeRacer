import React from 'react'
import { Button, Container, Segment } from 'semantic-ui-react';

const Welcome = ({ handlePlayClick }) => {

    const instructions = ['Welcome to CodeRacer!', 'Type the codeSnippet as fast as you can', 'Errors must be corrected in order to continue the CodeRace', 'Discover your speed and accuracy upon completion']


    return (
        <div className='welcome_container'>
            <Container>
                {instructions.map(instr => 
                    <div className="typewriterWelcome">
                        <h1 style={{ fontSize: "20px", textAlign: "center", fontFamily: "monospace", color: " rgb(28, 129, 150)" }}>{instr}</h1>
                    </div>
                )}                  
            </Container>
            <Button id='play_btn' style={{ fontSize: "22px", fontFamily: "monospace", color: "rgb(81, 2, 35)"}} onClick={handlePlayClick}>PlayGame</Button>  
        </div>
    )

}

export default Welcome