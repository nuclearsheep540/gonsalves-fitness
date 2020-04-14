import React from 'react'
import FeatureCard from './FeatureCard'

const Feature = () => {
  return (
    <div id='feature'>
      <div className='feature-card'>
        <p className='left-q'>&ldquo;</p>
        <FeatureCard />
        <p className='right-q'>&rdquo;</p>
      </div>
    </div>
  )
}
export default Feature
