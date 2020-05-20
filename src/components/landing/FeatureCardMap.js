import React from 'react'
import Axios from 'axios'

export default class FeatureCardMap extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      carIndex: 1
    }
    this.autoCarousel = this.autoCarousel.bind(this)
  }

  componentDidMount() {
    Axios.get('/api/featured').then((res) => this.setState({ data: res.data }))
    // setInterval(() => {
    //   setTimeout(()=>{
    //     //car updates
    //     this.autoCarousel()
    //     //car in
    //     this.carIn()
    //   },500)
    //   //wait
    //   //car out
    //   this.carOut()
    //   // repeat --
    // },3000)
  }

  carIn() {
    document
      .getElementsByClassName('feature-wrap')[0]
      .classList.remove('fadeOut')
    document.getElementsByClassName('feature-wrap')[0].classList.add('fadeIn')
  }
  carOut() {
    document
      .getElementsByClassName('feature-wrap')[0]
      .classList.remove('fadeIn')
    document.getElementsByClassName('feature-wrap')[0].classList.add('fadeOut')
  }

  autoCarousel() {
    if (this.state.carIndex !== this.state.data.length - 1) {
      // console.log('going up')
      const carIndex = this.state.carIndex + 1
      this.setState({ carIndex })
    } else {
      // console.log('resetting')
      this.setState({ carIndex: 0 })
    }
  }

  //func
  render() {
    if (!this.state.data) return null
    const review = this.state.data.map((elem) =>
      elem.review.match(/[^\r\n]+/g)
    )[this.state.carIndex]
    review && console.log('review:\n', review)

    return (
      <div className='gridbox'>
        {this.state.data.map((feature, i) => (
          <div className='feature-wrap' key={i}>
            <p className='left-q'>&ldquo;</p>

            <div className='feature-card animated fast'>
              <img src={feature.image} className='feature-card-img' />
              <p className='p14 feature-p'>{feature.review}</p>

              <p className='p12'> - {feature.client}</p>
            </div>
            <p className='right-q'>&rdquo;</p>
          </div>
        ))}
      </div>
    )
  }
}
