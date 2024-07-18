// localStorage appears to work without useEffect.
import { useState, useEffect } from 'react';

export default function Counter() {
  const savedCount = localStorage.getItem('count');
  const [count, setCount] = useState(savedCount ? Number(savedCount) : 0);

  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    console.log(1, savedCount);
    if (savedCount) {
      setCount(Number(savedCount));
      console.log(2, count);
    }

    return () => {
      console.log(3, count);
      localStorage.setItem('count', `${count}`);
    };
  }, []);

  function handleAdd() {
    setCount(count + 1);
    // localStorage.setItem('count', count + 1);
  }
  function handleSubtract() {
    setCount(count - 1);
    // localStorage.setItem('count', count - 1);
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Counter</h4>
      <button onClick={handleAdd} className='btn btn-info me-2'>+1</button>
      <button onClick={handleSubtract} className='btn btn-info'>-1</button>
      <p className="fw-bold">Count: {count}</p>
    </ div>
  );
}
