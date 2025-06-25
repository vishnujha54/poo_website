// To use EmailJS, run: npm install emailjs-com
// Then get your user ID, service ID, and template ID from https://www.emailjs.com/
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_vmqaqi4', // replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
      form.current,
      'LuhQXjl_HjU8fQVe' // replace with your EmailJS user/public key
    )
      .then(
        (result) => {
          toast.success('Message sent successfully!', { position: 'top-center' });
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again.', { position: 'top-center' });
        }
      );
  };

  return (
    <div className="contact-page">
      <ToastContainer />
      <h2>Contact Me</h2>
      <p>Ready to book your session or have questions? Reach out below!</p>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p><strong>Email:</strong> priya.makeup@example.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
      </div>
      <div className="footer-socials" style={{ justifyContent: "center", marginTop: "1rem" }}>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}
