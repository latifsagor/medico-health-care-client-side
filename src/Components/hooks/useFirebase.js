import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import initializeAuthentication from '../Login/Firebase/firebase.init'

initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const auth = getAuth()

  // Google sign in
  const signInUsingGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider()

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user)
      })
      .finally(() => setIsLoading(false))
  }

  // Sign in with email
  const signInWithEmail = (e) => {
    e.preventDefault()
    console.log(email, password)
    if (password.length < 6) {
      setError('Password at least 6 character')
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  const handleEmailChange = (e) => {
    setEmail(e?.target?.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e?.target?.value)
  }

  // Observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribed
  }, [])

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false))
  }

  return {
    user,
    logOut,
    signInUsingGoogle,
    isLoading,
    signInWithEmail,
    handleEmailChange,
    handlePasswordChange,
    error,
  }
}

export default useFirebase
