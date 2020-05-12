import React from 'react'
import Auth from '../../lib/auth'
import axios from 'axios'

import AdminNav from './AdminNav'
import ClientIndex from './ClientIndex'
import MsgIndex from './MsgIndex'
import TopDash from './TopDash'
import Settings from './Settings'

export default class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      stories: [],
      msg: [],
      bg: {},
      color: ''
    }
    this.tick = this.tick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteMsg = this.deleteMsg.bind(this)
    this.api = this.api.bind(this)
  }

  componentDidMount() {
    if (Auth.isAuthenticated()) {
      axios
        .get('/api/story', {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
        .then((res) => this.setState({ stories: res.data.reverse() }))
        .catch((err) => console.log(err))
    }
    this.timerID = setInterval(() => this.tick(), 2000)
    axios.get('/api/contact').then((res) => this.setState({ msg: res.data.reverse() }))
    axios.get('/api/login',{ headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => {
        this.setState({ bg: res.data.unsplash }),
        this.setState({ color: res.data.unsplash.color })
      })
      //send inverted color props to admin nav 
    // this.invertHex(this.state..bg.color)

      
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
    // window.location.reload()
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  handleDelete(e, id) {
    e.preventDefault()
    window.confirm(`Are you sure you wish to delete ${e.target.name}?`)
      ? axios
        .delete(`/api/story/${id}`, {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
        .then(axios.get('/api/story', {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
          .then(res => this.setState({ stories: res.data.reverse() }))
        )
      : console.log(false)
  }

  deleteMsg(id, from){
    window.confirm(`Are you sure you want to delete this message from ${from}?`)
      ? axios.delete(`/api/contact/${id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      }).then(this.api) : null
  }


  api(){
    if (Auth.isAuthenticated()) {
      axios
        .get('/api/story', {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
        .then((res) => this.setState({ stories: res.data.reverse() }))
        .catch((err) => console.log(err))
    }
    this.timerID = setInterval(() => this.tick(), 2000)
    axios.get('/api/contact').then((res) => this.setState({ msg: res.data.reverse() }))
    axios.get('/api/login',{ headers: { Authorization: `Bearer ${Auth.getToken()}` } })
  }

  // invertHex(hex) {
  //   let color = hex
  //   color = color.substring(1); // remove #
  //   color = parseInt(color, 16); // convert to integer
  //   color = 0xFFFFFF ^ color; // invert three bytes
  //   color = color.toString(16); // convert to hex
  //   color = ("000000" + color).slice(-6); // pad with leading zeros
  //   color = "#" + color; // prepend #  }
    
  //   this.setState({ color: hex })

  // }

  render() {
    if (!this.state.stories) return null
    if (!this.state.bg.urls) return null

    return (
      <>
      <div className='admin-fade'></div>
          {this.state.color ? <AdminNav 
            color={this.state.color}
          />
            : null }
        <div
          id='admin-wrap'
          style={{ backgroundImage: `url(${this.state.bg.urls.regular})` }}>

          <TopDash 
            date={this.state.date}
            msgs={this.state.msg.length}
            stories={this.state.stories.length}
          />

          <div className='module-wrapper'>
            <Settings />

            <ClientIndex
              data={this.state.stories}
              handleDelete={this.handleDelete}
              api={this.api}
            />

            <MsgIndex 
              data={this.state.msg} 
              handleDelete={this.deleteMsg}
            />
          </div>
         
          <footer id='admin-footer'>
            {this.state.bg.alt_description} by{' '}
            <a href={this.state.bg.links.html}>{this.state.bg.user.name}</a>
          </footer>
          
        </div>
      </>
    )
  }
}
