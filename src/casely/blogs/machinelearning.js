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
class Machinelearning extends React.Component{
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
                <h4 className="pagehead">Blog / Machine Learning</h4>
        </div>         
            </section>
        <section className="section colored" id="dk_learning">
        <h1 className="ndpage">Machine Learning</h1>
              <div className="container">
                    <div className="row">
                      <div className="col-lg-2">
                        <Bsmenu/>
                      </div>
                      <div className="col-lg-7">
                    <div className="left-text">
                        <p>Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.
                            <br/><br/></p>
                    </div>
                    <h4 className="subheading_blog">Types of Learning</h4>
                    <h4 className="subheading_blog">There are four types of machine learning:</h4>
                        <div className="left-text">
                            <ul className="desc-list">
                                <li><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp; <strong>Supervised learning:</strong> (also called inductive learning) Training data includes desired outputs.  This is spam this is not, learning is supervised.</li>
                                <li><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp; <strong>Unsupervised learning:</strong> Training data does not include desired outputs. An example is clustering. It is hard to tell what is good learning and what is not.</li>
                                <li><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp; <strong>Semi-supervised learning:</strong> Training data includes a few desired outputs.</li>
                                <li><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp; <strong>Reinforcement learning:</strong> Rewards from a sequence of actions. AI types like it, it is the most ambitious type of learning.</li>
                            </ul>
                        </div>
                        <h4 className="subheading_blog">Key Elements of Machine Learning</h4>
                        <div className="left-text">
                        <p>There are tens of thousands of machine learning algorithms and hundreds of new algorithms are developed every year.<br/>
                        Every machine learning algorithm has three components:</p>
                        </div>
                        <div className="left-text">
                            <ul className="desc-list">
                                <li><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp; <strong>Representation:</strong> how to represent knowledge. <br/>Examples include decision trees, sets of rules, instances, graphical models, neural networks, support vector machines, model ensembles, and others.</li>
                                <li><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp; <strong>Evaluation:</strong> the way to evaluate candidate programs (hypotheses). <br/>Examples include accuracy, prediction and recall, squared error, likelihood, posterior probability, cost, margin, entropy k-L divergence, and others.</li>
                                <li><i className="fa fa-certificate" aria-hidden="true"></i> &nbsp; <strong>Optimization:</strong> the way candidate programs are generated is known as the search process. <br/>Example, combinatorial optimization, convex optimization, constrained optimization.</li>
                            </ul>
                        </div>
                        <div className="left-text">
                        <p>All machine learning algorithms are combinations of these three components. A framework for understanding all algorithms</p>
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
export default Machinelearning;
