import React, { useEffect } from 'react'
import CommitsList from '../../components/CommitsList'

import { useCommitsContext } from '../../state/commits'

const Changelog = () => {
  const { state, actions } = useCommitsContext()

  useEffect(() => {
    if (!state.list.length) actions.list('5.3.8', '6.0.3')
  })

  return (
    <>
      <h1>Changelog</h1>
      <CommitsList data={state.list} />
    </>
  )
}

export default Changelog
