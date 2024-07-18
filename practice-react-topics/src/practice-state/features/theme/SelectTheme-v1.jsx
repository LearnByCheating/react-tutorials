import { useState } from 'react';

export default function SelectTheme() {
  const [text, setText] = useState('Change to Dark Theme');
  const bodyStyle = document.body.style;

  function handleClick() {
    if (text === 'Change to Light Theme') {
      bodyStyle.color = 'black';
      bodyStyle.backgroundColor = 'white';
      setText('Change to Dark Theme');
    } else {
      bodyStyle.color = 'white';
      bodyStyle.backgroundColor = 'black';
      setText('Change to Light Theme');
    }
  }
 
  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Select Theme</h4>
      <button onClick={handleClick} className="btn btn-primary">
        { text }
      </button>
    </div>
  );
}