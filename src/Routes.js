import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from "./casely/landing";
import Analytics from "./casely/analytics";
import Itconsulting from "./casely/itconsulting";
import BusinessManagment from "./casely/businessmanagment";
import Registration from "./casely/registration";
import Digierudite from "./casely/digiErudite/digierudite";
import Digiblogs from "./casely/digiblogs";
import IamBlog from "./casely/blogs/iamblog";
import Sailpoint from "./casely/blogs/sailpoint";
import Spidentitynow from "./casely/blogs/spidentitynow";
import Cyberark from "./casely/blogs/cyberark";
import Okta from "./casely/blogs/okta";
import Pingidentity from "./casely/blogs/pingidentity";
import Datascience from "./casely/blogs/datascience";
import Rsaigl from "./casely/blogs/rsaigl";
import Machinelearning from "./casely/blogs/machinelearning";
import Aboutus from "./casely/aboutus";
import Cybersecurity from "./casely/cybersecurity";
import Devops from "./casely/devops";
import SoftwareDev from "./casely/software-developement";
import Navmenu from "./components/navmenu";
import Nativebasket from "./casely/native-basket";
import Apricusbot from "./casely/apricus-bot";
import Lottieexample from "./casely/lottie-example";
import Footer from "./components/footer";
import Digieruditefeatures from "./casely/digiErudite/digierudite";
import DigieruditeLMS from "./casely/digiErudite/digieruditeLMS";
import Index from "./casely/apricuscrm";
import SchoolManagement from "./casely/schoolManagement";
import CookiePolicy from "./components/footer-components/CookiePolicy";
import Disclaimer from "./components/footer-components/Disclaimer";
import LicenseAgreement from "./components/footer-components/LicenseAgreement";
import PrivacyPolicy from "./components/footer-components/PrivacyPolicy";
import ReturnRefund from "./components/footer-components/ReturnRefund";
import TermsConditions from "./components/footer-components/TermsConditions";
import ApricusHRMS from "./casely/apricusHrms";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navmenu />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/analytics" component={Analytics} />
        <Route exact path="/apricushrms" component={ApricusHRMS} />
        <Route exact path="/digierudite" component={Digierudite} />
        <Route exact path="/digieruditefeatures" component={Digieruditefeatures} />
        <Route exact path="/eruditeLMS" component={DigieruditeLMS} />
        <Route exact path="/itconsulting" component={Itconsulting} />
        <Route exact path="/businessmanagment" component={BusinessManagment} />
        <Route exact path="/registration" component={Registration} />
        {/* <Route exact path='/digiblogs' component={Digiblogs}/> */}
        <Route exact path="/iamblog" component={IamBlog} />
        <Route exact path="/sailpoint" component={Sailpoint} />
        <Route exact path="/spidentitynow" component={Spidentitynow} />
        <Route exact path="/cyberark" component={Cyberark} />
        <Route exact path="/okta" component={Okta} />
        <Route exact path="/rsaigl" component={Rsaigl} />
        <Route exact path="/pingidentity" component={Pingidentity} />
        <Route exact path="/datascience" component={Datascience} />
        <Route exact path="/machinelearning" component={Machinelearning} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/devops" component={Devops} />
        <Route exact path="/cybersecurity" component={Cybersecurity} />
        <Route exact path="/software-developement" component={SoftwareDev} />
        <Route exact path="/native-basket" component={Nativebasket} />
        <Route exact path="/apricus-bot" component={Apricusbot} />
        <Route exact path="/Lottie-example" component={Lottieexample} />
        <Route exact path="/crm" component={Index} />
        <Route exact path="/school-management" component={SchoolManagement} />
        <Route exact path="/cookie-policy" component={CookiePolicy} />
        <Route exact path="/disclaimer" component={Disclaimer} />
        <Route exact path="/license-agreement" component={LicenseAgreement} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/return-refund" component={ReturnRefund} />
        <Route exact path="/term-conditions" component={TermsConditions} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default Routes;
