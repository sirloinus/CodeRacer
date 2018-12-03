import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

class NavBar extends React.Component {

    render(){
        const { signout, handleBackToMainClick} = this.props
        return (

            <Menu>
                <Menu.Item onClick={handleBackToMainClick}>
                    CodeRacer
                </Menu.Item>

                <Menu.Item position='right'>
                    User Profile
                </Menu.Item>
                <Menu.Item onClick={signout}>
                    Sign Out
                </Menu.Item>
            </Menu>

        )
    }

}

export default NavBar;