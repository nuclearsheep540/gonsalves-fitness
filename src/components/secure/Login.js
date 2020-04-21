import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }
  componentDidMount(){
    Auth.isAuthenticated() && (
      history.pushState('/admin/dashboard','Admin Control','/admin/dashboard'),
      console.log('user already logged in, redirecting...'),
      location.reload()
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        Auth.setName(res.data.name)
        this.props.history.push('/admin/dashboard')
      })
      .catch(err => console.log(err))
    console.log('submitted')
  }

  render() {
    console.log('admin', window.location.href)
    return (
      <>
      <div>
        <center><h1>Content Manager</h1></center>
        
      </div>
      <div className='login'>
        <div className='col-left'>
          <form className='login-form' onSubmit={this.handleSubmit}>
            <h2 className=''>Login</h2>
            <div className=''>
              <div className=''>
                <div className=''>
                  
                  <div className=''>
                    <input
                      className='input-area'
                      name='username'
                      type='text'
                      placeholder='username'
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className=''>
                  
                  <div className=''>
                    <input
                      className='input-area'
                      type='password'
                      name='password'
                      placeholder='password'
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <button type='submit' className=''>
                  Login
                </button>
              </div>
              <br />
            </div>
          </form>
        </div>
      </div>
      </>
    )
  }
}

export default Login
