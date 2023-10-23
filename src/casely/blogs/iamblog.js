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
class IamBlog extends React.Component{
    constructor(props) {
		super(props);
    this.state = {
        url:"https://digiapricus.com",
        title:"Digi Apricus - Blog/ Identity and Access Management",
        shareImage:"assets/images/analytics-1.gif",
        size : "2.5rem"
     }
    }
    

render(){
      return(
      <div>
          <section className="section home-feature" id="goanalytics">
          <div className="contentbox">
                <h4 className="pagehead">Blog / Identity and Access Management</h4>
        </div>         
            </section>
        <section className="section colored" id="dk_learning">
        <h1 className="ndpage">Identity and Access Management</h1>
              <div className="container">
                <div className="row">
                      <div className="col-lg-2">
                        <Bsmenu/>
                      </div>
                      <div className="col-lg-7">
                    <div className="left-text">
                        <p>Identity and access management (IAM) is a collective term that covers products, processes, and policies used to manage user identities and regulate user access within an organization. “Access” refers to actions permitted to be done by a user (like view, create, or change a file).
                            <br/>Identity and access management (IAM) ensures that the right people and job roles in your organization (identities) can access the tools they need to do their jobs. Identity management and access systems enable your organization to manage employee apps without logging into each app as an administrator. Identity and access management systems enable your organization to manage a range of identities including people, software, and hardware like robotics and IoT devices.
                        </p>
                    </div>
                    <h4 className="subheading_blog">Why do you need IAM?</h4>
                    <div className="left-text">
                        <p>Companies need IAM to provide online security and to increase employee productivity.</p>
                    </div>
                    <div className="left-text">
                        <ul className="desc-list">
                            <li><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp;Security. Traditional security often has one point of failure - the password. If a user's password is breached - or worse yet, the email address for their password recoveries - your organization becomes vulnerable to attack. IAM services narrow the points of failure and backstop them with tools to catch mistakes when they're made</li>
                            <li><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp;Productivity. Once you log on to your main IAM portal, your employee no longer has to worry about having the right password or right access level to perform their duties. Not only does every employee get access to the perfect suite of tools for their job, but their access can also be managed as a group or role instead of individually, reducing the workload on your IT professionals.</li>
                        </ul>
                    </div>
                    <h4 className="subheading_blog">What is the difference between identity management and access management?</h4>
                    <div className="left-text">
                        <p>Identity management confirms that you are you and stores information about you. An identity management database holds information about your identity - for example, your job title and your direct reports - and authenticates that you are, indeed, the person described in the database.
                        Access management uses the information about your identity to determine which software suites you're allowed access to and what you're allowed to do when you access them. For example, access management will ensure that every manager with direct reports has access to an app for timesheet approval, but not so much access that they can approve their timesheets.
                        <br/><br/>
                        An IAM system is expected to be able to integrate with many different systems. Because of this, there are certain standards or technologies that all IAM systems are expected to support: Security Access Markup Language, OpenID Connect, and System for Cross-domain Identity Management.</p>
                    </div> 

                    <h4 className="subheading_blog"><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp;Security Access Markup Language (SAML)</h4>
                    <div className="left-text">
                        <p>SAML is an open standard used to exchange authentication and authorization information between an identity provider system such as an IAM and service or application. This is the most commonly used method for an IAM to provide a user with the ability to log in to an application that has been integrated with the IAM platform..</p>
                    </div> 

                    <h4 className="subheading_blog"><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp;OpenID Connect (OIDC)</h4>
                    <div className="left-text">
                        <p>OIDC is a newer open standard that also enables users to log in to their application from an identity provider. It is very similar to SAML but is built on the OAuth 2.0 standards and uses JSON to transmit the data instead of XML which is what SAML uses.</p>
                    </div> 
                    <h4 className="subheading_blog"><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp;System for Cross-domain Identity Management (SCIM)</h4>
                    <div className="left-text">
                        <p>SCIM is a standard used to automatically exchange identity information between two systems. Though both SAML and OIDC can pass identity information to an application during the authentication process, SCIM is used to keep the user information up to date whenever new users are assigned to the service or application, user data is updated, or users are deleted. SCIM is a key component of user provisioning in the IAM space.</p>

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
export default IamBlog;
