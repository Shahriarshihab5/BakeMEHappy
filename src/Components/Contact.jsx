import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    alert('Thank you! We will get back to you soon.');
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>+880 XXX-XXXXXXX</p>
            </div>
            <div className="info-item">
              <h3>📧 Email</h3>
              <p>info@bakemehappy.com</p>
            </div>
            <div className="info-item">
              <h3>📍 Address</h3>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="info-item">
              <h3>🕒 Hours</h3>
              <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name *</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
