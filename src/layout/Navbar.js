import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  shadow" style={{ backgroundColor: 'white' }}>
    <div className="container-fluid">
        <Link className="navbar-brand text-black" to={"/"}>FullStack Application</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link className='btn btn-outline-dark' to="/adduser">Add User</Link>
    </div>
</nav>
    </div>
  )
}
