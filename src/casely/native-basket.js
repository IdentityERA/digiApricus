import React from "react";
import ContactForm from "./contactForm";

class Nativebasket extends React.Component {
  render() {
    return (
      <div>
        <div className="welcome-area" id="welcome">
          <div className="container">
            <input
              type="checkbox"
              class="openSidebarMenu"
              id="openSidebarMenu"
            />
            <label for="openSidebarMenu" class="sidebarIconToggle-demo">
              <p className="connbtn-demo" for="openSidebarMenu">
                Request for Demo
              </p>
            </label>
            <div id="sidebarMenu">
              <ul class="sidebarMenuInner">
                <h2>Connect With Us</h2>
                <ContactForm />
              </ul>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="welcomeimgbox drop-up">
                  <div className="shapebox drop-in"></div>
                  <img
                    className="welcomeing right-in zoom"
                    src="assets/images/nblogo.jpg"
                    alt="digi"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="welcomebox">
                  <h2 className="subtitle">Native Basket</h2>
                  <h2 className="subtitle-1">
                    An Innovative Concept of E-commerce Platform
                  </h2>
                  <h2 className="subtitle">is here</h2>
                  <h5 className="tagline1">
                    "<span>Comming Soon, Thank you</span>"
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nativebasket;
