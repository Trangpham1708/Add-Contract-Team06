import React from 'react';
import './styles.css';

const WelcomeFrame = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <h2>Admin Home</h2>
         
        </div>
      </div>
      <div className="right">
        {/* You can replace the following line with your image source */}
        <img src="https://product.hstatic.net/1000409857/product/anh_c417cf19a36747c0a5652a0c3d75ae0c.gif" alt="Avatar" />
     
      </div>
    </div>
  );
};

export default WelcomeFrame;
