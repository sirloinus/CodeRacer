import React from 'react'
import NavBar from './components/NavBar'
import CodeRacerContainer from './containers/Game/CodeRacerContainer'
import { Button } from 'semantic-ui-react'




class LandingPage extends React.Component {

    state = {
        playing: false
    }

    handlePlayClick = () => {
        this.setState({ playing: true })
        console.log("playing!")
    }

    handleBackToMainClick = () => {
        this.setState({ playing: false })
    }


    render(){
        const { signout } = this.props
        const { playing } = this.state
        const { handlePlayClick, handleBackToMainClick } = this
        return(
            <div>
                <NavBar signout={signout} handleBackToMainClick={handleBackToMainClick}/>
                {
                    playing 
                    ? <CodeRacerContainer/>
                    : <Button onClick={handlePlayClick}>Play!</Button>
                }
            </div>
        )
    }

}

export default LandingPage