import React from "react";
import Ads from "../../components/ads";
import Bsmenu from "../../components/bsmenu";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    
    WhatsappShareButton,
  
    // Comment to sepaate, overwriting codesandbox behavior
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
  
    // Comment to sepaate, overwriting codesandbox behavior
    FacebookShareCount,
    /**
     * LinkedIn Website iself doesn't support it anymore
     * Don't use it because it always return 0
     */
    // LinkedinShareCount,
  } from "react-share";
class Sailpoint extends React.Component{
    constructor(props) {
		super(props);
    this.state = {
        url:"https://digiapricus.com/sailpoint",
        title:"Digi Apricus - Blog/ Sailpoint IIQ",
        shareImage:"assets/images/analytics-1.gif",
        size : "2.5rem"
     }
    }
    

render(){
      return(
      <div>
          <section className="section home-feature" id="goanalytics">
          <div className="contentbox">
                <h4 className="pagehead">Blog / Sailpoint IIQ</h4>
        </div>         
            </section>
        <section className="section colored" id="dk_learning">
        <h1 className="ndpage">Sailpoint IIQ</h1>
              <div className="container">
              <div className="row">
                      <div className="col-lg-2">
                        <Bsmenu/>
                      </div>
                      <div className="col-lg-7">
                    <div className="left-text">
                        <p>Sailpoint IIQ is an Identity and Access Management tool and solution for all types of enterprises to deliver Automated Access Certifications, Policy Management, Access Requests, and Provisioning. Identity IQ has a flexible connectivity model that simplifies the management of applications running on-premise or in the cloud.
                        <br/><br/>The main purpose of IAM tools is to protect Confidential data and reduce risk management. Sailpoint is one of the top leadings when coming to Governance and Compliance features.
                        </p>
                    </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                                <h4 className="subheading_blog">Our course focuses on all the below topics</h4>
                                    <div className="left-text">
                                        <ul className="desc-list">
                                            <li>	1.  Overview of Sailpoint IIQ and Architecture	</li>
                                            <li>	2.  Installation, Patching & Deploying Modules	</li>
                                            <li>	3.  Monitoring & Configuration IIQ	</li>
                                            <li>	4.  Application On-Boarding including delimited file, JDBC, and LDAP	</li>
                                            <li>	5.  Extended Attributes	</li>
                                            <li>	6.  Work Groups, Populations	</li>
                                            <li>	7.  Risk Model	</li>
                                            <li>	8.  Policy Violation	</li>
                                            <li>	9.  Certification Campaigns	</li>
                                            <li>	10. Life Cycle Manager	</li>
                                            <li>	11. Business Process or Workflow	</li>
                                            <li>	12. Role-Based Access Control (RBAC)	</li>
                                            <li>	13. Rules Overview	</li>
                                            <li>	14. Audit, Analytics, and Custom Reports	</li>
                                            <li>	15. Scope	</li>
                                            <li>	16. OOTB Connectors	</li>
                                            <li>	17. Project Build – SSD	</li>
                                            <li>	18. Forms and Quick Links	</li>
                                            <li>	19. Events - Lifecycle & Certification	</li>
                                            <li>	20. Java Docs Overview 	</li>
                                            <li>	21. Filters	</li>
                                            <li>	22. Tasks - Scheduled and Custom Tasks	</li>
                                            <li>	23. IIQDA	</li>
                                            <li>	24. Special Case Connectors	</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                    <h4 className="subheading_blog">Pre-Requisite for Administration Course</h4>
                                    <div className="left-text">
                                        <ul className="desc-list">
                                            <li><i className="fa fa-certificate" aria-hidden="true"></i>It is recommended to have basics of Java and Database Knowledge</li>
                                            <li><i className="fa fa-certificate" aria-hidden="true"></i>Better if you should know the concept of Identity and Access Management.</li>
                                        </ul>
                                    </div> 
                                    <h4 className="subheading_blog">Pre-Requisite for Advanced Implementation Course</h4>
                                    <div className="left-text">
                                        <ul className="desc-list">
                                            <li><i className="fa fa-certificate" aria-hidden="true"></i>Should have the Administration and basic Implementation knowledge</li>
                                            <li><i className="fa fa-certificate" aria-hidden="true"></i>Should be very good with Java, JavaScript, API</li>
                                        </ul>
                                    </div> 
                                    <h4 className="subheading_blog">Course Content (Advanced Implementation)</h4>
                                    <div className="left-text">
                                        <ul className="desc-list">
                                            <li>	1	Rules (create, retrieve, manipulate, and navigate between objects)	</li>
                                            <li>	2	Custom Connectors	</li>
                                            <li>	3	API Integrations	</li>
                                            <li>	4	Plugins	</li>
                                            <li>	5	Java Docs	</li>
                                            <li>	6	Debug Page	</li>
                                            <li>	7	Debugging and Troubleshooting	</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    <div className="left-text">
                        <p>Please contact us for more discussion on Advanced Training.<br/></p>
                    </div> 
                    <div className="share_icons">


                    <div className="network">
                        <h3>Share on:</h3>
                    </div>


                            <div className="network">
                                <FacebookShareButton
                                    url={this.state.url}
                                    quote={this.state.title}
                                    className="network__share-button">
                                    <FacebookIcon
                                    size={"2rem"} // You can use rem value isntead of numbers
                                    round
                                    />
                                </FacebookShareButton>

                                <FacebookShareCount url={this.state.url} className="network__share-count">
                                    {count => count}
                                </FacebookShareCount>
                                </div>

                                <div className="network">
                                <TwitterShareButton
                                    url={this.state.url}
                                    title={this.state.title}
                                    className="network__share-button"
                                >
                                    <TwitterIcon size={"2rem"} round />
                                </TwitterShareButton>

                                <div className="network__share-count">&nbsp;</div>
                                </div>

                                <div className="network">
                                <WhatsappShareButton
                                    url={this.state.url}
                                    title={this.state.title}
                                    separator=":: "
                                    className="network__share-button"
                                >
                                    <WhatsappIcon size={"2rem"} round />
                                </WhatsappShareButton>

                                <div className="network__share-count">&nbsp;</div>
                                </div>

                                <div className="network">
                                <LinkedinShareButton
                                    url={this.state.url}
                                    title={this.state.title}
                                    windowWidth={750}
                                    windowHeight={600}
                                    className="network__share-button"
                                >
                                    <LinkedinIcon size={"2rem"} round />
                                </LinkedinShareButton>
                                </div>

                        <p><br/><br/></p></div>
                        </div>
                      <div className="col-lg-3">
                        <Ads/>
                      </div>
                  </div>
            </div>
        </section>
      </div>
  
    );
  }
}
export default Sailpoint;
