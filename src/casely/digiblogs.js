import React from "react";
import Ads from "../components/ads";



class Digiblogs extends React.Component{

// oiamblog =()=>{
//     window.location.href= '/iamblog';
// }
// osailpoint =()=>{
//     window.location.href= '/sailpoint';
// }
// ospin =()=>{
//     window.location.href= '/spidentitynow';
// }
// ocybera=()=>{
//     window.location.href='/cyberark';
// }
// oocta=()=>{
//     window.location.href='/okta';
// }
// oauth=()=>{
//     window.location.href='/autho';
// }
// opingi=()=>{
//     window.location.href='/pingidentity';
// }
// odatas=()=>{
//     window.location.href='/datascience';
// }
// oml=()=>{
//     window.location.href='/machinelearning';
// }
// orsa=()=>{
//     window.location.href='/rsaigl'
// }
render(){
      return(
      <div>
          <section className="section home-feature" id="goanalytics">
          <div className="blogbox">
                <h4 className="pagehead">Blogs</h4>
        </div>         
            </section>        
        <section className="section colored">
        <div className="center-heading">
            <h2 className="section-title">Blogs</h2>
        </div>
       
        <div className="grid">
       
        <Ads/>
            {/* <div className="grid__item" onClick={this.oiamblog}>
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog1.jpg" alt="Identity and Access Management"/>
                <div className="icard__content">
                    <h1 className="icard__header">Identity and Access Management</h1>
                    <p className="icard__text">Identity and access management (IAM) is a collective term that covers products, processes, and policies used to manage user identities and regulate user access within an organization....</p>
                    <button className="icard__btn" onClick={this.oiamblog}>Read More<span>&rarr;</span></button>
                </div>
                </div>
            </div>
            <div className="grid__item" onClick={this.osailpoint}>
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog2.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Sailpoint IIQ</h1>
                    <p className="icard__text">Sailpoint IIQ is an Identity and Access Management tool and solution for all types of enterprises to deliver Automated Access Certifications, Policy Management, Access...</p>
                    <button className="icard__btn" onClick={this.osailpoint}>Read More <span>&rarr;</span></button>
                </div>
                </div>
            </div>
            <div className="grid__item" onClick={this.ospin}>
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog3.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Sailpoint IdentityNow</h1>
                    <p className="icard__text">As we know that Sailpoint IIQ is purely an on-premises application whereas IdentityNow is a cloud-based solution that simplifies identity governance easier. From day one, it allows...</p>
                    <button className="icard__btn"onClick={this.ospin}>Read More <span>&rarr;</span></button>
                </div>
                </div>
            </div>
            <div className="grid__item" onClick={this.ocybera}>
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog4.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">CyberArk</h1>
                    <p className="icard__text">External authentication. Users can connect to Cloud applications with personal credentials, authenticating against the application's internal user management. Use this method...</p>
                    <button className="icard__btn" onClick={this.ocybera}>Read More <span>&rarr;</span></button>
                </div>
                </div>
            </div>
            <div className="grid__item" onClick={this.oocta}>
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog5.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Okta</h1>
                    <p className="icard__text">Okta is a customizable, secure, and drop-in solution to add authentication and authorization services to your applications. Get scalable authentication built right into your...</p>
                    <button className="icard__btn" onClick={this.oocta}>Read More <span>&rarr;</span></button>
                </div>
                </div>
            </div>
            <div className="grid__item" onClick={this.oauth}>
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog6.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Auth0</h1>
                    <p className="icard__text">Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that...</p>
                    <button className="icard__btn" onClick={this.oauth}>Read More<span>&rarr;</span></button>
                </div>
                </div>
            </div>
            <div className="grid__item" onClick={this.opingi}>
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog7.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Ping Identity</h1>
                    <p className="icard__text">Ping Identity provides federated identity management and self-hosted identity access management (IAM) solutions to web identities and single sign-on solutions, being one of...</p>
                    <button className="icard__btn" onClick={this.opingi}>Read More<span>&rarr;</span></button>
                </div>
                </div>
            </div>
            <div className="grid__item" onClick={this.orsa}>
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog8.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">RSA IGL</h1>
                    <p className="icard__text">RSA IGL is a complete solution for managing digital identities, both inside and outside of the enterprise. The RSA solution covers all aspects of governance and identity...</p>
                    <button className="icard__btn"  onClick={this.orsa}>Read More<span>&rarr;</span></button>
                </div>
                </div>
            </div>
            <div className="grid__item" onClick={this.odatas}>
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog9.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Data Science</h1>
                    <p className="icard__text">Data science combines multiple fields, including statistics, scientific methods, artificial intelligence (AI), and data analysis, to extract value from data... </p>
                    <button className="icard__btn" onClick={this.odatas}>Read More <span>&rarr;</span></button>
                </div>
                </div>
            </div>
            <div className="grid__item" onClick={this.oml}>
                <div className="icard"><img className="icard__img" src="assets/images/blog/da_blog10.jpg" alt="Desert"/>
                <div className="icard__content">
                    <h1 className="icard__header">Machine Learning</h1>
                    <p className="icard__text">Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems...</p>
                    <button className="icard__btn" onClick={this.oml}>Read More <span>&rarr;</span></button>
                </div>
                </div>
            </div> */}
        </div>
        <br/>
        <br/>
        </section>
      </div>
  
    );
  }
}
export default Digiblogs;
