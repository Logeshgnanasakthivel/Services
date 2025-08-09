// import React, { useState } from 'react'
import './MainContent.css'
// import { MainBackground } from './MainBackground'
import { Workers } from './Workers';
export const MainContent = () => {
  console.log("hellooo")
  //  const [currentIndex, setCurrentIndex] = useState(0);

  // const components = [<MainBackground key={0} />, <MainBackground key={1} />];

  // // Handle swipe (left/right)
  // const handleSwipe = (direction) => {
  //   if (direction === 'left' && currentIndex < components.length - 1) {
  //     setCurrentIndex(currentIndex + 1);
  //   } else if (direction === 'right' && currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };

  // // Track swipe gesture
  // let touchStartX = 0;
  // let touchEndX = 0;

  // const handleTouchStart = (e) => {
  //   touchStartX = e.changedTouches[0].screenX;
  // };

  //  const handleTouchEnd = (e) => {
  //   touchEndX = e.changedTouches[0].screenX;
  //   if (touchEndX < touchStartX - 50) handleSwipe('left');
  //   else if (touchEndX > touchStartX + 50) handleSwipe('right');
  // }


  return (
    <div className='main'>
      {/* <div className='main-background'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
          {components[currentIndex]}
          
      </div> */}
      <Workers/>
      
      
    </div>
  )
}
