import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';
import ContactForm from "./contactForm";
class Aboutus extends React.Component{
    constructor(props){
        super(props);
       // this.onChangeslno=this.onChangeslno.bind(this);
        this.onChangefname=this.onChangefname.bind(this);
        this.onChangeemail=this.onChangeemail.bind(this);
        this.onChangemsg=this.onChangemsg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fname:'',
            email:'',
            msg:'',         
        }
    }
    onChangefname(e){this.setState({fname:e.target.value});}
    onChangeemail(e){this.setState({email:e.target.value});}
    onChangemsg(e){this.setState({msg:e.target.value});}
    validate(){
        let formIsValid = true;
        if(this.state.fname===""){
            formIsValid = false;
            alert("Please Enter The Name");
        }
        if(this.state.email===""){
            formIsValid = false;
            alert("Please Enter the Email ID");
        }
        if(this.state.message===""){
            formIsValid = false;
            alert("Please Enter the Message");
        }
        return formIsValid;
    
      }
    onSubmit(e){
        e.preventDefault();
        if(this.validate()){
        const obj={
            fname:this.state.fname,
            email:this.state.email,
            msg:this.state.msg,
        };
       // console.log(obj);
        let url = "digiapricus_api/contact.php";         
        axios.post(url, obj)
        .then(res =>{
            console.log(res.data)
            if(res.data ==='done')
            {
                console.log("Mail Sent")
                confirmAlert({
                    title: 'Success',
                    message: 'Thanks for Contacting Us, we will reach you very soon',
                    buttons: [
                      {
                        label: 'OK',
                        onClick: () => window.location.reload()  
                      },
                    ]
                  })
            }
            if(res.data ==='ERROR')
            {
                console.log(res)
                confirmAlert({
                    title: 'Failed',
                    message: 'Please Try again, Thank you',
                    buttons: [
                      {
                        label: 'OK',
                        onClick: () => window.location.reload()
                      },
                    ]
                })
            }
        }).catch(function(res){
            console.log(res)
        });
      }
    }

render(){
      return(
  <div>
       <section className="section home-feature" id="goanalytics">
          <div className="aboutbox">
                <h4 className="pagehead">About Us</h4>
            </div>         
        </section>

    <section className="section colored-1" id="bman">
        
        <div className="container">
        
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                    <div className="left-heading">
                        <h2 className="section-title">Who We are</h2>
                    </div>
                    <div className="left-text">
                        <p>Our purpose is to bring change in India, transform India where country and people shape a better life. That is why we strive to create a balanced, sustainable economy in which everyone can take part and build a better life. Our strategy is focused on improving the financial well-being of our country, farmers, Daily wage employees, and people of the country by having the right people who listen, learn and adapt to the best tools and insights and focus on adding value to the company and its people. </p>
                        <p>We believe that the execution of our strategy will deliver decent returns for the company, clients, and shareholders while achieving a balance between growth and return, short and long-term performance, financial and social impact. Our focus is mainly on transforming agriculture management, Labour management, Water management, and plastic recycling.</p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img src="assets/images/grow.png" className="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
            </div>
            </div>
        </section>
                        
            <div className="container-fluid blue-bg">
            <div className="container">
                <div className="row align-items-center how-it-works">
                <div className="col-2 text-center bottom">
                    <div className="circle">1</div>
                </div>
                <div className="col-8">
                    <h5 className="chtxt">Purpose</h5>
                    <p className="cdtxt">We empower our global partners to achieve great outcomes with technology.</p>
                </div>
                </div>
                <div className="row timeline">
                <div className="col-2">
                    <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner left-bottom"></div>
                </div>
                </div>
                <div className="row align-items-center justify-content-end how-it-works">
                <div className="col-8 text-right">
                    <h5 className="chtxt">Vision</h5>
                    <p className="cdleft">To connect the global IT ecosystem and unlock its potential for all.</p>
                </div>
                <div className="col-2 text-center full">
                    <div className="circle">2</div>
                </div>
                </div>
                <div className="row timeline">
                <div className="col-2">
                    <div className="corner right-bottom"></div>
                </div>
                <div className="col-8">
                    <hr/>
                </div>
                <div className="col-2">
                    <div className="corner top-left"></div>
                </div>
                </div>
                <div className="row align-items-center how-it-works">
                <div className="col-2 text-center top">
                    <div className="circle">3</div>
                </div>
                <div className="col-8">
                    <h5 className="chtxt">Mission</h5>
                    <p className="cdtxt">We deliver compelling technology solutions to a dynamic global marketplace. Intent on the success of our partners, shareholders, and each other, we hold ourselves to the highest standards and deliver excellence every day.</p>
                </div>
                </div>
            </div>
            </div>
  
    <section className="section colored-1 padding-bottom-100" id="bman">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                <img src="assets/images/wwr.gif" className="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    
                    <div className="left-heading">
                        <h2 className="section-title">Meet Digi Apricus</h2>
                    </div>
                    <div className="left-text">

                    <p>We are also focusing on Technology Solutions, Innovation, and Transforming people’s ideas into reality.</p>
                    <p>Building a superior everyday experience to compete in the digital era and driving a purpose towards values-led transformation.</p>
<p>Our Application Managed Services Team comes with immense expertise in managing the entire Application Landscape including development, support, and maintenance across different support levels to ensure business continuity. We enable our customers to focus on their core business while we ensure that their applications and custom applications function seamlessly.
</p>
                    </div>
                </div>
            </div>
            <div className="left-heading">
                        <h2 className="section-title">Why we are unique</h2>
                    </div>
                    <div className="left-text">

                    <p>Started, powered, and functioned by equally talented and passionate founders and workers, Digi Apricus has been dedicated to build your business with the digital image it needs.
                    Be it a start-up or a corporate, our mission is to strive to deliver expertise, perfection, and satisfaction to our customers, by creating visual identities and brand architecture that transforms your business.<br/>
                    We're a tightly unified, experienced team of researchers, analysts, designers, developers, and testers who enjoy solving diverse challenges.</p>
                    
                    </div>
        </div>
    </section>











    <section className="conus">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">Talk To Us</h2>
                    </div>
                </div>
            </div>
           

            <div className="row">
               
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5 className="margin-bottom-30">Keep in touch</h5>
                    <div className="contact-text">
                        <p><a className="alinktxt" href="mailto:Info@digiapricus.com"><strong><i className="fa fa-envelope" aria-hidden="true"></i></strong> &nbsp; &nbsp; Info@digiapricus.com<br/></a></p>
                        <p><a className="alinktxt" href="tel:+918088191336"><strong><i className="fa fa-phone" aria-hidden="true"></i></strong> &nbsp; &nbsp; +91 808 819 1336<br/></a></p>
                        <p><a className="alinktxt" href="https://wa.me/918088191336"><strong><i className="fa fa-whatsapp" aria-hidden="true"></i></strong> &nbsp; &nbsp; +91 808 819 1336<br/></a></p>
                    </div>
                    <h5 className="margin-bottom-30">Location : Bengaluru, India</h5>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12"><ContactForm/></div>
            </div>
            
            
        </div>
    </section>

  </div>
  
    );
  }
}

   
  
export default Aboutus;

