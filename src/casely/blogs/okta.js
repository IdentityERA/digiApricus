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
class Okta extends React.Component{
    constructor(props) {
		super(props);
    this.state = {
        url:"https://digiapricus.com/okta",
        title:"Digi Apricus - Blog/ Okta",
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
                <h4 className="pagehead">Blog / Okta</h4>
        </div>         
            </section>
        <section className="section colored" id="dk_learning">
        <h1 className="ndpage">Okta</h1>
              <div className="container">
              <div className="row">
                      <div className="col-lg-2">
                        <Bsmenu/>
                      </div>
                      <div className="col-lg-7">
                    <div className="left-text">
                        <p>Okta is a customizable, secure, and drop-in solution to add authentication and authorization services to your applications. Get scalable authentication built right into your application without the development overhead, security risks, and maintenance that come from building it yourself.  
                            <br/>
                           <br/> </p>
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
export default Okta;
