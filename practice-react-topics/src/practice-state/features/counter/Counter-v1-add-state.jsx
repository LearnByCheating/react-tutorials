import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Counter</h4>
      <button onClick={() => setCount((count) => count + 1)} className='btn btn-secondary'>
        count is {count}
      </button>
    </ div>
  );
}

export default Counter;
