import React from 'react'
import Axios from 'axios'

export default class FeatureCard extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      carIndex: 1
    }
    this.autoCarousel = this.autoCarousel.bind(this)
  }


  componentDidMount() {
    Axios.get('/api/featured').then(res =>
      this.setState({ data: res.data.filter(elem => elem.featured === true) })
    )
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
    // },5000)
  }

  carIn(){
    document.getElementsByClassName('feature-wrap')[0].classList.remove('fadeOut')
    document.getElementsByClassName('feature-wrap')[0].classList.add('fadeIn')
  }
  carOut(){
    document.getElementsByClassName('feature-wrap')[0].classList.remove('fadeIn')
    document.getElementsByClassName('feature-wrap')[0].classList.add('fadeOut')
  }

  autoCarousel() {
    if (this.state.carIndex !== this.state.data.length - 1) {
      console.log('going up')
      const carIndex = this.state.carIndex + 1
      this.setState({ carIndex })
    } else {
      console.log('resetting')
      this.setState({ carIndex: 0 })
    }
  }

  //func
  render() {
    if (!this.state.data) return null
    const review = this.state.data.map(elem => elem.review.match(/[^\r\n]+/g))[this.state.carIndex]
    review && console.log('review:\n', review)
    console.log(`max ${this.state.data.length}
pos ${this.state.carIndex}`)    
    return (
      <div>
        <div className='feature-wrap animated fast'>
          {review ? review.map((line, i) => (
            <p key={i} className='feature-review'>{line}</p>
          )) : ''}
          
          <p className='feature-client'>
            - {this.state.data.map(elem => elem.client)[this.state.carIndex]}
          </p>
        </div>
      </div>
    )
  }
}
