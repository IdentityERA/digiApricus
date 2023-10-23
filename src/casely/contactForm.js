import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';
class ContactForm extends React.Component{
    constructor(props){
        super(props);
       // this.onChangeslno=this.onChangeslno.bind(this);
        this.onChangefname=this.onChangefname.bind(this);
        this.onChangeemail=this.onChangeemail.bind(this);
        this.onChangemobile=this.onChangemobile.bind(this);
        this.onChangecname=this.onChangecname.bind(this);
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
    onChangemobile(e){this.setState({mobile:e.target.value});}
    onChangecname(e){this.setState({cname:e.target.value});}
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
        if(this.state.mobile===""){
            formIsValid = false;
            alert("Please Enter the Mobile Number");
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
            mobile:this.state.mobile,
            cname:this.state.cname,
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

        <div className="contact-form">
            <form id="contact" ref={(el)=>this.Aboutus=el} onSubmit={this.onSubmit} method="get">
                <div className="row">
                <div className="col-md-12">
                    <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Full Name*" pattern="[a-zA-Z]+" title="numbers or Special symbols are not allowed" data-msg="Please enter at least 4 chars" value={this.state.fname} onChange={this.onChangefname} required/>
                    </fieldset>
                </div>
                <div className="col-md-12">
                    <fieldset>
                    <input name="email" type="email" className="form-control" id="email" placeholder="E-Mail Address*" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Invalid Email ID" value={this.state.email} onChange={this.onChangeemail}  data-msg="Please enter a valid email" required/>
                    </fieldset>
                </div>
                <div className="col-md-12">
                    <fieldset>
                    <input name="mobile" type="mobile" className="form-control" id="mobile" placeholder="Mobile Number*" pattern="[6789][0-9]{9}" title="Please enter valid phone number" value={this.state.mobile} onChange={this.onChangemobile}  data-msg="Please enter a valid mobile number" required/>
                    </fieldset>
                </div>
                <div className="col-md-12">
                    <fieldset>
                    <input name="cname" type="text" className="form-control" id="cname" placeholder="Company Name" value={this.state.cname} onChange={this.onChangecname} required/>
                    </fieldset>
                </div>
                <div className="col-lg-12">
                    <fieldset>
                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message*"  value={this.state.message} onChange={this.onChangemsg} required></textarea>
                    </fieldset>
                </div>
                <div className="col-lg-12">
                    <fieldset>
                    <button type="submit" id="form-submit" className="main-button">Send Message</button>
                    </fieldset>
                </div>
                </div>
            </form>
        </div>

    );
  }
}

   
  
export default ContactForm;

