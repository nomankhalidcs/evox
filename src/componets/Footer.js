import React from 'react'
import './Footer.css'
import MediaCard from './Card';

function Footer() {
  return (
    <div>
  


    <footer className="footer">
       <div className="get-started">
    <div className="text-wrapper">
        <h2>Get</h2>
        <h2>Started</h2>
    </div>
</div>
      <div className="footer-bottom">
        <p>Your Journey Begins Here <br/>
       Join the Evox community today. Whether you're a property owner, investor, or <br/> developer, we've streamlined the process to get you started quickly and securely.</p>
        <button className="join-btn">JOIN US NOW</button>
      </div>
      <div className="neechy-main">
        <div className="evox-section" >
          <h4>EVOX</h4>
          <p className="evox-para">
            Lorem ipsum dolor sit amet,
            <br /> quibusdam in quibusdam <br /> repellendus ab possimus galisum
            <br /> et maxime enim ut minima <br /> doloremque et.
          </p>
        </div>
        <div className="get-in-touch">
          <h6>Get in Touch</h6>
          <div className="location">
            <img src="/Images/location.svg"/>
          <p>8818 Ohio St. South Gate, CA 90280</p>
          </div>
          <div className="location">
            <img src="/Images/chat.svg"/>
          <p>curustalgia@hello.com</p>
          </div>
         <div className="location">
            <img src="/Images/call.svg"/>
             <p>+1 386-688-3295</p>
         </div>
        </div>
        <div className="social-icons">
          <a href="#" className="facebook">
            <img src="/Images/dr.svg" />
          </a>
          <a href="#" className="twitter">
            <img src="/Images/be.svg" />
          </a>
          <a href="#" className="linkedin">
            <img src="/Images/lg.svg" />
          </a>
          <a href="#" className="instagram">
            <img src="/Images/tw.svg" />
          </a>
          <p className="icons-p">
            Lorem ipsum dolor sit amet,<br/> consec tetur adipiscing elit,<br/> sed do
            eiusmod.
          </p>
        </div>
        {/* <div className="newsletter">
          <h6>Join a Newsletter</h6>
          <p>Your Email</p>
          <input type="email" placeholder="Enter Your Email" />
          <button className="subscribe-btn">Subscribe</button>
        </div> */}
      </div>
    
    </footer>
      
    </div>
  );
};
export default Footer;
