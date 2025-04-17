// Loading.js
import React from 'react';
import Lottie from "lottie-react"
import Loadingjson from "../loading.json" // ✅ Corrected

export const Loading = () => {
  const imgStyle = {
    width: '150px',
    height: '150px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
  };

  return (
    <div className='w-full h-[300px]' style={imgStyle}>
      <Lottie
        animationData={Loadingjson}
        loop
        autoplay
      />
    </div>
  );
};
