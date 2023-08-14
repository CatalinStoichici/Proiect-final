import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import SubHeader from '../../components/SubHeader/SubHeader';
import  images  from '../../constant/image';
import  data  from '../../constant/data';

import './Gallery.css';
const Gallery = () => {
    const scrollRef= React.useRef(null);
    const scroll = (direction) => {
        const { current } = scrollRef;
        if(direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;  
        }
    }

    const galleryImages=[images.gallery01, images.gallery02, images.gallery03, images.gallery04]
return (
    <div className="gallery flex__center">
        <div className="gallery-content">
            <SubHeader title="Instagram" />
            <h1 className="headtext__cormorant">Photo Gallery</h1>
            <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem'}}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
            <button type="button" className="custom__button">View more</button>
       </div>
        <div className="gallery-img">
            <div className="gallery-img_container" ref={scrollRef}>
            {galleryImages.map((image, index) => (
            <div className="gallery-img_card flex__center" key={`gallery_image-$(index + 1)`}>
                <img src={image} alt="gallery" />
                <BsInstagram className="gallery-img_icon" />
            </div>
            ))}
            </div>
            <div className="gallery-img_arrow">
                <BsArrowLeftShort className="gallery_arrow-icon" onClick={() => scroll('left')} />
                <BsArrowRightShort className="gallery_arrow-icon" onClick={() => scroll('right')} />
            </div>
        </div>
    </div>
);
}

export default Gallery