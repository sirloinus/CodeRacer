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

        mostAccUser: '',
        speediestUser: '',
        games: [],
        sortedGamesSpeed: [],
        rankedUserObjs: [],
        setPic: false,
        user: '',
    }

    fetchUser = (user_id) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(resp => resp.json())
        .then(user => this.setState({ user }))
        .then(user => console.log(user))
    }

    componentDidMount(){
        this.fetchUser(this.props.user_id)
        this.getGames()
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

    getGames = () => {
        fetch(`http://localhost:3000/api/v1/games`)
            .then(resp => resp.json())
            .then(games => {
                this.setState({ games })
                this.findSpeediestUser(games)
                this.findMostAccUser(games)
            })
    }

    findMostAccUser = async games => {
        const sorted = games.sort((a, b) => a.accuracy_percentage - b.accuracy_percentage)
        const accu = sorted[sorted.length - 1]
        const user = await this.findUser(accu.user_id)
        this.setState({ mostAccUser: user })       
    }

    findSpeediestUser = async games => {
        const sorted = games.sort((a, b) => a.characters_per_min - b.characters_per_min)
        const speediest = sorted[sorted.length - 1]
        const user = await this.findUser(speediest.user_id)
        this.setState({ speediestUser: user, sortedGamesSpeed: sorted })
        this.rankUsers()
    }

    findUser = async userId => {
        const response = await fetch(`http://localhost:3000/api/v1/users/${userId}`)
        return response.json()
    }

    rankUsers = async () => {
        const gamesCopy = [...this.state.sortedGamesSpeed]
        const userIds = gamesCopy.map(game => game.user_id)
        const userObjs = await Promise.all(userIds.map(userId => this.findUser(userId)))
        this.setState({ rankedUserObjs: userObjs })
    }

    render(){
        const { signout, user_id } = this.props
        const { playing, viewGames, welcomePage, leaderboard, speediestUser, mostAccUser, rankedUserObjs, sortedGamesSpeed, user } = this.state
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
                {/* <Button onClick={handlePlayClick}>Play!</Button> */}

                {   viewGames
                    ? <GamesList user_id={user_id}/>
                    : (playing
                        ? <CodeRacerContainer user_id={user_id} />
                        : welcomePage
                            ? <Welcome handlePlayClick={handlePlayClick}/> 
                            : leaderboard
                                ? <Leaderboard speediestUser={speediestUser} mostAccUser={mostAccUser} rankedUserObjs={rankedUserObjs} sortedGamesSpeed={sortedGamesSpeed}/>
                                : <UserProfile user_id={user_id} user={user} />                     

                        )
                }

            </div>
        )
    }

}

export default LandingPage