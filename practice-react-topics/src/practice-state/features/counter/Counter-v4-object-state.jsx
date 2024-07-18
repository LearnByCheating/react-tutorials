import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState({ count: 0, increment: 1 });

  function handleAdd() {
    setCounter({ ...counter, count: (counter.count + counter.increment) });
  }
  function handleSubtract() {
    setCounter({ ...counter, count: (counter.count - counter.increment) });
  }
  function handleIncrement(e) {
    setCounter({ ...counter, increment: Number(e.target.value) });
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Counter</h4>
      <button onClick={handleAdd} className='btn btn-info me-2'>Add</button>
      <button onClick={handleSubtract} className='btn btn-info'>Subtract</button>
      <div className="my-2">
        <label htmlFor="increment-by">Increment Value:</label>
        <input id="increment-by" type="number" value={counter.increment} onChange={handleIncrement} />
      </div>
      <p className="fw-bold">Count: {counter.count}</p>
    </ div>
  );
}

export default Counter;
