import React, { useState } from 'react';

function Order() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    productCategory: '',
    productType: '',
    size: '',
    quantity: 1,
    message: '',
    deliveryDate: ''
  });

  const productCategories = {
    cakes: {
      name: 'Cakes',
      types: ['Vanilla Cake', 'Chocolate Cake', 'Rosomalai Cake', 'Red Velvet Cake', 'Custom Design'],
      sizes: ['Half Pound (0.5 KG)', '1 Pound (1 KG)', '2 Pound (2 KG)', '3 Pound (3 KG)', '4 Pound (4 KG)']
    },
    bento: {
      name: 'Bento Cakes',
      types: ['Mini Heart Bento', 'Birthday Bento', 'Anniversary Bento', 'Custom Bento'],
      sizes: ['Small (200g)', 'Medium (300g)', 'Large (400g)']
    },
    pizza: {
      name: 'Pizza',
      types: ['Pepperoni Delight', 'Smoky BBQ', 'Mushroom Bliss', 'Ultimate Cheesy', 'Chicken Supreme', 'Veggie Special'],
      sizes: ['8 inch', '10 inch', '12 inch', '14 inch']
    },
    burger: {
      name: 'Burgers',
      types: ['Classic Beef Burger', 'Chicken Cheese Burger', 'Double Decker Burger', 'Veggie Burger', 'Spicy Chicken Burger'],
      sizes: ['Regular', 'Large', 'Jumbo']
    },
    momos: {
      name: 'Momos',
      types: ['Steamed Chicken Momos', 'Fried Chicken Momos', 'Vegetable Momos', 'Cheese Momos', 'Paneer Momos'],
      sizes: ['5 Pieces', '8 Pieces', '10 Pieces', '15 Pieces', '20 Pieces']
    },
    nachos: {
      name: 'Nachos',
      types: ['Loaded Nachos', 'Cheese Nachos', 'Spicy Nachos', 'BBQ Nachos'],
      sizes: ['Small Plate', 'Medium Plate', 'Large Plate', 'Family Pack']
    },
    chowmein: {
      name: 'Chowmein',
      types: ['Chicken Chowmein', 'Vegetable Chowmein', 'Mixed Chowmein', 'Shrimp Chowmein', 'Egg Chowmein'],
      sizes: ['Half Plate', 'Full Plate', 'Large Plate', 'Family Pack']
    },
    shawarma: {
      name: 'Shawarma',
      types: ['Chicken Shawarma', 'Beef Shawarma', 'Mixed Shawarma', 'Falafel Shawarma'],
      sizes: ['Regular', 'Large', 'Jumbo']
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Reset dependent fields when category changes
    if (name === 'productCategory') {
      setFormData({
        ...formData,
        productCategory: value,
        productType: '',
        size: '',
        quantity: 1
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, formData.quantity + change);
    setFormData({
      ...formData,
      quantity: newQuantity
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const category = productCategories[formData.productCategory]?.name || '';
    const message = `
🎂 *New Order from BakeMEHappy*

👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Address: ${formData.address}

🍰 *Order Details:*
Category: ${category}
Product: ${formData.productType}
Size: ${formData.size}
Quantity: ${formData.quantity}
Delivery Date: ${formData.deliveryDate}

💬 *Special Instructions:*
${formData.message || 'None'}
    `.trim();

    // Open WhatsApp with pre-filled message
    const whatsappNumber = '8801XXXXXXXXX'; // Replace with your number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
    
    alert('Redirecting to WhatsApp to confirm your order!');
  };

  const selectedCategory = productCategories[formData.productCategory];

  return (
    <div className="order">
      <div className="order-container">
        <h1>Place Your Order</h1>
        <p className="order-subtitle">Fill in the details and we'll get back to you shortly!</p>
        
        <form onSubmit={handleSubmit} className="order-form">
          {/* Customer Information */}
          <div className="form-section">
            <h3>📝 Customer Information</h3>
            
            <div className="form-group">
              <label>Full Name *</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required 
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1XXX-XXXXXX"
                  required 
                />
              </div>

              <div className="form-group">
                <label>Email (Optional)</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Delivery Address *</label>
              <textarea 
                name="address" 
                value={formData.address}
                onChange={handleChange}
                rows="2"
                placeholder="Enter your complete delivery address"
                required
              />
            </div>
          </div>

          {/* Product Selection */}
          <div className="form-section">
            <h3>🍰 Product Details</h3>
            
            <div className="form-group">
              <label>Product Category *</label>
              <select 
                name="productCategory" 
                value={formData.productCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {Object.keys(productCategories).map(key => (
                  <option key={key} value={key}>
                    {productCategories[key].name}
                  </option>
                ))}
              </select>
            </div>

            {selectedCategory && (
              <>
                <div className="form-group">
                  <label>{selectedCategory.name} Type *</label>
                  <select 
                    name="productType" 
                    value={formData.productType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select {selectedCategory.name}</option>
                    {selectedCategory.types.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Size *</label>
                  <select 
                    name="size" 
                    value={formData.size}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Size</option>
                    {selectedCategory.sizes.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Quantity *</label>
                  <div className="quantity-selector">
                    <button 
                      type="button" 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(-1)}
                    >
                      −
                    </button>
                    <input 
                      type="number" 
                      name="quantity" 
                      value={formData.quantity}
                      onChange={handleChange}
                      min="1"
                      max="99"
                      required
                      readOnly
                    />
                    <button 
                      type="button" 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="form-group">
              <label>Delivery Date *</label>
              <input 
                type="date" 
                name="deliveryDate" 
                value={formData.deliveryDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required 
              />
            </div>
          </div>

          {/* Special Instructions */}
          <div className="form-section">
            <h3>💬 Additional Information</h3>
            
            <div className="form-group">
              <label>Special Instructions (Optional)</label>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any special requests, custom design details, dietary preferences, or delivery instructions..."
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            📱 Order via WhatsApp
          </button>
          
          <p className="order-note">
            💡 You'll be redirected to WhatsApp to confirm your order with us directly
          </p>
        </form>
      </div>
    </div>
  );
}

export default Order;
