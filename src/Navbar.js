import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Navbar extends Component {
    render() {
        return (
            <div className="main">
              <nav className="navbar">
  <div className="container-fluid">
    <ul className="nav navbar-nav">
      <li><Link className="nav-links" to="/">Home </Link></li>
      <li><a className="nav-links" href="#">Notes </a></li>
      <li><a className="nav-links" href="#">Tags </a></li>
      <li><a className="nav-links" href="#">Report </a></li>
      <li><a className="nav-links" href="#">Templates </a></li>
      <li><a className="nav-links" href="#">Contacts</a></li>
    </ul>
  </div>
</nav>  
  </div>
        )
    }
}

export default Navbar
