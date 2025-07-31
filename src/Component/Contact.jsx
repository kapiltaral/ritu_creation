import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! We will contact you soon.`);
        setFormData({ name: '', email: '', message: '' });
    };
    return (
        <>
            <Navbar />
            <div className="contact-container">
                <h1 className="contact-title">Contact <span>US</span></h1>
                <p className="contact-subtitle">We’d love to hear from you! Please fill out the form below.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-textarea"
                        required
                    />
                    <button type="submit" className="contact-button">Send Message</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact