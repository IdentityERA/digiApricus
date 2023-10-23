import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-10">
                    <div className="ctab">
                      <img
                        src="assets/images/Logo.png"
                        alt="Digi Apricus footer"
                      />
                      <p>
                        Started, powered and functioned by equally talented and
                        passionate founders and workers, Digi Apricus has been
                        dedicated to building for your business the digital
                        image it needs.
                      </p>
                      <div className="righttab">
                        <div className="righttab-1">
                          <p>Follow Us</p>
                          <ul className="social">
                            <li>
                              <a href="https://www.facebook.com/digiapricus">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/digital_apricus/">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/company/digi-apricus-gmt">
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://t.me/informationtechnology_services">
                                <i className="fa fa-paper-plane"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* <h2>Contact Us Via</h2>
                                        <ul className="social">
                                            <li><a href="https://wa.me/918088191336"><i className="fa fa-whatsapp"></i></a></li>
                                            <li><a href="tel:+918088191336"><i className="fa fa-phone"></i></a></li>
                                        </ul> */}

                        <div className="col-lg-12">
                          <div className="addressbox">
                            <p className="adrslist">
                              <i className="fa fa-map-marker"></i> &nbsp;
                              Koramangala, Bangalore, India - 560034
                            </p>
                            <p className="adrslist">
                              <i className="fa fa-envelope"></i> &nbsp;
                              hr@digiapricus.com
                            </p>
                            <p className="adrslist">
                              <i className="fa fa-envelope"></i> &nbsp;
                              info@digiapricus.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="ctab">
                      <h3>Products</h3>
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/digierudite"> Digi Erudite (LMS)</a>
                      </div>
                      {/* <a href="/digikaagaz"> Digi Kaagaz</a> */}
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/analytics"> Apricus Analytics</a>
                      </div>
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/crm">Apricus CRM</a>
                      </div>
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/school-management">School Management</a>
                      </div>
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/native-basket"> Native Basket</a>
                      </div>
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/apricus-bot"> Apricus Bot</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="ctab">
                      <h3>Quick Links</h3>
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/">Home</a>
                      </div>
                      {/* <a href="/digiblogs">Blogs</a> */}
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/aboutus">About Us</a>
                      </div>
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/aboutus">Contact Us</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="ctab">
                      <h3>Services</h3>
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/cybersecurity"> Cyber Security</a>
                      </div>
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/devops"> DevOps Cloud & Automation</a>
                      </div>
                      {/* <a href="/digierudite"> Digi Erudite</a> */}
                      <div className="ctab-line">
                        <div class="line"></div>
                        <a href="/itconsulting"> IT Consulting</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="copybox">
              <div className="row">
                {/* <div className="col-lg-2">
                            <p className="copyright">Terms & Conditions</p>
                        </div>
                        <div className="col-lg-1">
                            <p className="copyright">Privacy Policy</p>
                        </div>
                        
                        <div className="col-lg-1">
                            <p className="copyright">Licenses</p>
                        </div> */}
                <div className="col-lg-12">
                  <hr className="footer-hr" />
                  <p className="copyright">
                    Copyright &copy; DIGI-APRICUS 2022 | All Rights Reserved
                    <div className="footer-policy">
                      <a href="/cookie-policy">Cookie Policy</a>&nbsp; | 
                      <a href="/disclaimer">Disclaimer</a>&nbsp; |
                      <a href="/license-agreement">End-User License Agreement</a>&nbsp; |
                      <a href="/privacy-policy">Privacy Policy</a>&nbsp; |
                      <a href="/return-refund">Return & Refund Policy</a>&nbsp; |
                      <a href="/term-conditions">Terms & Conditions</a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
