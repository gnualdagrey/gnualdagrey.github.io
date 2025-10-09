import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange =(e) =>{
    setFormData ({
      formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section id="contact">
            <h2>Get In Touch</h2>
            <div className="contact-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>

                <div className="social-links">
                    <a href="#" title="GitHub">📦</a>
                    <a href="#" title="Facebook">ⓕ</a>
                    <a href="#" title="Email">✉️</a>
                </div>
            </div>
        </section> 
      
    </>
  )
}

