import { useState, useEffect } from 'react';

const gallery = [
  { id: 1, title: 'JavaScript', filePath: '/src/assets/JavaScript.png' },
  { id: 2, title: 'Node.js', filePath: '/src/assets/Nodejs.png' },
  { id: 3, title: 'React', filePath: '/src/assets/react.svg' },
  { id: 4, title: 'Vite', filePath: '/src/assets/vite.svg' },
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => { 
    setTimeout(() => {
      if (currentIndex === gallery.length-1) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex(currentIndex + 1);      
    }, 3000);
  }, [currentIndex]);
  return (
    <div className="border-bottom pb-3 mb-3 text-center">
      <h2>Gallery Carousel</h2>
      <figure className=''>
        <img src={gallery[currentIndex].filePath} style={{height: "300px"}} className="img-thumbnail my-2" alt={gallery[currentIndex].title} />
        <figcaption className="fs-3">{gallery[currentIndex].title}</figcaption>
      </figure>
    </div>
  );
}
