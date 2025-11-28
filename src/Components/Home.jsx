import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const featuredCakes = [
    {
      id: 1,
      name: 'Customized Vanilla Cake',
      image: '/Customize_VanilaCake.jpg',
      description: 'Beautiful pink rose design',
      price: '৳1200',
      rating: 5,
      reviews: 28,
      elements: ['Vanilla Sponge', 'Buttercream', 'Pink Roses', 'Pearl Decoration']
    },
    {
      id: 2,
      name: 'Floral Vanilla Cake',
      image: '/Vanila_CAke.jpg',
      description: 'Elegant blue and green flowers',
      price: '৳1000',
      rating: 5,
      reviews: 35,
      elements: ['Vanilla Cake', 'Buttercream Flowers', 'Fresh Cream', 'Edible Pearls']
    },
    {
      id: 3,
      name: 'Rosomalai Cake',
      image: '/public/Rosomalai cake.jpg',
      description: 'Traditional fusion dessert',
      price: '৳1500',
      rating: 5,
      reviews: 42,
      elements: ['Rosomalai Cream', 'Pistachio', 'Saffron', 'Almond Flakes']
    }
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to BakeMEHappy</h1>
        <p>Delicious cakes made with love, just for you!</p>
        <Link to="/order">
          <button className="cta-button">Order Now</button>
        </Link>
      </div>
      
      <div className="featured-cakes">
        <h2>Our Signature Cakes</h2>
        <div className="cake-grid">
          {featuredCakes.map(cake => (
            <div key={cake.id} className="cake-card">
              <div className="cake-image-wrapper">
                <img src={cake.image} alt={cake.name} />
                <div className="price-badge">{cake.price}</div>
              </div>
              
              <div className="cake-content">
                <h3>{cake.name}</h3>
                <p className="cake-description">{cake.description}</p>
                
                <div className="rating-section">
                  <span className="stars">{'⭐'.repeat(cake.rating)}</span>
                  <span className="review-count">({cake.reviews} reviews)</span>
                </div>

                <div className="cake-elements">
                  <h4>🎂 Elements:</h4>
                  <ul>
                    {cake.elements.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </ul>
                </div>

                <div className="cake-actions">
                  <Link to="/order">
                    <button className="order-button">Order Now</button>
                  </Link>
                  <Link to="/reviews">
                    <button className="review-button">See Reviews</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
