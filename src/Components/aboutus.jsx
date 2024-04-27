import { useState } from "react";
import { Link as Defpath } from 'react-router-dom';

function AboutUs() {
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
     
    
      <div>
        <title>
          About Us Page
        </title>
        <header className="masthead">
          <p className="masthead-intro"> Hello we're </p>
          <h1 className="masthead-heading"> ZenNest!</h1>
        </header>
        <section className="introduction-section">
          <h1> OUR MISSION </h1><br></br>
          <p> We are committed to providing our clients with life changing service.<br></br><br></br>

<i>“Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.</i>
<br></br><br></br>
— Anonymous

 </p>
        </section>
        <section className="location-section">
          <h1> Where are we from? </h1><br></br>
          <p> <b> Coimbatore : </b>Sri Krishna College of Engineering and Technology   <br /> <br /> </p>
        </section>
        <section className="questions-section">
          <h1> More About Us </h1><br></br>
          
          <p> ZenNest Home Care is a locally managed home care agency that that strives to provide Life Changing Service to our clients, community partners, and team members. We assist our clients to maintain or regain independence in their home, supporting Activities of Daily Living and connecting them with available resource in our community.</p>
        </section>
        <footer className="content-footer">
          <p> Say hi to us on these social networks: </p>
          <ul className="social">
            <li> <a href="https://www.instagram.com/kalai.varshaa/"> Instagram </a> </li>
            <li> <a href="_INSERT_TWITTER_URL_HERE_"> Twitter </a> </li>
            <li> <a href="_INSERT_GOOGLE+_URL_HERE_"> Google+</a> </li>
          </ul>
        </footer>
      </div>
      </div>
          );
        }
    
export default AboutUs;