import React from 'react'
import API from '../API'
import { Button, Form } from 'semantic-ui-react'

class SignInForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => {
    const { signin } = this.props
    const user = this.state
    API.signin(user)
      .then(data => {
        if (data.error) {
          alert('Invalid username or password')
        } else {
          signin(data)
        }
      })
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {
    const { username, password } = this.state
    const { handleRegisterClick } = this.props
    const { handleChange, handleSubmit } = this

    return (
      <div className='sign_wrapper'>
        Login:
        <Form.Input
          id='usernameInput'
          label='Username '
          value={username}
          onChange={handleChange}
          margin='normal'
          name='username'
        />
        <br />
        <Form.Input
          id='passwordInput'
          label='Password '
          value={password}
          onChange={handleChange}
          margin='normal'
          name='password'
          type='password'
        />
        <br />
        <Button onClick={handleSubmit} variant='contained'>
          LOGIN
        </Button>
        <Button onClick={handleRegisterClick}>
          REGISTER
        </Button>
      </div>
    )
  }
}

export default SignInForm