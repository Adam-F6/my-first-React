import React from 'react'
import Lis from '../LI-S/Lis'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id='NAVBAR'>
      <div className="container">
        <a className="navbar-brand text-white" id='BRAND' href="/">START FRAMEWORK</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
<Lis/>
      </div>
    </nav>
  )
}
