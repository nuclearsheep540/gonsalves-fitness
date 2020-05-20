import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

export default class Settings extends React.Component {
  constructor(){
    super()
    this.state = {
      form: {
        curPassword: '',
        newPassword: '',
        confPassword: ''
      }
    }
    //binds
    this.changeBackground = this.changeBackground.bind(this)
    this.forceUpdate = this.forceUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }
  //funct
  componentDidMount(){
    axios.get('/api/login',{ headers: { Authorization: `Bearer ${Auth.getToken()}` } 
    })
      .then(res => this.setState({ unsplash: res.data.unsplash }))
  }

  forceUpdate(data){
    console.log('data recieved ',data.data)
    const sendData = {
      unsplash: data.data
    }
    axios.put(`/api/login/${Auth.getToken()}`, sendData, { headers: { Authorization: `Bearer ${Auth.getToken()}` } 
    }).then(res=> console.log('axios response ',res.data))
      .then(setTimeout(()=>{
        location.reload()
      },500))
  }

  changeBackground(){
    event.preventDefault()
    console.log('changing background, calling splash API...')
    axios
      .get(`https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH}&orientation=landscape${process.env.UNSPLASH_QUERY}`)
      .then(res => this.forceUpdate(res))
  }

  handleChange(){
    const name = event.target.name
    const value = event.target.value

    const form = { ...this.state.form, [name]: value }
    this.setState({ form })
  }

  changePassword(e){
    e.preventDefault()
    const body = {
      password: this.state.form.curPassword,
      passwordConfirmation: this.state.form.curPassword,
      updatePassword: this.state.form.newPassword
    }
    axios.patch('/api/login/', body, { headers: { Authorization: `Bearer ${Auth.getToken()}` } 
    })
      .then(res => console.log(res))
  }

  render(){
    const confirm = this.state.form.confPassword
    return (
      <div className='table animated faster settings'>
        <div className='col'>
          <h1>Settings</h1>

          <div className='updatePassword'>
            <h2>Change Theme</h2>
            <button onClick={this.changeBackground}>
              Change Background Image
            </button>
          </div>

          <div className='updatePassword'>
            <h2>Change Password</h2>
            <form>
              <input
                type='password'
                name='curPassword'
                placeholder='Current Password'
                value={this.state.form.curPassword}
                onChange={this.handleChange}
              />

              <input
                type='password'
                name='newPassword'
                placeholder='New Password'
                value={this.state.form.newPassword}
                onChange={this.handleChange}
              />

              <div id='confPassword'>
                <input
                  type='password'
                  name='confPassword'
                  placeholder='Confirm New Password'
                  value={this.state.form.confPassword}
                  onChange={this.handleChange}
                />
                {
                  confirm === '' ? <i></i> :
                    confirm === this.state.form.newPassword ? <i className='fas fa-check-circle fa-2x' style={{ color: 'green' }}></i> :
                      confirm !== this.state.form.newPassword ? <i className="fas fa-times-circle fa-2x" style={{ color: 'red' }}></i> : null
                }
              </div>
              <button onClick={this.changePassword}>Change Password</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}