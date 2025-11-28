import React, { useState, useEffect } from 'react';

function Loading() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter from 0 to 100
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 20ms * 100 = 2000ms (2 seconds)

    // Hide loading screen after completion
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="cake-loader">
        <div className="cake-icon">🎂</div>
        <h2>BakeMEHappy</h2>
        <p className="loading-message">Hold tight! Going to the heaven of cakes and fast food...</p>
        
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="progress-text">{progress}%</div>
        
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
