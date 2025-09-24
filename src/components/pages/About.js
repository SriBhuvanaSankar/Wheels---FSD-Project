import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* Main heading section */}
      <header className="about-header">
        <h1>About WHEELS Moto</h1>
        <p>
          WHEELS Moto is your premier destination for motorcycle and car service, maintenance, and customization.
          Our mission is to provide exceptional care for your vehicles, ensuring they run smoothly and safely on the road.
          We believe in transparency, quality craftsmanship, and building lasting relationships with our customers.
        </p>
      </header>

      {/* Our Story section */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded by a team of passionate automobile enthusiasts, WHEELS Moto was born out of a shared love for two and four wheels.
          We noticed a need for a service center that not only offers professional repairs but also treats every vehicle with the utmost respect.
          We started small, focusing on providing honest advice and reliable service, and have since grown into a trusted name in the industry.
          Our journey has been fueled by a commitment to excellence and a continuous effort to stay ahead of the latest automotive technologies.
        </p>
      </section>

      {/* What We Offer section */}
      <section className="about-section">
        <h2>What We Offer</h2>
        <ul className="offerings-list">
          <li>
            <h3>Expert Technicians</h3>
            <p>Our team consists of certified and experienced technicians who are experts in all makes and models. They use state-of-the-art diagnostic tools and equipment to ensure every service is performed to the highest standard.</p>
          </li>
          <li>
            <h3>Comprehensive Services</h3>
            <p>From routine oil changes and tire rotations to complex engine diagnostics and full-scale repairs, we offer a full range of services to keep your vehicle in peak condition.</p>
          </li>
          <li>
            <h3>Genuine Parts</h3>
            <p>We use only genuine and high-quality parts and accessories to guarantee the longevity and performance of your vehicle.</p>
          </li>
          <li>
            <h3>Customer-Centric Approach</h3>
            <p>Your satisfaction is our top priority. We provide clear explanations, detailed service reports, and upfront pricing so you know exactly what to expect. We're here to answer all your questions and ensure a hassle-free experience.</p>
          </li>
        </ul>
      </section>

      {/* Our Commitment section */}
      <section className="about-section">
        <h2>Our Commitment</h2>
        <p>
          At WHEELS Moto, we are committed to building a community of satisfied and safe drivers.
          We promise to deliver reliable, efficient, and affordable service every time you visit.
          Trust us with your vehicle, and we'll show you why we're the best choice for all your automotive needs.
        </p>
      </section>
    </div>
  );
}

export default About;