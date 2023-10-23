import React  from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class Registration extends React.Component {
	constructor(props) {
		super(props);
   
		this.state = {
            selected: [],
            langlist:[],
            isLoading: true,
            confdlg:'',
            delph:'',
            //image upload variables
			file: '',
            imagePreviewUrl: '',
            //stage one Personal Information
            nrdate:Date().toLocaleString(),
            ndoc:'',
            nfname:'',
            nlname:'',
            ngender:'',
            nphno:'',
            nemail:''
		}
        //---------------------------------------------
        this.onChangenfname=this.onChangenfname.bind(this);
        this.onChangenlname=this.onChangenlname.bind(this);
        this.onChangengender=this.onChangengender.bind(this);
        this.onChangenphno=this.onChangenphno.bind(this);
        this.onChangenemail=this.onChangenemail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
  state = {
    loadsts: false,
  };

  openModal = () => {
    this.setState({ loadsts: true });
  };

  closeModal = () => {
    this.setState({ loadsts: false });
  };
 componentDidMount() {
    Modal.setAppElement('body');
}
    //image uploading action and events starts-----------------------------------------------------------
      _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let sfile = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: URL.createObjectURL(sfile),
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(sfile)
        //this.openModal();
        console.log('handle uploading-', e.target.files[0]);
        console.log('handle uploading-', this.state.sfile);
        const formData = new FormData(); 
        formData.append( 
            "myFile", 
            e.target.files[0],
            e.target.files[0].name
          );
          this.setState({
              ndoc:formData,
              delph:formData
          })
       // const formData = { image: this.state.file }
         
       
      }
    //toggle screeens reg form items and actions and eents code start-----------------------------------
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      validate(){
        let formIsValid = true;
       
        if(this.state.ndoc===""){
            formIsValid = false;
            alert("please upload you profile picture");
            console.log("please select the language");
        }
        return formIsValid;
    
      }
    onChangenfname(e){this.setState({nfname:e.target.value});}
    onChangenlname(e){this.setState({nlname:e.target.value});}
    onChangengender(e){this.setState({ngender:e.target.value});}
    onChangenphno(e){this.setState({nphno:e.target.value});}
    onChangenemail(e){this.setState({nemail:e.target.value});}
      handleSubmit(e){
        e.preventDefault();
        if(this.validate()){
          this.openModal();
          this.nstartreg();
        }
      };

    nstartreg(){
      let url = "digiapricus_api/addresume.php";
      axios.post(url, this.state.ndoc, { // receive two parameter endpoint url ,form data 
      }).then(res1 => { 
        this.setState({ndoc:res1.data.toLocaleString()})
        this.nreg();
        console.log(this.state.ndoc);
      })
    }
     nreg(){
      var today = new Date();
      const obj= { 
        nrdate:today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
        ndoc:this.state.ndoc,
        nfname:this.state.nfname,
        nlname:this.state.nlname,
        ngender:this.state.ngender,
        nphno:this.state.nphno,
        nemail:this.state.nemail,
    }
      axios.post('digiapricus_api/registration.php', obj)
      .then(res =>{
      this.setState({confdlg:res.data})
      this.showconf();
      console.log(res.data)
        }).catch(function(res){
          console.log(res)
      });

     }
     showconf(){
      let conftxt=this.state.confdlg.toString();
      if(conftxt.match('success'))
      {
        sessionStorage.setItem("nemail", this.state.nemail);
        this.closeModal();
        confirmAlert({
          title: 'Congratulations',
          message: 'You are Registered Successfully',
          buttons: [
            {
              label: 'OK',
              //onClick: () => window.location.href = '/nurseupdate'
              
            },
          ]
      })
      }
      if(conftxt.match('failed'))
      {
        this.nfailimg()
        this.closeModal()
        confirmAlert({
          title: 'Failed',
          message: 'You are already Registered, please contact administrator',
          buttons: [
            {
              label: 'OK',
              onClick: () => window.location.reload()
              
            },
          ]
      })
      
      }
     if(conftxt.match('failed-1'))
      {
        this.nfailimg()
        this.closeModal();
          confirmAlert({
              title: 'Failed',
              message: this.state.confdlg + 'Registration failed please try again',
              buttons: [
                {
                  label: 'OK',
                  onClick: () => window.location.reload()
                },
              ]
          })
         
      }
     }
     
     nfailimg(){
     let url = "theindian-healthcare/ihcs_service/delresume.php";
     console.log(this.state.delph)
     axios.post(url, this.state.delph, { // receive two parameter endpoint url ,form data 
     }).then(res1 => { 
       console.log(res1.data);
     })
    }
      /*
       * the functions for our button
       */
      //toggle screen reg form ends here----------------------------------------------------
   
	render() {
		return (
      <div>
        <div className="reg_div">
			  <div className="reg_container">
          <h4 className="reg-h4">Join with Us, Register Now</h4>
            <div className="reg_textcont">
            <form ref={(el)=>this.nregform=el} onSubmit={this.handleSubmit}>
            <div className="form-group">
                <input className="nreg-control" id="nfname" name="nfname" type="text" pattern="[a-zA-Z]+" title="numbers or Special symbols are not allowed" placeholder="First Name" value={this.state.nfname} onChange={this.onChangenfname} required/>
                <input className="nreg-control" id="nlname" name="nlname" type="text" pattern="[a-zA-Z]+" title="numbers or Special symbols are not allowed" placeholder="Last Name" value={this.state.nlname} onChange={this.onChangenlname} required/>
                <div className="row">
                    <div className="col">
                    <select className="nreg-control" name="ngender" id="ngender" value={this.state.ngender} onChange={this.onChangengender} required> 
                        <option  value="" >-Select Gender-</option><option value="Male">Male</option><option value="Female">Female</option><option value="others">Other</option>                                                            
                    </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <h6 className="lang_label">Choose Language :</h6>
                    </div>
                </div>
                <input className="nreg-control" id="nphno" name="nphno" pattern="[6-9]{1}[0-9]{9}" title="Invalid Mobile Number" maxLength="10" type="text" placeholder="Mobile Number" value={this.state.nphno} onChange={this.onChangenphno} required/>
                <input className="nreg-control" id="nemail" name="nemail" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Invalid Email ID" placeholder="E-Mail ID" value={this.state.nemail} onChange={this.onChangenemail} required/>
                <textarea className="nreg-control" id="message"  name="message" rows="6" placeholder="java, c++, react js, . . . . "  value={this.state.message} onChange={this.onChangemsg} required></textarea>
            <div className="nregtnc">
            <input className='checkbox-inp' type="checkbox" value="1" required/>
            <label className="cinputLabel">I have read and Accept the <button className="tcbtn" onClick={this.openModal}>Terms & conditions </button> and the <button className="ppbtn" onClick={this.openSecondModal}>Privacy Policy.</button></label>
            </div>
            <div className="upload_container">
				 
         <div className="uploadInput" >
         <div className="upcontainer">
         <div className="button-wrap">
         <label className="upbtn" htmlFor="upload">Upload File</label>
         <input type="file" id="upload"
           onChange={(e)=>this._handleImageChange(e)}
           accept="image/*"/>
               </div>
               </div>
         </div>
           </div>
            </div>
            
            <button className="nreg_btn" type="submit" id="form-submit">Register</button>
            </form> 
          </div>
			</div>        
      <Modal isOpen={this.state.loadsts} 
            onRequestClose={this.closeModal}
            className="loading-model"
            scrollable={false}
            overlayClassName="myoverlay"
            contentLabel="loading">
              <ul className="ul-loading">
                <li className="li li-1"></li>
                <li className="li li-2"></li>
                <li className="li li-3"></li>
                <li className="li li-4"></li>
                <li className="li li-5"></li>
                <li className="li li-6"></li>
              </ul>
      </Modal>
    </div>
    </div>
		);
	}
}
  
export default Registration;