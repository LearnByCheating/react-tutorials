import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  function handleAdd() {
    setCount(count + increment);
  }
  function handleSubtract() {
    setCount(count - increment);
  }
  function handleIncrement(e) {
    setIncrement(Number(e.target.value));
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Counter</h4>
      <button onClick={handleAdd} className='btn btn-info me-2'>Add</button>
      <button onClick={handleSubtract} className='btn btn-info'>Subtract</button>
      <div className="my-2">
        <label htmlFor="increment-by">Increment Value:</label>
        <input id="increment-by" type="number" value={increment} onChange={handleIncrement} />
      </div>
      <p className="fw-bold">Count: {count}</p>
    </ div>
  );
}

export default Counter;
