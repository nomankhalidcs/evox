import React from "react";
import './Footer.css'
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="maindiv">
      <div className="container-div">
        <div className="scroll">
          <div className="RightToLeft">
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
            <p>Get Started</p>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="text_footer"
      >
        <p className="content1">
          Your Journey Begins Here
          <br />
          Join the Evox community today. Whether you're a property owner,
          investor, or developer, we've streamlined the process to get you
          started quickly and securely.
        </p>
      </div>
      <div className="footer-button">
        <button
          className="join-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          JOIN US NOW
        </button>
      </div>
      <div className="lastfooter">
        <div className="evokcenter">
          <p className="evok">EVOX</p>
          <p className="evokinner">
            Evox is a blockchain platform for real estate, enabling
            decentralised property investment. With tokenisation, it offers
            secure, transparent, and global opportunities for both small and
            large investors.
          </p>
        </div>
        <div className="secondcol">
          <p className="get">Get in Touch</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <img
              src="/Images/Home/location.svg"
              alt="Notifications"
              className="footer-img"
            />
            <p className="address">
              Suite 305, Griffith Corporate Centre, Beachmont,
              <br />
              Kingstown, St. Vincent and the Grenadines.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/Images/Home/email.svg"
              alt="Notifications"
              className="footer-img"
            />
            <p className="address">Contact@evoxtoken.io</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/Images/Home/phone.svg"
              alt="Notifications"
              className="footer-img"
            />
            <p className="address">+1 386-688-3295</p>
          </div>
        </div>
        <div className="thirdcol">
          <div className="fourcircle">
            <div
              className="icon__FB"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.facebook.com/profile.php?id=61561077470334",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <p className="icon__text">Fb</p>
            </div>
            {/* <img src="/Images/Home/fb.svg" alt="/" /> */}
            <div
              className="icon__FB"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.linkedin.com/company/evox-defi/about/?viewAsMember=true",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <p className="icon__text">Ld</p>
            </div>
            <div
              className="icon__FB"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.instagram.com/evox.token/?fbclid=IwZXh0bgNhZW0CMTEAAR2lp9m3bnCTjpf06m6Up8JdAdaPNE25NTkyuJpfO34bVLS0s0TS3hONQT0_aem_Koc2xR2nywzOAMi6L3RFXA",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <p className="icon__text">Ig</p>
            </div>
            <div
              className="icon__FB"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://x.com/EvoxToken",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <p className="icon__text">Tw</p>
            </div>
          </div>
          <p className="evokinner">
            Follow us for the latest updates and insights into real estate and
            blockchain innovations.
          </p>
        </div>
        {/* <div className="fourthcol">
            <p className="Join">Join a Newsletter</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "11px",
              }}
              className="email__res"
            >
              <p className="email">Your Email</p>
              <input
                type="text"
                className="textBox"
                placeholder="Enter Your Email"
              />
            </div>
            <button className="subbutton">Subscribe</button>
          </div> */}
      </div>
      <div className="footer__privacy">
        <p
          className="evokinner"
          onClick={(e) => {
            e.preventDefault();
            window.open("/Privacy", "_blank", "noopener,noreferrer");
          }}
          style={{cursor:"pointer"}}
        >
          Privacy Policy
        </p>
        <p
          className="evokinner"
          onClick={(e) => {
            e.preventDefault();
            window.open("/terms", "_blank", "noopener,noreferrer");
          }}
          style={{cursor:"pointer"}}
        >
          Terms and Condition
        </p>
      </div>
    </div>
  );
};
export default Footer;