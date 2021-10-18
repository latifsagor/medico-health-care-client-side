import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import initializeAuthentication from '../Login/Firebase/firebase.init'

initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const auth = getAuth()

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider()

    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user)
    })
  }

  const logOut = () => {
    signOut(auth).then(() => {})
  }

  // Observe user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
    })
    return () => unsubscribe
  }, [])

  return {
    user,
    logOut,
    signInUsingGoogle,
  }
}

export default useFirebase
