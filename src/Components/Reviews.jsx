import React from 'react';

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Ayesha Rahman',
      rating: 5,
      comment: 'Absolutely amazing cake! The customization was perfect and tasted delicious. Highly recommend BakeMEHappy!',
      date: '2025-11-15'
    },
    {
      id: 2,
      name: 'Rafiq Ahmed',
      rating: 5,
      comment: 'Ordered a Rosomalai cake for my anniversary. Everyone loved it! Best fusion dessert ever.',
      date: '2025-11-10'
    },
    {
      id: 3,
      name: 'Nusrat Khan',
      rating: 5,
      comment: 'Beautiful cake design and wonderful taste. The delivery was on time. Will definitely order again!',
      date: '2025-11-05'
    },
    {
      id: 4,
      name: 'Imran Hossain',
      rating: 4,
      comment: 'Great service and delicious cakes. The vanilla cake was soft and fresh. Loved it!',
      date: '2025-10-28'
    }
  ];

  return (
    <div className="reviews">
      <div className="reviews-container">
        <h1>Customer Reviews</h1>
        <p className="subtitle">See what our happy customers are saying about us!</p>
        
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <h3>{review.name}</h3>
                  <p className="review-date">{review.date}</p>
                </div>
                <div className="rating">
                  {'⭐'.repeat(review.rating)}
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="leave-review">
          <h2>Leave a Review</h2>
          <form className="review-form">
            <input type="text" placeholder="Your Name" required />
            <select required>
              <option value="">Rating</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>
            <textarea placeholder="Your Review" rows="4" required />
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
