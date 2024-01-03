import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {displayNav: false}

  openMenuIcon = () => {
    this.setState(prev => ({displayNav: !prev.displayNav}))
  }

  onClickClose = () => {
    this.setState({displayNav: false})
  }

  render() {
    const {displayNav} = this.state
    return (
      <div className="header-container">
        <div className="inner-container">
          <div className="header-logo">
            <Link to="/">
              <h1 className="covid-logo">
                COVID19<span className="india-logo">INDIA</span>
              </h1>
            </Link>
          </div>
          <ul className="ul-section">
            <li className="li-item">
              <Link to="/">HOME</Link>
            </li>
            <li className="li-item">
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
          <div className="small-container">
            <button
              type="button"
              className="nav-button"
              onClick={this.openMenuIcon}
            >
              <img
                src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521129/mini-project/nav-bar-icon-sm_uee2un.png"
                alt="nav-bar-icon"
                className="nav-bar-icon"
              />
            </button>
          </div>
        </div>
        {displayNav && (
          <div className="small-nav-container">
            <ul className="nav-section">
              <li className="li-item">
                <Link to="/">HOME</Link>
              </li>
              <li className="li-item">
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <button
                  type="button"
                  className="close-button"
                  onClick={this.onClickClose}
                >
                  <img
                    src="https://res.cloudinary.com/dnv6kesmt/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1636521128/mini-project/cross-icon_jezz2z.png"
                    alt="close nav btn"
                    className="close-nav-btn"
                  />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Header
