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
class Spidentitynow extends React.Component{
    constructor(props) {
		super(props);
    this.state = {
        url:"https://digiapricus.com/spidentitynow",
        title:"Digi Apricus - Blog/ Sailpoint IdentityNow",
        hashtag:"#digiapricus",
        shareImage:"assets/images/analytics-1.gif",
        size : "2.5rem"
     }
    }
render(){
      return(
      <div>
          <section className="section home-feature" id="goanalytics">
          <div className="contentbox">
                <h4 className="pagehead">Blog / Sailpoint IdentityNow</h4>
        </div>         
            </section>
        <section className="section colored" id="dk_learning">
        <h1 className="ndpage">Sailpoint IdentityNow</h1>
              <div className="container">
              <div className="row">
                      <div className="col-lg-2">
                        <Bsmenu/>
                      </div>
                      <div className="col-lg-7">
                    <div className="left-text">
                        <p>As we know that Sailpoint IIQ is purely an on-premises application whereas Identity Now is a cloud-based solution that simplifies identity governance easier. From day one, it allows you to automate and control user provisioning, access requests, separation-of-duties policies, access certification for auditors, password management, and access to sensitive files that make identity programs to deploy and manage more simple.
                            <br/><br/>The best thing about Identity Now is that a business analyst can be managed, no identity expertise is required. This also proved to reduce Help Desk calls by up to 90%.
                            </p>
                    </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                                <h4 className="subheading_blog">Course Content: (Administration & Implementation)</h4>
                                    <div className="left-text">
                                        <ul className="desc-list">
                                            <li>	1	Cloud-Based – Identity as a Service (IaaS)	</li>
                                            <li>	2	Architecture Overview	</li>
                                            <li>	3	Virtual Appliance	</li>
                                            <li>	4	Tenant	</li>
                                            <li>	5	Security Settings	</li>
                                            <li>	6	Authentication Methods	</li>
                                            <li>	7	Connection to Auth & Non-Auth Sources	</li>
                                            <li>	8	Building Identities	</li>
                                            <li>	9	Identity Profiles, Aggregation, Mapping, and Correlation	</li>
                                            <li>	10	Password Management	</li>
                                            <li>	11	Certification Campaigns	</li>
                                            <li>	12	Access Profiles	</li>
                                            <li>	13	Policy Violations & SOD	</li>
                                            <li>	14	Life Cycle States	</li>
                                            <li>	15	Access Requests	</li>
                                            <li>	16	Provisioning	</li>
                                            <li>	17	Email Templates	</li>
                                            <li>	18	Reports	</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                    <h4 className="subheading_blog">Pre-Requisite for Administration Course</h4>
                                    <div className="left-text">
                                        <ul className="desc-list">
                                            <li><i className="fa fa-certificate" aria-hidden="true"></i>It is recommended to have basics of Java and Database Knowledge</li>
                                            <li><i className="fa fa-certificate" aria-hidden="true"></i>Better if you should know the concept of Identity and Access Management.</li>
                                            <li><i className="fa fa-certificate" aria-hidden="true"></i>Knowing Sailpoint IIQ is an Advantage.</li>
                                        </ul>
                                    </div> 
                                    <h4 className="subheading_blog">Pre-Requisite for Advanced Implementation Course</h4>
                                    <div className="left-text">
                                        <ul className="desc-list">
                                            <li><i className="fa fa-certificate" aria-hidden="true"></i>Should have the Administration and basic Implementation knowledge</li>
                                            <li><i className="fa fa-certificate" aria-hidden="true"></i>Should be very good with Java, REST API</li>
                                        </ul>
                                    </div> 
                                    <h4 className="subheading_blog">Course Content (Advanced Implementation)</h4>
                                    <div className="left-text">
                                        <ul className="desc-list">
                                            <li>	1	Advanced configuration using REST API	</li>
                                            <li>	2	Using Postman to interact with Tenant	</li>
                                            <li>	3	Managing Sources and Provisioning	</li>
                                            <li>	4	Troubleshooting	</li>
                                            <li>	5	Building a Transforms via REST API	</li>
                                            <li>	6	Prepare Policies with REST APIs	</li>
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
                                    hashtag={this.state.hashtag}
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
export default Spidentitynow;
