import {Link} from 'react-router-dom'

import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const overlayStyle = {
  backgroundColor: '#ffffff',
  width: '100%',
  height: '100vh',
}

const Header = () => (
  <nav className="nav-container">
    <Link to="/" className="nav-link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>

    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="menu-btn"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu />
          </button>
        }
        className="popup-content"
        overlayStyle={overlayStyle}
      >
        {close => (
          <ul>
            <div className="close-btn-container">
              <button
                type="button"
                className="menu-btn"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </div>
            <li className="popup-container">
              <Link to="/" className="nav-link">
                <div className="icon-text-container">
                  <AiFillHome className="icon" />
                  <p className="heading">Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <div className="icon-text-container">
                  <BsInfoCircleFill className="icon" />
                  <p className="heading">About</p>
                </div>
              </Link>
            </li>
          </ul>
        )}
      </Popup>
    </div>
  </nav>
)
export default Header
