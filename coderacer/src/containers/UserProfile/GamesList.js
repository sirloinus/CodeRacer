import React from 'react'
import GameCard from '../../components/UserProfile/GameCard';

class GamesList extends React.Component {
    
    state = {
        games: []
    }

    fetchUserGames = userId => {
        fetch(`http://localhost:3000/api/v1/users/${userId}`)
            .then(resp => resp.json())
            .then(user => this.setState({games: user.games}))
    }

    componentDidMount() {
        this.fetchUserGames(this.props.user_id)
    }

    render() {
        const { games } = this.state
        // const { fetchUserCodeSnippet } = this
        return (
            <>
                {games.reverse().map(game => <GameCard game={game} />)}
            </>
        )
    }
}

export default GamesList