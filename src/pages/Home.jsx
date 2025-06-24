import React from 'react';

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="home-hero-text">
          <h2>Welcome to Glamour Touch Artistry</h2>
          <p className="home-tagline">Your beauty, our passion. Professional makeup artistry for every occasion.</p>
          <p className="home-intro">Step into a world of elegance and confidence. Whether it's your wedding, a special event, or a photoshoot, I am here to create a look that is uniquely you. Experience flawless, radiant beauty with a personal touch.</p>
          <a href="#gallery" className="cta-btn">See My Work</a>
        </div>
        <div className="home-hero-img">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400" alt="Makeup Artist" />
        </div>
      </div>
      <section className="home-section">
        <h3>Services</h3>
        <ul className="services-list">
          <li>Bridal Makeup <span>— Timeless, elegant looks for your big day</span></li>
          <li>Party & Event Makeup <span>— Glam up for any celebration</span></li>
          <li>Fashion & Editorial Looks <span>— Creative, bold, and on-trend</span></li>
          <li>Personal Makeup Lessons <span>— Learn to enhance your own beauty</span></li>
        </ul>
      </section>
      <section className="home-section why-choose">
        <h3>Why Choose Me?</h3>
        <ul className="why-list">
          <li>Certified and experienced makeup artist</li>
          <li>Personalized consultations for every client</li>
          <li>Premium, skin-friendly products</li>
          <li>Passion for enhancing natural beauty</li>
          <li>On-time, professional, and friendly service</li>
        </ul>
        <p className="home-extra">Let me help you look and feel your absolute best. Book your session today and let’s create magic together!</p>
      </section>
    </div>
  );
}
