import React from "react";
import axios from "axios";
import Lottieexample from "./lottie-example";
import Wculottie from "./wculottie";
import Basicslider from "./Slider/Basicslider";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  oiamblog = () => {
    window.location.href = "/iamblog";
  };
  osailpoint = () => {
    window.location.href = "/sailpoint";
  };
  ospin = () => {
    window.location.href = "/spidentitynow";
  };
  ocybera = () => {
    window.location.href = "/cyberark";
  };
  oocta = () => {
    window.location.href = "/okta";
  };
  oauth = () => {
    window.location.href = "/autho";
  };
  opingi = () => {
    window.location.href = "/pingidentity";
  };
  odatas = () => {
    window.location.href = "/datascience";
  };
  oml = () => {
    window.location.href = "/machinelearning";
  };
  orsa = () => {
    window.location.href = "/rsaigl";
  };
  componentDidMount() {
    var displayname = "";
    var city = "";
    var state = "";
    var country = "";
    var pincode = "";
    var datetime = new Date().toLocaleString();
    var lang = "";
    var lat = "";
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      lat = position.coords.latitude;
      lang = position.coords.longitude;
      const lik =
        "https://us1.locationiq.com/v1/reverse.php?key=pk.60ebf4b5b34d0356ef628b1f18eb9c2a&lat=";
      const lktxt1 = "&lon=";
      const lktxt2 = "&format=json";
      const urllink = lik + lat + lktxt1 + lang + lktxt2;
      axios.get(urllink).then((responce) => {
        displayname = responce.data.display_name;
        console.log(responce.data);
        city = responce.data.address.city;
        state = responce.data.address.state;
        country = responce.data.address.country;
        pincode = responce.data.address.postcode;
        //console.log(responce.data)
        const obj = {
          displayname,
          city,
          state,
          country,
          pincode,
          datetime,
          lang,
          lat,
        };
        axios
          .post("digiapricus_api/savelog.php", obj)
          .then((res) => {
            var sts = res.data;
            console.log(sts);
            if (sts.match("success")) {
              console.log("sucsess saved");
              console.log(displayname);
            } else {
              console.log("failed to save");
            }
          })
          .catch(function (res) {
            console.log(res);
          });
      });
    });
  }
  render() {
    return (
      <div className="">
        <div className="welcome-area" id="welcome">
          <div className="header-text">
            <div className="container-fluid sliding">
              {/*<div className="container-fluid">
                <div className="row">
                  <Basicslider />
                </div>
              </div>*/}
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 sliding-p">
                  <h3>Great Minds Together </h3>
                  <p>
                    Together we achieve as a team,
                    <span>
                      Come and join us and transform your business to thrive.
                    </span>
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 sliding-img">
                  <img src="./assets/images/dklp.png" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="cardscont">
                <div className="row">
                  <div className="col-3">
                    <div className="welcard drop-up">
                      <img
                        src="assets/images/icons/welcome4.png"
                        alt="cybersecurity"
                      />
                      <p>Cyber Security</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="welcard drop-up-1">
                      <img
                        src="assets/images/icons/welcome3.png"
                        alt="AI & ML"
                      />
                      <p>AI & ML</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="welcard drop-up-2">
                      <img
                        src="assets/images/icons/welcome1.png"
                        alt="it consulting"
                      />
                      <p>IT Consulting</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="welcard drop-up-3">
                      <img
                        src="assets/images/icons/welcome2.png"
                        alt="custom application software"
                      />
                      <p>Custom Application Software </p>
                    </div>
                  </div>
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
                  <h2 className="section-title">TECHNOLOGY HANDIWORK</h2>
                </div>
              </div>
              <div className="offset-lg-3 col-lg-6">
                <div className="center-text">
                  <p>
                    We choose a different path. Our belief was that If we add
                    great products in front of customers, they would continue to
                    open their wallets.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-thumb">
                  <div className="img">
                    <img
                      className="gifimg"
                      src="assets/images/analytics-1.gif"
                      alt="Analytics Movement Demo"
                    />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <a href="/analytics">APRICUS-ANALYTICS</a>
                    </h3>
                    <div className="text">
                      We made solution to discover, implement and communication
                      of meaningful patterns in data. It also entails applying
                      data patterns towards effective decision-making.
                    </div>
                    <a href="/analytics" className="main-button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-thumb">
                  <div className="img">
                    <img
                      className="gifimg1"
                      src="assets/images/hrms.gif"
                      alt="Digi Kaagaz HRMS portal"
                    />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <a href="/apricushrms">APRICUS HRMS</a>
                    </h3>
                    <div className="text">
                      For Job Requirement, Sourcing, Onbording & End to End Life
                      cycle with complete paperless data security tool for HRMS
                      portal.
                    </div>
                    <a href="/apricushrms" className="main-button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-thumb">
                  <div className="img">
                    <img
                      className="gifimg1"
                      src="assets/images/endure.gif"
                      alt="Digi Kaagaz HRMS portal"
                    />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <a href="/digierudite">DIGI-ERUDITE</a>
                    </h3>
                    <div className="text">
                      Ever heard about education as a service (EAAS Module) and
                      Training as a Service (TAAS Module)
                    </div>
                    <a href="/digierudite" className="main-button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-thumb">
                  <div className="img">
                    <img
                      className="gifimg"
                      src="assets/images/cyber.gif"
                      alt="Analytics Movement Demo"
                    />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <a href="/cybersecurity">CYBER SECURITY SERVICES</a>
                    </h3>
                    <div className="text">
                      We made solution to discover, implement and communication
                      of meaningful patterns in data. It also entails applying
                      data patterns towards effective decision-making.
                    </div>
                    <a href="/cybersecurity" className="main-button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-thumb">
                  <div className="img">
                    <img
                      className="gifimg1"
                      src="assets/images/devops.gif"
                      alt="Digi Kaagaz HRMS portal"
                    />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <a href="/devops">DEVOPS, CLOUD & AUTOMATIONS</a>
                    </h3>
                    <div className="text">
                      For Job Requirement, Sourcing, Onbording & End to End Life
                      cycle with complete paperless data security tool for HRMS
                      portal.
                    </div>
                    <a href="/devops" className="main-button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-thumb">
                  <div className="img">
                    <img
                      className="gifimg1"
                      src="assets/images/it-consulting.gif"
                      alt="Digi Kaagaz HRMS portal"
                    />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <a href="/itconsulting">IT CONSULTING</a>
                    </h3>
                    <div className="text">
                      Successful initiatives are driven by the right focus of
                      direction and execution. We’re experts at figuring out the
                      business strategy, whom you need, and how they can help
                      {/* whether it’s people idiomatic behind the scenes, leading
                      out front, working alongside you, or taking control of
                      specific tasks. */}
                    </div>
                    <a href="/itconsulting" className="main-button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="bman">
          <div className="center-heading">
            <h2 className="section-title">
              Why Choose <span>Us?</span>
            </h2>
          </div>

          <div className="container">
            <div className="crdcontainer">
              <p>
                Wide Range of Services: Our organization offers best website
                design, development, SEO, Web hosting and various other types of
                services to establish your business.
              </p>
            </div>
          </div>
          <div className="wcubox">
            <div className="myrow">
              <div className="mycol">
                <Wculottie />
              </div>
              <div className="mycol">
                <ul className="opt-list">
                  <li>
                    Comprehensive Solutions: We deal with nearly all aspects of
                    designing & development and digital marketing.
                  </li>
                  <li>
                    Dedicated Team: A great and enthusiastic team is dedicated
                    to delivering the project under strict timelines.
                  </li>
                  <li>
                    Time Efficiency: We value your time and efforts you’ve made
                    thus we make sure the project delivers before the given
                    timeline.
                  </li>
                  <li>
                    Innovative Creation: Our passionate developers offer one
                    over one compelling and engaging project architecture from
                    end to end.
                  </li>
                  <li>Smart home</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section">
        <div className="container">
        <div className="center-heading">
            <h2 className="section-title">Our Most Popular <span>Blogs</span></h2>
        </div>
            <div class="cards-wrapper">
                <div class="card">
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog1.jpg" alt="Identity and Access Management"/>
                <div className="icard__content">
                    <h1 className="icard__header">Identity and Access Management</h1>
                    <p className="icard__text">Identity and access management (IAM) is a collective term that covers products, processes, and policies used to manage user identities and regulate user access within an organization....</p>
                    <button className="icard__btn" onClick={this.oiamblog}>Read More<span>&rarr;</span></button>
                </div>
                </div>
                </div>
                <div class="card">
                    <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog2.jpg" alt="Desert"/>
                    <div className="icard__content">
                        <h1 className="icard__header">Sailpoint IIQ</h1>
                        <p className="icard__text">Sailpoint IIQ is an Identity and Access Management tool and solution for all types of enterprises to deliver Automated Access Certifications, Policy Management, Access...</p>
                        <button className="icard__btn" onClick={this.osailpoint}>Read More <span>&rarr;</span></button>
                    </div>
                </div>
                </div>
                <div class="card">
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog3.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Sailpoint IdentityNow</h1>
                    <p className="icard__text">As we know that Sailpoint IIQ is purely an on-premises application whereas IdentityNow is a cloud-based solution that simplifies identity governance easier. From day one, it allows...</p>
                    <button className="icard__btn"onClick={this.ospin}>Read More <span>&rarr;</span></button>
                </div>
                </div>
                </div>
                <div class="card">
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog4.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">CyberArk</h1>
                    <p className="icard__text">External authentication. Users can connect to Cloud applications with personal credentials, authenticating against the application's internal user management. Use this method...</p>
                    <button className="icard__btn" onClick={this.ocybera}>Read More <span>&rarr;</span></button>
                </div>
                </div>
                </div>
                <div class="card">
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog5.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Okta</h1>
                    <p className="icard__text">Okta is a customizable, secure, and drop-in solution to add authentication and authorization services to your applications. Get scalable authentication built right into your...</p>
                    <button className="icard__btn" onClick={this.oocta}>Read More <span>&rarr;</span></button>
                </div>
                </div>
                </div>
                <div class="card">
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog6.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Auth0</h1>
                    <p className="icard__text">Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that...</p>
                    <button className="icard__btn" onClick={this.oauth}>Read More<span>&rarr;</span></button>
                </div>
                </div>
                </div>
                <div class="card">
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog7.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Ping Identity</h1>
                    <p className="icard__text">Ping Identity provides federated identity management and self-hosted identity access management (IAM) solutions to web identities and single sign-on solutions, being one of...</p>
                    <button className="icard__btn" onClick={this.opingi}>Read More<span>&rarr;</span></button>
                </div>
                </div>
                </div>
                <div class="card">
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog8.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">RSA IGL</h1>
                    <p className="icard__text">RSA IGL is a complete solution for managing digital identities, both inside and outside of the enterprise. The RSA solution covers all aspects of governance and identity...</p>
                    <button className="icard__btn"  onClick={this.orsa}>Read More<span>&rarr;</span></button>
                </div>
                </div>
                </div>
                <div class="card">
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog9.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Data Science</h1>
                    <p className="icard__text">Data science combines multiple fields, including statistics, scientific methods, artificial intelligence (AI), and data analysis, to extract value from data... </p>
                    <button className="icard__btn" onClick={this.odatas}>Read More <span>&rarr;</span></button>
                </div>
                </div>
                </div>
                <div class="card">
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog10.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Machine Learning</h1>
                    <p className="icard__text">Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems...</p>
                    <button className="icard__btn" onClick={this.oml}>Read More <span>&rarr;</span></button>
                </div>
                </div>
                </div>
            </div>
        </div>
        
    </section>
    <section className="section getintouch">
        <div className="container">
            <div className="talkus">
                <h1>Happy to help for your with digital transformation, Call us Now</h1>
                <a className="class" href="tel:+918088191336"><i className="fa fa-phone" aria-hidden="true"></i>&nbsp; &nbsp; +91 808 819 1336<br/></a>
            </div>
        </div>
    </section> */}
        {/* <section className="section colored" id="digikaagaz">
            <div className="logos">
            <h1 className="c_header">Our Patrons</h1>
            <div id="arrowAnim">
            <div className="arrowSliding">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay3">
                <div className="arrow"></div>
            </div>
            </div>
            <img className="plogo" src="assets/images/clients/client-1.png" alt="Clinetelity as petron"/>
            <img className="plogo" src="assets/images/clients/client-2.png" alt="Metahorizon as petron"/>
            </div>
    </section> */}
      </div>
    );
  }
}

export default Landing;
