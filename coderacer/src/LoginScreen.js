import React from 'react'
import SignInForm from './SignUpSignIn/SignInForm'
import SignUpForm from './SignUpSignIn/SignUpForm'
import LoginNav from './LoginNav'
import gif1 from './assets/coderacer_gif_3.gif'
import logo from './assets/coderacer_logo_new.png'
import './LoginScreen.css'



class LoginScreen extends React.Component {

    state = {
        registration: false,
        login: false,
        focus: false
    }

    handleRegisterClick = () => this.setState({ login: false, registration: !this.state.registration })
    handleLoginClick = () => this.setState({ login: !this.state.login, registration: false })

    handleMouseOver = () => {
        this.setState({ focus: true })
    }

    handleMouseOff = () => {
        this.setState({ focus: false })
    }

    render() {
        const { handleRegisterClick, handleLoginClick, handleMouseOff, handleMouseOver } = this
        const { signin, signup } = this.props
        const { registration, login, focus } = this.state
        return(
        <div>
            <div>
                <LoginNav handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} />
                {registration && <SignUpForm signup={signup} handleLoginClick={handleLoginClick} />}
                {login && <SignInForm signin={signin} handleRegisterClick={handleRegisterClick} />}   

            </div>

            <div>

                {/* <div style={{
                    position: "absolute",
                    fontSize: "200px"
                }}>
                PLAY
                </div> */}

                <img src={logo}
                    alt={"bleh"}
                    style={{
                    transform: "scale(0.6)",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    paddingTop: "10px"
                }}/>

                <img className={focus ? 'start-button' : null} 
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOff} 
                    src={gif1} 
                    alt={"bleh"} 
                    style={{    
                    transform: "scale(1)",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"
                }} />

            </div>

         </div>
    )
  }

}

export default LoginScreen

