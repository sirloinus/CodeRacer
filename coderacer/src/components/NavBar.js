import React from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {

    render(){
        const { signout, handleBackToMainClick, handleMyGamesClick} = this.props
        return (

            <Menu>
                <Menu.Item onClick={handleBackToMainClick}>
                    CodeRacer
                </Menu.Item>
                <Menu.Item position='right'>
                    Leaderboard
                </Menu.Item>
                <Menu.Item onClick={handleMyGamesClick}>
                    My Games
                </Menu.Item>
                <Menu.Item onClick={signout}>
                    Sign Out
                </Menu.Item>
            </Menu>

        )
    }

}

export default NavBar