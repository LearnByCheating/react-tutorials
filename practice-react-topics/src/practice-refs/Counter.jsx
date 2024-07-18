import { useRef, useState } from 'react';

export default function Counter() {
  const countRef = useRef(0);
  let count = 0;
  const [color, setColor] = useState('success');

  function handleClick() {
    countRef.current = countRef.current + 1;
    count = count + 1;
    alert(
`countRef.current value is ${countRef.current}
count variable value is ${count}`);
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Counter</h4>
      <button onClick={handleClick} className="btn btn-primary mb-2">
        Add 1 to count
      </button>
      <p>
        count displayed value does not change: {count}.<br />
        countRef.current displayed value only changes on re-renders: {countRef.current}.
      </p>
      <button 
        className={`btn btn-${color}`}
        onClick={() => setColor(color === 'success' ? 'danger' : 'success')}
      >Change color</button>
    </div>
  );
}