import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSubtract() {
    setCount(count - 1);
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Counter</h4>
      <button onClick={handleAdd} className='btn btn-info me-2'>+ 1</button>
      <button onClick={handleSubtract} className='btn btn-info'>- 1</button>
      <p className="fw-bold">Count: {count}</p>
    </ div>
  );
}

export default Counter;
