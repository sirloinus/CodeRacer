import React from 'react'
import { List, Image, Container, Divider, Segment, Header } from 'semantic-ui-react'


class Leaderboard extends React.Component {

    state = {
        users: []
    }

    rankUsers = async () => {
        const gamesCopy = [...this.props.sortedGamesSpeed]
        const userIds = gamesCopy.map(game => game.user_id)
        const userObjs = await userIds.map(userId => this.props.findUser(userId))
        this.setState({ users: userObjs})
    }

    componentDidMount() {
        this.rankUsers()
    }

    render(){
        const { speediestUser, mostAccUser, rankedUsernames } = this.props
        return(
            <Container className='leader_container' textAlign='center'>
                <Segment>
                    <Header>Leaderboard</Header>
                    <Divider/>
                    <List animated horizontal>
                        <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/tom.jpg' />
                        <List.Content>
                            <List.Header>{mostAccUser.username}</List.Header>
                            Most Accurate
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                        <List.Content>
                            <List.Header>{speediestUser.username}</List.Header>
                            Speediest
                        </List.Content>
                        </List.Item>
                    </List>
                <Divider/>
                    <List animated vertical divided ordered >

                        <List.Item>
                        <Image avatar src='USER IMAGE' />
                        <List.Content>
                            test
                        </List.Content>
                        </List.Item>
                    </List>
                </Segment>
            </Container>
        )
    }

}

export default Leaderboard