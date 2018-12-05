import React from 'react'
import { List, Image, Container } from 'semantic-ui-react'


class Leaderboard extends React.Component {

    state = {

    }

    render(){
        return(
            <Container>
                <List vertical ordered>
                    <List.Item>
                    <Image avatar src='USER IMAGE' />
                    <List.Content>
                        <List.Header>USERNAME</List.Header>
                        CHARS PER MIN
                    </List.Content>
                    </List.Item>
                </List>
            </Container>
        )
    }

}

export default Leaderboard