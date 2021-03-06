import HistoricDB from '../../firebase/historic-db'


export default (dispatch) => ({
  list: async () => {
    // const historicDb = new HistoricDB(rootState.authentication.user.id)
    // const historicDb = new HistoricDB()
    // const list = await historicDb.readAll()
    const rep = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const t = await rep.json()
    return dispatch({
      type: 'FETCH_LIST',
      payload: [t],
    })
  },
//   add: async ({ rootState }, changelog) => {
//     const { channels: channelsState } = rootState
//     const historicDb = new HistoricDB(rootState.authentication.user.id)
//     await historicDb.create({
//       changelog,
//       channels: channelsState.selectedChannels.map(
//         id => channelsState.listById[id]
//       ),
//       message: rootState.commits.messageWithChangelog
//     })
//   }
})
