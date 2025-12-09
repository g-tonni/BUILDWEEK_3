// src/components/Navbar.jsx

import { Dropdown } from 'react-bootstrap'
import '../css/NavBar.css'
import {
  FaSearch,
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaRegCommentDots,
  FaBell,
} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'

const NavBarL = () => {


  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand bg-white border-bottom shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Sinistra */}
        <div className="d-flex align-items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
            onClick={handleHomeClick}
          />

          <div className="d-none d-md-flex align-items-center bg-light px-3 py-1 rounded">
            <FaSearch size={16} className="text-secondary" />
            <input
              type="text"
              placeholder="Search"
              className="form-control border-0 bg-light ms-2 p-0"
              style={{ boxShadow: 'none' }}
            />
          </div>
        </div>

        {/* Destra */}
        <ul className="navbar-nav d-flex flex-row align-items-center gap-4">
          <li
            className="nav-item d-flex flex-column align-items-center hover-icon"
            style={{ cursor: 'pointer' }}
          >
            <a
              className="nav-link d-flex flex-column align-items-center"
              onClick={handleHomeClick}
            >
              <FaHome size={20} />
              <div className="small">Home</div>
            </a>
          </li>

          <li
            className="nav-item d-flex flex-column align-items-center hover-icon"
            style={{ cursor: 'pointer' }}
          >
            <a className="nav-link d-flex flex-column align-items-center">
              <FaUserFriends size={20} />
              <div className="small">My Network</div>
            </a>
          </li>

          <li
            className="nav-item d-flex flex-column align-items-center hover-icon"
            style={{ cursor: 'pointer' }}
          >
            <a className="nav-link d-flex flex-column align-items-center">
              <FaBriefcase size={20} />
              <div className="small">Jobs</div>
            </a>
          </li>

          <li
            className="nav-item d-flex flex-column align-items-center hover-icon"
            style={{ cursor: 'pointer' }}
          >
            <a className="nav-link d-flex flex-column align-items-center">
              <FaRegCommentDots size={20} />
              <div className="small">Messaging</div>
            </a>
          </li>

          <li
            className="nav-item d-flex flex-column align-items-center hover-icon"
            style={{ cursor: 'pointer' }}
          >
            <a className="nav-link d-flex flex-column align-items-center">
              <FaBell size={20} />
              <div className="small">Notifications</div>
            </a>
          </li>

          {/* Profile Dropdown */}
          <li className="nav-item d-flex flex-column align-items-center hover-icon">
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="link"
                id="profileDropdown"
                className="nav-link d-flex flex-row align-items-center text-decoration-none p-0"
              >
                <Link to="/profile/me"><img
                  src="https://placebear.com/50/50" //{profile.image}
                  alt="profile"
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }}
                /></Link>
                <div className="small text-dark">Tu</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile/me" className="dropdown-hover">
                  Account
                </Dropdown.Item>
                <Dropdown.Item href="#" className="dropdown-hover">
                  Impostazioni e privacy
                </Dropdown.Item>
                <Dropdown.Item href="#" className="dropdown-hover">
                  Guida
                </Dropdown.Item>
                <Dropdown.Item href="#" className="dropdown-hover">
                  Lingua
                </Dropdown.Item>
                <Dropdown.Item href="#" className="dropdown-hover">
                  Gestisci
                </Dropdown.Item>
                <Dropdown.Item href="#" className="dropdown-hover">
                  Post e attività
                </Dropdown.Item>
                <Dropdown.Item href="#" className="dropdown-hover">
                  Account per la pubblicazione di offerte di lavoro
                </Dropdown.Item>
                <Dropdown.Item href="#" className="dropdown-hover">
                  Esci
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBarL
