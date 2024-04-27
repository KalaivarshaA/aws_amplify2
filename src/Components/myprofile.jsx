import { useState } from "react";
import { Link as Defpath } from 'react-router-dom';

function MyProfile() {
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

  return (
    <div>
    <div>
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
      <br></br><br></br>      <br></br><br></br>

      <div>
        <div className="content-profile-page">
          <div className="profile-user-page card">
            <div className="img-user-profile">
              <img className="profile-bgHome" src="https://37.media.tumblr.com/88cbce9265c55a70a753beb0d6ecc2cd/tumblr_n8gxzn78qH1st5lhmo1_1280.jpg" />
              <img className="avatar" src="https://images.unsplash.com/photo-1542803293-cde7da05c348?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="jofpin" />
            </div>
            <Defpath to="/form">
            <button>EDIT PROFILE</button></Defpath>
            <div className="user-profile-data">
              <h1>JD</h1>
              <p>jd@gmail.com</p>
            </div> 
            <div className="description-profile"><b>PHONE:</b> 8825901090 | <b>D0B:</b> 24/09/1953 | COIMBATORE | INDIA  </div><br></br>
            {/* <ul className="data-user">
              <li><a><strong>3390</strong><span>Posts</span></a></li>
              <li><a><strong>718</strong><span>Followers</span></a></li>
              <li><a><strong>239</strong><span>Following</span></a></li>
            </ul> */}
          </div>
        </div>
        <footer>
          {/* <h4>Design by <a href="https://twitter.com/jofpin" target="_blank" title="José Pino">@jofpin</a></h4> */}
        </footer>
      </div>
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
      export default MyProfile;