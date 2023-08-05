import React from 'react';
import { SubHeader } from '../../components';
import  images  from '../../constant/image';
import './Header.css';

const Header = () => (
  <div className="header wrapper section_padding" id="home">
    <div className="wrapper_info">
        <SubHeader title="Chase the new flavour"/>
        <h1 className="header_h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="wrapper-img">
    <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;