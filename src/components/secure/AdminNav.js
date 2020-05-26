import React from 'react'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'
import { set } from 'mongoose'

export default class AdminNav extends React.Component {
  constructor(){
    super()
    this.state = {
      story: false,
      msg: false,
      settings: false,
      mobile: false,
      pageLoading: false,
      windowWidth: ''
    }
    this.storyToggle = this.storyToggle.bind(this)
    this.msgToggle = this.msgToggle.bind(this)
    this.settingsToggle = this.settingsToggle.bind(this)
    this.showSettings = this.showSettings.bind(this)
    this.logout = this.logout.bind(this)
    this.setPageDesktop = this.setPageDesktop.bind(this)
    this.setPageMobile = this.setPageMobile.bind(this)
    this.windowHasResized = this.windowHasResized.bind(this)
    this.resize = this.resize.bind(this)
  }

  componentDidMount(){
    this.setState({ windowWidth: window.innerWidth, mobile: window.innerWidth < 950 ? true : false })
    window.addEventListener('resize',this.resize)
  }

  async resize(){
    // await Promise.resolve(this.windowHasResized())
    // await new Promise(resolve => setTimeout(resolve, 1000))
    window.removeEventListener('resize',this.resize)
    await new Promise(resolve => this.windowHasResized(resolve))

    console.log('promise resolved')
    return window.addEventListener('resize',this.resize)
  }

  async windowHasResized(resolve) {
    // new Promise(resolve => {

    //   console.log('checking need to change UI')
    //   console.log('waiting 5000ms ...')
    //   setTimeout(()=>{
    //     console.log('5000ms is up')
    //     return resolve
    //   },5000)
      
    // })
    await new Promise(resolve1 => {
      setTimeout(resolve1, 5000)
      // this.state.windowWidth < 950 ?
      // this.setPageMobile()
      // : this.setPageDesktop()

    })
    
    console.log('5000ms promise done')
    
    this.state.windowWidth < 950 ?
      this.setPageMobile()
      : this.setPageDesktop()
    return resolve()
  }

  setPageMobile() {
    //replace embedded style media query, with new style class specifically for mobile
    if (this.state.mobile) return null
    console.log('page setting to mobile view...')
    document.getElementById('settings').style.border = '4px solid rgba(0,0,0,0)'
    document.getElementById('msg').style.border = '4px solid rgba(0,0,0,0)'
    document.getElementById('story').style.border = '4px solid rgba(0,0,0,0)'
    setTimeout(()=>{
      this.setState({ mobile: true, pageLoading: !this.state.pageLoading })
      // window.addEventListener('resize',()=>this.resize(this.windowHasResized()))
    },5000)
  }

  setPageDesktop(){
    if (!this.state.mobile) return null
    console.log('page setting to desktop view...')
    document.getElementById('settings').style.border = '4px solid rgba(0,0,0,0)'
    document.getElementById('msg').style.border = '4px solid rgba(0,0,0,0)'
    document.getElementById('story').style.border = '4px solid rgba(0,0,0,0)'
    setTimeout(()=>{
      this.setState({ mobile: false, pageLoading: !this.state.pageLoading })
      // window.addEventListener('resize',()=>this.resize(this.windowHasResized()))
    },5000)

  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.resize())
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
    await Auth.logout()
      .then(window.history.pushState('admin','/admin'))
    setTimeout(()=>{
      location.reload()
    },100)
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