import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import './Newsletter.css';

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter-heading">
      <SubHeader title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
)

export default Newsletter;