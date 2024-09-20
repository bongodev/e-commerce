import React from 'react';

import './ContactsPage.css';

export function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have a question or need assistance? Feel free to contact us.</p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <ul>
          <li>
            <strong>Phone:</strong> +880 1234567890, +880 9876543210
          </li>
          <li>
            <strong>Email:</strong> support@simpleecommerce.com
          </li>
          <li>
            <strong>Address:</strong> 123, Main Street, Dhaka, Bangladesh
          </li>
        </ul>
      </div>

      <div className="map-container">
        <h3>Location</h3>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.0356902973303!2d90.40119277621933!3d23.75698709770697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e83833486f%3A0x636a3781b2f7363a!2sSimple%20E-commerce!5e0!3m2!1sen!2sbd!4v1695263146797!5m2!1sen!2sbd"
          width="100%"
          height="400"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
