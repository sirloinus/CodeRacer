import React from 'react'
import SignInForm from './SignUpSignIn/SignInForm'
import SignUpForm from './SignUpSignIn/SignUpForm'
import PictureAdd from './PictureAdd'
import LoginNav from './LoginNav'
import gif1 from './assets/coderacer_gif_3.gif'
import logo from './assets/coderacer_logo_new.png'
import './LoginScreen.css'
import { Button } from 'semantic-ui-react'

class LoginScreen extends React.Component {

    state = {
        registration: false,
        login: false,
        focus: false,
        picture: false
    }

    handleRegisterClick = () => this.setState({ login: false, registration: !this.state.registration })
    handleLoginClick = () => this.setState({ login: !this.state.login, registration: false })

    handleMouseOver = () => {
        this.setState({ focus: true })
    }

    handleMouseOff = () => {
        this.setState({ focus: false })
    }

    handleHomeClick = () => {
        this.setState({registration: false, login:false, picture: false})
    }





    render() {
        const { handleRegisterClick, handleLoginClick, handleMouseOff, handleMouseOver, handleHomeClick, handleAddPic, handleSubmit } = this
        const { signin, signup } = this.props
        const { registration, login, focus, picture } = this.state
        return(
        <div>
            <div>
               

            </div>

            <div>

                <img src={logo}
                    alt={"bleh"}
                    onClick={handleHomeClick}
                    style={{
                    transform: "scale(0.6)",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    paddingTop: "10px"
                }}/>
                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOff}>

                <p className={focus ? 'login-button' : 'login-button-not-displayed'}>
                    <Button onClick={handleLoginClick}>LOGIN</Button>
                    <Button onClick={handleRegisterClick}>SIGN UP</Button>
                </p>

                {   !registration && !login 
                    ? <img className={focus ? 'start-button' : null} 
                        src={gif1} 
                        alt={"bleh"} 
                        style={{    
                        transform: "scale(1)",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "50%"
                    }} />
                    : registration
                        ? <SignUpForm signup={signup} handleSubmit={handleSubmit} handleLoginClick={handleLoginClick}/>
                        : <SignInForm signin={signin} handleSubmit={handleSubmit} handleRegisterClick={handleRegisterClick}/>  

                }
                </div>

            </div>

         </div>
    )
  }

}

export default LoginScreen

