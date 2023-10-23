import React from "react";
import ContactForm from "../casely/contactForm";

class Analytics extends React.Component {
  render() {
    return (
      <div>
        <section className="showcase">
          <div className="video-container">
            <video
              src="assets/images/analytics.mov"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            ></video>
          </div>
          <div className="content">
            <h1 className="anlttxt">Apricus Analytics</h1>
            <h3 className="anltst">
              We input best skills specifically dedicated to this niche market,
              with our best module DAaaS (Data Analytics As a Service)
            </h3>
            <a href="#goanalytics" className="btn">
              Read More
            </a>
          </div>
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
        </section>

        <section className="section home-feature1" id="goanalytics">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                  >
                    <div className="features-small-item">
                      <div className="icon">
                        <i className="fa fa-line-chart" aria-hidden="true"></i>
                      </div>
                      <h5 className="features-title">
                        Times series forecasting{" "}
                      </h5>
                      <p>
                        Time series forecasting is part of predictive analytics.
                        It can show likely changes in the data, like seasonality
                        or cyclic behavior, which provides a better
                        understanding of data variables and helps forecast
                        better.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                  >
                    <div className="features-small-item">
                      <div className="icon">
                        <i
                          className="fa fa-connectdevelop"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <h5 className="features-title">
                        Marketing Mix Modelling{" "}
                      </h5>
                      <p>
                        Statistical analyzation such as multivariate regressions
                        on sales and marketing time series data to estimate the
                        impact of various marketing tactics (marketing mix) on
                        sales and then forecast the impact of future sets of
                        tactics.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                  >
                    <div className="features-small-item">
                      <div className="icon">
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                      </div>
                      <h5 className="features-title">Price Elasticity</h5>
                      <p>
                        DIGI ANALYTICS measure the effect of a price change or a
                        change in the quantity supplied on the demand for a
                        product or service.with the MMM and TSF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section colored" id="digikaagaz">
          <div className="container">
            <div className="row">
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
              <div className="col-lg-1"></div>
              <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                <h2 className="s-title">APRICUS ANALYTICS</h2>
                <h4 className="subheading">
                  Can predictive analytics improve performance? <br />
                  What are analytics tools?
                </h4>
                <p className="left-text">
                  Business analytics tools are types of application software
                  that retrieve data from one or more business systems and
                  combine it in a repository, such as a data warehouse, to be
                  reviewed and analysed.{" "}
                </p>
                <p className="left-text">
                  <strong>In simple terms below : </strong>Analytics is the
                  systematic computational analysis of data or statistics. It is
                  used for the discovery, interpretation, and communication of
                  meaningful patterns in data. It also entails applying data
                  patterns towards effective decision-making.{" "}
                </p>
                <p className="left-text">
                  we focus on the four types of data analytics we encounter in
                  data science: Descriptive, Diagnostic, Predictive and
                  Prescriptive.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section colored" id="digikaagaz">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                <p className="left-text">
                  Business analytics tools are types of application software
                  that retrieve data from one or more business systems and
                  combine it in a repository, such as a data warehouse, to be
                  reviewed and analysed.{" "}
                </p>
                <p className="left-text">
                  <strong>In simple terms below : </strong>Analytics is the
                  systematic computational analysis of data or statistics. It is
                  used for the discovery, interpretation, and communication of
                  meaningful patterns in data. It also entails applying data
                  patterns towards effective decision-making.{" "}
                </p>
                <p className="left-text">
                  we focus on the four types of data analytics we encounter in
                  data science: Descriptive, Diagnostic, Predictive and
                  Prescriptive.
                </p>
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
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                  >
                    <div className="event">
                      <img
                        className="roundimg"
                        src="assets/images/item1.jpg"
                        alt="description"
                      />
                      <div className="content">
                        <h3>
                          Visualize Your <br />
                          Enterprise Data
                        </h3>
                        <div className="rollover">
                          <p>
                            We bring all business data sources together, be it
                            third-party integrated platforms, IoT sensors, or
                            others.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                  >
                    <div className="event">
                      <img
                        className="roundimg"
                        src="assets/images/item2.jpg"
                        alt="description"
                      />
                      <div className="content">
                        <h3>
                          Get Answers <br />
                          in Real-Time
                        </h3>
                        <div className="rollover">
                          <p>
                            We set up Power BI’s natural language processing
                            features so that you can easily query your data and
                            receive immediate answers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                  >
                    <div className="event">
                      <img
                        className="roundimg"
                        src="assets/images/item3.jpg"
                        alt="description"
                      />
                      <div className="content">
                        <h3>
                          Advanced <br />
                          analytics
                        </h3>
                        <div className="rollover">
                          <p>
                            With integrated R and Python scripts, our data
                            science team can help you to leverage advanced
                            analytics with Power BI.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section colored" id="digikaagaz">
          <div className="container">
            <h2 className="s-title">
              Our unified scaling analytics and AI with enterprise IT
            </h2>
            <div className="left-text">
              <p>
                The making of well-designed AI / ML solutions requires
                significant data engineering and data wrangling exercises. Data
                engineering and scalable modern solution architectures are key
                requirements for an AI/ML solution for production use. We use a
                business-focused approach to IT in engineering the solution,
                aligning analytics, AI/ML approaches, and technology. Unleashing
                agile analytics within an enterprise where data is imprisoned in
                legacy platforms and infrastructure requires not just an IT
                transformation – but a data-first approach driven by an
                analytics partner. Finally, understanding how
                data-to-decision-making comes together requires excellent team
                dynamics and analysing, designing, and building the AI/ML
                application
              </p>
            </div>
          </div>
        </section>
        <section className="section colored" id="digikaagaz">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="cardbox">
                  <img
                    className="cardboximg"
                    src="assets/images/icons/ce.png"
                    alt="description"
                  />
                  <h4>Cloud Engineering</h4>
                  <p className="cardt">
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      AWS, Azure and GCP engineering for end-to-end applications
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Spark/ Scala analytics workloads
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Microservice architectures
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      IoT/stream analytics
                    </div>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="cardbox">
                  <img
                    className="cardboximg"
                    src="assets/images/icons/ai.png"
                    alt="description"
                  />
                  <h4>AI Engineering and ML Operations</h4>
                  <p className="cardt">
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Scalable architectures using DevOps and ML Operations
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Model registry and ML CI/CD pipelines on Cloud
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      AI/ML platforms for Data Science
                      <br />
                    </div>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="cardbox">
                  <img
                    className="cardboximg"
                    src="assets/images/icons/da.png"
                    alt="description"
                  />
                  <h4>Digital Analytics and Engineering</h4>
                  <p className="cardt">
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      E-commerce
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Web analytics
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Digital marketing analytics
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Ad platform technologies
                    </div>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="cardbox">
                  <img
                    className="cardboximg"
                    src="assets/images/icons/dldp.png"
                    alt="description"
                  />
                  <h4>Data Lakes and Data Platforms</h4>
                  <p className="cardt">
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Dimensional modelling
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Data warehouse and Data marts design
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Data and platform governance
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Database migration to the cloud
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      ITIL/ITSM services for data platforms
                    </div>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="cardbox">
                  <img
                    className="cardboximg"
                    src="assets/images/icons/ea.png"
                    alt="description"
                  />
                  <h4>Enterprise analytics infrastructure managed services</h4>
                  <p className="cardt">
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      ITIL based Support Desk for analytics infrastructure
                      management and monitoring
                      <br />
                    </div>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="cardbox">
                  <img
                    className="cardboximg"
                    src="assets/images/icons/bi.png"
                    alt="description"
                  />
                  <h4>
                    Full Stack engineering, Business Intelligence, and
                    Visualisation
                  </h4>
                  <p className="cardt">
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Interactive dashboards
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Automated reporting solutions
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      Complete web & mobile applications development
                      <br />
                    </div>
                    <div className="cartdt-list">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      App modernization & migration to Cloud
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section colored" id="digikaagaz">
          <div className="container">
            <h2 className="s-title">Applying AI to Finance Analytics</h2>
            <div className="left-text">
              <p>
                AI empowers our Finance Analytics, thereby contributing
                strategically to improve business outcomes through improved
                revenues, reduced costs, plugged potential losses, and
                identified cash opportunities. We aim to harness the untapped
                yet immense potential that finance & accounting can bring by
                using Artificial Intelligence and ensuring the cultural shift.
                <br />
                Here's how we deliver great Finance Analytics solutions, helping
                enterprises to capture multiple AI opportunities effectively:
              </p>
            </div>
          </div>
        </section>
        {/* <section className="section colored" id="digikaagaz">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="pipeboxleft">
                        <img className="pipeboximg" src="assets/images/icons/item1.png" alt="description"/>
                        <div className="pipetxt">
                            <h4>Customer experience</h4>
                            <p className="cardt">
                            Deliver smart financial solutions, with the customer at the center of all decisions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="pipeboxright">
                        
                        <div className="pipetxt">
                            <h4>Unlocking efficiency</h4>
                            <p className="cardt">
                            Focus on unlocking efficiencies across functions with the help of finance complemented by AI & ML.
                            </p>
                        </div>
                        <img className="pipeboximg" src="assets/images/icons/item2.png" alt="description"/>
                    </div>
                </div>
                <div className="col">
                    <div className="pipeboxleft">
                        <img className="pipeboximg" src="assets/images/icons/item3.png" alt="description"/>
                        <div className="pipetxt">
                            <h4>Simplicity in practice</h4>
                            <p className="cardt">
                            A practical and straightforward approach to all actions that deliver a seamless experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="pipeboxright">
                        
                        <div className="pipetxt">
                            <h4>Improved forecasting</h4>
                            <p className="cardt">
                            With AI's advanced predictive capability, future financial planning will get the attention and precision it deserves.
                            </p>
                        </div>
                        <img className="pipeboximg" src="assets/images/icons/item4.png" alt="description"/>
                    </div>
                </div>
                <div className="col">
                    <div className="pipeboxleft">
                        <img className="pipeboximg" src="assets/images/icons/item5.png" alt="description"/>
                        <div className="pipetxt">
                            <h4>Impeccable analytics</h4>
                            <p className="cardt">
                            Deliver the ‘best in class financial analytics to fuel business goals & ambitions for the post-pandemic world.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="pipeboxright">
                        
                        <div className="pipetxt">
                            <h4>Actuate agility</h4>
                            <p className="cardt">
                            An agile finance function to drive agility in financial planning and processes, helping adapt to the ever-dynamic business scenarios.
                            </p>
                        </div>
                        <img className="pipeboximg" src="assets/images/icons/item6.png" alt="description"/>
                    </div>
                </div>
                <div className="col">
                    <div className="pipeboxleft">
                        <img className="pipeboximg" src="assets/images/icons/item7.png" alt="description"/>
                        <div className="pipetxt">
                            <h4>Intelligent automation</h4>
                            <p className="cardt">
                            AI will drive intelligent automation across finance functions, integrating multiple embedded systems.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="pipeboxright">
                        
                        <div className="pipetxt">
                            <h4>Responsible AI</h4>
                            <p className="cardt">
                            Ethical AI will be the guiding factor in ensuring sustainable businesses that are truly successful in the future.
                            </p>
                        </div>
                        <img className="pipeboximg" src="assets/images/icons/item8.png" alt="description"/>
                    </div>
                </div>
                
            </div>
        </div>
    </section> */}
      </div>
    );
  }
}

export default Analytics;
