import React from 'react'
import { func, object } from 'prop-types'
import { Layout, Menu, Button } from 'antd'

const { Header } = Layout

const Navbar = ({
  onLogin,
  onLogout,
  user,
}) => (
  <Header>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">
        <Button type="primary" onClick={user ? onLogout : onLogin}>
          {user ? 'Logout' : 'Login'}
        </Button>
      </Menu.Item>
    </Menu>
  </Header>
)

Navbar.propTypes = {
  onLogin: func,
  onLogout: func,
  user: object,
}

export default Navbar
