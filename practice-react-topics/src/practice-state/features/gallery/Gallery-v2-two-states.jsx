import { useState } from 'react';
import jsLogo from '/src/assets/JavaScript.png';
import nodeLogo from '/src/assets/Nodejs.png';
import reactLogo from '/src/assets/react.svg';
import viteLogo from '/src/assets/vite.svg';

const logos = [ 
  { name: 'JavaScript', image: jsLogo, website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Node.js', image: nodeLogo, website: 'https://nodejs.org' },
  { name: 'React', image: reactLogo, website: 'https://react.dev' },
  { name: 'Vite', image: viteLogo, website: 'https://vitejs.dev' },
];

export default function GalleryV2() {
  const [index, setIndex] = useState(0);
  const [showSite, setShowSite] = useState(false);

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

  function handleShowSite() {
    setShowSite(!showSite);
  }

  return (
    <div className="border-bottom pb-2 mb-3 text-center">
      <h4>logos Gallery</h4>
      <img 
        src={logo.image} 
        alt={logo.name}
        height="100"
        className="my-2"
      />
      <h5>{logo.name}</h5>
      <p>
        <span onClick={handleShowSite} className="badge text-bg-secondary mx-2">{showSite ? 'Hide Website' : 'Show Website'}</span>
        {showSite && logo.website}
      </p>
      <p className="my-1">  
        ({index + 1} of {logos.length})
      </p>
      <p>
        <button onClick={handlePrev} className="btn btn-sm btn-outline-secondary">
          ◀️ Prev
        </button>
        <button onClick={handleNext} className="m-2 btn btn-sm btn-outline-secondary">
          Next ▶️
        </button>        
      </p>
    </div>
  );
}
