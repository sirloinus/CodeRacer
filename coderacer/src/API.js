class API {

  static signin (user) {
    return fetch('http://localhost:3000/api/v1/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }).then(resp => resp.json())
  }

  static signup (user) {
    return fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password
        }
      })
    }).then(resp => resp.json())
  }

  static validate () {
    return this.get('http://localhost:3000/api/v1/validate')
  }

  static get (url) {
    return fetch(url, {
      headers: {
        'Authorization': localStorage.getItem('token')
      },
    }).then(resp => resp.json())
  }

}

export default API