import React from 'react'
import { Layout as AntdLayout } from 'antd'
import { node } from 'prop-types'

const Layout = ({
  header,
  content,
}) => (
  <AntdLayout className="layout">
    {header}
    {content}
  </AntdLayout>
)

Layout.propTypes = {
  header: node,
  content: node,
}

export default Layout
