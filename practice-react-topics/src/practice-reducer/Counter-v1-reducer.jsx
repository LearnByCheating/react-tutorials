import { useReducer } from 'react';

export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0); 

  function handleAdd() {
    dispatch({
      type: 'added',
      increaseBy: 1
    });
  }
  function handleSubtract() {
    dispatch({
      type: 'subtracted',
      decreaseBy: 1
    });
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Counter</h4>
      <button onClick={handleAdd} className='btn btn-info me-2'>+1</button>
      <button onClick={handleSubtract} className='btn btn-info'>-1</button>
      <p className="fw-bold">Count: {count}</p>
    </div>
  );
}

// Using a switch statement
function counterReducer(count, action) {
  switch (action.type) {
    case 'added': {
      return count + 1;
    }
    case 'subtracted': {
      return count - 1;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// Using if else statements
function counterReducerIf(count, action) {
  if (action.type === 'added') {
    return count + action.increaseBy;
  } else if (action.type === 'subtracted') {
    return count + action.decreaseBy;
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}