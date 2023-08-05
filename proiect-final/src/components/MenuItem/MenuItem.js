import React from 'react';
import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
    <div className="menuitem">
        <div className="menuitem_head">
            <div className="menuitem-name">
                <p className="p__cormorant" style={{color: 'gold'}}>{title}</p>
            </div>
            <div className="menuitem-dash"/>
            <div className="menuitem-price">
                <p className="p__cormorant" style={{color: 'gold'}}>{price}</p>
            </div>
        </div>
        <div className="menuitem-sub">
            <p className="p__opensans" style={{color: 'gray'}}>{tags}</p>
        </div>
    </div>
);

export default MenuItem;
