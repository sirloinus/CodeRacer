import React from 'react'
import NavBar from './components/NavBar'
import CodeRacerContainer from './containers/Game/CodeRacerContainer'
import { Button } from 'semantic-ui-react'
import GamesList from './containers/UserProfile/GamesList';
import Welcome from './components/HomeScreen/Welcome';

class LandingPage extends React.Component {

    state = {
        playing: false,
        viewGames: false
    }

    handlePlayClick = () => {
        this.setState({ playing: true, viewGames: false})
        console.log("playing!")
    }

    handleBackToMainClick = () => {
        this.setState({ playing: false, viewGames: false })
    }

    handleMyGamesClick = () => {
        this.setState({ viewGames: true, playing: false})
    }

    render(){
        const { signout, user_id } = this.props
        const { playing, viewGames } = this.state
        const { handlePlayClick, handleBackToMainClick, handleMyGamesClick } = this
        return(
            <div>
                <NavBar signout={signout} handleBackToMainClick={handleBackToMainClick} handleMyGamesClick={handleMyGamesClick}/>
                {   viewGames
                    ? <GamesList user_id={user_id}/>
                    : (playing
                        ? <CodeRacerContainer user_id={user_id} />
                        : <Welcome handlePlayClick={handlePlayClick}/> )
                }

            </div>
        )
    }

}

export default LandingPage