import React from 'react'
import { Cart } from './Cart'

export const Header = () => {
  return (
    <nav className="navbar bg-blue-100 sticky top-0">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <Cart/>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}
