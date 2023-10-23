import React from "react";
import Lottie from 'react-lottie';
import animationData from '../lotties/temp.json';
const Lottieexample=()=>{

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      return(
  <div>
      <Lottie 
          options={defaultOptions}
          className="lottie"
      />
  </div>
  
    );
}
export default Lottieexample;

