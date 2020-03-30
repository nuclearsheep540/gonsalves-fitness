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
    this.setState({ videoOptions })

    setTimeout(() => {  
      // overlay 40% alpha on video
      document.querySelector('.hero-overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
      this.setState({ transition: true })
    }, 4000)
    
  }

  render() {
    return (
      <div className='hero-wrapper'>
        <div className='hero'>
          <div className='hero-overlay'>
            {this.state.transition ? (
              <img
                src='../assets/logo_bw.png'
                className='hero-logo animated fadeIn'
              />
            ) : (
              <img />
            )}
          </div>
          <VideoCover id='hero-vid' videoOptions={this.state.videoOptions} />
        </div>
      </div>
    )
  }
}
