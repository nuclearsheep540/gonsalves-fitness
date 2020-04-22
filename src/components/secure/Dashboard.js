import React from 'react'
import Auth from '../../lib/auth'
import axios from 'axios'

import AdminNav from '../common/AdminNav'
import ClientIndex from './ClientIndex'
import MsgIndex from './MsgIndex'
import TopDash from './TopDash'

export default class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      stories: [],
      msg: [],
      bg: {
        id: 'dI3J7V0GknY',
        created_at: '2018-02-23T17:31:29-05:00',
        updated_at: '2020-04-14T01:05:35-04:00',
        promoted_at: null,
        width: 5448,
        height: 4000,
        color: '#549FE9',
        description:
          'On my way to Johnston Canyon in Banff when this guy poked its white face out in the blue.  I had to drive a bit to find a safe place to stop and get out to take the picture, but I think it turned out ok.  This is the kind of image that gives me pause and to reflect on the forces that created the rockies those millions of years ago.  What a great way to time travel.',
        alt_description: 'low-angle photography of white mountain',
        urls: {
          raw:
            'https://images.unsplash.com/photo-1519424872176-907da8d127f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMjEyNn0',
          full:
            'https://images.unsplash.com/photo-1519424872176-907da8d127f8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMjEyNn0',
          regular:
            'https://images.unsplash.com/photo-1519424872176-907da8d127f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMjEyNn0',
          small:
            'https://images.unsplash.com/photo-1519424872176-907da8d127f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMjEyNn0',
          thumb:
            'https://images.unsplash.com/photo-1519424872176-907da8d127f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMjEyNn0',
        },
        links: {
          self: 'https://api.unsplash.com/photos/dI3J7V0GknY',
          html: 'https://unsplash.com/photos/dI3J7V0GknY',
          download: 'https://unsplash.com/photos/dI3J7V0GknY/download',
          download_location:
            'https://api.unsplash.com/photos/dI3J7V0GknY/download',
        },
        categories: [],
        likes: 28,
        liked_by_user: false,
        current_user_collections: [],
        user: {
          id: 'Sdh2YdLNcrI',
          updated_at: '2020-04-20T06:07:46-04:00',
          username: 'jxb511',
          name: 'John Bakator',
          first_name: 'John',
          last_name: 'Bakator',
          twitter_username: null,
          portfolio_url: null,
          bio:
            'An ardent member of generation Jones |Travel Writer | Travel Photographer and all round nice guy.   Contact me: John.Bakator@gmail.com even to just say hi!',
          location: 'Cochrane Alberta',
          links: {
            self: 'https://api.unsplash.com/users/jxb511',
            html: 'https://unsplash.com/@jxb511',
            photos: 'https://api.unsplash.com/users/jxb511/photos',
            likes: 'https://api.unsplash.com/users/jxb511/likes',
            portfolio: 'https://api.unsplash.com/users/jxb511/portfolio',
            following: 'https://api.unsplash.com/users/jxb511/following',
            followers: 'https://api.unsplash.com/users/jxb511/followers',
          },
          profile_image: {
            small:
              'https://images.unsplash.com/profile-fb-1504194982-405c65f1fb61.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
            medium:
              'https://images.unsplash.com/profile-fb-1504194982-405c65f1fb61.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
            large:
              'https://images.unsplash.com/profile-fb-1504194982-405c65f1fb61.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
          },
          instagram_username: 'jbakator',
          total_collections: 9,
          total_likes: 12,
          total_photos: 64,
          accepted_tos: true,
        },
        exif: {
          make: 'Canon',
          model: 'Canon EOS 80D',
          exposure_time: '1/1250',
          aperture: '5.6',
          focal_length: '200.0',
          iso: 100,
        },
        location: {
          title: 'Banff National Park, Canada',
          name: 'Banff National Park, Canada',
          city: null,
          country: 'Canada',
          position: {
            latitude: 51.4968464,
            longitude: -115.9280562,
          },
        },
        views: 121418,
        downloads: 489,
      },
    }
    this.tick = this.tick.bind(this)
    this.logout = this.logout.bind(this)
    this.unsplashBg = this.unsplashBg.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  unsplashBg() {
    console.log(`unsplash ${process.env.UNSPLASH}`)
    // axios
    //   .get(
    //     `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH}&orientation=landscape`
    //   )
    //   .then(res => this.setState({ bg: res.data }))
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
    this.unsplashBg()
    this.timerID = setInterval(() => this.tick(), 2000)
    axios.get('/api/contact').then((res) => this.setState({ msg: res.data.reverse() }))
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
    // window.location.reload()
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  logout() {
    Auth.logout()
    // .then(this.props.history.push('/'))
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
          .then(res => this.setState({ stories: res.data }))
        )
      : console.log(false)
  }

  render() {
    if (!Auth.isAuthenticated())
      return <h1>You must be logged in to view this page</h1>
    if (!this.state.stories) return null
    if (!this.state.bg.urls) return null

    return (
      <>
          <AdminNav />
          <div className='admin-fade'></div>
        <div
          id='admin-wrap'
          style={{ backgroundImage: `url(${this.state.bg.urls.regular})` }}>

          <TopDash 
            date={this.state.date}/>

          <div className='module-wrapper'>
            <ClientIndex
              data={this.state.stories}
              handleDelete={this.handleDelete}/>

            <MsgIndex data={this.state.msg} />
            
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
