import React from 'react'
import logo from './Guvi-blog-logo.webp'
const Top = () => {
  return (
    <div className='container'> 

    <nav className="navbar navbar-expand-lg mx-5">
      <div className="container">
        <a className="navbar-brand" href="https://www.guvi.in/blog/">
          <img  src={logo} alt="Guvi-blog-logo" />
        </a>
        <button className="navbar-toggler text-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link  nav-colour" aria-current="page" href="...">COURSES</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-colour" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                LIVE CLASSES
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="..."><h5>Zen Class</h5></a></li>
                <li><a className="dropdown-item" href="...">Full Stack Development Program (FSD)</a></li>
                <li><a className="dropdown-item" href="...">IIT-M Advanced Programming & Data Science Program</a></li>
                <li><a className="dropdown-item" href="...">Automation & Testing Program</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-colour" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRACTICE
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="...">Codekata</a></li>
                <li><a className="dropdown-item" href="...">Webkata</a></li>

                <li><a className="dropdown-item" href="...">IDE - Online Compiler</a></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-colour" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                RESOURCES
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="...">REWARDS</a></li>
                <li><a className="dropdown-item" href="...">REFFERAL</a></li>

                <li><a className="dropdown-item" href="...">FORUM SUPPORT</a></li>
                <li><a className="dropdown-item" href="...">BLOGS</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-colour" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                OUR PRODUCTS

              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="...">HackerKid</a></li>
                <li><a className="dropdown-item" href="...">GUVI for Corporates</a></li>


              </ul>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  </div>
  )
}

export default Top