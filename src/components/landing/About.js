import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id='about'>
      <div className='right'>
        <h2>About</h2>
        <p>
          I am Rhyse and I set up Gonsalves Fitness to provide health and
          fitness services to those looking to better themselves, achieve their
          goals and reach their potential.
        </p>

        <p>
          I have helped many achieve these things in a variety of ways; from
          losing weight, preparing for their wedding day, recovery from injuries
          and improvement in daily quality of life.
        </p>

        <p>
          I have also worked with semi-professional and professional athletes to
          aid and contribute to their abilities in competing for success in
          their sport.
        </p>
        <button>
          <Link to='/about'>Learn More</Link>
        </button>
      </div>
    </section>
  )
}
export default About
