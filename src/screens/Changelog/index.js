import React, { useEffect } from 'react'
import { findIndex } from 'lodash'
import CommitsList from '../../components/CommitsList'
import SelectTags from '../../components/SelectTags'

import { useCommitsContext } from '../../state/commits'
import { useTagsContext } from '../../state/tags'

const Changelog = () => {
  const { state, actions } = useCommitsContext()
  const { state: tagsState, actions: tagsActions } = useTagsContext()

  useEffect(() => {
    if (!tagsState.list.length) tagsActions.list()
  })

  const onTagChange = (tagNameSelected) => {
    const tagIndex = findIndex(tagsState.list, (tag) => tag.name === tagNameSelected)
    tagsActions.selectTag(tagNameSelected)
    actions.list(tagsState.list[tagIndex + 1].name, tagNameSelected)
  }

  return (
    <>
      <h1>Changelog</h1>
      <SelectTags tags={tagsState.list} onSelect={onTagChange} />
      <CommitsList commits={state.list} />
    </>
  )
}

export default Changelog
