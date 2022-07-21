import { auth } from '@/firebase'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const register = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  return user
}

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    return false
  }
}

export const logout = async () => {
  await signOut(auth)
}

export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email)
}
