import { useState, useEffect } from "react";
 
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 1000);
 
    //Clearing the interval
    return () => clearInterval(interval);
  }, [currentIndex]);
 
  return (
    <div className="text-center border-bottom pt-2 pb-3 mb-3">
      <h2>Timer</h2>
      <h3>{currentIndex}</h3>
    </div>
  );
};
 
export default App;