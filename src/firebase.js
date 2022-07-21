import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { store } from './store'
import { SET_CURRENT_USER } from './store/modules/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBsTD17jy4wTab53_JhFp-GGgWTLytDvC4',
  authDomain: 'blogue-9a037.firebaseapp.com',
  projectId: 'blogue-9a037',
  storageBucket: 'blogue-9a037.appspot.com',
  messagingSenderId: '713789914621',
  appId: '1:713789914621:web:f786408b3f415e1dbe6d94'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()

const dispatch = store.dispatch
onAuthStateChanged(auth, (user) => {
  if (!user) {
    dispatch(SET_CURRENT_USER(null))
    return
  }
  dispatch(SET_CURRENT_USER(user))
})

export default app
