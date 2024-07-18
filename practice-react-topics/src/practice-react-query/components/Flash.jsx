import React, { useEffect, useRef } from "react";
// import { useLocation, useHistory  } from 'react-router-dom';
import { useLocation, /* useNavigate */ } from 'react-router-dom';

export default function Flash() {
  const location = useLocation();
  // const navigate = useNavigate();

  const closeButton = useRef();
  let flash = null;
  if (location.state && location.state.flash) {
    flash = location.state.flash;
  }
  useEffect(() => {
    const elem = closeButton.current;
    setTimeout(() => {
      if (elem) elem.click();
    }, 3000);
  }, [flash]);

  // Prevent showing flash message when page is refreshed.
  const handleClick = () => {
    // history.replace({pathname: location.pathname, state: {flash: null}});
    // navigate.replace({pathname: location.pathname, state: {flash: null}});
    location.state.flash = null;
  }

  return (
    <>
      { flash && (
        <div className="container">
          <div className={`alert alert-${flash.type} mt-2 alert-dismissible fade show`} role="alert">
            {flash.msg}
            <button type="button" className="btn-close" ref={closeButton} onClick={handleClick} data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      )}
    </>
  );
}

// <button type="button" className="btn-close" ref={closeButton} onClick={handleClick} data-bs-dismiss="alert" aria-label="Close"></button>
