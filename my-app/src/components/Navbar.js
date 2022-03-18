import React from 'react'
import PropTypes from 'prop-types'
// import {a} from "react-router-dom";



export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-a active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="#" style={{textDecoration: 'none'}}>Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-a" href="/about">About</a>
              </li> */}
            </ul>
                <div className="form-check form-switch mx-2">
                  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
                </div>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </>

  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here',
  name: 'Unknown'
}
