import React, { useState } from 'react';

function Order() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cakeType: '',
    size: '',
    message: '',
    deliveryDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert('Order placed successfully! We will contact you soon.');
  };

  return (
    <div className="order">
      <div className="order-container">
        <h1>Place Your Order</h1>
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label>Name *</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Cake Type *</label>
            <select 
              name="cakeType" 
              value={formData.cakeType}
              onChange={handleChange}
              required
            >
              <option value="">Select Cake Type</option>
              <option value="vanilla">Vanilla Cake</option>
              <option value="chocolate">Chocolate Cake</option>
              <option value="rosomalai">Rosomalai Cake</option>
              <option value="custom">Custom Design</option>
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
              <option value="1kg">1 KG</option>
              <option value="2kg">2 KG</option>
              <option value="3kg">3 KG</option>
              <option value="custom">Custom Size</option>
            </select>
          </div>

          <div className="form-group">
            <label>Delivery Date *</label>
            <input 
              type="date" 
              name="deliveryDate" 
              value={formData.deliveryDate}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Special Message/Instructions</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Any custom design requests or special instructions..."
            />
          </div>

          <button type="submit" className="submit-button">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default Order;
