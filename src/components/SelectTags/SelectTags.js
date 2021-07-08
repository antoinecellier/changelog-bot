import React from 'react'
import { Select } from 'antd'
import { array, func } from 'prop-types'

const { Option } = Select

const SelectTags = ({
  tags,
  onSelect,
}) => (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a tag"
    optionFilterProp="children"
    onChange={onSelect}
    filterOption={
      (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {tags.map((tag) => (<Option key={tag.name} value={tag.name}>{tag.name}</Option>))}
  </Select>
)

SelectTags.propTypes = {
  tags: array,
  onSelect: func,
}

export default SelectTags
