import { useRef } from 'react';

export default function ImageScroll() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  return (
    <>
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container">
          <span>
            <button 
              className="btn btn-sm btn-dark mx-1"
              onClick={() => img1Ref.current.scrollIntoView()}
            >JavaScript</button>
            <button 
              className="btn btn-sm btn-dark mx-1"
              onClick={() => img2Ref.current.scrollIntoView()}
            >Node.js</button>
            <button 
              className="btn btn-sm btn-dark mx-1"
              onClick={() => img3Ref.current.scrollIntoView()}
            >React</button>
          </span>
        </div>
      </nav>
      <h1>Images</h1>
        <img className="w-75 d-block img-thumbnail mb-3"
          src="/src/assets/JavaScript.png"
          ref={img1Ref}
        />
        <img className="w-75 d-block img-thumbnail mb-3"
          src="/src/assets/Nodejs.png"
          ref={img2Ref}
        />
        <img className="w-75 d-block img-thumbnail mb-3"
          src="/src/assets/react.svg"
          ref={img3Ref}
        />
    </>
  );
}
