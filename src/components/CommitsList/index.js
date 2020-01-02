import React from 'react'
import { Table } from 'antd'
import { EmojioneV4 } from 'react-emoji-render'
import { arrayOf, shape, string } from 'prop-types'

const columns = [
  {
    title: 'Titre',
    dataIndex: 'title',
    render: (title) => (<EmojioneV4 text={title} />),
  },
  {
    title: 'Pushed date',
    dataIndex: 'pushedDate',
  },
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}

const CommitsList = ({
  data,
}) => (
  <Table
    rowSelection={rowSelection}
    columns={columns}
    dataSource={data}
    pagination={{ defaultPageSize: 5 }}
  />
)

CommitsList.propTypes = {
  data: arrayOf(
    shape({
      key: string,
      title: string,
      pushedDate: string,
      url: string,
    }),
  ),
}

export default CommitsList
