import React from 'react'
import { Menu } from 'semantic-ui-react'

class LoginNav extends React.Component {

    render(){
        const { handleRegisterClick, handleLoginClick } = this.props
        return(
            <Menu>
                <Menu.Item>
                    CodeRacer
                </Menu.Item>

                <Menu.Item position='right' onClick={handleLoginClick}>
                    Login
                </Menu.Item>
                <Menu.Item onClick={handleRegisterClick}>
                    Sign Up
                </Menu.Item>
            </Menu>
        )
    }

}

export default LoginNav