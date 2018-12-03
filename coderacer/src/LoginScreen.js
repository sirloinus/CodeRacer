import React from 'react'
import SignInForm from './SignUpSignIn/SignInForm'
import SignUpForm from './SignUpSignIn/SignUpForm'
// import API from './API'
// import { Button } from 'semantic-ui-react'


class LoginScreen extends React.Component {

    state = {
        registration: false
    }

    handleRegisterClick = () => this.setState({ registration: true })


    render() {
        const { handleRegisterClick } = this
        const { signin, signup } = this.props
        const { registration } = this.state
        return(
        <div>
            <br/>  
            {
                !registration 
                ?  <SignInForm signin={signin} handleRegisterClick={handleRegisterClick} />
                :  <SignUpForm signup={signup} />
            }
         </div>
    )
  }

}

export default LoginScreen