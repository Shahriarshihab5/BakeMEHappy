import React from 'react';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About BakeMEHappy</h1>
        <p>
          Welcome to BakeMEHappy, where every cake tells a story! We are passionate 
          about creating beautiful, delicious cakes that make your special moments 
          even more memorable.
        </p>
        <p>
          Our expert bakers use only the finest ingredients to craft cakes that not 
          only look stunning but taste amazing. From custom designs to classic favorites, 
          we're here to make your celebrations sweeter.
        </p>
        
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To bring joy and happiness through our handcrafted cakes, making every 
            celebration unforgettable with love and creativity baked into every bite.
          </p>
        </div>
        
        <div className="why-choose">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✨ Premium quality ingredients</li>
            <li>🎨 Custom cake designs</li>
            <li>🍰 Wide variety of flavors</li>
            <li>🚚 Timely delivery</li>
            <li>💝 Made with love and care</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
