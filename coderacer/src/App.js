import React from 'react'
import './App.css'
import LoginScreen from './LoginScreen'
import API from './API'
import LandingPage from './LandingPage'

class App extends React.Component {

  state = {
    username: '',
    signed_in: false,
    users: [],
    user: null
  }

  signin = user => {
    localStorage.setItem('token', user.token)
    this.setState({ username: user.username })
    this.setState({ signed_in: true })
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({ username: '' })
    this.setState({  signed_in: false })
  }

  signup = user => {
    this.signin(user)
  }

  componentDidMount(){
    this.getData()
    this.fetchUsers()
    this.getUser()
  }

  getData() {
    API.validate()
      .then(data => {
        if (data.error) {
          this.signout()
          this.setState({ signed_in: false })
        } else {
          this.signin(data)
          console.log(data)
          this.setState({ signed_in: true })
        }
      })
      .then(console.log("fetch complete"))
  }

  fetchUsers = () => {
    fetch('http://localhost:3000/api/v1/users')
      .then(resp => resp.json())
      .then(users => this.setState({ users }))
  }

  getUser = () => {
    const user = this.state.users.filter(user => user.username === this.state.username)
    this.state.username !== '' && this.setState({ user })
    console.log(user)
  }
  
  render(){
    const { signin, signout, signup } = this
    const { username, signed_in } = this.state
    return(
      <div>
        {
          signed_in
          ? <LandingPage signout={signout} />
          : <LoginScreen signin={signin} signup={signup} signout={signout} username={username} />
        }
        {/* <CodeRacerContainer/> */}
      </div>
    )
  }
}

export default App
