import React from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../assets/coderacer_logo_new.png'

class NavBar extends React.Component {

    render(){
        const { signout, handleBackToMainClick, handleMyGamesClick} = this.props
        return (

            <Menu borderless>
                <Menu.Item onClick={handleBackToMainClick}>
                    <img style={{width: '12em'}} src={logo} alt={'bleh'}/>
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