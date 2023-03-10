// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="logo"
          />
          <h1 className="app-name"> Contact </h1>
        </div>
        <ul className="tabs-container">
          <li className="tab-item">
            <Link to="/"> Home </Link>
          </li>
          <li className="tab-item">
            <Link to="/about"> About </Link>
          </li>
          <li className="tab-item">
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
