import { useRef } from 'react';

export default function FormFocus() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Use a ref to reference a DOM node</h4>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Put focus on input
      </button>
    </div>
  );
}
