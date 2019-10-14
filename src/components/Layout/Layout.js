import React from 'react'
import { Layout as AntdLayout } from 'antd'
import { node } from 'prop-types'

import './layout.css'

const { Content } = AntdLayout
const Layout = ({
  header,
  content,
}) => (
  <AntdLayout className="layout">
    {header}
    <Content className="content">
      {content}
    </Content>
  </AntdLayout>
)

Layout.propTypes = {
  header: node,
  content: node,
}

export default Layout
