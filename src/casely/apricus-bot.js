import React from "react";
import ContactForm from "./contactForm";

class Apricusbot extends React.Component {
  render() {
    return (
      <div>
        <div className="chatbotarea" id="welcome">
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
                <div className="botbox">
                  <h2 className="subtitle">
                    {" "}
                    <span className="animtext1">You’re better off with</span>
                    <span className="animtext2">Apricus-bot</span>
                  </h2>
                  <h2 className="subtitle-1">Meet Mr.AB &#10141;</h2>
                  <h2 className="subp">
                    Automate your business queries using Apricus chatbot
                    technology and done-for-your chatbot service in INDIA, and
                    start generating leads on autopilot
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="botbox">
                  <img
                    className="botimg"
                    src="assets/images/bot/abot.png"
                    alt="Digi Apricus Bot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="secsection" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">
                    Here's why<span> Apricus-Bot </span> is right for you?
                  </h2>
                </div>
              </div>
              <div className="offset-lg-3 col-lg-6">
                <div className="center-text">
                  <p>
                    Whether you want to collect leads or add customized chat
                    layout, our chatbot platform will take your basic looking
                    chat window to a whole lot of experience that enables you to
                    deliver automated customer support at scale with an amazing
                    lead-generation engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="botsection" id="bman">
          <div className="center-heading">
            <h2 className="section-title">
              Create customer experiences that sell
            </h2>
          </div>

          <div className="container">
            <div className="crdcontainer">
              <p>
                From the first visit to the final purchase, Chatbot lets you
                delight customers at each step of their buying journey.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="botben">
                  <img src="assets/images/bot/ben1.png" alt="benifits" />
                  <h1>Engage</h1>
                  <p>
                    Reach out to visitors proactively using personalized chatbot
                    greetings. Turn website visits into sales opportunities.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="botben">
                  <img src="assets/images/bot/ben2.png" alt="benifits" />
                  <h1>Offer</h1>
                  <p>
                    Lead customers to a sale through recommended purchases and
                    tailored offerings
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="botben">
                  <img src="assets/images/bot/ben3.png" alt="benifits" />
                  <h1>Qualify</h1>
                  <p>
                    Generate and qualify prospects automatically. Transfer
                    high-intent leads to your sales reps in real time to shorten
                    the sales cycle.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="botben">
                  <img src="assets/images/bot/ben4.png" alt="benifits" />
                  <h1>Convert</h1>
                  <p>
                    Let customers purchase, order, or schedule meetings easily
                    using a smart chatbot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section getintouch">
          <div className="container">
            <div className="talkus">
              <h1>
                Looking for Apricus Bot Support, Speak to our Representative,
                Call Now
              </h1>
              <a className="class" href="tel:+918088191336">
                <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; &nbsp;
                +91 808 819 1336
                <br />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Apricusbot;
