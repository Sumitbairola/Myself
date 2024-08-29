// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope />
          <span>Email: sumitbairola@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaPhone />
          <span>Phone: +91 8287276151</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />
          <span>Address: Patel Nagar, New Delhi 110008</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
