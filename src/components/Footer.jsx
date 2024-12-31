import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>ExploreX</h1>
            <p>Choose Your Favourite Destination!</p>
          </div>
          <div>
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-snapchat-square"></i>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>Contact Us</h3>
            <a href="/">Address: Bhimavaram</a>
            <a href="/">Zip code: 534202</a>
            <a href="/">Email: radhajujjavarapu93@gmail.com</a>
            <a href="/">Phone: +91-7989977187</a>
          </div>
          <div>
            <h3>Explore With Us</h3>
            <a href="/">More Tours</a>
            <a href="/">Blog</a>
            <a href="/">Signup</a>
            <a href="/">Status</a>
          </div>
          <div>
            <h3>Customer Service</h3>
            <a href="/">FAQs</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Refund Policy</a>
          </div>
          <div>
            <h3>Others</h3>
            <a href="/">License</a>
            <a href="/">Supports</a>
            <a href="/">Subscribe</a>
            <a href="/">About Us</a>
          </div>
        </div>
        <div className="map">
          <h3>Find Us Here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.1666146608172!2d81.51990931478478!3d16.56811898857441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4eb220051d%3A0xea3d7b50d0a1458!2sShri%20Vishnu%20Engineering%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1669296313757!5m2!1sen!2sin"
            width="450"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="copy">
          Copyright © 2023 with ExploreX. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
