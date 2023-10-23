import React from "react";
import DigiEruditeSlider from "./digiEruditeSlider";
import ContactForm from "../../casely/contactForm";

class Digierudite extends React.Component {
  render() {
    return (
      <div>
        <section className="section home-feature" id="goanalytics">
          {/* <div className="eruditebox">
            <h4 className="pagehead">DIGI-ERUDITE</h4>
          </div> */}
          <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
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
          <div className="container">
            <div className="row">
              <DigiEruditeSlider />
            </div>
          </div>
        </section>
        <section className="section colored" id="dk_learning">
          <h1 className="ndpage">DIGI-ERUDITE</h1>
          <div className="container">
            <div className="">
              <div className="content">
                <p>
                  Digi Erudite admin features ensure the course creation and its
                  corresponding settings dynamically from the backend. The
                  detailed LMS features are listed out below.
                </p>
                <a href="/digieruditefeatures" className="btn">
                  Read More
                </a>
              </div>
            </div>
            <h4 className="subheading">Mission</h4>
            <div className="left-text">
              <p>
                Digi Erudite is a one-stop solution to indoctrinate your
                knowledge. On a mission to not only reconceive the way we learn
                but also build a better and brighter future. We’re here to give
                our learners knowledge, skills, and expertise through a deeply
                engaged and comprehensive experience, and accredit them to
                transform their fascination into reality.
              </p>
            </div>
            <h4 className="subheading">Vision</h4>
            <div className="left-text">
              <p>
                Digi Erudite vision is to use Real-time technology with hands-on
                projects to dexterity our programs and empiric instruction
                methods to inspire comprehensive learning. We create
                professionals not only for the present but also for the yet
                unforeseen jobs of the future. Our goal is to devise them to
                become the well-founded first choice in a rapidly transforming
                digital economy.
              </p>
            </div>
            <div className="row">
              <div
                className="col-lg-5 col-md-12 col-sm-12 align-self-center"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <img
                  src="assets/images/dklp.png"
                  className="rounded img-fluid d-block mx-auto"
                  alt="App"
                />
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                <h4 className="subheading">
                  Best Trainings offered by DIGI ERUDITE
                </h4>
                <div className="riprow">
                  <p className="hovicon effect-2 sub-b">Sailpoint IIQ</p>
                  <p className="hovicon effect-2 sub-b">Sailpoint IDN</p>
                  <p className="hovicon effect-2 sub-b">CyberArk</p>
                  <p className="hovicon effect-2 sub-b">OKTA</p>
                  <p className="hovicon effect-2 sub-b">Ping Identity</p>
                  <p className="hovicon effect-2 sub-b">RSA IGL</p>
                  <p className="hovicon effect-2 sub-b">Saviynt</p>
                  <p className="hovicon effect-2 sub-b">Thycotic</p>
                  <p className="hovicon effect-2 sub-b">
                    Cyber Security practice
                  </p>
                  <p className="hovicon effect-2 sub-b">Data Science</p>
                  <p className="hovicon effect-2 sub-b">Salesforce</p>
                  <p className="hovicon effect-2 sub-b">Splunk</p>
                  <p className="hovicon effect-2 sub-b">
                    Machine Learning and Artificial intelligence
                  </p>
                  <p className="hovicon effect-2 sub-b">Technical Support</p>
                  <p className="hovicon effect-2 sub-b">Full Stack Developer</p>
                  <p className="hovicon effect-2 sub-b">Mulesoft</p>
                  <p className="hovicon effect-2 sub-b">Snowflake</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Digierudite;
