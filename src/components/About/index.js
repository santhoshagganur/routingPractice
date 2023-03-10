// Write your JS code here
import {Component} from 'react'
import './index.css'

class About extends Component {
  render() {
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
          alt="about"
          className="show-image"
        />
        <h1 className="heading"> About </h1>
        <p className="about-me">
          {' '}
          I love to create i am frontend web developer{' '}
        </p>
      </div>
    )
  }
}

export default About
