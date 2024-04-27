import { useState } from "react";
import { Link as Defpath } from 'react-router-dom';
import axios from "axios";

function ContactUs() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    cname: '',
    email: '',
    ph: '',
    c: '',
    message: ''
});

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log('Submitting contact form...');
  try {
    const response = await axios.post('http://localhost:8082/postContact', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
      console.log('Contact form submitted successfully:', response.data);
      // Handle success (e.g., show a success message to the user)
  } catch (error) {
      console.error('Error submitting contact form:', error);
      // Handle error (e.g., show an error message to the user)
  }
};

const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });
};

  return (
    <div>
    <div>
      <title>Contact Us</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        type="text/css"
      />
      <div className="box">
        <div className="logo">
          <h1>ZenNest</h1>
        </div>
        <div className="text">
          <h1>
            Contact <span className="red">Us</span>
          </h1>
          <hr className="redline" />
          <p>Have Questions? We have answers (maybe)</p>
        </div>
      </div>
      <div className="touch">
        <h2>Get in touch</h2>
        <hr className="redline" />
      </div>
      {/* Add the navigation bar here */}
      <nav className="nav">
        <Defpath to="/" className="nav__brand">
          ZenNest
        </Defpath>
        <ul className={active}>
          <li className="nav__item">
            <Defpath to="/" className="nav__link">
              Home
            </Defpath>
          </li>
          <li className="nav__item">
            <Defpath to="/services" className="nav__link">
              Services
            </Defpath>
          </li>
          <li className="nav__item">
            <Defpath to="/aboutus" className="nav__link">
              AboutUs
            </Defpath>
          </li>
          <li className="nav__item">
            <Defpath to="/contactus" className="nav__link">
              ContactUs
            </Defpath>
          </li>
          <li className="nav__item">
            <Defpath to="/myprofile" className="nav__link">
              MyProfile
            </Defpath>
          </li>
          <li className="nav__item">
          <Defpath to="/signup">
            <button className="nav__button">Logout</button></Defpath>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      </div>
     
    
      <form name="newUser" className="register" noValidate onSubmit={handleSubmit} >
                      <div className="container form-margin">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />     <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" ng-model="firstname"  name="fname" value={formData.fname} onChange={handleChange} required />    
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Company Name" ng-model="company" name="cname" value={formData.cname} onChange={handleChange}  required />    
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone" ng-model="phone" name="ph" value={formData.ph} onChange={handleChange}  required />    
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" ng-model="lastname" name="lname" value={formData.lname} onChange={handleChange} required />    
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="E-mail" ng-model="email" name="email" value={formData.email} onChange={handleChange} required />    
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Course" ng-model="course" name="c" value={formData.c} onChange={handleChange} required />    
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="form-group">
                        <textarea className="form-control" rows={6} placeholder="Message" ng-model="message" name="message" value={formData.message} onChange={handleChange} required defaultValue={""} />
                      </div>  
                      <div className="pager">
                        <button type="submit" className="btn btn-success">SEND MESSAGE</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
                </div>
              </form>
              {/*address*/}
              <div className="container address">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h3>Our Address</h3>
                  <div className="redline-address" />
                  <p>SKCET</p>
                  <p>Sugunapuram, </p>
                  <p>Kuniyamuthur,</p>
                  <p>Coimbatore - 641001</p>
                  <div className="phone-e">
                    <p><span className="glyphicon glyphicon-envelope"> </span> kalaivarshaaguna5@gmail.com</p>
                    <p><span className="glyphicon glyphicon-phone" /> 8825901080</p>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  {/*map*/}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3363886065963!2d76.95572547467445!3d10.937942256194482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bb22369d571%3A0x72cc0bed93b5b2b6!2sSri%20Krishna%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1706623650522!5m2!1sen!2sin"  width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
              </div>
              <div className="bottom-gap" />
              <footer className="content-footer">
          <p> Say hi to us on these social networks: </p>
          <ul className="social">
            <li> <a href="https://www.instagram.com/kalai.varshaa/"> Instagram </a> </li>
            <li> <a href="_INSERT_TWITTER_URL_HERE_"> Twitter </a> </li>
            <li> <a href="_INSERT_GOOGLE+_URL_HERE_"> Google+</a> </li>
          </ul>
        </footer>
              </div>
          );
        }
    
export default ContactUs;