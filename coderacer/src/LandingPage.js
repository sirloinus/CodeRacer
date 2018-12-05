import React from 'react'
import NavBar from './components/NavBar'
import CodeRacerContainer from './containers/Game/CodeRacerContainer'
import { Button } from 'semantic-ui-react'
import GamesList from './containers/UserProfile/GamesList';
import Welcome from './components/HomeScreen/Welcome';
import Leaderboard from './components/HomeScreen/Leaderboard'
import UserProfile from  './components/UserProfile/UserProfile'

class LandingPage extends React.Component {

    state = {
        playing: false,
        viewGames: false,
        welcomePage: true,
        leaderboard: false,
        setPic: false,
        user: ''
    }

    fetchUser = (user_id) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(resp => resp.json())
        .then(user => this.setState({ user }))
        .then(user => console.log(user))
    }

    componentDidMount(){
        this.fetchUser(this.props.user_id)
    }




    handlePlayClick = () => {
        this.setState({ playing: true, viewGames: false, welcomePage: false, leaderboard: false })
        console.log("playing!")
    }

    handleBackToMainClick = () => {
        this.setState({ playing: false, viewGames: false, welcomePage: true, leaderboard: false })
    }

    handleMyGamesClick = () => {
        this.setState({ viewGames: true, playing: false, welcomePage: false, leaderboard: false })
    }

    handleViewLeaderBoardClick = () => { 
        this.setState({ viewGames: false, playing: false, welcomePage: false, leaderboard: true })
    }

    handleViewProfileClick = () => {
        this.setState({ viewGames: false, playing: false, welcomePage: false, leaderboard: false })
    }


    render(){
        const { signout, user_id } = this.props
        const { playing, viewGames, welcomePage, leaderboard, user } = this.state
        const { handlePlayClick, handleBackToMainClick, handleMyGamesClick, handleViewLeaderBoardClick, handleViewProfileClick } = this
        return(
            <div>
                <NavBar 
                    signout={signout} 
                    handleBackToMainClick={handleBackToMainClick} 
                    handleMyGamesClick={handleMyGamesClick}
                    handleViewLeaderBoardClick={handleViewLeaderBoardClick}
                    handleViewProfileClick={handleViewProfileClick} 
                />
                <Button onClick={handlePlayClick}>Play!</Button>

                {   viewGames
                    ? <GamesList user_id={user_id}/>
                    : (playing
                        ? <CodeRacerContainer user_id={user_id} />
                        : welcomePage
                            ? <Welcome onClick={handlePlayClick}/> 
                            : leaderboard
                                ? <Leaderboard />
                                : <UserProfile user_id={user_id} user={user} />
                        

                        )
                }

            </div>
        )
    }

}

export default LandingPage