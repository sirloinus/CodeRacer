import React from 'react'
import { List, Image, Container, Divider, Segment, Header, ListContent } from 'semantic-ui-react'


class Leaderboard extends React.Component {

    findIndex = (array, item) => {
        return array.indexOf(item)
    }

    render(){
        const { speediestUser, mostAccUser, sortedGamesSpeed, rankedUserObjs } = this.props
        const speeds = sortedGamesSpeed.map(game => game.characters_per_min)
        const { findIndex } = this
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
                        {rankedUserObjs.map(user => 
                            <List.Item>
                                <Image avatar src={user.pic_url} />
                                <List.Content>
                                    {user.username}
                                </List.Content>
                                <ListContent>
                                    {speeds[findIndex(rankedUserObjs, user)]} Chars/min
                                </ListContent>
                            </List.Item>
                        )}
                    </List>
                </Segment>
            </Container>
        )
    }

}

export default Leaderboard