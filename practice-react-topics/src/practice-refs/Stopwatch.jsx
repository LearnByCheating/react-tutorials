import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Stopwatch Seconds passed: {secondsPassed.toFixed(2)}</h4>

      <button onClick={handleStart} className="btn btn-success">
        Start
      </button>
      <button onClick={handleStop} className="ms-2 btn btn-danger">
        Stop
      </button>
    </div>
  );
}
