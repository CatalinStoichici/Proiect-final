import React from 'react';
import  images  from '../../constant/image';
import './AboutUs.css';

const AboutUs = () => (
    <div className="aboutus bg flex_center section_padding" id="about">
        
        <div className="aboutus_content flex__center">
            <div className="aboutus_content_info ">
                <h1 className="headtext__cormorant"> About us</h1>
                <p className="p__opensans">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
                <button type="button" className="custom__button">More</button>
            </div>
            <div className="aboutus_knife flex__center">
                <img src={images.knife} alt="knife"></img>
            </div>
            <div className="aboutus_content_history ">
                <h1 className="headtext__cormorant"> Our History </h1>
                <p className="p__opensans">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
                <button type="button" className="custom__button">More</button>
            </div>
        </div>
    </div>
  
)

export default AboutUs