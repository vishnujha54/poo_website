import React from 'react';

export default function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>Ready to book your session or have questions? Reach out below!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p><strong>Email:</strong> priya.makeup@example.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
      </div>
    </div>
  );
}
