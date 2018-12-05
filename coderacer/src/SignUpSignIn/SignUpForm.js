import React from 'react'
import API from '../API'
import { Button, Form } from 'semantic-ui-react'

class SignUpForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => {
    const { signup } = this.props
    const user = this.state
    API.signup(user)
      .then(data => {
        if (data.error) {
          alert('Username and/or password invalid')
        } else {
          signup(data)
        }
      })
  }

  componentDidMount () {
      this.setState({ username: '', password: '' })
  }


  handleUsernameChange = event =>
    this.setState({ username: event.target.value})

  handlePWChange = event =>
    this.setState({ password: event.target.value })


  render () {
    // const { username, password } = this.state
    const { handlePWChange, handleUsernameChange, handleSubmit } = this
    const { handleLoginClick } = this.props

    return (
      <div className='sign_wrapper'>
          {/* Register: */}
        <Form.Input
          fluid
          placeholder='Username'
          onChange={handleUsernameChange}
          margin='normal'
        />
        <br />
        <Form.Input
          fluid
          placeholder='Password'
          onChange={handlePWChange}
          margin='normal'
          name='password'
          type='password'
        />
        <br />
        <Button onClick={handleSubmit}>
          SIGN UP
        </Button>
        {/* <Button onClick={handleLoginClick}>
            LOGIN
        </Button> */}
      </div>
    )
  }
}

export default SignUpForm