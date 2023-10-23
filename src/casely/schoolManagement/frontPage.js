import React from "react";
import ContactForm from "../../casely/contactForm";

const Frontpage = () => {
  return (
    <div className="sm-root">
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
          <div className="row sm-sub-root">
            <div className="col-lg-6 sm-header">
              <h2>School Management System</h2>
              <p>
                In today's time, every school around the world needs one or
                other kind of School Management system or which is called School
                Management Software. Most of the schools have experienced one or
                other kind of system, however due to limitations of features,
                product experience, or customer support problems they end up
                looking for better options. Digiapricus School Management
                Software brings the best of technology to provide 360-degree
                experience to schools which not only improves the productivity
                of administrative staff but improves the experience and
                productivity of all the stakeholders- principal, management,
                teachers, administration staff, students, and parents.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="assets/images/school/front.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
