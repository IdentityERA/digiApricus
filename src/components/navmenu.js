import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
//import { useHistory} from "react-router-dom";
import ContactForm from "../casely/contactForm";

function Navmenu() {
  //let history = useHistory();
  const openhome = () => {
    window.location.href = "/";
    //history.push("/");
  };
  const openanalytic = () => {
    window.location.href = "/analytics";
    //history.push("/analytics");
  };
  const opendk = () => {
    window.location.href = "/digikaagaz";
    //history.push("/digikaagaz");
  };
  const openabot = () => {
    window.location.href = "/apricus-bot";
    //history.push("/apricus-bot");
  };
  const opennb = () => {
    window.location.href = "/native-basket";
    //history.push("/native-basket");
  };
  const opencs = () => {
    window.location.href = "/cybersecurity";
    //history.push("/cybersecurity");
  };
  const opendev = () => {
    window.location.href = "/devops";
    //history.push("/devops");
  };
  const opened = () => {
    window.location.href = "/digierudite";
    //history.push("/digierudite");
  };
  const openitc = () => {
    window.location.href = "/itconsulting";
    //history.push("/itconsulting");
  };
  // const opensoft =()=>{
  //     history.push("/software-developement");
  // }
  // const openbm =()=>{
  //     history.push("/businessmanagment");
  // }
  const opendb = () => {
    window.location.href = "/digiblogs";
    // history.push("/digiblogs");
  };
  const openabt = () => {
    window.location.href = "/aboutus";
    //history.push("/aboutus");
  };
  const opencrm = () => {
    window.location.href= "/crm";
  }
  const opensm = () => {
    window.location.href = "/school-management";
  }
  return (
    <div>
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <p className="connbtn" for="openSidebarMenu">
          Get In Touch
        </p>
      </label>
      <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
          <h2>Connect With Us</h2>
          <ContactForm />
        </ul>
      </div>
      <header className="header-area header-sticky">
        <div className="row">
          <div className="col-12">
            <Navbar className="main-nav" expand="lg">
              <Navbar.Brand href="/" className="logo">
                <img src="assets/images/Digiapricus Font and Colour Black.png" alt="Go India Logo" />
                {/* <h2 className="alt-logo">DIGI APRICUS</h2>*/}
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className="" onClick={openhome}>
                    Home
                  </Nav.Link>
                  <NavDropdown className="lvl2 " title="Products">
                    <NavDropdown.Item className="li2" onClick={opened}>
                      DigiErudite LMS
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item className="li2" onClick={opendk}>
                      DIGI-KAAGAZ
                    </NavDropdown.Item> */}
                    <NavDropdown.Item className="li2" onClick={openanalytic}>
                      Apricus Analytics
                    </NavDropdown.Item>
                    <NavDropdown.Item className="li2" onClick={opencrm}>
                      Apricus CRM
                    </NavDropdown.Item>
                    <NavDropdown.Item className="li2" onClick={opensm}>
                      School Management
                    </NavDropdown.Item>
                    <NavDropdown.Item className="li2" onClick={opennb}>
                      Native Basket
                    </NavDropdown.Item>
                    <NavDropdown.Item className="li2" onClick={openabot}>
                      Apricus Bot
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item  className="li2" href="#" >GO KRISHI</NavDropdown.Item>*/}
                  </NavDropdown>
                  {/* <Nav.Link className="lvl2 drop-in-5" onClick={openhome} >INDUSTRIES</Nav.Link> */}
                  <NavDropdown className="lvl2" title="Services">
                    <NavDropdown.Item className="li2" onClick={opencs}>
                      Cyber Security Services
                    </NavDropdown.Item>
                    <NavDropdown.Item className="li2" onClick={opendev}>
                      Devops Cloud & Automation
                    </NavDropdown.Item>
                    <NavDropdown.Item className="li2" onClick={openitc}>
                      IT Consulting
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item  className="li2" onClick={opensoft} >SOFTWARE DEVELOPEMENT</NavDropdown.Item>
                                            <NavDropdown.Item  className="li2" onClick={openbm}  >BUSINESS MANAGEMENT</NavDropdown.Item> */}
                  </NavDropdown>
                  {/* <Nav.Link className="lvl2 " onClick={opendb} >BLOGS</Nav.Link> */}
                  <Nav.Link className="lvl2 " onClick={openabt}>
                    About Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Navmenu;
