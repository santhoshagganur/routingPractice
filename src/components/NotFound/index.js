// Write your JS code here
import {Component} from 'react'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not found"
          className="show-image"
        />
        <h1 className="heading"> Not Found </h1>
      </div>
    )
  }
}

export default NotFound
