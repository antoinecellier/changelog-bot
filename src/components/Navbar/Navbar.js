import React from 'react'
import { func, object } from 'prop-types'
import { Layout, Menu, Button } from 'antd'
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
        <div className="item">
          Menu 1
        </div>
        <div className="item">
          Menu 2
        </div>
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
