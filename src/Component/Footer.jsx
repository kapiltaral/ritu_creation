
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - About */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are committed to delivering the best services to our customers.
            Contact us anytime for inquiries or support.
          </p>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: swatitaral1996@gmail.com</p>
          <p>Phone: +91 7678131119</p>
          <p>Address: 199, Navyug Market, Ghaziabad, India</p>
        </div>

        {/* Right Section - Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <FaFacebook size={25} />
            <a href="#">Facebook</a>
            <FaInstagram size={25} />
            <a href="#">Instagram</a>
            <FaTwitter size={25} />
            <a href="#">Twitter</a>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear(2025)} Kapil Taral. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
