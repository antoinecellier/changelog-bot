import React from 'react'
import { NavLink } from 'react-router-dom'
import { func, object } from 'prop-types'
import { Layout, Button } from 'antd'
import './navbar.css'

const { Header } = Layout

const Navbar = ({
  onLogin,
  onLogout,
  user,
}) => (
  <Header>
    <div className="logo" />
    <div className="navbar">
      <div className="items">
        <NavLink exact to="/" activeClassName="selected">
          <div className="item">
          Home
          </div>
        </NavLink>
        <NavLink to="/historic" activeClassName="selected">
          <div className="item">
          Historic
          </div>
        </NavLink>
      </div>
      <div className="extra">
        <Button type="primary" onClick={user ? onLogout : onLogin}>
          {user ? 'Logout' : 'Login'}
        </Button>
      </div>
    </div>
  </Header>
)

Navbar.propTypes = {
  onLogin: func,
  onLogout: func,
  user: object,
}

export default Navbar
