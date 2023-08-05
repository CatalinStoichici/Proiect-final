import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import MenuItem from '../../components/MenuItem/MenuItem';
import data from '../../constant/data';
import  images  from '../../constant/image';

import './SpecialMenu.css';
const SpecialMenu = () => (
      <div className="specialmenu flex__center section_padding">
        <div className="specialmenu-title">
            <SubHeader title="Menu"/>
            <h1 className="headtext__cormorant">Today's Special</h1>
        </div>
        <div className="specialmenu-menu">
            <div className="specialmenu-menu_wine flex__center">
                <p className="specialmenu-menu_head">Wine & beer</p>
                <div className="specialmenu-menu_items">
                    {data.wines.map((wine, index) =>(
                        <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
                    ))}
                </div>
            </div>
            <div className="specialmenu-menu_img">
                <img src={images.menu} alt="menu img"/>
            </div>

            <div className="specialmenu-menu_cocktails flex__center">
                <p className="specialmenu-menu_head">Cocktails</p>
                <div className="specialmenu-menu_items">
                    {data.cocktails.map((cocktail, index) =>(
                        <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
                    ))}
                </div>
            </div>

        </div>
        <div style={ {marginTop: '15px'}}>
        <button type="button" className="custom__button">View more</button>
        </div>
      </div>
  
)

export default SpecialMenu