import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
const [color, setColor] = useState('')
const [error, setError] = useState(false)
const [list, setList] = useState([])

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('hello')
}


function App() {
  return (
    <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={color} 
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button type='submit' className="btn">
          submit
        </button>
      </form>
    </section>
    <section className="classes">
      <h4>list goes here</h4>
    </section>
    </>
  )
}

export default App
