import React from "react";
function Ads(){
    const openad1=()=>{
        window.location.href="https://www.businesstalkz.com/2022/01/names-of-12-innovative-companies-with.html"
    }
    const openad2=()=>{
        window.location.href="https://www.businesstalkz.com/2021/12/radha-murali-brings-great-minds.html"
    }
        return (
        <div className="addblogsupdate"> 
          <div className="adcover">
                <img src="assets/images/ads-1.jpg" alt="ads cover"/>
                <p>Names of 12 Innovative Companies with Great Ideas</p>
                <button onClick={openad1}>Learn More</button>
          </div>
          <div className="adcover">
                <img src="assets/images/ads-2.jpg" alt="ads cover"/>
                <p>Radha Murali - Brings the Great Minds Together in the Form of Digi Apricus</p>
                <button onClick={openad2}>Learn More</button>
          </div>
        </div>
        );
}
export default Ads;
