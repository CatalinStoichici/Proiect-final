import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import  images  from '../../constant/image';
import './Chef.css';

const Chef = () => (
    <div className="bg wrapper section__padding">
        <div className="wrapper-img ">
            <img src={ images.chef} alt="chef"/>
        </div>
        <div className="wrapper_info">
            <SubHeader title="Chef's" />
            <h1 className="headtext__cormorant">What We Believe In</h1>

            <div className="chef-content">
                <div className="chef-content-info">
                    <img src={images.quote} alt="quote" />
                    <p className="p__opensans">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
                </div>
                <p className="p__opensans">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            </div>
           
        </div>
    </div>
)

export default Chef