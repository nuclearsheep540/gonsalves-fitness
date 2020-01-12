import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
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

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        Auth.setName(res.data.name)
        this.props.history.push('/dashboard')
      })
      .catch(err => console.log(err))
    console.log('submitted')
  }

  render(){
    return (
      <div className='col-left'>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2 className="">Login</h2> 
          <div className="">
            <div className="">

              <div className="">
                <label className="">Name</label>
                <div className="">
                  <input
                    className="input-area"
                    name="name"
                    type='text'
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>


              <div className="">
                <label className="">Password</label>
                <div className="">
                  <input
                    className="input-area"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}>
                  </input>
                </div>
              </div>
              <button type="submit" className="">Login</button>

            </div>
            <br />
            
          </div>
        </form>
      </div>
    )
  }
}

export default Login