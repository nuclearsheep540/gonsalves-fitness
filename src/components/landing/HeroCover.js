import React from 'react'
import VideoCover from 'react-video-cover'

export default class HeroCover extends React.Component {
  constructor() {
    super()
    this.state = {
      videoOptions: {},
      transition: false
    }
    //binds
  }
  componentDidMount() {
    const videoOptions = {
      src: '../../assets/rhyse-pt-clean.mov',
      autoPlay: true,
      loop: true,
      muted: true
    }
    setTimeout(()=>{
      this.setState({ videoOptions })
    },1000)

    setTimeout(() => {
      // overlay 40% alphwa on video
      document.querySelector('.overlay').style.backgroundColor =
        'rgba(0, 0, 0, 0.3)'
      this.setState({ transition: true })
    }, 2000)
  }

  render() {
    return (
      <div className='hero'>
        <div className='video'>
          <div className='overlay'>
            {this.state.transition && (
              <img src='../assets/logo_bw.png' className='animated fadeIn' id='hero-logo' />
            )}
          </div>
          <VideoCover onClick={null} id='hero-vid' videoOptions={this.state.videoOptions} />
        </div>
      </div>
    )
  }
}
