import React, { useEffect } from 'react'
import { useHistoricContext } from '../../state/historic'

const Historic = () => {
  const { state, actions } = useHistoricContext()
  useEffect(() => {
    if (!state.historic.length) actions.list()
  })

  return (
    <h1>Historic</h1>
  )
}

export default Historic
