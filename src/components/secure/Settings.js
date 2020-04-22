import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

export default class Settings extends React.Component {
  constructor(){
    super()
    this.state = {}
    //binds
    this.changeBackground = this.changeBackground.bind(this)
    this.forceUpdate = this.forceUpdate.bind(this)
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
    axios.put(`/api/login/${Auth.getToken}`, sendData, { headers: { Authorization: `Bearer ${Auth.getToken()}` } 
    }).then(res=> console.log('axios response ',res.data))
      .then(setTimeout(()=>{
        location.reload()
      },500))
  }

  changeBackground(){
    event.preventDefault()
    console.log('changing background, calling splash API...')
    axios
      .get(`https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH}&orientation=landscape`)
      .then(res => this.forceUpdate(res))
  }
  render(){
    return (
      <div className='table animated faster settings'>
        <h1>Settings</h1>

        <label>Change Background</label>
        <button onClick={this.changeBackground}>Change Background Image</button>
      </div>
    )
  }
}