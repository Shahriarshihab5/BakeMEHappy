import React from 'react';

function Products() {
  const cakes = [
    {
      id: 1,
      name: 'Customized Vanilla Cake',
      image: '/Customized_Vanila_Cake.jpg',
      description: 'Beautiful purple rose design with elegant decorations',
      price: 'Starting from ৳1200'
    },
    {
      id: 2,
      name: 'Floral Vanilla Cake',
      image: '/Vanila_CAke.jpg',
      description: 'Decorated with blue and green buttercream flowers',
      price: 'Starting from ৳1000'
    },
    {
      id: 3,
      name: 'Pink Rose Cake',
      image: '/Customize_VanilaCake.jpg',
      description: 'Elegant white cake with pink buttercream roses',
      price: 'Starting from ৳1100'
    },
    {
      id: 4,
      name: 'Rosomalai Cake',
      image: '/public/Rosomalai cake.jpg',
      description: 'Traditional fusion dessert with pistachio toppings',
      price: 'Starting from ৳1500'
    }
  ];

  const pizzas = [
    { name: 'Pepperoni Delight', prices: { '8"': 400, '10"': 450, '12"': 480 } },
    { name: 'Mushroom Bliss', prices: { '8"': 470, '10"': 530, '12"': 550 } },
    { name: 'Garlic Glazed Meatball Pizza', prices: { '8"': 350, '10"': 400, '12"': 440 } },
    { name: 'Classic Margherita Charm', prices: { '8"': 300, '10"': 340, '12"': 390 } },
    { name: 'Smoky BBQ Sensation', prices: { '8"': 500, '10"': 620, '12"': 700 } },
    { name: 'Spicy Mexican Fiesta', prices: { '8"': 400, '10"': 460, '12"': 510 } },
    { name: 'Ultimate Cheesy Bites', prices: { '8"': 500, '10"': 560, '12"': 600 } },
    { name: 'Cheesy Chicken Supreme', prices: { '8"': 320, '10"': 380, '12"': 420 } }
  ];

  return (
    <div className="products">
      <div className="products-container">
        <h1>Our Products</h1>
        
        <section className="cakes-section">
          <h2>Signature Cakes</h2>
          <div className="products-grid">
            {cakes.map(cake => (
              <div key={cake.id} className="product-card">
                <img src={cake.image} alt={cake.name} />
                <h3>{cake.name}</h3>
                <p>{cake.description}</p>
                <p className="price">{cake.price}</p>
                <button className="order-btn">Order Now</button>
              </div>
            ))}
          </div>
        </section>

        <section className="pizza-section">
          <h2>Pizza Menu</h2>
          <table className="pizza-table">
            <thead>
              <tr>
                <th>Pizza Name</th>
                <th>8"</th>
                <th>10"</th>
                <th>12"</th>
              </tr>
            </thead>
            <tbody>
              {pizzas.map((pizza, index) => (
                <tr key={index}>
                  <td>{pizza.name}</td>
                  <td>৳{pizza.prices['8"']}</td>
                  <td>৳{pizza.prices['10"']}</td>
                  <td>৳{pizza.prices['12"']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Products;
