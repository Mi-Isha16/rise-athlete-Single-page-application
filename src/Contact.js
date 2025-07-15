
import React from 'react';

function Contact() {
  return (
    <div className="container">
      <h1>📞 Contact Us</h1>
      <p style={{ fontSize: '1.9rem', marginTop: '1rem' }}>
        We’d love to hear from you! Whether it’s a question, feedback, or suggestion — send us a message.
      </p>

      <form style={{ marginTop: '2rem', maxWidth: '400px', marginInline: 'auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label><br />
          <input type="text" placeholder="Your name" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input type="email" placeholder="you@example.com" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Message:</label><br />
          <textarea placeholder="Type your message here" rows="4" style={inputStyle}></textarea>
        </div>
        <button type="submit" style={btnStyle}>Send Message</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginTop: '5px',
};

const btnStyle = {
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '10px 20px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
};

export default Contact;
