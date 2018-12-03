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
    username: '',
    signed_in: false
  }

  signin = user => {
    localStorage.setItem('token', user.token)
    this.setState({
      username: user.username,
      signed_in: true
    })
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({
      username: '',
      signed_in: false
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
          this.setState({ signed_in: false })
        } else {
          this.signin(data)
          this.setState({ signed_in: true })
        }
      })
  }
  
  render(){
    const { signin, signout, signup } = this
    const { username, signed_in } = this.state
    return(
      <div>
        {
          !signed_in
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
