import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import  images  from '../../constant/image';


const FindUs = () => (
    <div className="bg wrapper section__padding" id="contact">
        <div className="wrapper_info">
            <SubHeader title="Contact" />
            <h1 className="headtext__cormorant" style={{ marginBottom: '3rem'}}>Find Us</h1>
            <div className="wrapper-content">
                <p className="p__opensans">Iasi, Str. Palat</p>
                <p className="p__cormorant" style={{ color: 'white', margin: '2rem 0'}}>Opening Hours</p>
                <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
                <p className="p__opensans">Sat - Sun: 10.00 am - 03:00 am</p>
            </div>
            <button className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>
        </div>
        <div className="wrapper-img">
            <img src={images.findus} alt="findus" />
        </div>
    </div>
  )

export default FindUs