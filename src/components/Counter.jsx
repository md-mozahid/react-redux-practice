import Count from './Count'

const Counter = ({ increment, decrement, id, count }) => {
  return (
    <div>
      <Count count={count} />
      <div>
        <button onClick={() => increment(id)}>Increment</button>
        <button onClick={() => decrement(id)}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
