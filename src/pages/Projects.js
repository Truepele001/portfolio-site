import React, { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    // Redirect to GitHub when the component mounts
    window.location.href = 'https://github.com/Truepele001';
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#000000',
      color: '#ffffff'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Redirecting to GitHub...</h2>
        <p>If you're not redirected automatically, <a href="https://github.com/Truepele001" style={{ color: '#fbbf24' }}>Click here</a></p>
      </div>
    </div>
  );
}