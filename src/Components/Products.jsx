import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🍽️' },
    { id: 'cakes', name: 'Cakes', icon: '🎂' },
    { id: 'bento', name: 'Bento Cakes', icon: '🍰' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burger', name: 'Burgers', icon: '🍔' },
    { id: 'momos', name: 'Momos', icon: '🥟' },
    { id: 'nachos', name: 'Nachos', icon: '🌮' },
    { id: 'chowmein', name: 'Chowmein', icon: '🍜' },
    { id: 'shawarma', name: 'Shawarma', icon: '🌯' }
  ];

  const products = [
    // Cakes
    {
      id: 1,
      name: 'Customized Vanilla Cake',
      category: 'cakes',
      image: '/Customize_VanilaCake.jpg',
      description: 'Beautiful pink rose design with pearl decorations',
      price: '৳1200',
      rating: 5,
      reviews: 28
    },
    {
      id: 2,
      name: 'Floral Vanilla Cake',
      category: 'cakes',
      image: '/Vanila_CAke.jpg',
      description: 'Elegant blue and green buttercream flowers',
      price: '৳1000',
      rating: 5,
      reviews: 35
    },
    {
      id: 3,
      name: 'Rosomalai Cake',
      category: 'cakes',
      image: '/public/Rosomalaicake.jpg',
      description: 'Traditional fusion dessert with pistachio',
      price: '৳1500',
      rating: 5,
      reviews: 42
    },
    
    // Bento Cakes
    {
      id: 4,
      name: 'Mini Heart Bento Cake',
      category: 'bento',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
      description: 'Cute mini cake perfect for celebrations',
      price: '৳350',
      rating: 5,
      reviews: 20
    },
    {
      id: 5,
      name: 'Birthday Bento Cake',
      category: 'bento',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&h=500&fit=crop',
      description: 'Personalized mini cake with custom message',
      price: '৳400',
      rating: 5,
      reviews: 18
    },

    // Pizzas
    {
      id: 6,
      name: 'Pepperoni Delight',
      category: 'pizza',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=500&fit=crop',
      description: 'Classic pepperoni with mozzarella cheese',
      price: '৳400 - ৳480',
      rating: 5,
      reviews: 45
    },
    {
      id: 7,
      name: 'Smoky BBQ Sensation',
      category: 'pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=500&fit=crop',
      description: 'BBQ chicken with smoky sauce',
      price: '৳500 - ৳700',
      rating: 5,
      reviews: 38
    },
    {
      id: 8,
      name: 'Mushroom Bliss',
      category: 'pizza',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=500&fit=crop',
      description: 'Fresh mushrooms with herbs',
      price: '৳470 - ৳550',
      rating: 4,
      reviews: 30
    },
    {
      id: 9,
      name: 'Ultimate Cheesy Bites',
      category: 'pizza',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop',
      description: 'Extra cheese with stuffed crust',
      price: '৳500 - ৳600',
      rating: 5,
      reviews: 50
    },

    // Burgers
    {
      id: 10,
      name: 'Classic Beef Burger',
      category: 'burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop',
      description: 'Juicy beef patty with fresh vegetables',
      price: '৳250',
      rating: 5,
      reviews: 60
    },
    {
      id: 11,
      name: 'Chicken Cheese Burger',
      category: 'burger',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=500&fit=crop',
      description: 'Grilled chicken with melted cheese',
      price: '৳220',
      rating: 5,
      reviews: 55
    },
    {
      id: 12,
      name: 'Double Decker Burger',
      category: 'burger',
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=500&fit=crop',
      description: 'Two patties, double the flavor',
      price: '৳350',
      rating: 5,
      reviews: 40
    },

    // Momos
    {
      id: 13,
      name: 'Steamed Chicken Momos',
      category: 'momos',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=500&fit=crop',
      description: 'Soft steamed momos with spicy sauce',
      price: '৳120',
      rating: 5,
      reviews: 70
    },
    {
      id: 14,
      name: 'Fried Chicken Momos',
      category: 'momos',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&h=500&fit=crop',
      description: 'Crispy fried momos with chutney',
      price: '৳140',
      rating: 5,
      reviews: 65
    },
    {
      id: 15,
      name: 'Vegetable Momos',
      category: 'momos',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=500&fit=crop',
      description: 'Healthy veggie momos steamed to perfection',
      price: '৳100',
      rating: 4,
      reviews: 48
    },

    // Nachos
    {
      id: 16,
      name: 'Loaded Nachos',
      category: 'nachos',
      image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=500&h=500&fit=crop',
      description: 'Crispy nachos with cheese, salsa & jalapeños',
      price: '৳280',
      rating: 5,
      reviews: 35
    },
    {
      id: 17,
      name: 'Cheese Nachos',
      category: 'nachos',
      image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&h=500&fit=crop',
      description: 'Classic nachos with melted cheese sauce',
      price: '৳220',
      rating: 5,
      reviews: 42
    },

    // Chowmein
    {
      id: 18,
      name: 'Chicken Chowmein',
      category: 'chowmein',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=500&fit=crop',
      description: 'Stir-fried noodles with chicken and veggies',
      price: '৳180',
      rating: 5,
      reviews: 58
    },
    {
      id: 19,
      name: 'Vegetable Chowmein',
      category: 'chowmein',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&h=500&fit=crop',
      description: 'Healthy veggie noodles with soy sauce',
      price: '৳150',
      rating: 4,
      reviews: 45
    },
    {
      id: 20,
      name: 'Mixed Chowmein',
      category: 'chowmein',
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&h=500&fit=crop',
      description: 'Chicken, shrimp & vegetables mixed',
      price: '৳220',
      rating: 5,
      reviews: 52
    },

    // Shawarma
    {
      id: 21,
      name: 'Chicken Shawarma',
      category: 'shawarma',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&h=500&fit=crop',
      description: 'Grilled chicken wrapped with garlic sauce',
      price: '৳200',
      rating: 5,
      reviews: 75
    },
    {
      id: 22,
      name: 'Beef Shawarma',
      category: 'shawarma',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&h=500&fit=crop',
      description: 'Tender beef with tahini sauce',
      price: '৳250',
      rating: 5,
      reviews: 68
    },
    {
      id: 23,
      name: 'Mixed Shawarma',
      category: 'shawarma',
      image: 'https://shawarmanearby.com/wp-content/uploads/2024/05/mixed-shawarma5.jpg',
      description: 'Chicken and beef combo with special sauce',
      price: '৳280',
      rating: 5,
      reviews: 62
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="products">
      <div className="products-container">
        <h1>Our Products</h1>
        <p className="products-subtitle">Explore our delicious variety of cakes and fast food</p>

        {/* Category Filter Buttons */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="product-category-badge">
                  {categories.find(cat => cat.id === product.category)?.icon}
                </div>
              </div>
              
              <div className="product-content">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-rating">
                  <span className="stars">{'⭐'.repeat(product.rating)}</span>
                  <span className="review-count">({product.reviews} reviews)</span>
                </div>

                <div className="product-footer">
                  <p className="product-price">{product.price}</p>
                  <Link to="/order">
                    <button className="order-btn">Order Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
