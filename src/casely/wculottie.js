import React from "react";
import Lottie from 'react-lottie';
import animationData from '../lotties/wcu.json';
const Wculottie=()=>{

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
export default Wculottie;

