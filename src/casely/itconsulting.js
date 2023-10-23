import React from "react";
import ContactForm from "./contactForm";

class Itconsulting extends React.Component {
  render() {
    return (
      <div>
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
        <div className="welcome-area1" id="welcome">
          <div className="container">
            <h1 className="ndpage">IT CONSULTING & STAFFING SERVICES</h1>
            <div className="row">
              <div
                className="col-lg-8 col-md-12 col-sm-12 align-self-center"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h4 className="subheading">
                  INFORMATION TECHNOLOGY IS BEST WHEN IT BRINGS PEOPLE TOGETHER
                </h4>
                <div className="left-text">
                  <p>
                    Successful initiatives are driven by the right focus of
                    direction and execution. We’re experts at figuring out the
                    business strategy, whom you need, and how they can help
                    whether it’s people idiomatic behind the scenes, leading out
                    front, working alongside you, or taking control of specific
                    tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section colored" id="digikaagaz">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="pulsecards">
                  <h4>Consulting Services</h4>
                  <p>
                    Our thought leaders bring a deep understanding of your full
                    technology stack and business requirements to identify
                    opportunities that simplify the complex.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="pulsecards">
                  <h4>Customer Engagement Services</h4>
                  <p>
                    Trust our teams. Sometimes you don’t need or want to own a
                    project. You need a partner to pilot your project into the
                    future or someone to take non-core functions off your hands
                    without dropping the ball. We help you juggle it all.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="pulsecards">
                  <h4>Customer Managed Services</h4>
                  <p>
                    You drive; we’ll navigate. Our experts and delivery teams
                    will guide you and help implement your project. We’re the
                    tech crew that helps your team cross the finish line.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="pulsecards">
                  <h4>Talent Management Services</h4>
                  <p>
                    Technology takes talented people. Whether you need highly
                    skilled experts with specific abilities, broad support for a
                    fast-track initiative, or a full team to build out your
                    strategy, we’re here to make it happen. We’ll even provide
                    you with a managed team without any of the operational,
                    performance, or service delivery headaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section colored" id="digikaagaz">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                <h2 className="s-title">TALENT SERVICES</h2>
                <h4 className="subheading">Talent with Great Minds Together</h4>
                <p className="left-text">
                  How do we help clients stay current and able to take on
                  digital transformation? We’re constantly tracking the top
                  talent in every market, across every line of business, and
                  within every niche, so we can bring the people and skills you
                  need when you need them—without compromising quality.
                </p>
                <div className="riprow">
                  <div className="ripplecard">
                    <h1>Market Analytics</h1>
                  </div>
                  <div className="ripplecard">
                    <h1>Customer Knowledge</h1>
                  </div>
                  <div className="ripplecard">
                    <h1>Sourcing Strategy</h1>
                  </div>
                  <div className="ripplecard">
                    <h1>Screening and Selection</h1>
                  </div>
                  <div className="ripplecard">
                    <h1>Relationship Management</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div
                className="col-lg-5 col-md-12 col-sm-12 align-self-center"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <img
                  src="assets/images/analytics.png"
                  className="img-fluid1"
                  alt="App"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section colored" id="digikaagaz">
          <h2 className="sec-title">TECHNOLOGY SERVICES</h2>
          <div className="riprow">
            <p className="hovicon effect-2 sub-b">Artificial Intelligence </p>
            <p className="hovicon effect-2 sub-b">Machine Learning</p>
            <p className="hovicon effect-2 sub-b">Robotic Process Automation</p>
            <p className="hovicon effect-2 sub-b">Data Science</p>
            <p className="hovicon effect-2 sub-b">Data Analytics</p>
            <p className="hovicon effect-2 sub-b">UI & UX</p>
            <p className="hovicon effect-2 sub-b">DataBase Design</p>
            <p className="hovicon effect-2 sub-b">Code Development</p>
            <p className="hovicon effect-2 sub-b">
              Cyber security - Identity Access Management
            </p>
            <p className="hovicon effect-2 sub-b">SailPoint IIQ & IDN</p>
            <p className="hovicon effect-2 sub-b">CyberArk</p>
            <p className="hovicon effect-2 sub-b">CA SiteMinder</p>
            <p className="hovicon effect-2 sub-b">ForgeRock </p>
            <p className="hovicon effect-2 sub-b">Ping Federate</p>
            <p className="hovicon effect-2 sub-b">Auth0</p>
            <p className="hovicon effect-2 sub-b">
              Computerized System validation (Healthcare)
            </p>
          </div>
        </section>
      </div>
    );
  }
}
export default Itconsulting;
