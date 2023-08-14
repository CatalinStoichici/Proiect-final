import React from 'react';
import { FiFacebook , FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import FooterOverlay from '../../components/Footer/FooterOverlay';
import Newsletter from '../../components/Footer/Newsletter';

const Footer = () => (
    <div className="footer section__padding">
      <FooterOverlay />
      <Newsletter />
      <div className="footer-links">
        <div className="footer-links_contact">
          <h1 className="footer-headtext">Contact Us</h1>
          <p className="p__opensans">Iasi, Str. Palat</p>
          <p className="p__opensans">0232-211-200</p>
          <p className="p__opensans">0744-435-534</p>
        </div>

        <div className="footer-links_logo">
          <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <div className="footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="footer-links_work">
        <h1 className="footer-headtext">Working hours</h1>
          <p className="p__opensans">Monday - Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday - Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 am</p>
        </div>
      </div>

      <div className="footer_copyright">
        <p className="p__opensans">2023 Restaurant</p>
      </div>
    </div>
  )


export default Footer