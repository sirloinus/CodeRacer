import React from 'react'
import SignInForm from './SignUpSignIn/SignInForm'
import SignUpForm from './SignUpSignIn/SignUpForm'
import LoginNav from './LoginNav'


class LoginScreen extends React.Component {

    state = {
        registration: false,
        login: false
    }

    handleRegisterClick = () => this.setState({ login: false, registration: true })
    handleLoginClick = () => this.setState({ login: true, registration: false })


    render() {
        const { handleRegisterClick, handleLoginClick } = this
        const { signin, signup } = this.props
        const { registration, login } = this.state
        return(
        <div>
            <LoginNav handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} />
            {registration && <SignUpForm signup={signup} handleLoginClick={handleLoginClick} />}
            {login && <SignInForm signin={signin} handleRegisterClick={handleRegisterClick} />}       
         </div>
    )
  }

}

export default LoginScreen