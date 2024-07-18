import { useState } from 'react';
import jsLogo from '/src/assets/JavaScript.png';
import nodeLogo from '/src/assets/Nodejs.png';
import reactLogo from '/src/assets/react.svg';
import viteLogo from '/src/assets/vite.svg';

const logos = [ 
  { name: 'JavaScript', image: jsLogo },
  { name: 'Node.js', image: nodeLogo },
  { name: 'React', image: reactLogo },
  { name: 'Vite', image: viteLogo },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handlePrev() {
    if (index === 0) {
      setIndex(logos.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleNext() {
    if (index === logos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  let logo = logos[index];

  return (
    <div className="border-bottom pb-2 mb-3 text-center">
      <h4>Logos Gallery</h4>
      <img 
        src={logo.image} 
        alt={logo.name}
        height="100"
        className="my-2"
      />
      <h5>{logo.name}</h5>
      <p className="my-1">  
        ({index + 1} of {logos.length})
      </p>
      <p>
        <button onClick={handlePrev} className="btn btn-outline-secondary">
          ◀️ Prev
        </button>
        <button onClick={handleNext} className="m-2 btn btn-outline-secondary">
          Next ▶️
        </button>        
      </p>
    </div>
  );
}
