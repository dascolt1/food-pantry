import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
        <Link to="/">
      <p class="navbar-brand">Open pantry</p>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            <Link to="/">
                <li className="nav-item">Home</li>
            </Link>
            <Link to="/feed">
                <li className="nav-item">Feed</li>
            </Link>
            <Link to="/register">
                <li className="nav-item">Register</li>
            </Link>
            <Link to="/login">
                <li className="nav-item">Login</li>
            </Link>
        </ul>
      </div>
    </div>
  </nav>
    )
}

export default Nav;