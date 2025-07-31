import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    maxWidth: '100%',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    background: '#000',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#fff',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
  },
  image: {
    width: '100%',
    height: '60vh',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  }
};

function About() {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>About <span>US</span></h1>
        {/* <p style={styles.text}>
          Welcome to our website! We are passionate about delivering quality services
          and creating value for our users. Our mission is to provide excellent solutions
          that meet your needs. We are committed to delivering the best services to our customers.
          Contact us anytime for inquiries or support.
        </p> */}
        <img
          src="./images/about1.jpg"
          alt="About"
          style={styles.image}
        />
      </div>
      <div className="mission">
        <div className="left">
          <h1>Our <span>Mission</span></h1>
          <p>Energy Green is dedicated to crafting top-notch, engineered solutions for waste and sewage collection, pollution control spray systems, and other eco-conscious products. We’re committed to delivering high-quality, reliable solutions that minimize carbon emissions, preserve natural resources, and foster a circular economy. Through innovative engineering and collaboration, we aim to set new standards in sustainable transportation, empowering our customers to make meaningful environmental contributions.</p>
        </div>
        <div className="right">
          <h1>Our <span>Visoin</span></h1>
          <p>At Energy Green, our vision is to be the global leader in sustainable and eco-friendly solutions, setting the standard for environmentally responsible products for waste and sewage collection, pollution control spray systems, and other environmentally conscious solutions. We envision a world where every vehicle on the road contributes to a cleaner, healthier planet. By pioneering innovative technologies and fostering a culture of sustainability, we aim to inspire positive change throughout the industry and beyond.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}



export default About;