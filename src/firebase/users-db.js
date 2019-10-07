import GenericDB from './generic-db'

export default class UsersDB extends GenericDB {
  constructor() {
    super('users')
  }

  async createNewUserFromFirebaseAuthUser(firebaseAuthUser) {
    const providerData = firebaseAuthUser.providerData[0]
    
    const { displayName, photoURL, email } = providerData

    const user = {
      displayName,
      photoURL,
      email
    }
  
    return await this.create(user, firebaseAuthUser.uid)
  }
  
}
