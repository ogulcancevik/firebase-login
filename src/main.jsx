import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.css'
import 'antd/dist/antd.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

const root = ReactDOM.createRoot(document.getElementById('root'))
const persistor = persistStore(store)
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
