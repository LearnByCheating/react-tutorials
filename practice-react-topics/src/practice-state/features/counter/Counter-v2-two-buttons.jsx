import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Counter</h4>
      <button onClick={() => setCount(count + 1)} className='btn btn-info me-2'>+1</button>
      <button onClick={() => setCount(count - 1)} className='btn btn-info'>-1</button>
      <p className="fw-bold">Count: {count}</p>
    </ div>
  );
}