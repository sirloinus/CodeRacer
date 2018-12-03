import React from 'react';
import { render } from 'react-dom';

import './App.css';
import CodeRacerContainer from './containers/Game/CodeRacerContainer';
import NavBar from './components/NavBar';
import LoginScreen from './LoginScreen'
import API from './API'
import { Button } from 'semantic-ui-react'

class App extends React.Component {

  state = {
    username: ''
  }

  signin = user => {
    localStorage.setItem('token', user.token)
    this.setState({
      username: user.username
    })
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({
      username: ''
    })
  }

  signup = user => {
    this.signin(user)
  }

  componentDidMount() {
    API.validate()
      .then(data => {
        if (data.error) {
          this.signout()
        } else {
          this.signin(data)
        }
      })
  }
  
  render(){
    const { signin, signout, signup } = this
    const { username } = this.state
    return(
      <div>
        {
          username === ''
          ? <LoginScreen signin={signin} signup={signup} signout={signout} username={username} />
          : <Button onClick={signout}>SIGN OUT</Button>
        }
        {/* <NavBar/>
        <CodeRacerContainer/> */}
      </div>
    )
  }
}

export default App;
