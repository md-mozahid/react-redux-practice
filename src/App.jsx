import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import State from './components/State'

const initialState = () => [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
]

function App() {
  const [state, setState] = useState(initialState)

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0)
  }

  const increment = (id) => {
    const updatedCounter = state.map((count) => {
      if (count.id === id) {
        return {
          ...count,
          count: count.count + 1,
        }
      }
      return { ...count }
    })
    setState(updatedCounter)
  }

  const decrement = (id) => {
    const updatedCounter = state.map((count) => {
      if (count.id === id) {
        return {
          ...count,
          count: count.count - 1,
        }
      }
      return { ...count }
    })
    setState(updatedCounter)
  }

  return (
    <>
      {state.map((count) => (
        <Counter
          key={count.id}
          id={count.id}
          count={count.count}
          increment={increment}
          decrement={decrement}
        />
      ))}
      <div><State count={totalCount()} /></div>
    </>
  )
}

export default App
