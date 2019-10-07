import firebase from 'firebase/app'
import isNil from 'lodash/isNil'
import UsersDB from '../../firebase/users-db'

export default (dispatch) => ({
  login: async () => {
    const WHITE_LIST = process.env.REACT_APP_WHITE_LIST.split(',')


    const provider = new firebase.auth.GoogleAuthProvider()

    dispatch({ type: 'SET_LOADING', payload: true })
  
    try {
      const { user } = await firebase.auth().signInWithPopup(provider)

      if(!WHITE_LIST.includes(user.email)) throw new Error('Unauthorized user')

      const usersDB = new UsersDB()
      const userFromFirebase = await usersDB.read(user.uid)
      const userLogged = isNil(userFromFirebase)
        ? await usersDB.createNewUserFromFirebaseAuthUser(user)
        : userFromFirebase

      dispatch({ type: 'SET_USER', payload: userLogged })
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (err) {
      console.error(err)
      dispatch({ type: 'SET_USER', payload: null })
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  },
  checkLogin: async () => {
    firebase.auth().onAuthStateChanged(user => {
      dispatch({ type: 'SET_USER', payload: user })
    })
  },
  logout: async () => {
    await firebase.auth().signOut()
  }
})
