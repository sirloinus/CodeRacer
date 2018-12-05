import React from 'react'
import './App.css'
import LoginScreen from './LoginScreen'
import API from './API'
import LandingPage from './LandingPage'

class App extends React.Component {

  state = {
    username: '',
    user_id: '',
    signed_in: false,
    users: [],
    takingPicture: true
  }

  signin = user => {
    localStorage.setItem('token', user.token)
    this.setState({ username: user.username })
    this.setState({ user_id: user.user_id })
    this.setState({ signed_in: true })
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({ username: '' })
    this.setState({ user_id: '' })
    this.setState({  signed_in: false })
  }

  signup = user => {
    this.signin(user)
  }

  componentDidMount(){
    this.getData()
    // this.fetchUsers()
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
  
  render(){
    const { signin, signout, signup, postImage } = this
    const { username, signed_in, user_id, takingPicture } = this.state
    return(
      <div>
        {
          signed_in 
          ? <LandingPage signout={signout} user_id={user_id} />
          : <LoginScreen signin={signin} signup={signup} signout={signout} username={username} postImage={postImage} user_id={user_id} />
        }
        {/* <CodeRacerContainer/> */}
      </div>
    )
  }
}

export default App
