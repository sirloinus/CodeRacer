import React from 'react'
import SignInForm from './SignUpSignIn/SignInForm'
import SignUpForm from './SignUpSignIn/SignUpForm'
import LoginNav from './LoginNav'
import gif1 from './assets/coderacer_gif_3.gif'
import logo from './assets/coderacer_logo_new.png'



class LoginScreen extends React.Component {

    state = {
        registration: false,
        login: false
    }

    handleRegisterClick = () => this.setState({ login: false, registration: !this.state.registration })
    handleLoginClick = () => this.setState({ login: !this.state.login, registration: false })


    render() {
        const { handleRegisterClick, handleLoginClick } = this
        const { signin, signup } = this.props
        const { registration, login } = this.state
        return(
        <div>
            <LoginNav handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} />
            {registration && <SignUpForm signup={signup} handleLoginClick={handleLoginClick} />}
            {login && <SignInForm signin={signin} handleRegisterClick={handleRegisterClick} />}   

            
            <img src={logo} alt={"bleh"} style={{
                transform: "scale(0.6)",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
                paddingTop: "10px"
            }}/>

            <img src={gif1} alt={"bleh"} style={{    
                transform: "scale(1)",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
            }} />
            
         </div>
    )
  }

}

export default LoginScreen

