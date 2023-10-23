import React from "react";
import ContactForm from "../../casely/contactForm";

const About = () => {
  return (
    <div className="container">
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
      <div className="col-12">
        <div className="row crm-front">
          <div className="col-md-6" style={{marginTop: "200px"}}>
            <h1>
              Apricus <span>CRM</span>
            </h1>
            <h2>Best CRM software for your business</h2>
            <p>
              Apricus CRM makes it possible to bring the sales, marketing &
              support team together. Nowadays with technological advancement,
              customers can reach you through any channel which can be phone,
              email, social media, brick-and-mortar, eCommerce, in-person
              interactions, live chat, and any other trackable customer
              interaction. Irrespective of the medium our CRM can capture leads
              from any source.
            </p>
          </div>
          <div className="col-md-6" style={{marginTop: "200px"}}>
            <img
              src="assets/images/apricuscrm/front.jpg"
              className="crm-front-img"
            />
          </div>
        </div>
        <div className="row row-2">
          <div className="col-md-12">
            <p>
              <span>CRM –</span> Apricus "Customer Relationship Manager", today
              it's more of a customer experience management. CRM is the core of
              any customer-driven business & the market is full of mega vendors
              for CRM. But all businesses can't afford the price for it. Some
              may find various complicated features; more process flows which
              are neither cost-effective nor usable for SMEs or SMBs. They need
              something which is budget-friendly as well as less complicated to
              use. Not only this but CRM is one of the selling software in the
              market. So, the CRM market is overcrowded as well as technology
              has progressed so much in the last 5 years that it’s difficult for
              any SMB owner to compare the different CRMs. So, feature-wise you
              can't compare any CRM rather you should look for the best support
              & services so that you can get any feature customized as per your
              business requirement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
