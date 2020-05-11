import React from 'react'
import axios from 'axios'
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
      snooper: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }
  componentDidMount(){
    axios.get('https://www.cloudflare.com/cdn-cgi/trace')
      .then(res => console.log(res.data))
  }

  backToSite(){
    this.props.history.push('/')
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
    return (

      <div className='login-page'>
        <div className='login'>
          <div className='col'>
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
                        placeholder='e-mail'
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
                  <button>
                    <Link to='/'>Back to site</Link>
                  </button>
                </div>
                <br />
              </div>
            </form>
          </div>

        </div>

      </div>
    )
  }
}

export default Login
