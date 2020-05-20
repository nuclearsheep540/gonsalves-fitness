import React from 'react'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

export default class AdminNav extends React.Component {
  constructor(){
    super()
    this.state = {
      story: false,
      msg: false,
      settings: false,
      mobile: false,
      pageLoading: false
    }
    this.storyToggle = this.storyToggle.bind(this)
    this.msgToggle = this.msgToggle.bind(this)
    this.settingsToggle = this.settingsToggle.bind(this)
    this.showSettings = this.showSettings.bind(this)
    this.logout = this.logout.bind(this)
    this.setPageDesktop = this.setPageDesktop.bind(this)
    this.setPageMobile = this.setPageMobile.bind(this)
    this.windowHasResized = this.windowHasResized.bind(this)
  }
  componentDidMount(){
    this.setState({ mobile: window.innerWidth < 950 ? true : false })

    window.addEventListener('resize',()=>{
      !this.state.pageLoading && this.windowHasResized()
    })
  }

  windowHasResized() {
    window.innerWidth < 950 ?
      this.setPageMobile()
      : this.setPageDesktop()
  }

  async setPageMobile(){
    if (this.state.mobile === true) return
    await this.setState({ pageLoading: true })
    setTimeout(()=>{
      console.log('page setting to mobile view...')
      document.getElementById('settings').style.border = '4px solid rgba(0,0,0,0)'
      document.getElementById('msg').style.border = '4px solid rgba(0,0,0,0)'
      document.getElementById('story').style.border = '4px solid rgba(0,0,0,0)'
      this.setState({ mobile: true, pageLoading: false })
    },1000)
  }

  async setPageDesktop(){
    if (this.state.mobile === false) return
    await this.setState({ pageLoading: true })
    setTimeout(()=>{
      console.log('page setting to desktop view...')
      document.getElementById('settings').style.border = '4px solid rgba(0,0,0,0)'
      document.getElementById('msg').style.border = '4px solid rgba(0,0,0,0)'
      document.getElementById('story').style.border = '4px solid rgba(0,0,0,0)'
      this.setState({ mobile: false, pageLoading: false })
    },1000)

  }

  componentWillUnmount(){
    window.removeEventListener('resize')
  }

  //IF STORYEDIT IS OPEN
  closeEdit() {
    if (event.target.id === 'logout') {
      return null
    } else {
      document.getElementsByClassName('iframecontainer')[0].classList.remove('fadeInUp')
      document.getElementsByClassName('iframecontainer')[0].classList.add('fadeOutDown')
      setTimeout(()=>{
        document.getElementsByClassName('iframecontainer')[0].classList.add('hidden')
      },500)
    }
  }

  //        ---- SETTINGS
  showSettings(){
    setTimeout(()=>{
      const elem = document.querySelector('.settings')
      elem.classList.remove('fadeOutLeft')
      elem.style.display = 'block'
      elem.classList.add('fadeInLeft')
    },250)

    this.hideMsg()
    this.hideStory()
    this.setState({
      msg: false,
      story: false
    })
  }

  hideSettings() {
    this.state.mobile ? 
      document.getElementById('settings').style.borderBottom = '4px solid rgba(0,0,0,0)'
      : document.getElementById('settings').style.borderRight = '4px solid rgba(0,0,0,0)'
    const elem = document.querySelector('.settings')
    elem.classList.remove('fadeInLeft'),
    elem.classList.add('fadeOutLeft'),
    setTimeout(() => {
      elem.style.display = 'none'
    }, 250)
  }

  settingsToggle() {
    this.state.mobile ? 
      document.getElementById('settings').style.borderBottom = `4px solid ${this.props.color}`
      : document.getElementById('settings').style.borderRight = `4px solid ${this.props.color}`
    this.state.settings ? this.hideSettings() : this.showSettings()
    this.setState({ settings: !this.state.settings })
  }



  //        ---- MESSAGES
  showMsg() {
    setTimeout(()=>{
      const elem = document.querySelector('.msg')
      elem.classList.remove('fadeOutLeft'),
      elem.style.display = 'block',
      elem.classList.add('fadeInLeft')
    },250)

    this.hideSettings()
    this.hideStory()
    this.setState({
      settings: false,
      story: false
    })
  }

  hideMsg() {
    this.state.mobile ?
      document.getElementById('message').style.borderBottom = '4px solid rgba(0,0,0,0)'
      : document.getElementById('message').style.borderRight = '4px solid rgba(0,0,0,0)'
    const elem = document.querySelector('.msg')
    elem.classList.remove('fadeInLeft'),
    elem.classList.add('fadeOutLeft'),
    setTimeout(() => {
      elem.style.display = 'none'
    }, 250)
  }

  msgToggle() {
    this.state.mobile ?
      document.getElementById('message').style.borderBottom = `4px solid ${this.props.color}`
      : document.getElementById('message').style.borderRight = `4px solid ${this.props.color}`
    this.state.msg ? this.hideMsg() : this.showMsg()
    this.setState({ msg: !this.state.msg })
  }



  //        ---- STORIES
  showStory() {
    setTimeout(()=>{
      const elem = document.querySelector('.clients')
      elem.classList.remove('fadeOutLeft'),
      elem.style.display = 'block',
      elem.classList.add('fadeInLeft')
    },250)

    this.hideSettings()
    this.hideMsg()
    this.setState({
      settings: false,
      msg: false
    })
  }

  hideStory() {
    this.state.mobile ?
      document.getElementById('story').style.borderBottom = '4px solid rgba(0,0,0,0)'
      : document.getElementById('story').style.borderRight = '4px solid rgba(0,0,0,0)'


    const elem = document.querySelector('.clients')
    elem.classList.remove('fadeInLeft'),
    elem.classList.add('fadeOutLeft'),
    setTimeout(() => {
      elem.style.display = 'none'
    }, 250)
  }
  
  storyToggle() {
    this.state.mobile ?
      document.getElementById('story').style.borderBottom = `4px solid ${this.props.color}`
      : document.getElementById('story').style.borderRight = `4px solid ${this.props.color}`
    this.state.story ? this.hideStory() : this.showStory()
    this.setState({ story: !this.state.story })
  }



  //AUTH
  async logout(){
    Auth.logout()
      .then(console.log('logout complete'))
    //app.js switch will re-direct for us
  }


  
  render(){
    const style = {
      color: this.props.color
    }
    return (
      <div className='admin-nav' onClick={this.closeEdit}>
        <ul>
          <a onClick={this.storyToggle}>
            <li>
              <i id='story' className='fas fa-folder-plus fa-3x' style={style}></i>
            </li>
          </a>
          <a onClick={this.msgToggle}>
            <li>
              <i id='message' className='fas fa-envelope fa-3x' style={style}></i>
            </li>
          </a>

          <a onClick={this.settingsToggle}>
            <li>
              <i id='settings' className='fas fa-cogs fa-3x' style={style}></i>
            </li>
          </a>

          <Link to='/admin' onClick={this.logout}>
            <li>
              <i id='logout' className='fas fa-sign-out-alt fa-3x' style={style}></i>
            </li>
          </Link>

        </ul>
      </div>
    )
  }
}