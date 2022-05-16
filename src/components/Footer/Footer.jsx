import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <div></div>
        </div>
        <div>
          <h6>Singapore</h6>
          <span>singapore@bluemeg.com</span>
          <span>+65 6931 6733</span>
          <h6>Hong Kong</h6>
          <span>hongkong@bluemeg.com</span>
          <span>+852 8121 2687</span>
        </div>
        <div>
          <h6>Resources</h6>
          <span>Insights & Research</span>
          <span>Support</span>
          <span>FAQs</span>
        </div>
        <div>
          <h6>Product</h6>
          <span>Features</span>
          <span>Industry Solution</span>
          <span>Pricing</span>
          <span>Speak to Us</span>
        </div>
        <div>
          <h6>Company</h6>
          <span>About Us</span>
          <span>Contact</span>
          <div id="contact-wrapper">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <h6>© 2021, BlueMeg. All rights reserved.</h6>
    </footer>
  );
};

export default Footer;
