import React from 'react'
import Axios from 'Axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        password: ''
      },
      snooper: '',
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: name === 'username' ? value.toLowerCase() : value }
    this.setState({ data })
  }
  componentDidMount(){
    Axios.get('https://www.cloudflare.com/cdn-cgi/trace')
      .then(res => console.log(res.data))
  }

  backToSite(){
    this.props.history.push('/')
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ error: '' })
    Axios
      .post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        Auth.setName(res.data.name)
        this.props.history.push('/admin/dashboard')
      })
      .catch(err => this.setState({ error: String(err) }))
    console.log('login result: ',this.state)
  }

  render() {
    return (
      <div className='login-page'>
        <div className='login'>
          <div className='col'>
            
            <form className='login-form' onSubmit={this.handleSubmit}>
              <h2 className=''>Login</h2>

              <input
                className='input-area'
                name='username'
                type='text'
                placeholder='e-mail'
                onChange={this.handleChange}
              />

              <input
                className='input-area'
                type='password'
                name='password'
                placeholder='password'
                onChange={this.handleChange}
              ></input>

              <small style={{ color: 'red' }}>{this.state.error}</small>

              <div>
                <button type='submit' className='loginBtn'>
                  Login
                </button>

                <Link to='/'>
                  <button className='loginBtn'>
                    Back to site
                  </button>
                </Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default Login
