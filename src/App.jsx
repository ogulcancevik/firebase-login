import React from 'react'
import { db } from './firebase'

const App = () => {
  const add = () => {
    console.log(db)
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={add}>test</button>
    </div>
  )
}

export default App
