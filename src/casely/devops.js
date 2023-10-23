import React from "react";
import ContactForm from "./contactForm";

class Devops extends React.Component {
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
        <section className="section home-feature" id="goanalytics">
          <div className="devopsbox">
            <h4 className="pagehead">Devops Cloud & Automation</h4>
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
                  src="assets/images/blog/devops.jpg"
                  className="img-fluid1"
                  alt="App"
                />
              </div>

              <div className="col-lg-1"></div>
              <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                <h2 className="s-title">DevOps Cloud & Automation </h2>
                <h4 className="subheading">AMBITION, ACCELERATED</h4>
                <p className="left-text">
                  You’re up. Technology is no longer a supporting player in
                  business; it’s taken over the main stage, spurring new growth
                  opportunities. The challenge is pivoting with multiplying
                  customer demands for enhanced products and services
                </p>
                <h4 className="subheading">Master Mind</h4>
                <p className="left-text">
                  An ecosystem of advanced technology can accelerate your
                  pace—but all the components must fit your unique culture.
                  DevOps isn’t just about tools; it’s about people and
                  processes. That’s why we take a hands-on approach to evolving
                  your organization and talent alongside your technology.
                  Together, we’ll build a world-class infrastructure that runs
                  at the speed of ambition.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="devopsec">
          <div className="container">
            <div className="pentest">
              <h2 className="penhead">DevOps automation</h2>
              <div className="row">
                <div className="col-lg-4">
                  <h3>What is Devops with Digi Apricus?</h3>
                  <p>
                    In DevOps, automation means eliminating the need for human
                    engineers to intervene manually in order to facilitate
                    DevOps practices. Theoretically speaking, you could perform
                    DevOps processes like Continuous Integration, Continuous
                    Delivery and log analytics manually. But doing so would
                    require a large team, a lot of time and a level of
                    communication and coordination between team members that is
                    just not realistic in most situations.
                    <br />
                  </p>
                </div>
                <div className="col-lg-8">
                  <h3>DevOps automation examples</h3>
                  <p>Examples of automation in DevOps include:</p>
                  <ul className="check-list">
                    <li>
                      Infrastructure-as-Code tools can automatically configure
                      software environments based on configuration files created
                      beforehand.
                    </li>
                    <li>
                      Release automation suites can build, test and deploy new
                      versions of an application.
                    </li>
                    <li>
                      Automated testing frameworks can evaluate how a new
                      version of an application behaves in order to assess
                      whether it meets predefined quality thresholds.
                    </li>
                  </ul>
                  <p>
                    {" "}
                    Automation makes it possible to perform these processes
                    using software tools and pre-set configurations.
                  </p>
                </div>
                <div className="col-lg-6">
                  <h3>
                    <br />
                    <br />
                    DevOps automation doesn't remove humans completely
                  </h3>
                  <p>
                    It's important to note that automation in DevOps doesn't
                    remove humans from the picture entirely. Even the
                    best-automated DevOps process requires human oversight and
                    intervention when things go wrong or something needs to be
                    updated.
                    <br />
                    Still, automation minimizes dependency on humans for
                    managing basic, recurring tasks within a DevOps practice.
                  </p>
                  <h3>
                    <br />
                    DevOps automation benefits
                  </h3>
                  <p>
                    Automation delivers a range of benefits that make it easier
                    to achieve the goals of DevOps.
                  </p>
                  <h3>
                    <br />
                    Consistency in DevOps processes
                  </h3>
                  <p>
                    When processes are highly automated, they are also
                    consistent and predictable. A software automation tool will
                    always do the same thing unless it is reconfigured to do
                    otherwise. The same is not true of human engineers.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img
                    src="assets/images/devopsimg.png"
                    className="img-fluid1"
                    alt="App"
                  />
                </div>
              </div>
              <h3>Enhanced deployment speed from DevOps automation</h3>
              <p>
                Automation means that processes like code integration and
                application deployment happen faster.
                <br />
                <br />
                This is true for two main reasons. First, there is no need to
                wait on a human to be ready before a process can start.
                Deploying a new release at 2 a.m., manually, may not be possible
                when you are relying on a human to execute the process. With
                automation tools, there is no delay.
                <br />
                <br />
                The second reason is that automated processes tend to be
                executed faster. An engineer who is manually deploying a new
                release will need to assess the environment, type out
                configurations, manually verify that the new version was
                deployed successfully, and so on. In contrast, an automation
                tool can perform these operations almost instantaneously.
              </p>
            </div>
          </div>
        </section>
        <section className="section colored" id="digikaagaz">
          <div className="container">
            <details>
              <summary>What to prioritize for DevOps automation?</summary>
              <p>
                There are many processes and practices that go into DevOps, and
                they vary from one organization to another. Although in an ideal
                world you would fully automate everything, in the real world you
                often have to pick and choose what to prioritize when building
                automation.
                <br />
                <br />
                This decision is different for every DevOps team, of course. But
                in general, it's wise to prioritize the following processes:
              </p>
              <ul className="check-list">
                <li>
                  <strong>CI/CD:</strong> Rapid application development and
                  delivery is at the core of DevOps. It's difficult to achieve
                  this goal without automating your Continuous
                  Integration/Continuous Delivery, or CI/CD, process.
                </li>
                <li>
                  <strong>Software testing:</strong> Testing software prior to
                  release is important, but your ability to do so manually is
                  limited by the number of team members you have. Test
                  automation tools like Selenium and Appium make it easy to run
                  tests automatically, increasing the thoroughness of your
                  testing routine.
                </li>
                <li>
                  <strong>Monitoring:</strong> Keeping track of all of the
                  components of a fast-moving DevOps environment is difficult to
                  do manually, at scale. Automation tools that can monitor for
                  availability, performance or security problems and generate
                  alerts based on them help solve this challenge
                </li>
                <li>
                  <strong>Log management:</strong> The amount of log data
                  generated by DevOps environments is vast. Collecting and
                  analyzing all of that data by hand is not feasible for most
                  teams. Instead, they rely on log management solutions that
                  automatically aggregate and analyze log data for them.
                </li>
              </ul>
            </details>
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                <h2 className="s-title">
                  Getting started with DevOps automation tools with digi apricus
                </h2>
                <p className="left-text">
                  When it comes to automating log management and analysis, Digi
                  apricus offers a solution designed especially for the needs of
                  DevOps. Digi apricus delivers the ability to work at any scale
                  and with any type of application or infrastructure. It also
                  offers configurations that are repeatable and reusable, and it
                  integrates with a variety of other common DevOps tools.
                </p>
                <h2>
                  <br />
                  Cloud automation offers a range of benefits:
                </h2>
                <div className="warpper">
                  <input className="radio" id="one" name="group" type="radio" />
                  <input className="radio" id="two" name="group" type="radio" />
                  <input
                    className="radio"
                    id="three"
                    name="group"
                    type="radio"
                  />
                  <input
                    className="radio"
                    id="four"
                    name="group"
                    type="radio"
                  />
                  <input
                    className="radio"
                    id="five"
                    name="group"
                    type="radio"
                  />
                  <div className="tabs">
                    <label className="tab" id="one-tab" htmlFor="one">
                      Time savings:
                    </label>
                    <label className="tab" id="two-tab" htmlFor="two">
                      Faster completion:
                    </label>
                    <label className="tab" id="three-tab" htmlFor="three">
                      Lower risk of errors:
                    </label>
                    <label className="tab" id="four-tab" htmlFor="four">
                      Higher security:
                    </label>
                    <label className="tab" id="five-tab" htmlFor="five">
                      Scalability:
                    </label>
                  </div>
                  <div className="panels">
                    <div className="panel" id="one-panel">
                      <p>
                        By automating time-consuming tasks like infrastructure
                        provisioning, cloud automation tools allow human
                        engineers to focus on other activities that require
                        higher levels of expertise and cannot be easily
                        automated.
                      </p>
                    </div>
                    <div className="panel" id="two-panel">
                      <p>
                        Cloud automation enables tasks to be completed faster.
                        An IaC (Infrastructure as Code tool) can set up a
                        hundred servers in minutes using predefined templates,
                        for instance, whereas a human engineer might take
                        several days to complete the same work.
                      </p>
                    </div>
                    <div className="panel" id="three-panel">
                      <p>
                        When tasks are automated, the risk of human error or
                        oversight virtually disappears. As long as you properly
                        configure the rules and templates that drive your
                        automation, you will end up with clean environments.
                      </p>
                    </div>
                    <div className="panel" id="four-panel">
                      <p>
                        By a similar token, cloud automation reduces the risk
                        that a mistake made by an engineer -- such as exposing
                        to the public Internet an internal application that is
                        intended only for internal use -- could lead to security
                        vulnerabilities.
                      </p>
                    </div>
                    <div className="panel" id="five-panel">
                      <p>
                        Cloud automation is essential for any team that works at
                        scale. It may be possible to manage a small cloud
                        environment -- one that consists of a few virtual
                        machines and storage buckets, for example -- using
                        manual workflows. But if you want to scale up to
                        hundreds of server instances, terabytes of data and
                        thousands of users, cloud automation becomes a must.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-12 col-sm-12 align-self-center"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <img
                  src="assets/images/devstart.png"
                  className="img-fluid1"
                  alt="App"
                />
              </div>
            </div>
            <p>
              Put together, all of these benefits put businesses in a stronger
              position to build value. Instead of wasting time and resources
              managing cloud environments by hand, organisations that leverage
              cloud automation are able to focus their resources on activities
              that deliver direct business benefits, like developing new
              services and keeping customers pleased. They can also quickly
              deploy or modify their IT assets whenever necessary in order to
              support a new business initiative.
            </p>
          </div>
        </section>
        <section className="section colored-2">
          <div className="container">
            <div className="talkus">
              <h1>
                learn more about our Devops Cloud & Automation, get Quote, Talk
                now.
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
export default Devops;
